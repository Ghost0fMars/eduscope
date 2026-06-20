import fs from 'fs';
import path from 'path';
import { CollaborativeTask, TaskPriority, TaskStatus } from './types';

const userDataPath = process.env.APPDATA_PATH || process.cwd();
const DB_FILE_PATH = path.join(userDataPath, 'tasks_db.json');

// Default initial simulation tasks to make the Kanban instantly beautiful and rich.
const INITIAL_TASKS: CollaborativeTask[] = [];

export function getTasks(): CollaborativeTask[] {
  try {
    if (!fs.existsSync(DB_FILE_PATH)) {
      // Create initial DB with defaults
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(INITIAL_TASKS, null, 2), 'utf-8');
      return INITIAL_TASKS;
    }
    const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
    return JSON.parse(raw) as CollaborativeTask[];
  } catch (error) {
    console.error('Erreur lors de la lecture de la base de données :', error);
    return INITIAL_TASKS;
  }
}

export function saveTasks(tasks: CollaborativeTask[]): void {
  try {
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(tasks, null, 2), 'utf-8');
  } catch (error) {
    console.error('Erreur lors de l\'écriture en base de données :', error);
  }
}

export function addTask(task: Omit<CollaborativeTask, 'id'> & { id?: string }): { success: boolean; task?: CollaborativeTask } {
  const tasks = getTasks();
  
  // Verify if there is a duplicate Message-ID
  if (task.messageId && tasks.some(t => t.messageId === task.messageId)) {
    return { success: false };
  }

  // Create clean ID if not provided
  const finalId = task.id || `mail-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  
  const newTask: CollaborativeTask = {
    ...task,
    id: finalId,
    status: task.status || 'En attente'
  };

  tasks.unshift(newTask); // Place at the start (newest first)
  saveTasks(tasks);
  return { success: true, task: newTask };
}

export function resetDatabase(): void {
  saveTasks(INITIAL_TASKS);
}
