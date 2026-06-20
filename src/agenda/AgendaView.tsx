import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft, ChevronRight, Plus, X, Clock, MapPin, Trash2, CalendarDays,
} from 'lucide-react';
import type { AgendaEvent, EventType } from './types';

const TYPE_CONFIG = {
  COMMISSION: {
    label: 'Commission',
    dot: 'bg-amber-400',
    pill: 'bg-amber-100 text-amber-800',
    badge: 'bg-amber-50 text-amber-700 border border-amber-200',
    btnActive: 'bg-amber-500 hover:bg-amber-600 text-white border-transparent',
  },
  REUNION: {
    label: 'Réunion',
    dot: 'bg-brand-500',
    pill: 'bg-brand-100 text-brand-700',
    badge: 'bg-brand-50 text-brand-700 border border-brand-200',
    btnActive: 'bg-brand-600 hover:bg-brand-700 text-white border-transparent',
  },
  FORMATION: {
    label: 'Formation',
    dot: 'bg-violet-500',
    pill: 'bg-violet-100 text-violet-800',
    badge: 'bg-violet-50 text-violet-800 border border-violet-200',
    btnActive: 'bg-violet-600 hover:bg-violet-700 text-white border-transparent',
  },
  AUTRE: {
    label: 'Autre',
    dot: 'bg-slate-400',
    pill: 'bg-slate-100 text-slate-600',
    badge: 'bg-slate-50 text-slate-600 border border-slate-200',
    btnActive: 'bg-slate-500 hover:bg-slate-600 text-white border-transparent',
  },
} as const;

const DAYS_FR = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const MONTHS_FR = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];

function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function buildGrid(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const offset = (first.getDay() + 6) % 7; // Monday = 0
  const cells: (Date | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= last.getDate(); d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function AgendaView() {
  const today = new Date();
  const todayStr = toDateStr(today);

  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [loading, setLoading] = useState(true);

  // Form
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formType, setFormType] = useState<EventType>('REUNION');
  const [formTime, setFormTime] = useState('');
  const [formEndTime, setFormEndTime] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch('/api/agenda')
      .then(r => r.json())
      .then(d => { if (d.success) setEvents(d.events); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const eventsForDate = (date: Date) => {
    const ds = toDateStr(date);
    return events.filter(e => e.date === ds).sort((a, b) => (a.time ?? '').localeCompare(b.time ?? ''));
  };

  const selectedDateStr = toDateStr(selectedDate);
  const selectedEvents = eventsForDate(selectedDate);
  const grid = buildGrid(viewDate.getFullYear(), viewDate.getMonth());

  const resetForm = () => {
    setFormTitle(''); setFormTime(''); setFormEndTime('');
    setFormLocation(''); setFormDescription('');
  };

  const handleAddEvent = async () => {
    if (!formTitle.trim()) return;
    setSubmitting(true);
    try {
      const r = await fetch('/api/agenda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formTitle.trim(),
          type: formType,
          date: selectedDateStr,
          ...(formTime && { time: formTime }),
          ...(formEndTime && { endTime: formEndTime }),
          ...(formLocation.trim() && { location: formLocation.trim() }),
          ...(formDescription.trim() && { description: formDescription.trim() }),
        }),
      });
      const data = await r.json();
      if (data.success) {
        setEvents(prev =>
          [...prev, data.event].sort(
            (a, b) => a.date.localeCompare(b.date) || (a.time ?? '').localeCompare(b.time ?? '')
          )
        );
        resetForm();
        setShowForm(false);
      }
    } catch (e) { console.error(e); }
    finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    const r = await fetch(`/api/agenda/${id}`, { method: 'DELETE' });
    const data = await r.json();
    if (data.success) setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="pb-24 px-6 mt-6 max-w-7xl mx-auto font-sans">

      {/* ── Navigation mois ── */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs px-5 py-3.5 mb-6 flex items-center gap-3">
        <button
          onClick={() => setViewDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <h2 className="text-sm font-black text-slate-900 w-44 text-center tracking-tight">
          {MONTHS_FR[viewDate.getMonth()]} {viewDate.getFullYear()}
        </h2>

        <button
          onClick={() => setViewDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
            setSelectedDate(today);
          }}
          className="text-xs font-bold text-slate-500 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition cursor-pointer"
        >
          Aujourd'hui
        </button>

        {/* Légende */}
        <div className="ml-auto flex items-center gap-5">
          {(Object.entries(TYPE_CONFIG) as [EventType, (typeof TYPE_CONFIG)[EventType]][]).map(([type, cfg]) => (
            <span key={type} className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
              <span className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
              {cfg.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Grille + Panneau latéral ── */}
      <div className="flex gap-6 items-start">

        {/* Calendrier */}
        <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">

          {/* En-têtes jours */}
          <div className="grid grid-cols-7 border-b border-slate-100">
            {DAYS_FR.map((d, i) => (
              <div key={d} className={`py-3 text-center text-[9px] font-black uppercase tracking-widest text-slate-400 ${i >= 5 ? 'bg-slate-50/70' : ''}`}>
                {d}
              </div>
            ))}
          </div>

          {/* Cellules */}
          <div className="grid grid-cols-7">
            {grid.map((day, i) => {
              if (!day) {
                return (
                  <div
                    key={`empty-${i}`}
                    className={`min-h-[90px] border-b border-r border-slate-100 ${i % 7 >= 5 ? 'bg-slate-50/40' : ''} ${(i + 1) % 7 === 0 ? 'border-r-0' : ''}`}
                  />
                );
              }

              const ds = toDateStr(day);
              const isToday = ds === todayStr;
              const isSelected = ds === selectedDateStr;
              const isWeekend = day.getDay() === 0 || day.getDay() === 6;
              const dayEvents = eventsForDate(day);
              const MAX_PILLS = 3;

              return (
                <div
                  key={ds}
                  onClick={() => setSelectedDate(day)}
                  className={`min-h-[90px] border-b border-r border-slate-100 p-1.5 flex flex-col gap-1 cursor-pointer transition-colors select-none ${
                    (i + 1) % 7 === 0 ? 'border-r-0' : ''
                  } ${
                    isSelected
                      ? 'bg-brand-50/50'
                      : isWeekend
                      ? 'bg-slate-50/50 hover:bg-slate-100/60'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`self-start text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 ${
                    isToday
                      ? 'bg-brand-600 text-white'
                      : isSelected
                      ? 'text-brand-700 font-black'
                      : 'text-slate-600'
                  }`}>
                    {day.getDate()}
                  </span>

                  {dayEvents.slice(0, MAX_PILLS).map(e => (
                    <div
                      key={e.id}
                      className={`text-[8px] font-semibold px-1.5 py-0.5 rounded truncate flex items-center gap-1 leading-tight ${TYPE_CONFIG[e.type].pill}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${TYPE_CONFIG[e.type].dot}`} />
                      {e.title}
                    </div>
                  ))}

                  {dayEvents.length > MAX_PILLS && (
                    <p className="text-[8px] font-bold text-slate-400 px-1">
                      +{dayEvents.length - MAX_PILLS}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Panneau jour sélectionné ── */}
        <div className="w-72 shrink-0 sticky top-6 space-y-3">

          {/* Titre du jour */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs px-4 py-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest capitalize">
                  {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long' })}
                </p>
                <p className="text-base font-black text-slate-900 leading-tight mt-0.5">
                  {selectedDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                </p>
                <p className="text-[10px] text-slate-400 font-mono">{selectedDate.getFullYear()}</p>
              </div>
              <button
                onClick={() => { setShowForm(f => !f); }}
                className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg transition cursor-pointer ${
                  showForm
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'text-brand-600 hover:text-brand-800 hover:bg-brand-50 border border-brand-200'
                }`}
              >
                {showForm ? <X className="w-3 h-3" /> : <Plus className="w-3.5 h-3.5" />}
                {showForm ? 'Annuler' : 'Ajouter'}
              </button>
            </div>
          </div>

          {/* Formulaire d'ajout */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="bg-white border border-brand-100 rounded-xl shadow-xs p-4 space-y-3"
              >
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nouvel événement</p>

                {/* Sélecteur de type */}
                <div className="grid grid-cols-2 gap-1.5">
                  {(Object.entries(TYPE_CONFIG) as [EventType, (typeof TYPE_CONFIG)[EventType]][]).map(([type, cfg]) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormType(type)}
                      className={`py-1.5 text-[10px] font-bold rounded-lg border transition cursor-pointer ${
                        formType === type
                          ? cfg.btnActive
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {cfg.label}
                    </button>
                  ))}
                </div>

                {/* Titre */}
                <input
                  type="text"
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') handleAddEvent(); }}
                  placeholder="Titre *"
                  className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-400"
                  autoFocus
                />

                {/* Horaires */}
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Début</label>
                    <input type="time" value={formTime} onChange={e => setFormTime(e.target.value)}
                      className="w-full text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-900 focus:outline-none focus:border-brand-400" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Fin</label>
                    <input type="time" value={formEndTime} onChange={e => setFormEndTime(e.target.value)}
                      className="w-full text-xs border border-slate-200 rounded-lg px-2 py-1.5 text-slate-900 focus:outline-none focus:border-brand-400" />
                  </div>
                </div>

                {/* Lieu */}
                <input
                  type="text"
                  value={formLocation}
                  onChange={e => setFormLocation(e.target.value)}
                  placeholder="Lieu"
                  className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-400"
                />

                {/* Notes */}
                <textarea
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                  placeholder="Notes"
                  rows={2}
                  className="w-full text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-400 resize-none"
                />

                <button
                  onClick={handleAddEvent}
                  disabled={!formTitle.trim() || submitting}
                  className="w-full py-2 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold rounded-lg transition cursor-pointer"
                >
                  {submitting ? 'Enregistrement…' : 'Enregistrer'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Liste des événements du jour */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Événements
              </p>
              <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                {selectedEvents.length}
              </span>
            </div>

            {loading ? (
              <div className="px-4 py-6 text-center text-xs text-slate-400">Chargement…</div>
            ) : selectedEvents.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <CalendarDays className="w-7 h-7 text-slate-200 mx-auto mb-2" />
                <p className="text-xs text-slate-400">Aucun événement planifié.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {selectedEvents.map(event => (
                  <div
                    key={event.id}
                    className="px-4 py-3 flex items-start gap-2.5 hover:bg-slate-50 group transition-colors"
                  >
                    <div className={`w-1 self-stretch rounded-full shrink-0 mt-0.5 ${TYPE_CONFIG[event.type].dot}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-800 leading-snug">{event.title}</p>
                      {(event.time || event.endTime) && (
                        <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-2.5 h-2.5 shrink-0" />
                          {event.time}{event.endTime ? ` → ${event.endTime}` : ''}
                        </p>
                      )}
                      {event.location && (
                        <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-2.5 h-2.5 shrink-0" />
                          {event.location}
                        </p>
                      )}
                      {event.description && (
                        <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">{event.description}</p>
                      )}
                      <span className={`inline-flex items-center mt-1.5 text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${TYPE_CONFIG[event.type].badge}`}>
                        {TYPE_CONFIG[event.type].label}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="shrink-0 p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-rose-50 text-slate-300 hover:text-rose-500 transition cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
