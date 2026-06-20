import fs from 'fs';
import path from 'path';
import { AgendaEvent } from './types';

const userDataPath = process.env.APPDATA_PATH || process.cwd();
const DB_FILE = path.join(userDataPath, 'agenda_db.json');

export function getEvents(): AgendaEvent[] {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, '[]', 'utf-8');
      return [];
    }
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8')) as AgendaEvent[];
  } catch {
    return [];
  }
}

export function saveEvents(events: AgendaEvent[]): void {
  fs.writeFileSync(DB_FILE, JSON.stringify(events, null, 2), 'utf-8');
}

export function addEvent(data: Omit<AgendaEvent, 'id' | 'createdAt'>): AgendaEvent {
  const events = getEvents();
  const event: AgendaEvent = {
    ...data,
    id: `evt-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
  };
  events.push(event);
  events.sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? '').localeCompare(b.time ?? ''));
  saveEvents(events);
  return event;
}

export function deleteEvent(id: string): boolean {
  const events = getEvents();
  const idx = events.findIndex(e => e.id === id);
  if (idx === -1) return false;
  events.splice(idx, 1);
  saveEvents(events);
  return true;
}

export function updateEvent(id: string, data: Partial<Omit<AgendaEvent, 'id' | 'createdAt'>>): AgendaEvent | null {
  const events = getEvents();
  const idx = events.findIndex(e => e.id === id);
  if (idx === -1) return null;
  events[idx] = { ...events[idx], ...data };
  saveEvents(events);
  return events[idx];
}
