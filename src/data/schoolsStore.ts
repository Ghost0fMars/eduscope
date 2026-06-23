import fs from 'fs';
import path from 'path';
import { getDb } from './database';
import type { School } from './schoolsData';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createRequire } = require('module');
const _require = createRequire(import.meta.url ?? __filename);

function loadGenerated(): School[] {
  const { schoolsData } = _require('./schoolsData.generated');
  return schoolsData as School[];
}

let _migrated = false;

function ensureMigrated(): void {
  if (_migrated) return;
  _migrated = true;

  const db = getDb();
  const { c } = db.prepare('SELECT COUNT(*) as c FROM schools').get() as { c: number };
  if (c > 0) return;

  const jsonPath = path.join(process.env.APPDATA_PATH ?? process.cwd(), 'schools_db.json');
  let schools: School[];
  try {
    schools = fs.existsSync(jsonPath)
      ? (JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as School[])
      : loadGenerated();
  } catch {
    schools = loadGenerated();
  }

  const insert = db.prepare('INSERT OR IGNORE INTO schools (id, rne, data) VALUES (?, ?, ?)');
  db.transaction((items: School[]) => {
    for (const s of items) insert.run(s.id, s.rne.toUpperCase(), JSON.stringify(s));
  })(schools);
}

export function getSchools(): School[] {
  ensureMigrated();
  return (getDb().prepare('SELECT data FROM schools').all() as { data: string }[])
    .map(r => JSON.parse(r.data) as School);
}

export function updateSchool(school: School): boolean {
  ensureMigrated();
  const r = getDb()
    .prepare('UPDATE schools SET data = ?, updated_at = unixepoch() WHERE id = ?')
    .run(JSON.stringify(school), school.id);
  return r.changes > 0;
}

export function addSchool(school: School): void {
  ensureMigrated();
  getDb()
    .prepare('INSERT INTO schools (id, rne, data) VALUES (?, ?, ?)')
    .run(school.id, school.rne.toUpperCase(), JSON.stringify(school));
}

export function deleteSchool(id: string): boolean {
  ensureMigrated();
  const r = getDb().prepare('DELETE FROM schools WHERE id = ?').run(id);
  return r.changes > 0;
}

export function getSchoolByRne(rne: string): School | null {
  ensureMigrated();
  const row = getDb()
    .prepare('SELECT data FROM schools WHERE rne = ?')
    .get(rne.toUpperCase()) as { data: string } | undefined;
  return row ? (JSON.parse(row.data) as School) : null;
}

export function upsertSchool(school: School): void {
  ensureMigrated();
  getDb()
    .prepare(`
      INSERT INTO schools (id, rne, data) VALUES (?, ?, ?)
      ON CONFLICT(rne) DO UPDATE SET data = excluded.data, updated_at = unixepoch()
    `)
    .run(school.id, school.rne.toUpperCase(), JSON.stringify(school));
}
