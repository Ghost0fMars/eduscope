import express from 'express';
import path from 'path';
import { simpleParser } from 'mailparser';
import { ImapFlow } from 'imapflow';
import { getTasks, saveTasks, addTask, resetDatabase } from './src/kanban/dbStore';
import { CollaborativeTask, TaskPriority, TaskStatus, SyncResult } from './src/kanban/types';
import { getEvents, addEvent, deleteEvent, updateEvent } from './src/agenda/agendaStore';
import { getSchools, updateSchool, addSchool, deleteSchool, getSchoolByRne, upsertSchool } from './src/data/schoolsStore';
import { getErseh, updateErseh, addErseh, deleteErseh, getErsehByCode, upsertErseh } from './src/data/ersehStore';
import { initDatabase } from './src/data/database';
import type { School } from './src/data/schoolsData';
import type { ErsehReferent } from './src/data/ersehData';

const app = express();
const PORT = Number(process.env.PORT) || 3005;

app.use(express.json({ limit: '10mb' }));

// ─── Import types ─────────────────────────────────────────────────────────────

export type ImportStatus = 'new' | 'duplicate' | 'conflict';

export interface ImportPreviewRow {
  status: ImportStatus;
  key: string;
  label: string;
  incoming: Record<string, string>;
  diff?: Record<string, { old: string; new: string }>;
}

// ─── CSV helpers ──────────────────────────────────────────────────────────────

function parseCsvText(text: string): Record<string, string>[] {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const delim = lines[0].includes(';') ? ';' : ',';
  const headers = lines[0].split(delim).map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const vals = line.split(delim).map(v => v.trim().replace(/^"|"$/g, ''));
    return Object.fromEntries(headers.map((h, i) => [h, vals[i] ?? '']));
  });
}

// ─── Schools import preview ───────────────────────────────────────────────────

const SCHOOL_CSV_MAP: Record<string, keyof School> = {
  nom: 'name', type: 'type', ville: 'city',
  adresse: 'address', codepostal: 'postalCode',
  directeur: 'directorName', cpc: 'cpcName',
  referenterseh: 'referentName', email: 'email', telephone: 'phone',
};

function previewSchoolsImport(rows: Record<string, string>[]): ImportPreviewRow[] {
  const result: ImportPreviewRow[] = [];
  for (const row of rows) {
    const rne = (row['rne'] ?? '').toUpperCase().trim();
    if (!rne) continue;

    const existing = getSchoolByRne(rne);
    if (!existing) {
      result.push({ status: 'new', key: rne, label: row['nom'] ?? rne, incoming: row });
      continue;
    }

    const diff: Record<string, { old: string; new: string }> = {};
    for (const [csvField, schoolField] of Object.entries(SCHOOL_CSV_MAP)) {
      if (row[csvField] !== undefined) {
        const newVal = row[csvField];
        const oldVal = String((existing as unknown as Record<string, unknown>)[schoolField] ?? '');
        if (newVal !== oldVal) diff[csvField] = { old: oldVal, new: newVal };
      }
    }

    result.push({
      status: Object.keys(diff).length === 0 ? 'duplicate' : 'conflict',
      key: rne,
      label: existing.name,
      incoming: row,
      diff: Object.keys(diff).length > 0 ? diff : undefined,
    });
  }
  return result;
}

function applySchoolsImport(rows: Record<string, string>[]): number {
  let count = 0;
  for (const row of rows) {
    const rne = (row['rne'] ?? '').toUpperCase().trim();
    if (!rne) continue;
    const existing = getSchoolByRne(rne);
    if (existing) {
      const updated: School = { ...existing };
      for (const [csvField, schoolField] of Object.entries(SCHOOL_CSV_MAP)) {
        if (row[csvField] !== undefined)
          (updated as unknown as Record<string, unknown>)[schoolField] = row[csvField];
      }
      upsertSchool(updated);
    } else {
      const newSchool: School = {
        id: `new_${rne}_${Date.now()}`,
        rne,
        name: row['nom'] ?? rne,
        type: (row['type'] as School['type']) ?? 'elementaire',
        city: row['ville'] ?? '',
        address: row['adresse'],
        postalCode: row['codepostal'],
        latitude: 43.3, longitude: 5.4,
        studentsCount: { total: 0, byLevel: {} },
        ashDevice: { type: 'NONE', assignedStudents: 0, capacity: 12, baseChecked: false, valChecked: false, comments: '' },
        directorName: row['directeur'] ?? '',
        referentName: row['referenterseh'] ?? '',
        cpcName: row['cpc'] ?? '',
        email: row['email'],
        phone: row['telephone'],
      };
      upsertSchool(newSchool);
    }
    count++;
  }
  return count;
}

// ─── ERSEH import preview ─────────────────────────────────────────────────────

const ERSEH_CSV_MAP: Record<string, keyof ErsehReferent> = {
  secteurlabel: 'secteurLabel', nom: 'nom', prenom: 'prenom',
  telephone: 'telephone', mail: 'mail', ville: 'ville',
  circonscription: 'circonscription',
};

function previewErsehImport(rows: Record<string, string>[]): ImportPreviewRow[] {
  const result: ImportPreviewRow[] = [];
  for (const row of rows) {
    const code = (row['secteurcode'] ?? row['secteur_code'] ?? '').trim();
    if (!code) continue;

    const existing = getErsehByCode(code);
    if (!existing) {
      result.push({
        status: 'new', key: code,
        label: [row['prenom'], row['nom']].filter(Boolean).join(' ') || code,
        incoming: row,
      });
      continue;
    }

    const diff: Record<string, { old: string; new: string }> = {};
    for (const [csvField, ersehField] of Object.entries(ERSEH_CSV_MAP)) {
      if (row[csvField] !== undefined) {
        const newVal = row[csvField];
        const oldVal = String((existing as unknown as Record<string, unknown>)[ersehField] ?? '');
        if (newVal !== oldVal) diff[csvField] = { old: oldVal, new: newVal };
      }
    }

    result.push({
      status: Object.keys(diff).length === 0 ? 'duplicate' : 'conflict',
      key: code,
      label: `${existing.prenom} ${existing.nom}`.trim(),
      incoming: row,
      diff: Object.keys(diff).length > 0 ? diff : undefined,
    });
  }
  return result;
}

function applyErsehImport(rows: Record<string, string>[], schools: School[]): { ersehCount: number; schoolSync: number } {
  let ersehCount = 0;
  let schoolSync = 0;
  for (const row of rows) {
    const code = (row['secteurcode'] ?? row['secteur_code'] ?? '').trim();
    if (!code) continue;

    const existing = getErsehByCode(code);
    if (existing) {
      const updated: ErsehReferent = { ...existing };
      for (const [csvField, ersehField] of Object.entries(ERSEH_CSV_MAP)) {
        if (row[csvField] !== undefined)
          (updated as unknown as Record<string, unknown>)[ersehField] = row[csvField];
      }
      upsertErseh(updated);

      // Sync schools linked to this secteur
      for (const s of schools) {
        if (s.secteurERSEH?.toLowerCase() === code.toLowerCase()) {
          const nom = row['nom'] ?? '';
          const prenom = row['prenom'] ?? '';
          upsertSchool({
            ...s,
            referentName: (prenom || nom) ? `${prenom} ${nom}`.trim() : s.referentName,
            referentPhone: row['telephone'] ?? s.referentPhone,
            referentEmail: row['mail'] ?? s.referentEmail,
          });
          schoolSync++;
        }
      }
    } else {
      upsertErseh({
        secteurCode: code,
        secteurLabel: row['secteurlabel'] ?? '',
        nom: row['nom'] ?? '',
        prenom: row['prenom'] ?? '',
        telephone: row['telephone'],
        mail: row['mail'] ?? '',
        ville: row['ville'],
        circonscription: row['circonscription'],
      });
    }
    ersehCount++;
  }
  return { ersehCount, schoolSync };
}

// ─── Tasks API ────────────────────────────────────────────────────────────────

app.get('/api/tasks', (req, res) => {
  try { res.json({ success: true, tasks: getTasks() }); }
  catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

app.post('/api/tasks/action', (req, res) => {
  try {
    const { taskId, action, agentId } = req.body;
    let tasks = getTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return res.status(404).json({ success: false, error: 'Tâche non trouvée.' });

    const task = tasks[taskIndex];
    if (action === 'take-charge') {
      if (!agentId?.trim()) return res.status(400).json({ success: false, error: 'Un ID d\'agent valide est requis.' });
      if (task.status !== 'En attente') return res.status(400).json({ success: false, error: 'Tâche déjà prise en charge.' });
      task.status = 'En cours'; task.agentId = agentId;
    } else if (action === 'release') {
      if (task.status !== 'En cours') return res.status(400).json({ success: false, error: 'Seules les tâches en cours peuvent être relâchées.' });
      task.status = 'En attente'; task.agentId = undefined;
    } else if (action === 'finish') {
      if (task.status !== 'En cours') return res.status(400).json({ success: false, error: 'Seules les tâches en cours peuvent être terminées.' });
      task.status = 'Terminé';
    } else if (action === 'restore') {
      if (task.status !== 'Terminé') return res.status(400).json({ success: false, error: 'Seules les tâches terminées peuvent être restaurées.' });
      task.status = 'En attente'; task.agentId = undefined;
    } else if (action === 'delete') {
      tasks.splice(taskIndex, 1); saveTasks(tasks);
      return res.json({ success: true, deleted: true });
    } else {
      return res.status(400).json({ success: false, error: 'Action non reconnue.' });
    }
    tasks[taskIndex] = task; saveTasks(tasks);
    res.json({ success: true, task });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

// ─── Email / IMAP ─────────────────────────────────────────────────────────────

function extractEmails(recipientField: any): string[] {
  if (!recipientField) return [];
  if (Array.isArray(recipientField)) return recipientField.map(r => r.address || r.value || r || '').filter(Boolean);
  if (recipientField.value && Array.isArray(recipientField.value)) return recipientField.value.map((r: any) => r.address || r.value || r || '').filter(Boolean);
  if (typeof recipientField === 'string') return [recipientField];
  return [];
}

function computePriority(toEmails: string[], ccEmails: string[], agentEmail: string): TaskPriority {
  const target = agentEmail.toLowerCase().trim();
  if (!target) return 'DIRECT';
  if (toEmails.some(e => e.toLowerCase().includes(target))) return 'DIRECT';
  if (ccEmails.some(e => e.toLowerCase().includes(target))) return 'INFO';
  return 'CCI';
}

app.post('/api/email/sync', async (req, res) => {
  const { config } = req.body;
  const agentEmail = config?.agentEmail || '';
  if (!config?.host || !config?.user || !config?.password) {
    return res.status(400).json({ success: false, error: 'Veuillez remplir tous les champs de configuration IMAP !' });
  }
  const client = new ImapFlow({
    host: config.host, port: parseInt(config.port) || 993,
    secure: config.secure !== false,
    auth: { user: config.user, pass: config.password },
    logger: false,
  });
  client.on('error', (err) => console.error('ImapFlow error:', err));
  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    let added = 0, duplicated = 0;
    try {
      const messages = await client.search({ seen: false });
      if (messages && Array.isArray(messages)) {
        for (const message of messages) {
          const fetched = await client.fetchOne(message, { source: true });
          if (fetched?.source) {
            const parsed = await simpleParser(fetched.source);
            const toEmails = extractEmails(parsed.to);
            const ccEmails = extractEmails(parsed.cc);
            const subject = parsed.subject || '(Sujet absent)';
            const sender = parsed.from?.text || parsed.from?.value?.[0]?.address || 'Inconnu';
            const bodyText = parsed.text || parsed.textAsHtml || '(Pas de contenu texte)';
            const messageId = parsed.messageId || `imap-uid-${message}-${subject.replace(/\s/g, '_')}`;
            const priority = computePriority(toEmails, ccEmails, agentEmail);
            const result = addTask({ subject, sender, recipientTo: toEmails, recipientCc: ccEmails, date: parsed.date?.toISOString() ?? new Date().toISOString(), body: bodyText, priority, status: 'En attente', messageId });
            result.success ? added++ : duplicated++;
          }
        }
      }
    } finally { lock.release(); }
    await client.logout();
    res.json({ success: true, fetchedCount: added, duplicateCount: duplicated } as SyncResult);
  } catch (err: any) {
    console.error('Erreur IMAP :', err);
    res.status(500).json({ success: false, error: `La connexion IMAP a échoué : ${err.message || err}` });
  }
});

// ─── Agenda API ───────────────────────────────────────────────────────────────

app.get('/api/agenda', (_req, res) => {
  try { res.json({ success: true, events: getEvents() }); }
  catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

app.post('/api/agenda', (req, res) => {
  try {
    const { title, type, date, time, endTime, location, description } = req.body;
    if (!title || !type || !date) return res.status(400).json({ success: false, error: 'title, type et date sont requis.' });
    res.json({ success: true, event: addEvent({ title, type, date, time, endTime, location, description }) });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

app.put('/api/agenda/:id', (req, res) => {
  try {
    const event = updateEvent(req.params.id, req.body);
    if (!event) return res.status(404).json({ success: false, error: 'Événement non trouvé.' });
    res.json({ success: true, event });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

app.delete('/api/agenda/:id', (req, res) => {
  try {
    if (!deleteEvent(req.params.id)) return res.status(404).json({ success: false, error: 'Événement non trouvé.' });
    res.json({ success: true });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

app.post('/api/email/reset', (req, res) => {
  try { resetDatabase(); res.json({ success: true, tasks: [] }); }
  catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

// ─── Schools API ──────────────────────────────────────────────────────────────

app.get('/api/schools', (_req, res) => { res.json(getSchools()); });

app.put('/api/schools/:id', (req, res) => {
  res.json({ success: updateSchool({ ...req.body, id: req.params.id }) });
});

app.post('/api/schools', (req, res) => {
  addSchool(req.body); res.json({ success: true });
});

app.delete('/api/schools/:id', (req, res) => {
  res.json({ success: deleteSchool(req.params.id) });
});

// Import schools: preview
app.post('/api/schools/import-preview', (req, res) => {
  try {
    const { csvText } = req.body as { csvText: string };
    if (!csvText) return res.status(400).json({ success: false, error: 'csvText requis.' });
    const rows = parseCsvText(csvText);
    res.json({ success: true, preview: previewSchoolsImport(rows) });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

// Import schools: confirm selected rows
app.post('/api/schools/import-confirm', (req, res) => {
  try {
    const { rows } = req.body as { rows: Record<string, string>[] };
    if (!Array.isArray(rows)) return res.status(400).json({ success: false, error: 'rows[] requis.' });
    const count = applySchoolsImport(rows);
    res.json({ success: true, count, schools: getSchools() });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

// ─── ERSEH API ────────────────────────────────────────────────────────────────

app.get('/api/erseh', (_req, res) => { res.json(getErseh()); });

app.put('/api/erseh/:code', (req, res) => {
  const e: ErsehReferent = { ...req.body, secteurCode: req.params.code };
  res.json({ success: updateErseh(e) });
});

app.post('/api/erseh', (req, res) => {
  addErseh(req.body); res.json({ success: true });
});

app.delete('/api/erseh/:code', (req, res) => {
  res.json({ success: deleteErseh(req.params.code) });
});

// Import ERSEH: preview
app.post('/api/erseh/import-preview', (req, res) => {
  try {
    const { csvText } = req.body as { csvText: string };
    if (!csvText) return res.status(400).json({ success: false, error: 'csvText requis.' });
    const rows = parseCsvText(csvText);
    res.json({ success: true, preview: previewErsehImport(rows) });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

// Import ERSEH: confirm selected rows
app.post('/api/erseh/import-confirm', (req, res) => {
  try {
    const { rows } = req.body as { rows: Record<string, string>[] };
    if (!Array.isArray(rows)) return res.status(400).json({ success: false, error: 'rows[] requis.' });
    const schools = getSchools();
    const { ersehCount, schoolSync } = applyErsehImport(rows, schools);
    res.json({ success: true, ersehCount, schoolSync, erseh: getErseh(), schools: getSchools() });
  } catch (err: any) { res.status(500).json({ success: false, error: err.message }); }
});

// ─── Server startup ───────────────────────────────────────────────────────────

export async function startExpressServer(port: number) {
  initDatabase(process.env.APPDATA_PATH ?? process.cwd());

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));
  }

  return app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

if (!process.env.RUNNING_IN_ELECTRON) {
  startExpressServer(PORT);
}
