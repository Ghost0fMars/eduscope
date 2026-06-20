import express from 'express';
import path from 'path';
import { simpleParser } from 'mailparser';
import { ImapFlow } from 'imapflow';
import { getTasks, saveTasks, addTask, resetDatabase } from './src/kanban/dbStore';
import { CollaborativeTask, TaskPriority, TaskStatus, SyncResult } from './src/kanban/types';
import { getEvents, addEvent, deleteEvent, updateEvent } from './src/agenda/agendaStore';

const app = express();
const PORT = Number(process.env.PORT) || 3005;

app.use(express.json());

// API: Get all tasks
app.get('/api/tasks', (req, res) => {
  try {
    const tasks = getTasks();
    res.json({ success: true, tasks });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Handle task life-cycle actions (take-charge, release, finish)
app.post('/api/tasks/action', (req, res) => {
  try {
    const { taskId, action, agentId } = req.body;
    let tasks = getTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
      return res.status(404).json({ success: false, error: 'Tâche non trouvée.' });
    }

    const task = tasks[taskIndex];

    if (action === 'take-charge') {
      if (!agentId || agentId.trim() === '') {
        return res.status(400).json({ success: false, error: 'Un ID d\'agent valide est requis pour prendre en charge.' });
      }
      if (task.status !== 'En attente') {
        return res.status(400).json({ success: false, error: 'Cette tâche est déjà prise en charge ou terminée.' });
      }
      task.status = 'En cours';
      task.agentId = agentId;
    } else if (action === 'release') {
      if (task.status !== 'En cours') {
        return res.status(400).json({ success: false, error: 'Seulement les tâches en cours peuvent être relâchées.' });
      }
      task.status = 'En attente';
      task.agentId = undefined;
    } else if (action === 'finish') {
      if (task.status !== 'En cours') {
        return res.status(400).json({ success: false, error: 'Seulement les tâches en cours peuvent être marquées terminées.' });
      }
      task.status = 'Terminé';
    } else if (action === 'restore') {
      if (task.status !== 'Terminé') {
        return res.status(400).json({ success: false, error: 'Seulement les tâches terminées peuvent être restaurées.' });
      }
      task.status = 'En attente';
      task.agentId = undefined;
    } else if (action === 'delete') {
      tasks.splice(taskIndex, 1);
      saveTasks(tasks);
      return res.json({ success: true, deleted: true });
    } else {
      return res.status(400).json({ success: false, error: 'Action non reconnue.' });
    }

    tasks[taskIndex] = task;
    saveTasks(tasks);

    res.json({ success: true, task });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Helper: Extract cleaned emails from recipient structures parsed by mailparser
function extractEmails(recipientField: any): string[] {
  if (!recipientField) return [];
  if (Array.isArray(recipientField)) {
    return recipientField.map(r => r.address || r.value || r || '').filter(Boolean);
  }
  if (recipientField.value && Array.isArray(recipientField.value)) {
    return recipientField.value.map((r: any) => r.address || r.value || r || '').filter(Boolean);
  }
  if (typeof recipientField === 'string') {
    return [recipientField];
  }
  return [];
}

// Logic: Business Rules for Triaging
function computePriority(toEmails: string[], ccEmails: string[], agentEmail: string): TaskPriority {
  const target = agentEmail.toLowerCase().trim();
  if (target === '') return 'DIRECT'; // Fallback default

  // Look in To recipient array for matching email string
  const inTo = toEmails.some(email => email.toLowerCase().includes(target));
  if (inTo) return 'DIRECT';

  // Look in Cc recipient array
  const inCc = ccEmails.some(email => email.toLowerCase().includes(target));
  if (inCc) return 'INFO';

  // If not in To or Cc, but received from custom mailbox, represent Bcc
  return 'CCI';
}

// API: Trigger Email Sync (IMAP real connection)
app.post('/api/email/sync', async (req, res) => {
  const { config } = req.body;
  const agentEmail = config?.agentEmail || '';

  // --- REAL IMAP CONNECTIVITY VIA imapflow AND mailparser ---
  if (!config || !config.host || !config.user || !config.password) {
    return res.status(400).json({
      success: false,
      error: 'Veuillez remplir tous les champs de configuration IMAP !'
    });
  }

  const client = new ImapFlow({
    host: config.host,
    port: parseInt(config.port) || 993,
    secure: config.secure !== false,
    auth: {
      user: config.user,
      pass: config.password
    },
    logger: false
  });

  // Prevent unhandled ImapFlow error events from crashing the Node.js server
  client.on('error', (err) => {
    console.error('ImapFlow client connection error event:', err);
  });

  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');
    
    let added = 0;
    let duplicated = 0;

    try {
      // Find unread messages (unseen)
      const messages = await client.search({ seen: false });
      
      if (messages && Array.isArray(messages)) {
        for (const message of messages) {
          // Fetch raw header and source content
          const fetched = await client.fetchOne(message, { source: true });
          
          if (fetched && fetched.source) {
            // Parse MIME message with mailparser
            const parsed = await simpleParser(fetched.source);
            
            const toEmails = extractEmails(parsed.to);
            const ccEmails = extractEmails(parsed.cc);
            const subject = parsed.subject || '(Sujet absent)';
            const sender = parsed.from?.text || parsed.from?.value?.[0]?.address || 'Inconnu';
            const bodyText = parsed.text || parsed.textAsHtml || '(Pas de contenu texte)';
            const messageId = parsed.messageId || `imap-uid-${message}-${subject.replace(/\s/g, '_')}`;

            // Tri intelligent logic
            const priority = computePriority(toEmails, ccEmails, agentEmail);

            const result = addTask({
              subject,
              sender,
              recipientTo: toEmails,
              recipientCc: ccEmails,
              date: parsed.date ? parsed.date.toISOString() : new Date().toISOString(),
              body: bodyText,
              priority,
              status: 'En attente',
              messageId
            });

            if (result.success) {
              added++;
            } else {
              duplicated++;
            }
          }
        }
      }
    } finally {
      lock.release();
    }

    await client.logout();

    res.json({
      success: true,
      fetchedCount: added,
      duplicateCount: duplicated
    } as SyncResult);

  } catch (err: any) {
    console.error('Erreur de synchronisation IMAP :', err);
    res.status(500).json({
      success: false,
      error: `La connexion IMAP a échoué : ${err.message || err}. Vérifiez vos accès et mots de passe d'application.`
    });
  }
});

// API: Agenda — list events
app.get('/api/agenda', (_req, res) => {
  try {
    res.json({ success: true, events: getEvents() });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Agenda — create event
app.post('/api/agenda', (req, res) => {
  try {
    const { title, type, date, time, endTime, location, description } = req.body;
    if (!title || !type || !date) {
      return res.status(400).json({ success: false, error: 'title, type et date sont requis.' });
    }
    const event = addEvent({ title, type, date, time, endTime, location, description });
    res.json({ success: true, event });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Agenda — update event
app.put('/api/agenda/:id', (req, res) => {
  try {
    const event = updateEvent(req.params.id, req.body);
    if (!event) return res.status(404).json({ success: false, error: 'Événement non trouvé.' });
    res.json({ success: true, event });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Agenda — delete event
app.delete('/api/agenda/:id', (req, res) => {
  try {
    const deleted = deleteEvent(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, error: 'Événement non trouvé.' });
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Clear/Reset DB
app.post('/api/email/reset', (req, res) => {
  try {
    resetDatabase();
    res.json({ success: true, tasks: [] });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Vite & Static file handler
export async function startExpressServer(port: number) {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  return app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

// Only auto-run if NOT running inside Electron (e.g. standalone server)
if (!process.env.RUNNING_IN_ELECTRON) {
  startExpressServer(PORT);
}
