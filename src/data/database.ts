import Database from 'better-sqlite3';
import path from 'path';

let _db: Database.Database | null = null;

export function initDatabase(appDataPath: string): void {
  const dbPath = path.join(appDataPath, 'eduscope.db');
  _db = new Database(dbPath);
  _db.pragma('journal_mode = WAL');
  _db.pragma('foreign_keys = ON');
  _db.exec(`
    CREATE TABLE IF NOT EXISTS schools (
      id         TEXT PRIMARY KEY,
      rne        TEXT UNIQUE NOT NULL,
      data       TEXT NOT NULL,
      updated_at INTEGER DEFAULT (unixepoch())
    );
    CREATE TABLE IF NOT EXISTS erseh (
      secteur_code TEXT PRIMARY KEY,
      data         TEXT NOT NULL,
      updated_at   INTEGER DEFAULT (unixepoch())
    );
  `);
}

export function getDb(): Database.Database {
  if (!_db) throw new Error('Database not initialized — call initDatabase() first');
  return _db;
}
