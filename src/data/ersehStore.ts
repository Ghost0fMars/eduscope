import { getDb } from './database';
import type { ErsehReferent } from './ersehData';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createRequire } = require('module');
const _require = createRequire(import.meta.url ?? __filename);

function loadGenerated(): ErsehReferent[] {
  const { ersehData } = _require('./ersehData.generated');
  return ersehData as ErsehReferent[];
}

let _migrated = false;

function ensureMigrated(): void {
  if (_migrated) return;
  _migrated = true;

  const db = getDb();
  const { c } = db.prepare('SELECT COUNT(*) as c FROM erseh').get() as { c: number };
  if (c > 0) return;

  const items = loadGenerated();
  const insert = db.prepare('INSERT OR IGNORE INTO erseh (secteur_code, data) VALUES (?, ?)');
  db.transaction((rows: ErsehReferent[]) => {
    for (const e of rows) insert.run(e.secteurCode, JSON.stringify(e));
  })(items);
}

export function getErseh(): ErsehReferent[] {
  ensureMigrated();
  return (getDb().prepare('SELECT data FROM erseh').all() as { data: string }[])
    .map(r => JSON.parse(r.data) as ErsehReferent);
}

export function updateErseh(e: ErsehReferent): boolean {
  ensureMigrated();
  const r = getDb()
    .prepare('UPDATE erseh SET data = ?, updated_at = unixepoch() WHERE secteur_code = ?')
    .run(JSON.stringify(e), e.secteurCode);
  return r.changes > 0;
}

export function addErseh(e: ErsehReferent): void {
  ensureMigrated();
  getDb()
    .prepare('INSERT INTO erseh (secteur_code, data) VALUES (?, ?)')
    .run(e.secteurCode, JSON.stringify(e));
}

export function deleteErseh(code: string): boolean {
  ensureMigrated();
  const r = getDb().prepare('DELETE FROM erseh WHERE secteur_code = ?').run(code);
  return r.changes > 0;
}

export function getErsehByCode(code: string): ErsehReferent | null {
  ensureMigrated();
  const row = getDb()
    .prepare('SELECT data FROM erseh WHERE secteur_code = ?')
    .get(code) as { data: string } | undefined;
  return row ? (JSON.parse(row.data) as ErsehReferent) : null;
}

export function upsertErseh(e: ErsehReferent): void {
  ensureMigrated();
  getDb()
    .prepare(`
      INSERT INTO erseh (secteur_code, data) VALUES (?, ?)
      ON CONFLICT(secteur_code) DO UPDATE SET data = excluded.data, updated_at = unixepoch()
    `)
    .run(e.secteurCode, JSON.stringify(e));
}
