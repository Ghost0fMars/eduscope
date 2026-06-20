#!/usr/bin/env tsx
/**
 * scripts/importData.ts
 * Enrichit src/data/schoolsData.generated.ts avec les capacités ULIS/SEGPA agrégées.
 *
 * Usage : npx tsx scripts/importData.ts
 *
 * IMPORTANT — Protection des données :
 * Ce script ne traite et ne génère AUCUNE donnée nominative ou individuelle
 * sur les élèves. Seuls les agrégats par établissement (type de dispositif,
 * capacité, effectif global) sont utilisés.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_JSON = join(ROOT, 'data', 'json');
const OUT_PATH = join(ROOT, 'src', 'data', 'schoolsData.generated.ts');
const ERSEH_OUT_PATH = join(ROOT, 'src', 'data', 'ersehData.generated.ts');

interface CapUlis {
  secteurErseh: string;
  ecole: string;
  typeUlis: string;
  commune: string;
  effectifAvantCommission: number;
  nombreSortants: number | null;
  placesVacantesRentree: number | null;
  capaciteMax: number;
  remarques: string | null;
}

interface CapSegpa {
  etablissement: string;
  effectif3eme: number;
  effectif4eme: number;
  effectif5eme: number;
  effectif6eme: number;
  totalEffectif: number | null;
  format6eme: number | null;
  placesRestantes6eme: number | null;
}

interface EtablissementEntry {
  uai: string;
  type: string;
  categorie: string;
  libelle: string;
  commune: string;
  departement: string;
  educationPrioritaire: string | null;
}

interface DirecteurSegpa {
  nom: string;
  prenom: string;
  telephone: string | null;
  etablissement: string;
  departement: string;
  secteur: string;
  ville: string;
  mailAcademique: string | null;
  mailFonctionnel: string | null;
}

interface RawReferentComplet {
  secteurErseh?: string;
  reseau?: string;
  secteurAsh?: string;
  circonscription?: string;
  nom?: string;
  prenom?: string;
  telephone?: string;
  mail?: string;
  lieuImplantation?: string;
  ville?: string;
  publicPrive?: string;
}

interface RawErseh {
  nom?: string;
  prenom?: string;
  secteurErseh?: string;
  circonscription?: string;
  telephone?: string;
  mail?: string;
  lieuImplantation?: string;
  ville?: string;
}

interface ErsehReferent {
  secteurCode: string;
  secteurLabel?: string;
  secteurAsh?: string;
  circonscription?: string;
  nom: string;
  prenom: string;
  telephone?: string;
  mail: string;
  lieuImplantation?: string;
  ville?: string;
  publicPrive?: string;
}


interface AshDevice {
  type: string;
  assignedStudents: number;
  capacity: number;
  placesVacantes?: number;
  effectifAvantCommission?: number;
  baseChecked: boolean;
  valChecked: boolean;
  comments: string;
}

function load<T>(file: string): T {
  return JSON.parse(readFileSync(join(DATA_JSON, file), 'utf-8'));
}

function norm(s: string, stripPrefixes = false): string {
  let r = s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toUpperCase()
    .replace(/[()]/g, ' ')
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim();
  if (stripPrefixes) {
    r = r
      .replace(/^(CLG|COLLEGE|ECOLE ELEMENTAIRE|ECOLE PRIMAIRE|ECOLE MATERNELLE|ECOLE)\s+/, '')
      .trim();
  }
  return r;
}

function assertNoFreeTextLeftover(label: string, value: string | null | undefined) {
  if (value && value.trim().length > 0) {
    console.warn(
      `ATTENTION - champ texte libre non vide detecte dans "${label}": "${value}".\n` +
      `   Verifiez qu'il ne s'agit pas d'un nom d'eleve avant de continuer.`
    );
  }
}

const capUlis = load<CapUlis[]>('capacites_ulis_ecole.json');
const capSegpa = load<CapSegpa[]>('capacites_segpa.json').filter(
  c => c.etablissement && c.etablissement !== 'Étiquettes de lignes'
);
const etablissements = load<EtablissementEntry[]>('etablissements.json');
const directeursSegpa = load<DirecteurSegpa[]>('directeurs_segpa.json');
const referentsComplets = load<RawReferentComplet[]>('referents_complets.json');
const ersehRaw = load<RawErseh[]>('erseh.json');

const fromComplets: ErsehReferent[] = referentsComplets
  .filter(r => !!r.mail)
  .map(r => ({
    secteurCode: r.secteurErseh ?? '',
    ...(r.reseau && { secteurLabel: r.reseau }),
    ...(r.secteurAsh && { secteurAsh: r.secteurAsh }),
    ...(r.circonscription && { circonscription: r.circonscription }),
    nom: r.nom ?? '',
    prenom: r.prenom ?? '',
    ...(r.telephone && { telephone: r.telephone }),
    mail: r.mail!,
    ...(r.lieuImplantation && { lieuImplantation: r.lieuImplantation }),
    ...(r.ville && { ville: r.ville }),
    ...(r.publicPrive && { publicPrive: r.publicPrive }),
  }));

const mailsKnown = new Set(fromComplets.map(r => r.mail));
const fromErseh: ErsehReferent[] = ersehRaw
  .filter(r => !!r.mail && !mailsKnown.has(r.mail!))
  .map(r => ({
    secteurCode: r.nom ?? '',
    ...(r.secteurErseh && { secteurLabel: r.secteurErseh }),
    ...(r.circonscription && { circonscription: r.circonscription }),
    nom: r.prenom ?? '',
    prenom: '',
    ...(r.telephone && { telephone: r.telephone }),
    mail: r.mail!,
    ...(r.lieuImplantation && { lieuImplantation: r.lieuImplantation }),
    ...(r.ville && { ville: r.ville }),
  }));

const ersehData: ErsehReferent[] = [...fromComplets, ...fromErseh];
const ersehBySecteurCode = new Map<string, ErsehReferent>(
  ersehData.map(r => [r.secteurCode.toUpperCase().trim(), r])
);

for (const c of capUlis) {
  assertNoFreeTextLeftover(`capacites_ulis_ecole > ${c.ecole}`, c.remarques);
}

const capUlisByEcoleNorm = new Map<string, CapUlis[]>();
for (const c of capUlis) {
  const k = norm(c.ecole, true);
  if (!capUlisByEcoleNorm.has(k)) capUlisByEcoleNorm.set(k, []);
  capUlisByEcoleNorm.get(k)!.push(c);
}

const SCHOOL_TO_SEGPA_KEY: Record<string, string> = {
  'DARIUS MILHAUD':        'D MILHAUD',
  'LOUISE MICHEL':         'L MICHEL',
  'QUARTIER DES CAILLOLS': 'LES CAILLOLS',
  'SYLVAIN MENU':          'S MENU',
  'JAS DE BOUFFAN':        'MURIEL HURTIS',
};

const SEGPA_KEY_TO_ETABL: Record<string, string> = {
  'MURIEL HURTIS': 'JAS DE BOUFFAN',
};

const segpaCapByNorm = new Map<string, CapSegpa>();
for (const c of capSegpa) {
  segpaCapByNorm.set(norm(c.etablissement, true), c);
}

const genSource = readFileSync(OUT_PATH, 'utf-8');
const arrayStart = genSource.indexOf('= [');
const arrayEnd = genSource.lastIndexOf('];');
if (arrayStart === -1 || arrayEnd === -1) {
  throw new Error('Impossible de trouver le tableau dans schoolsData.generated.ts');
}
const rawArray = genSource
  .slice(arrayStart + 2, arrayEnd + 1)
  .replace(/,(\s*[}\]])/g, '$1');

let schools: Record<string, unknown>[];
try {
  schools = JSON.parse(rawArray);
} catch (e) {
  throw new Error(`Echec du parsing JSON du tableau schools : ${(e as Error).message}`);
}

const NONE_DEVICE: AshDevice = {
  type: 'NONE',
  assignedStudents: 0,
  capacity: 12,
  baseChecked: false,
  valChecked: false,
  comments: '',
};

const unmatchedSchoolsUlis: string[] = [];
let matchedSchoolsUlis = 0;
let matchedSchoolsSegpa = 0;

const enriched = schools.map((school) => {
  const existing = school.ashDevice as AshDevice;
  const ashDevices: AshDevice[] = [];

  const schoolNormName = norm(school.name as string, true);
  const ulisCaps = capUlisByEcoleNorm.get(schoolNormName);
  if (ulisCaps && ulisCaps.length > 0) {
    matchedSchoolsUlis++;
    for (const cap of ulisCaps) {
      ashDevices.push({
        type: cap.typeUlis,
        assignedStudents: 0,
        capacity: cap.capaciteMax ?? 12,
        placesVacantes: cap.capaciteMax ?? 12,
        effectifAvantCommission: 0,
        baseChecked: existing?.baseChecked ?? false,
        valChecked: existing?.valChecked ?? false,
        comments: '',
      });
    }
  } else if (school.type !== 'college') {
    unmatchedSchoolsUlis.push(`${school.name}`);
  }

  const segpaKey = SCHOOL_TO_SEGPA_KEY[schoolNormName] ?? schoolNormName;
  const cap = segpaCapByNorm.get(segpaKey) ?? segpaCapByNorm.get(schoolNormName);
  if (cap) {
    matchedSchoolsSegpa++;
    ashDevices.push({
      type: 'SEGPA',
      assignedStudents: 0,
      capacity: cap.totalEffectif ?? 0,
      placesVacantes: cap.totalEffectif ?? 0,
      baseChecked: existing?.baseChecked ?? false,
      valChecked: existing?.valChecked ?? false,
      comments: '',
    });
  }

  const primaryDevice: AshDevice =
    ashDevices.length > 0 ? ashDevices[0] : (existing ?? NONE_DEVICE);

  const secteur = (school.secteurERSEH as string | undefined)?.toUpperCase().trim();
  let referentName = school.referentName as string || '';
  let referentPhone = school.referentPhone as string || '';
  let referentEmail = school.referentEmail as string || '';

  if (secteur && ersehBySecteurCode.has(secteur)) {
    const ref = ersehBySecteurCode.get(secteur)!;
    referentName = `${ref.nom} ${ref.prenom}`.trim();
    if (ref.telephone) referentPhone = ref.telephone;
    if (ref.mail) referentEmail = ref.mail;
  }

  const result: Record<string, unknown> = {
    ...school,
    ashDevice: primaryDevice,
    referentName,
    referentPhone,
    referentEmail
  };
  if (ashDevices.length > 0) result.ashDevices = ashDevices;
  return result;
});

const etablByNorm = new Map<string, EtablissementEntry>();
for (const e of etablissements) {
  etablByNorm.set(norm(e.libelle, true), e);
  const withoutClg = e.libelle.replace(/^CLG\s+/i, '');
  etablByNorm.set(norm(withoutClg, true), e);
}

const directeursByNorm = new Map<string, DirecteurSegpa[]>();
for (const d of directeursSegpa) {
  const k = norm(d.etablissement, true);
  if (!directeursByNorm.has(k)) directeursByNorm.set(k, []);
  directeursByNorm.get(k)!.push(d);
}

const matchedSegpaKeys = new Set<string>();
for (const s of enriched) {
  if ((s.ashDevices as AshDevice[] | undefined)?.some(d => d.type === 'SEGPA')) {
    const schoolNorm = norm(s.name as string, true);
    matchedSegpaKeys.add(schoolNorm);
    const alias = SCHOOL_TO_SEGPA_KEY[schoolNorm];
    if (alias) matchedSegpaKeys.add(alias);
  }
}

const existingRnes = new Set(schools.map(s => (s.rne as string)?.toUpperCase()).filter(Boolean));

const newSegpaSchools: Record<string, unknown>[] = [];
const stubsCreated: string[] = [];
const stubsNotFound: string[] = [];

for (const [segpaNorm, cap] of segpaCapByNorm.entries()) {
  if (matchedSegpaKeys.has(segpaNorm)) continue;

  const etablNorm = SEGPA_KEY_TO_ETABL[segpaNorm] ?? segpaNorm;
  const etabl = etablByNorm.get(etablNorm) ?? etablByNorm.get(segpaNorm);
  if (etabl && existingRnes.has(etabl.uai.toUpperCase())) continue;

  const dirs = directeursByNorm.get(segpaNorm) ?? [];
  const dir = dirs[0];

  if (!etabl) {
    stubsNotFound.push(segpaNorm);
    continue;
  }

  const segpaDevice: AshDevice = {
    type: 'SEGPA',
    assignedStudents: 0,
    capacity: cap.totalEffectif ?? 0,
    placesVacantes: cap.totalEffectif ?? 0,
    baseChecked: false,
    valChecked: false,
    comments: '',
  };

  const rne = etabl.uai.toUpperCase();
  newSegpaSchools.push({
    id: etabl.uai.toLowerCase(),
    rne,
    name: etabl.libelle,
    type: 'college',
    city: etabl.commune,
    address: '',
    postalCode: '',
    latitude: 0,
    longitude: 0,
    studentsCount: { total: 0, byLevel: {} },
    ashDevice: segpaDevice,
    ashDevices: [segpaDevice],
    directorName: dir ? `${dir.prenom} ${dir.nom}` : '',
    referentName: '',
    secteurERSEH: undefined,
    cpcName: '',
    email: dir?.mailFonctionnel ?? '',
    phone: dir?.telephone ?? '',
  });
  stubsCreated.push(`${etabl.libelle} (${rne}) - capacite ${cap.totalEffectif ?? '?'}`);
  existingRnes.add(rne);
}

const allSchools = [...enriched, ...newSegpaSchools];

const header = `// Auto-genere depuis les capacites ULIS/SEGPA (agregats uniquement - aucune donnee eleve)
// Enrichi : capacites_ulis_ecole.json, capacites_segpa.json, etablissements.json, directeurs_segpa.json
// Ne pas editer manuellement - regenerer via : npx tsx scripts/importData.ts

import type { School } from './schoolsData';

export const schoolsData: School[] = `;

const body = JSON.stringify(allSchools, null, 2) + ';\n';

writeFileSync(OUT_PATH, header + body, 'utf-8');

console.log('===================================================');
console.log(`Fichier regenere : src/data/schoolsData.generated.ts`);
console.log(`   ${allSchools.length} ecoles au total (${schools.length} existantes + ${newSegpaSchools.length} stubs SEGPA crees)`);
console.log(`   ULIS : ${matchedSchoolsUlis} ecoles matchees`);
console.log(`   SEGPA : ${matchedSchoolsSegpa} colleges matches (existants) + ${stubsCreated.length} stubs crees`);

if (unmatchedSchoolsUlis.length > 0) {
  console.log(`\n${unmatchedSchoolsUlis.length} ecoles sans dispositif ULIS detecte (normal si pas de ULIS, liste tronquee) :`);
  console.log(`   ${unmatchedSchoolsUlis.slice(0, 10).join(', ')}`);
}
if (stubsNotFound.length > 0) {
  console.log(`\n${stubsNotFound.length} SEGPA avec capacites mais etablissement introuvable dans etablissements.json :`);
  for (const s of stubsNotFound) console.log(`   - ${s}`);
}
if (stubsCreated.length > 0) {
  console.log(`\nStubs SEGPA crees :`);
  for (const s of stubsCreated) console.log(`   - ${s}`);
}

const ersehLines = ersehData.map(r => `  ${JSON.stringify(r)}`).join(',\n');

const ersehOut = `// Auto-genere depuis referents_complets.json + erseh.json
// Ne pas editer manuellement - regenerer via : npx tsx scripts/importData.ts

import type { ErsehReferent } from './ersehData';

export const ersehData: ErsehReferent[] = [
${ersehLines}
];

export const ersehBySecteur: Map<string, ErsehReferent> = new Map(
  ersehData.map(r => [r.secteurCode, r])
);
`;

writeFileSync(ERSEH_OUT_PATH, ersehOut, 'utf-8');
console.log(`\nFichier regenere : src/data/ersehData.generated.ts (${ersehData.length} referents)`);
console.log('===================================================\n');
