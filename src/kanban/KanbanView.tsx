import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Settings,
  PlusCircle,
  RotateCcw,
  Send,
  User,
  Clock,
  AlertTriangle,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Inbox,
  Lock,
  Unlock,
  RefreshCw,
  Sparkles,
  Archive,
  Info,
  Target,
  Eye,
  ShieldCheck,
  X,
  Trash2,
  RotateCcw as RestoreIcon,
} from 'lucide-react';
import { CollaborativeTask, TaskPriority, TaskStatus, IMAPConfig, SyncResult } from './types';

const API_BASE_URL = window.location.protocol === 'file:' 
  ? 'http://localhost:3000' 
  : '';

export default function KanbanView() {
  // Global States
  const [tasks, setTasks] = useState<CollaborativeTask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TaskPriority>('DIRECT');
  const [showArchived, setShowArchived] = useState<boolean>(false);
  const [selectedArchivedTask, setSelectedArchivedTask] = useState<CollaborativeTask | null>(null);
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const [viewedTaskId, setViewedTaskId] = useState<string | null>(null);
  
  // Agent Profile Configuration (Utilisateur by default, synced with localStorage)
  const [agentId] = useState<string>(() => localStorage.getItem('eduscope_agentId') || 'Utilisateur');
  const [agentEmail, setAgentEmail] = useState<string>(() => localStorage.getItem('eduscope_agentEmail') || '');

  // Interactive Toast Notifications
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // IMAP Configuration Settings State (synced with localStorage)
  const [showImapSettings, setShowImapSettings] = useState<boolean>(false);
  const [imapHost, setImapHost] = useState<string>(() => localStorage.getItem('eduscope_imapHost') || 'imap.gmail.com');
  const [imapPort, setImapPort] = useState<string>(() => localStorage.getItem('eduscope_imapPort') || '993');
  const [imapSecure, setImapSecure] = useState<boolean>(() => {
    const saved = localStorage.getItem('eduscope_imapSecure');
    return saved !== null ? saved === 'true' : true;
  });
  const [imapUser, setImapUser] = useState<string>(() => localStorage.getItem('eduscope_imapUser') || '');
  const [imapPassword, setImapPassword] = useState<string>(() => localStorage.getItem('eduscope_imapPassword') || '');

  // Persist config states to localStorage
  useEffect(() => {
    localStorage.setItem('eduscope_agentId', agentId);
  }, [agentId]);

  useEffect(() => {
    localStorage.setItem('eduscope_agentEmail', agentEmail);
  }, [agentEmail]);

  useEffect(() => {
    localStorage.setItem('eduscope_imapHost', imapHost);
  }, [imapHost]);

  useEffect(() => {
    localStorage.setItem('eduscope_imapPort', imapPort);
  }, [imapPort]);

  useEffect(() => {
    localStorage.setItem('eduscope_imapSecure', String(imapSecure));
  }, [imapSecure]);

  useEffect(() => {
    localStorage.setItem('eduscope_imapUser', imapUser);
  }, [imapUser]);

  useEffect(() => {
    localStorage.setItem('eduscope_imapPassword', imapPassword);
  }, [imapPassword]);

  // Synchronize agentEmail with imapUser
  useEffect(() => {
    if (imapUser.trim() !== '') {
      setAgentEmail(imapUser);
    }
  }, [imapUser]);

  // Auto notification dismissal
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Fetch tasks on startup and after actions
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/tasks`);
      const data = await res.json();
      if (data.success) {
        setTasks(data.tasks);
      } else {
        triggerNotification('Impossible de charger les tâches : ' + data.error, 'error');
      }
    } catch (err) {
      triggerNotification('Erreur réseau lors de la récupération des tâches.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const triggerNotification = (message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ message, type });
  };

  // Perform collaborative action (take-charge, release, finish)
  const handleTaskAction = async (taskId: string, action: 'take-charge' | 'release' | 'finish') => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/tasks/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskId,
          action,
          agentId: action === 'take-charge' ? agentId : undefined
        })
      });
      const data = await res.json();
      if (data.success) {
        if (action === 'take-charge') {
          triggerNotification(`🎯 Tâche prise en charge par ${agentId}`, 'success');
        } else if (action === 'release') {
          triggerNotification('↩️ Tâche relâchée et remise en attente.', 'info');
        } else if (action === 'finish') {
          triggerNotification('✅ Tâche archivée et marquée comme terminée !', 'success');
        }
        fetchTasks();
      } else {
        triggerNotification(data.error || 'Une erreur est survenue.', 'error');
      }
    } catch (err) {
      triggerNotification('Erreur réseau lors de l\'action sur la tâche.', 'error');
    }
  };

  // Trigger synchronize emails (IMAP real connection)
  const handleSyncEmails = async () => {
    try {
      setSyncing(true);
      const imapConfig: IMAPConfig = {
        host: imapHost,
        port: parseInt(imapPort) || 993,
        secure: imapSecure,
        user: imapUser,
        password: imapPassword,
        agentEmail: agentEmail
      };

      const res = await fetch(`${API_BASE_URL}/api/email/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          config: imapConfig
        })
      });

      const data = await res.json();

      if (data.success) {
        const result = data as SyncResult;
        if (result.fetchedCount === 0) {
          triggerNotification(`📭 Aucun nouvel email non lu reçu pour "${agentEmail}". (Doublons évités)`, 'info');
        } else {
          triggerNotification(`✉️ Synchronisation réussie ! ${result.fetchedCount} tâche(s) ajoutée(s). (${result.duplicateCount} doublons ignorés)`, 'success');
        }
        fetchTasks();
      } else {
        triggerNotification(data.error || 'Erreur lors de la synchronisation.', 'error');
      }
    } catch (err: any) {
      triggerNotification(`La synchronisation a échoué. Vérifiez vos accès.`, 'error');
    } finally {
      setSyncing(false);
    }
  };

  // Vider les tâches de la base de données
  const handleResetDB = async () => {
    if (window.confirm('Voulez-vous vraiment vider toutes les tâches ?')) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/email/reset`, { method: 'POST' });
        const data = await res.json();
        if (data.success) {
          triggerNotification('⏮️ Boîte de tâches vidée avec succès !', 'success');
          setTasks([]);
        }
      } catch (err) {
        triggerNotification('Impossible de vider les tâches.', 'error');
      }
    }
  };

  const handleRestoreTask = async (taskId: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/tasks/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId, action: 'restore' }),
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: 'En attente', agentId: undefined } : t));
        setSelectedArchivedTask(null);
        triggerNotification('↩️ Tâche remise en attente avec succès.', 'success');
      } else {
        triggerNotification(data.error || 'Erreur lors de la restauration.', 'error');
      }
    } catch {
      triggerNotification('Impossible de restaurer la tâche.', 'error');
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/tasks/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId, action: 'delete' }),
      });
      const data = await res.json();
      if (data.success) {
        setTasks(prev => prev.filter(t => t.id !== taskId));
        setSelectedArchivedTask(null);
        triggerNotification('🗑️ Tâche supprimée définitivement.', 'success');
      } else {
        triggerNotification(data.error || 'Erreur lors de la suppression.', 'error');
      }
    } catch {
      triggerNotification('Impossible de supprimer la tâche.', 'error');
    }
  };

  // Helper functions to categorize tasks
  const getCategorizedTasks = (priority: TaskPriority) => {
    return tasks.filter(t => t.priority === priority && t.status !== 'Terminé');
  };

  const getArchivedTasks = () => {
    return tasks.filter(t => t.status === 'Terminé');
  };

  return (
    <div className="text-slate-950 font-sans selection:bg-brand-600 selection:text-white pb-24 px-6 mt-6 max-w-7xl mx-auto">
      
      {/* Toast Alert Notification Popup  */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className={`p-4 rounded-xl shadow-xl flex items-start gap-3 backdrop-blur-md border ${
              notification.type === 'success' 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-emerald-900/5' 
                : notification.type === 'error'
                ? 'bg-rose-50 border-rose-300 text-rose-900 shadow-rose-900/5'
                : 'bg-indigo-50 border-indigo-300 text-indigo-900 shadow-indigo-900/5'
            }`}>
              <div className="p-1 rounded-lg bg-black/5 shrink-0">
                {notification.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                {notification.type === 'error' && <AlertTriangle className="w-5 h-5 text-rose-600" />}
                {notification.type === 'info' && <Info className="w-5 h-5 text-indigo-600" />}
              </div>
              <div className="flex-1 text-xs font-semibold pr-2">
                {notification.message}
              </div>
              <button 
                onClick={() => setNotification(null)}
                className="text-slate-500 hover:text-slate-900 text-sm font-bold px-1.5 py-0.5 rounded transition"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Dashboard Control Box */}
      <div className="relative mb-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Quick Action Control Panel Rows */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                id="sync-btn"
                onClick={handleSyncEmails}
                disabled={syncing}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold text-xs rounded-lg shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                {syncing ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                ) : (
                  <RefreshCw className="w-3.5 h-3.5 text-white" />
                )}
                <span>Synchroniser IMAP</span>
              </button>

              <button
                id="toggle-imap-btn"
                onClick={() => setShowImapSettings(!showImapSettings)}
                className={`px-3 py-2 border text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                  showImapSettings
                    ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold shadow-xs'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Paramètres IMAP</span>
              </button>

              <button
                id="reset-db-btn"
                onClick={handleResetDB}
                className="p-2 bg-white border border-slate-300 hover:border-rose-300 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition shadow-xs cursor-pointer"
                title="Vider la boîte de tâches"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* IMAP Configuration Panel: absolute overlay pour ne pas déplacer le contenu */}
        <AnimatePresence>
          {showImapSettings && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full mt-2 z-20 bg-white border border-slate-200 rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              <div className="col-span-1 md:col-span-3 bg-brand-50/60 border border-brand-200 p-4 rounded-lg text-xs text-brand-900 flex gap-2.5">
                <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-900 pb-0.5">Configuration de votre boîte mail professionnelle</h4>
                  Renseignez les informations de connexion de votre messagerie réelle ci-dessous. Une fois configurée, l'application se connectera via IMAP sécurisé et récupérera vos emails non lus pour les convertir automatiquement en tâches triées (DIRECT, INFO, CCI) selon que vous êtes le destinataire principal ou en copie.
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 font-mono">Hôte IMAP (ex: imap.gmail.com)</label>
                <input
                  type="text"
                  value={imapHost}
                  onChange={(e) => setImapHost(e.target.value)}
                  className="w-full bg-white border border-slate-300 px-3 py-1.5 text-xs text-slate-900 rounded focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 font-mono">Port (SSL: 993)</label>
                <input
                  type="number"
                  value={imapPort}
                  onChange={(e) => setImapPort(e.target.value)}
                  className="w-full bg-white border border-slate-300 px-3 py-1.5 text-xs text-slate-900 rounded focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="space-y-1 flex flex-col justify-end">
                <label className="flex items-center gap-2 mt-2 text-xs font-bold text-slate-700 select-none">
                  <input
                    type="checkbox"
                    checked={imapSecure}
                    onChange={(e) => setImapSecure(e.target.checked)}
                    className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span>SSL / Connexion Sécurisée</span>
                </label>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 font-mono">Utilisateur (Adresse mail)</label>
                <input
                  type="text"
                  value={imapUser}
                  placeholder="votre.nom@compte.com"
                  onChange={(e) => setImapUser(e.target.value)}
                  className="w-full bg-white border border-slate-300 px-3 py-1.5 text-xs text-slate-900 rounded focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="space-y-1 col-span-1 md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 font-mono">Mot de passe de sécurité</label>
                <input
                  type="password"
                  value={imapPassword}
                  placeholder="Saisissez le mot de passe d'application"
                  onChange={(e) => setImapPassword(e.target.value)}
                  className="w-full bg-white border border-slate-300 px-3 py-1.5 text-xs text-slate-900 rounded focus:outline-none focus:border-brand-500"
                />
                <span className="text-[10px] text-slate-400 block pt-0.5 leading-normal">
                  <b>Important</b> : Pour Gmail, Outlook ou d'autres messageries professionnelles sécurisées, vous devez générer et utiliser un <b>mot de passe d'application</b> temporaire dans les paramètres de votre compte de messagerie (plutôt que votre mot de passe habituel).
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dashboard Collaborative Metrics Summary Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">

        <div className="bg-white rounded-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
            <Target className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Action Directe</p>
            <p className="text-xl font-bold text-slate-800 leading-tight">
              {getCategorizedTasks('DIRECT').length}
              <span className="text-xs font-normal text-slate-400 ml-1">emails</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
            <Eye className="w-4 h-4 text-cyan-500" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Information</p>
            <p className="text-xl font-bold text-slate-800 leading-tight">
              {getCategorizedTasks('INFO').length}
              <span className="text-xs font-normal text-slate-400 ml-1">emails</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Suivi Discret</p>
            <p className="text-xl font-bold text-slate-800 leading-tight">
              {getCategorizedTasks('CCI').length}
              <span className="text-xs font-normal text-slate-400 ml-1">emails</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Résolues</p>
            <p className="text-xl font-bold text-emerald-600 leading-tight">
              {getArchivedTasks().length}
              <span className="text-xs font-normal text-slate-400 ml-1">archivés</span>
            </p>
          </div>
        </div>

      </div>

      {/* Onglets au-dessus de la boite, répartis sur toute la largeur */}
      <div className="flex h-12 w-full items-center bg-white border border-slate-200 rounded-xl shadow-xs p-1 mb-3">
        <button
          onClick={() => setActiveTab('DIRECT')}
          className={`flex-1 relative flex h-full items-center justify-center gap-2 text-xs font-bold rounded-md transition-all duration-300 cursor-pointer ${
            activeTab === 'DIRECT'
              ? 'text-brand-600 bg-brand-50 border-b-2 border-brand-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Target className="w-3.5 h-3.5 shrink-0" />
          <span>Action Directe</span>
          <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
            activeTab === 'DIRECT' ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-500'
          }`}>
            {getCategorizedTasks('DIRECT').length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('INFO')}
          className={`flex-1 relative flex h-full items-center justify-center gap-2 text-xs font-bold rounded-md transition-all duration-300 cursor-pointer ${
            activeTab === 'INFO'
              ? 'text-cyan-700 bg-cyan-50 border-b-2 border-cyan-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Eye className="w-3.5 h-3.5 shrink-0" />
          <span>Pour information</span>
          <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
            activeTab === 'INFO' ? 'bg-cyan-100 text-cyan-800' : 'bg-slate-100 text-slate-500'
          }`}>
            {getCategorizedTasks('INFO').length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('CCI')}
          className={`flex-1 relative flex h-full items-center justify-center gap-2 text-xs font-bold rounded-md transition-all duration-300 cursor-pointer ${
            activeTab === 'CCI'
              ? 'text-indigo-700 bg-indigo-50 border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>Suivi discret</span>
          <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
            activeTab === 'CCI' ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-500'
          }`}>
            {getCategorizedTasks('CCI').length}
          </span>
        </button>
      </div>

      {/* Boite des tâches : largeur et hauteur fixes */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-xs mb-6 h-[300px] overflow-hidden">
        <div className="h-full overflow-y-auto p-6">
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-brand-600 animate-spin" />
            <p className="text-xs font-mono text-slate-400">Chargement et tri intelligent des tâches...</p>
          </div>
        ) : getCategorizedTasks(activeTab).length === 0 ? (
          <div className="h-full border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-4">
            <div className="p-4 bg-slate-50 rounded-full border border-slate-200">
              <Inbox className="w-8 h-8 text-slate-400" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="font-bold text-slate-700 text-sm">Pas d'élément en attente</h3>
              <p className="text-xs text-slate-500 max-w-sm px-4">
                Toutes les tâches avec la priorité <b>{activeTab}</b> sont résolues ou archivées. Votre boîte de réception collaborative est à jour !
              </p>
            </div>
            <button
              onClick={handleSyncEmails}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-lg text-xs font-bold transition cursor-pointer"
            >
              Resynchroniser maintenant
            </button>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="flex flex-col gap-1.5">
              {getCategorizedTasks(activeTab).map((task) => {
                  const isEnCours = task.status === 'En cours';
                  const isLockedBySelf = task.agentId === agentId;
                  const isExpanded = expandedTaskId === task.id;

                  return (
                    <div key={task.id}>
                      {/* Ligne compacte */}
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-colors ${
                          isEnCours
                            ? 'border-brand-200 bg-brand-50/40 hover:bg-brand-50/70'
                            : 'border-slate-100 bg-white hover:bg-slate-50'
                        }`}
                      >
                        {/* Badge statut */}
                        <span className={`shrink-0 text-[8px] font-black tracking-widest font-mono uppercase px-1.5 py-0.5 rounded ${
                          isEnCours ? 'bg-brand-600 text-white' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {isEnCours ? 'EN COURS' : 'EN ATTENTE'}
                        </span>

                        {/* Expéditeur + Sujet */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-800 truncate">
                            <span className="font-semibold">{task.subject}</span>
                            <span className="text-slate-400 font-normal ml-2">— {task.sender.replace(/<.*?>/, '').trim()}</span>
                          </p>
                        </div>

                        {/* Date */}
                        <span className="shrink-0 text-[10px] text-slate-400 font-mono hidden md:block">
                          {new Date(task.date).toLocaleDateString('fr-FR')}
                        </span>

                        {/* Boutons */}
                        <button
                          type="button"
                          onClick={() => setExpandedTaskId(isExpanded ? null : task.id)}
                          className="shrink-0 p-1.5 rounded hover:bg-black/5 text-slate-400 hover:text-slate-700 transition cursor-pointer"
                          title={isExpanded ? 'Replier' : 'Déplier'}
                        >
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => setViewedTaskId(task.id)}
                          className="shrink-0 p-1.5 rounded hover:bg-black/5 text-slate-400 hover:text-brand-600 transition cursor-pointer"
                          title="Voir le mail"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </motion.div>

                      {/* Contenu déplié */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden"
                          >
                            <div className={`mt-1 mb-1 rounded-lg border p-4 space-y-3 ${
                              isEnCours ? 'border-brand-100 bg-brand-50/20' : 'border-slate-100 bg-slate-50/60'
                            }`}>
                              {/* Destinataires */}
                              <div className="text-[9px] font-mono text-slate-500 space-y-0.5">
                                <div className="truncate"><span className="font-bold text-slate-600">À :</span> {(task.recipientTo ?? []).join(', ')}</div>
                                {(task.recipientCc ?? []).length > 0 && (
                                  <div className="truncate"><span className="font-bold text-slate-600">Cc :</span> {task.recipientCc.join(', ')}</div>
                                )}
                              </div>
                              {/* Aperçu corps */}
                              <p className="text-xs text-slate-500 italic line-clamp-2 leading-relaxed">"{task.body}"</p>
                              {/* Actions */}
                              <div className="pt-2 border-t border-black/5 space-y-2">
                                {isEnCours && (
                                  <p className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                                    {isLockedBySelf
                                      ? <><Unlock className="w-3 h-3 text-brand-500" /><span>Pris par vous ({task.agentId})</span></>
                                      : <><Lock className="w-3 h-3 text-slate-400" /><span>Verrouillé par <b>{task.agentId}</b></span></>
                                    }
                                  </p>
                                )}
                                <div className="flex gap-2">
                                  {!isEnCours ? (
                                    <button type="button" onClick={() => handleTaskAction(task.id, 'take-charge')}
                                      className="flex-1 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer">
                                      Prendre en charge
                                    </button>
                                  ) : isLockedBySelf ? (
                                    <>
                                      <button type="button" onClick={() => handleTaskAction(task.id, 'finish')}
                                        className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition flex items-center justify-center gap-1 cursor-pointer">
                                        <CheckCircle2 className="w-3.5 h-3.5" /><span>Terminer</span>
                                      </button>
                                      <button type="button" onClick={() => handleTaskAction(task.id, 'release')}
                                        className="py-1.5 px-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold rounded-lg transition cursor-pointer">
                                        Relâcher
                                      </button>
                                    </>
                                  ) : (
                                    <button disabled
                                      className="w-full py-1.5 bg-slate-100 text-slate-400 text-xs font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-1 select-none">
                                      <Lock className="w-3 h-3" /><span>Verrouillé</span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
          </AnimatePresence>
        )}
        </div>

      </section>

      {/* Closed / Completed Tasks Archived Drawer Section */}
      <section className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        
        <button
          onClick={() => setShowArchived(!showArchived)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Archive className="w-5 h-5 text-slate-500" />
            <div>
              <h3 className="text-xs font-semibold text-slate-800">
                📁 Archives des Tâches Terminées
              </h3>
              <span className="text-[11px] text-slate-400 block">
                Historique récent des courriels triés et archivés par l'équipe collaborative.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 font-sans font-bold px-3 py-0.5 rounded-full">
              {getArchivedTasks().length} résolues
            </span>
            {showArchived ? (
              <ChevronUp className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </div>
        </button>

        {showArchived && (
          <div className="border-t border-slate-200 bg-white px-6 py-5">
            {getArchivedTasks().length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400 font-mono italic">
                Aucun courriel n'a été résolu et archivé pour le moment dans cette boîte.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-bold bg-slate-50">
                      <th className="py-3 px-3">Identifiant</th>
                      <th className="py-3 px-3">Priorité Triée</th>
                      <th className="py-3 px-3">Sujet / Expéditeur</th>
                      <th className="py-3 px-3">Agent Responsable</th>
                      <th className="py-3 px-3">Date d'Archivage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-sans">
                    {getArchivedTasks().map((task) => (
                      <tr
                        key={task.id}
                        onClick={() => setSelectedArchivedTask(task)}
                        className="hover:bg-brand-50/40 text-slate-700 font-medium transition-colors cursor-pointer group"
                      >
                        <td className="py-3 px-3 font-mono text-[10px] text-slate-400 group-hover:text-slate-600">
                          {task.id}
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold font-mono ${
                            task.priority === 'DIRECT'
                              ? 'bg-amber-50 text-amber-800 border border-amber-200'
                              : task.priority === 'INFO'
                              ? 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                              : 'bg-indigo-50 text-indigo-800 border border-indigo-200'
                          }`}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="font-bold text-slate-800 group-hover:text-brand-700">{task.subject}</div>
                          <div className="text-[10px] text-slate-500">De : {task.sender}</div>
                        </td>
                        <td className="py-3 px-3 font-mono text-slate-700 font-bold">
                          {task.agentId || agentId || 'Utilisateur'}
                        </td>
                        <td className="py-3 px-3 text-slate-400 font-mono text-[10px]">
                          {new Date(task.date).toLocaleString('fr-FR')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Archived Task Detail Drawer */}
      <AnimatePresence>
        {selectedArchivedTask && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArchivedTask(null)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-40"
            />
            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 px-6 py-5 border-b border-slate-200 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Archive className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Tâche archivée</p>
                    <h2 className="text-sm font-bold text-slate-900 truncate">{selectedArchivedTask.subject}</h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArchivedTask(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition shrink-0 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                {/* Priority + date */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold font-mono border ${
                    selectedArchivedTask.priority === 'DIRECT'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : selectedArchivedTask.priority === 'INFO'
                      ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                      : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                  }`}>
                    {selectedArchivedTask.priority}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {new Date(selectedArchivedTask.date).toLocaleString('fr-FR')}
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-slate-400 bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                    Terminée
                  </span>
                </div>

                {/* Sender / recipients */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-500 w-16 shrink-0">De :</span>
                    <span className="text-slate-800 font-mono">{selectedArchivedTask.sender}</span>
                  </div>
                  {selectedArchivedTask.recipientTo?.length > 0 && (
                    <div className="flex gap-2">
                      <span className="font-bold text-slate-500 w-16 shrink-0">À :</span>
                      <span className="text-slate-700 font-mono">{selectedArchivedTask.recipientTo.join(', ')}</span>
                    </div>
                  )}
                  {selectedArchivedTask.recipientCc?.length > 0 && (
                    <div className="flex gap-2">
                      <span className="font-bold text-slate-500 w-16 shrink-0">Cc :</span>
                      <span className="text-slate-700 font-mono">{selectedArchivedTask.recipientCc.join(', ')}</span>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-500 w-16 shrink-0">Agent :</span>
                    <span className="text-slate-700 font-bold">{selectedArchivedTask.agentId || agentId || 'Utilisateur'}</span>
                  </div>
                </div>

                {/* ID */}
                <p className="text-[10px] font-mono text-slate-400">{selectedArchivedTask.id}</p>

                {/* Body */}
                {selectedArchivedTask.body && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Corps du message</p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto font-mono">
                      {selectedArchivedTask.body}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-slate-200 flex gap-3 shrink-0">
                <button
                  onClick={() => handleRestoreTask(selectedArchivedTask.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-lg transition cursor-pointer shadow-xs"
                >
                  <RestoreIcon className="w-3.5 h-3.5" />
                  Remettre en attente
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Supprimer définitivement cette tâche ?')) {
                      handleDeleteTask(selectedArchivedTask.id);
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-rose-200 hover:bg-rose-50 hover:border-rose-400 text-rose-600 text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Supprimer
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Viewed Task (Mail) Drawer */}
      <AnimatePresence>
        {viewedTaskId && (() => {
          const vTask = tasks.find(t => t.id === viewedTaskId);
          if (!vTask) return null;
          const vIsEnCours = vTask.status === 'En cours';
          const vIsLockedBySelf = vTask.agentId === agentId;
          return (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setViewedTaskId(null)}
                className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-40"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 px-6 py-5 border-b border-slate-200 shrink-0">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Eye className="w-4 h-4 text-brand-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Tâche en cours</p>
                      <h2 className="text-sm font-bold text-slate-900 truncate">{vTask.subject}</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setViewedTaskId(null)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition shrink-0 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                  {/* Priority + date + status */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold font-mono border ${
                      vTask.priority === 'DIRECT'
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : vTask.priority === 'INFO'
                        ? 'bg-cyan-50 text-cyan-800 border-cyan-200'
                        : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                    }`}>
                      {vTask.priority}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {new Date(vTask.date).toLocaleString('fr-FR')}
                    </span>
                    <span className={`ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${
                      vIsEnCours ? 'bg-brand-50 border-brand-200 text-brand-700' : 'bg-amber-50 border-amber-200 text-amber-700'
                    }`}>
                      {vTask.status}
                    </span>
                  </div>

                  {/* Sender / recipients */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
                    <div className="flex gap-2">
                      <span className="font-bold text-slate-500 w-16 shrink-0">De :</span>
                      <span className="text-slate-800 font-mono">{vTask.sender}</span>
                    </div>
                    {(vTask.recipientTo ?? []).length > 0 && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-500 w-16 shrink-0">À :</span>
                        <span className="text-slate-700 font-mono">{vTask.recipientTo.join(', ')}</span>
                      </div>
                    )}
                    {(vTask.recipientCc ?? []).length > 0 && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-500 w-16 shrink-0">Cc :</span>
                        <span className="text-slate-700 font-mono">{vTask.recipientCc.join(', ')}</span>
                      </div>
                    )}
                    {vTask.agentId && (
                      <div className="flex gap-2">
                        <span className="font-bold text-slate-500 w-16 shrink-0">Agent :</span>
                        <span className="text-slate-700 font-bold">{vTask.agentId}</span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  {vTask.body && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Corps du message</p>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto font-mono">
                        {vTask.body}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="px-6 py-4 border-t border-slate-200 flex gap-3 shrink-0">
                  {!vIsEnCours ? (
                    <button
                      type="button"
                      onClick={() => { handleTaskAction(vTask.id, 'take-charge'); setViewedTaskId(null); }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-lg transition cursor-pointer shadow-xs"
                    >
                      Prendre en charge
                    </button>
                  ) : vIsLockedBySelf ? (
                    <>
                      <button
                        type="button"
                        onClick={() => { handleTaskAction(vTask.id, 'finish'); setViewedTaskId(null); }}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition cursor-pointer shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Terminer
                      </button>
                      <button
                        type="button"
                        onClick={() => { handleTaskAction(vTask.id, 'release'); setViewedTaskId(null); }}
                        className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold rounded-lg transition cursor-pointer"
                      >
                        Relâcher
                      </button>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-400 text-xs font-bold rounded-lg select-none">
                      <Lock className="w-3.5 h-3.5" />
                      Verrouillé par {vTask.agentId}
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          );
        })()}
      </AnimatePresence>

      {/* Footer Status Bar: Geometric Balance theme integration */}
      <footer className="flex h-9 w-full items-center justify-between border-t border-slate-200 bg-white px-8 text-[10px] font-bold text-slate-500 fixed bottom-0 left-0 z-40 shadow-xs">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 font-sans">
            <span className={`h-2 w-2 rounded-full ${imapUser ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
            <span>IMAP : {imapUser ? `${imapHost} (${imapUser})` : 'Non configuré'}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>Synchronisation Active</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-slate-400">Base de données : Connectée</span>
          <span className="font-sans text-slate-700">Total des courriels triés : <span className="font-black text-brand-600">{tasks.length}</span></span>
        </div>
      </footer>

    </div>
  );
}
