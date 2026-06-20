import fs from 'fs';
import path from 'path';
import type { School } from './schoolsData';

const userDataPath = process.env.APPDATA_PATH || process.cwd();
const DB_FILE = path.join(userDataPath, 'schools_db.json');

function loadInitialData(): School[] {
  // Dynamic import to avoid bundling in the renderer
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { schoolsData } = require('./schoolsData.generated');
  return schoolsData as School[];
}

export function getSchools(): School[] {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initial = loadInitialData();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8')) as School[];
  } catch {
    return loadInitialData();
  }
}

export function saveSchools(schools: School[]): void {
  fs.writeFileSync(DB_FILE, JSON.stringify(schools, null, 2), 'utf-8');
}

export function updateSchool(school: School): boolean {
  const schools = getSchools();
  const idx = schools.findIndex(s => s.id === school.id);
  if (idx === -1) return false;
  schools[idx] = school;
  saveSchools(schools);
  return true;
}

export function addSchool(school: School): void {
  const schools = getSchools();
  schools.push(school);
  saveSchools(schools);
}

export function deleteSchool(id: string): boolean {
  const schools = getSchools();
  const idx = schools.findIndex(s => s.id === id);
  if (idx === -1) return false;
  schools.splice(idx, 1);
  saveSchools(schools);
  return true;
}
