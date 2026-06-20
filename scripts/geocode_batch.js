/**
 * Géocode les établissements depuis liste_ecoles.json via l'API batch
 * de la Base Adresse Nationale (api-adresse.data.gouv.fr).
 * Une seule requête HTTP pour tous les établissements — bien plus rapide
 * que Nominatim (1 req/s).
 *
 * Usage : node scripts/geocode_batch.js
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT  = path.resolve(__dirname, '..', 'liste_ecoles.json');
const OUTPUT = path.resolve(__dirname, '..', 'src', 'data', 'schoolsData.generated.ts');
const BAN_URL = 'https://api-adresse.data.gouv.fr/search/csv/';

// ── Helpers ────────────────────────────────────────────────────────────────

function mapType(sigle = '', denomination = '') {
  const s = sigle.toLowerCase();
  const d = denomination.toLowerCase();
  if (d.includes('matern') || s.startsWith('e.m.')) return 'maternelle';
  if (s.startsWith('e.e.') || d.includes('elementaire') || d.includes('élémentaire')) return 'elementaire';
  if (d.includes('college') || d.includes('collège')) return 'college';
  if (d.includes('lycee') || d.includes('lycée')) return 'lycee';
  // E.P. = École Primaire (regroupe mat + élémentaire), on met élémentaire par défaut
  return 'elementaire';
}

function extractDirector(personnel = '') {
  const colon = personnel.indexOf(':');
  return colon >= 0 ? personnel.slice(colon + 1).trim() : personnel.trim();
}

// Articles/prépositions à garder en minuscule sauf en début de chaîne
const LOWER_WORDS = new Set(['de', 'du', 'des', 'le', 'la', 'les', 'en', 'et', 'au', 'aux', 'sur', 'sous', 'd\'', 'l\'']);

function toTitle(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(/\b/)
    .map((word, i) => {
      if (!word.match(/[a-z]/)) return word;
      if (i === 0 || !LOWER_WORDS.has(word)) return word.charAt(0).toUpperCase() + word.slice(1);
      return word;
    })
    .join('')
    .trim();
}

// ── Build CSV pour la BAN ──────────────────────────────────────────────────

function buildCsv(arr) {
  const header = 'id,adresse,code_postal,commune\n';
  const rows = arr.map((e, i) => {
    const id = e.RNE || String(i);
    const adresse  = (e.Adresse || '').replace(/"/g, '""');
    const cp       = String(e['Code postal'] || '').trim();
    const commune  = (e.Commune || e["Localité d'acheminement"] || '').replace(/"/g, '""');
    return `"${id}","${adresse}","${cp}","${commune}"`;
  });
  return header + rows.join('\n');
}

// ── Parse CSV réponse ──────────────────────────────────────────────────────

function parseCsvLine(line) {
  const fields = [];
  let cur = '';
  let inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQuote && line[i + 1] === '"') { cur += '"'; i++; }
      else inQuote = !inQuote;
    } else if (c === ',' && !inQuote) {
      fields.push(cur); cur = '';
    } else {
      cur += c;
    }
  }
  fields.push(cur);
  return fields;
}

function parseCsv(text) {
  const lines = text.split('\n').filter(l => l.trim());
  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map(line => {
    const vals = parseCsvLine(line);
    return Object.fromEntries(headers.map((h, i) => [h, vals[i] ?? '']));
  });
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('📂 Lecture de', INPUT);
  const raw = fs.readFileSync(INPUT, 'utf8').replace(/\bNaN\b/g, 'null');
  const arr = JSON.parse(raw);
  console.log(`   → ${arr.length} établissements`);

  // Index par RNE pour retrouver les données sources après le géocodage
  const byRne = Object.fromEntries(arr.map((e, i) => [e.RNE || String(i), e]));

  console.log('🌐 Envoi vers la BAN (api-adresse.data.gouv.fr)…');
  const csv = buildCsv(arr);

  // FormData-like multipart via node-fetch (utilise boundary manuel)
  const boundary = '----EduscopeBoundary' + Date.now();
  const nl = '\r\n';
  let body = '';
  body += `--${boundary}${nl}`;
  body += `Content-Disposition: form-data; name="data"; filename="ecoles.csv"${nl}`;
  body += `Content-Type: text/csv${nl}${nl}`;
  body += csv + nl;
  // Colonnes à combiner pour le géocodage
  body += `--${boundary}${nl}`;
  body += `Content-Disposition: form-data; name="columns"${nl}${nl}adresse${nl}`;
  body += `--${boundary}${nl}`;
  body += `Content-Disposition: form-data; name="postcode"${nl}${nl}code_postal${nl}`;
  body += `--${boundary}${nl}`;
  body += `Content-Disposition: form-data; name="city"${nl}${nl}commune${nl}`;
  body += `--${boundary}--${nl}`;

  const res = await fetch(BAN_URL, {
    method: 'POST',
    headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`BAN API error ${res.status}: ${text.slice(0, 300)}`);
  }

  const responseText = await res.text();
  const rows = parseCsv(responseText);
  console.log(`   → ${rows.length} résultats reçus`);

  // ── Assembler les objets School ──────────────────────────────────────────
  let matched = 0;
  let failed  = 0;
  const schools = [];
  const failedItems = []; // pour le fallback

  for (const row of rows) {
    const rne  = row.id || '';
    const src  = byRne[rne];
    if (!src) continue;

    const lat = parseFloat(row.latitude);
    const lon = parseFloat(row.longitude);
    const score = parseFloat(row.result_score || '0');

    if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
      failedItems.push({ rne, src });
      failed++;
      continue;
    }

    if (score < 0.3) {
      console.warn(`  ⚠ Score faible (${score}) pour ${rne} — ${src['Dénomination']} → ${row.result_label}`);
    }

    matched++;
    schools.push({
      id:        rne,
      rne:       rne,
      name:      toTitle(src['Dénomination'] || ''),
      type:      mapType(src['Sigle'] || '', src['Dénomination'] || ''),
      city:      toTitle(src['Commune'] || src["Localité d'acheminement"] || ''),
      latitude:  parseFloat(lat.toFixed(6)),
      longitude: parseFloat(lon.toFixed(6)),
      studentsCount: { total: 0, byLevel: {} },
      ashDevice: {
        type: 'NONE',
        assignedStudents: 0,
        capacity: 0,
        baseChecked: false,
        valChecked: false,
        comments: '',
      },
      directorName: extractDirector(src['Personnel 1'] || ''),
      referentName: '',
      cpcName: '',
    });
  }

  console.log(`✅ ${matched} écoles géocodées, ${failed} à corriger via fallback commune`);

  // ── Fallback : géocodage par commune + code postal uniquement ─────────────
  if (failedItems.length) {
    console.log(`🔄 Fallback pour ${failedItems.length} établissements (centroïde commune)…`);

    // Regrouper par commune pour minimiser les requêtes
    const communeCache = {};

    for (const { rne, src } of failedItems) {
      const commune  = (src.Commune || src["Localité d'acheminement"] || '').trim();
      const cp       = String(src['Code postal'] || '').trim();
      const cacheKey = `${cp}-${commune}`;

      if (!communeCache[cacheKey]) {
        const q = encodeURIComponent(`${cp} ${commune} France`);
        try {
          const r = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${q}&type=municipality&limit=1`);
          const j = await r.json();
          if (j.features?.length) {
            const [lon, lat] = j.features[0].geometry.coordinates;
            communeCache[cacheKey] = { lat, lon };
          } else {
            communeCache[cacheKey] = null;
          }
        } catch {
          communeCache[cacheKey] = null;
        }
      }

      const geo = communeCache[cacheKey];
      if (!geo) {
        console.warn(`  ✗ Abandon : ${rne} — ${src['Dénomination']} (${commune})`);
        continue;
      }

      schools.push({
        id:        rne,
        rne:       rne,
        name:      toTitle(src['Dénomination'] || ''),
        type:      mapType(src['Sigle'] || '', src['Dénomination'] || ''),
        city:      toTitle(commune),
        latitude:  parseFloat(geo.lat.toFixed(6)),
        longitude: parseFloat(geo.lon.toFixed(6)),
        studentsCount: { total: 0, byLevel: {} },
        ashDevice: { type: 'NONE', assignedStudents: 0, capacity: 0, baseChecked: false, valChecked: false, comments: '' },
        directorName: extractDirector(src['Personnel 1'] || ''),
        referentName: '',
        cpcName: '',
      });
    }
    console.log(`   → Total final : ${schools.length} établissements`);
  }

  // ── Écrire le fichier TypeScript ─────────────────────────────────────────
  const header = `// Auto-généré depuis liste_ecoles.json — ${new Date().toISOString()}\n// Ne pas éditer manuellement.\n\nimport type { School } from './schoolsData';\n\n`;
  const content = header + `export const schoolsData: School[] = ${JSON.stringify(schools, null, 2)};\n`;

  fs.writeFileSync(OUTPUT, content, 'utf8');
  console.log(`📝 Fichier écrit : ${OUTPUT} (${schools.length} établissements)`);
}

main().catch(e => { console.error(e); process.exit(1); });
