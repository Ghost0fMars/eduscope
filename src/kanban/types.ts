/**
 * Definition of types used in the Kanban Collaborative Mail application.
 */

export type TaskPriority = 'DIRECT' | 'INFO' | 'CCI';

export type TaskStatus = 'En attente' | 'En cours' | 'Terminé';

export interface CollaborativeTask {
  id: string;
  subject: string;
  sender: string;
  recipientTo: string[];
  recipientCc: string[];
  date: string;
  body: string;
  priority: TaskPriority;
  status: TaskStatus;
  agentId?: string; // Active agent handling the task (when 'En cours')
  messageId?: string; // Unique header Message-ID to prevent duplicate imports
}

export interface IMAPConfig {
  host?: string;
  port?: number;
  secure?: boolean;
  user?: string;
  password?: string;
  agentEmail?: string;
}

export interface SyncResult {
  success: boolean;
  fetchedCount: number;
  duplicateCount: number;
  error?: string;
}
