import { useState } from 'react';
import { School } from '../data/schoolsData';
import { Building2, X, Save } from 'lucide-react';

const SCHOOL_TYPES = ['elementaire', 'college', 'lycee'] as const;
const DEVICE_TYPES = ['NONE', 'TSA', 'TFC', 'TSLA', 'TFA', 'TFM', 'TED', 'SEGPA'] as const;
const SCHOOL_TYPE_LABELS: Record<string, string> = {
  elementaire: 'Primaire',
  college: 'Collège',
  lycee: 'Lycée',
};

const input = 'w-full px-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-slate-800';

function Field({ label, children, span = 1 }: { label: string; children: React.ReactNode; span?: 1 | 2 | 3 }) {
  const colSpan = span === 2 ? 'col-span-2' : span === 3 ? 'col-span-3' : '';
  return (
    <div className={colSpan}>
      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</label>
      {children}
    </div>
  );
}

export function SchoolModal({ school, onSave, onClose }: {
  school: School;
  onSave: (s: School) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<School>({ ...school, ashDevice: { ...school.ashDevice } });
  const set = (key: keyof School, value: unknown) => setForm(prev => ({ ...prev, [key]: value }));
  const setDevice = (key: string, value: unknown) =>
    setForm(prev => ({ ...prev, ashDevice: { ...prev.ashDevice, [key]: value } }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-brand-600" />
            {form.name || 'Établissement'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-6">

          <section>
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-3">Identité</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nom de l'établissement" span={2}>
                <input value={form.name} onChange={e => set('name', e.target.value)} className={input} />
              </Field>
              <Field label="RNE">
                <input value={form.rne} onChange={e => set('rne', e.target.value)} className={input} />
              </Field>
              <Field label="Type">
                <select value={form.type} onChange={e => set('type', e.target.value as School['type'])} className={input}>
                  {SCHOOL_TYPES.map(t => <option key={t} value={t}>{SCHOOL_TYPE_LABELS[t]}</option>)}
                </select>
              </Field>
              <Field label="Ville">
                <input value={form.city} onChange={e => set('city', e.target.value)} className={input} />
              </Field>
              <Field label="Code postal">
                <input value={form.postalCode ?? ''} onChange={e => set('postalCode', e.target.value)} className={input} />
              </Field>
              <Field label="Adresse" span={2}>
                <input value={form.address ?? ''} onChange={e => set('address', e.target.value)} className={input} />
              </Field>
              <Field label="Email établissement">
                <input value={form.email ?? ''} onChange={e => set('email', e.target.value)} className={input} />
              </Field>
              <Field label="Téléphone établissement">
                <input value={form.phone ?? ''} onChange={e => set('phone', e.target.value)} className={input} />
              </Field>
            </div>
          </section>

          <section>
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-3">Encadrement</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Directeur / Directrice" span={2}>
                <input value={form.directorName} onChange={e => set('directorName', e.target.value)} className={input} />
              </Field>
              <Field label="CPC" span={2}>
                <input value={form.cpcName} onChange={e => set('cpcName', e.target.value)} className={input} />
              </Field>
              <Field label="ERSEH (nom)" span={2}>
                <input value={form.referentName} onChange={e => set('referentName', e.target.value)} className={input} />
              </Field>
              <Field label="Secteur ERSEH">
                <input value={form.secteurERSEH ?? ''} onChange={e => set('secteurERSEH', e.target.value)} className={input} />
              </Field>
              <Field label="Tél. ERSEH">
                <input value={form.referentPhone ?? ''} onChange={e => set('referentPhone', e.target.value)} className={input} />
              </Field>
              <Field label="Mail ERSEH" span={2}>
                <input value={form.referentEmail ?? ''} onChange={e => set('referentEmail', e.target.value)} className={input} />
              </Field>
            </div>
          </section>

          <section>
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-3">Dispositif ASH</p>
            <div className="grid grid-cols-3 gap-3">
              <Field label="Type de dispositif">
                <select value={form.ashDevice.type} onChange={e => setDevice('type', e.target.value)} className={input}>
                  {DEVICE_TYPES.map(t => <option key={t} value={t}>{t === 'NONE' ? 'Aucun' : t}</option>)}
                </select>
              </Field>
              <Field label="Capacité">
                <input type="number" min={0} value={form.ashDevice.capacity} onChange={e => setDevice('capacity', Number(e.target.value))} className={input} />
              </Field>
              <Field label="Élèves assignés">
                <input type="number" min={0} value={form.ashDevice.assignedStudents} onChange={e => setDevice('assignedStudents', Number(e.target.value))} className={input} />
              </Field>
              <Field label="Commentaires" span={3}>
                <textarea rows={2} value={form.ashDevice.comments} onChange={e => setDevice('comments', e.target.value)} className={`${input} resize-none`} />
              </Field>
            </div>
          </section>

        </div>

        <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-2 shrink-0">
          <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
            Annuler
          </button>
          <button
            onClick={() => { onSave(form); onClose(); }}
            className="px-4 py-2 text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white rounded-lg flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" /> Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
