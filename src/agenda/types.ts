export type EventType = 'COMMISSION' | 'REUNION' | 'FORMATION' | 'AUTRE';

export interface AgendaEvent {
  id: string;
  title: string;
  type: EventType;
  date: string; // YYYY-MM-DD
  time?: string; // HH:MM
  endTime?: string;
  location?: string;
  description?: string;
  createdAt: string;
}
