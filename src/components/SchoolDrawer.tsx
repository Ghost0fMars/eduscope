import { useState, useEffect } from 'react';
import { School, AshStudent, DEVICE_LABELS } from '../data/schoolsData';
import { X, School as SchoolIcon, Save, ShieldAlert, Mail, ChevronRight, User, Car, Clock, FileText, Calendar, Phone, Pencil } from 'lucide-react';
import { SchoolModal } from './SchoolModal';


interface SchoolDrawerProps {
  school: School;
  onClose: () => void;
  onUpdateSchool: (updatedSchool: School) => void;
}

// Generate realistic mock students enrolled in special education (ASH) within the school
interface MockStudentCase {
  id: string;
  name: string;
  level: string;
  aeshType: 'Individuelle (AESH-I)' | 'Mutualisée (AESH-M)' | 'Aucune';
  aeshHours: number;
  mdphDecision: string;
  transportSystem: 'Taxi académique' | 'Autonome' | 'Parental';
  ppsStatus: 'À jour' | 'Révision demandée' | 'Ébauche en attente';
  dob: string;
  mdphRef: string;
  disabilityType: string;
  essDate: string;
  essNextDate: string;
  referentContact: string;
  inclusionRate: string;
  notes: string;
}

function StudentModal({ student, onClose }: { student: MockStudentCase; onClose: () => void }) {
  const ppsColor =
    student.ppsStatus === 'À jour'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : student.ppsStatus === 'Révision demandée'
      ? 'bg-amber-50 text-amber-700 border-amber-200'
      : 'bg-slate-100 text-slate-600 border-slate-200';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {student.name.split(' ').map(p => p[0]).slice(0, 2).join('')}
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">{student.name}</h2>
              <p className="text-xs text-slate-500 font-medium">Classe : {student.level} · Né(e) le {student.dob}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* PPS Status */}
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-bold ${ppsColor}`}>
            <FileText className="w-3.5 h-3.5" />
            PPS : {student.ppsStatus}
          </div>

          {/* Handicap & MDPH */}
          <section className="space-y-2">
            <h3 className="text-xs font-semibold text-slate-400">Dossier MDPH</h3>
            <div className="bg-slate-50 rounded-lg border border-slate-200 divide-y divide-slate-100">
              <Row icon={<FileText className="w-3.5 h-3.5 text-slate-400" />} label="Référence" value={student.mdphRef} />
              <Row icon={<User className="w-3.5 h-3.5 text-slate-400" />} label="Type de handicap" value={student.disabilityType} />
              <Row icon={<ChevronRight className="w-3.5 h-3.5 text-slate-400" />} label="Décision" value={student.mdphDecision} />
            </div>
          </section>

          {/* AESH */}
          <section className="space-y-2">
            <h3 className="text-xs font-semibold text-slate-400">Accompagnement AESH</h3>
            <div className="bg-slate-50 rounded-lg border border-slate-200 divide-y divide-slate-100">
              <Row icon={<User className="w-3.5 h-3.5 text-slate-400" />} label="Type" value={student.aeshType} />
              <Row icon={<Clock className="w-3.5 h-3.5 text-slate-400" />} label="Horaire hebdo" value={student.aeshHours > 0 ? `${student.aeshHours}h / semaine` : 'Non attribué'} />
              <Row icon={<ChevronRight className="w-3.5 h-3.5 text-slate-400" />} label="Taux d'inclusion" value={student.inclusionRate} />
            </div>
          </section>

          {/* ESS */}
          <section className="space-y-2">
            <h3 className="text-xs font-semibold text-slate-400">Équipe de Suivi (ESS)</h3>
            <div className="bg-slate-50 rounded-lg border border-slate-200 divide-y divide-slate-100">
              <Row icon={<Calendar className="w-3.5 h-3.5 text-slate-400" />} label="Dernière ESS" value={student.essDate} />
              <Row icon={<Calendar className="w-3.5 h-3.5 text-slate-400" />} label="Prochaine ESS" value={student.essNextDate} />
              <Row icon={<Phone className="w-3.5 h-3.5 text-slate-400" />} label="Référent ESS" value={student.referentContact} />
            </div>
          </section>

          {/* Transport */}
          <section className="space-y-2">
            <h3 className="text-xs font-semibold text-slate-400">Transport</h3>
            <div className="bg-slate-50 rounded-lg border border-slate-200">
              <Row icon={<Car className="w-3.5 h-3.5 text-slate-400" />} label="Mode" value={student.transportSystem} />
            </div>
          </section>

          {/* Notes */}
          {student.notes && (
            <section className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-400">Notes</h3>
              <p className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-3 italic leading-relaxed">
                {student.notes}
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-2.5">
      {icon}
      <span className="text-[10px] text-slate-400 font-semibold w-28 shrink-0">{label}</span>
      <span className="text-xs text-slate-800 font-bold">{value}</span>
    </div>
  );
}

const PPS_COLOR: Record<AshStudent['ppsStatus'], string> = {
  'À jour': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Révision demandée': 'bg-amber-50 text-amber-700 border-amber-200',
  'Ébauche en attente': 'bg-slate-100 text-slate-600 border-slate-200',
};

const inp = 'w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-slate-800';

function EleveModal({ student, onSave, onClose }: {
  student: AshStudent;
  onSave: (s: AshStudent) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<AshStudent>({ ...student });
  const set = <K extends keyof AshStudent>(key: K, value: AshStudent[K]) =>
    setForm(prev => ({ ...prev, [key]: value }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <h2 className="text-sm font-bold text-slate-900">
            {form.prenom || form.nom ? `${form.prenom ?? ''} ${form.nom ?? ''}`.trim() : 'Fiche élève'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer"><X className="w-4 h-4" /></button>
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nom</label>
              <input value={form.nom ?? ''} onChange={e => set('nom', e.target.value || undefined)} className={inp} placeholder="Nom de famille" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Prénom</label>
              <input value={form.prenom ?? ''} onChange={e => set('prenom', e.target.value || undefined)} className={inp} placeholder="Prénom" />
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Date de naissance</label>
              <input type="date" value={form.dateNaissance ?? ''} onChange={e => set('dateNaissance', e.target.value || undefined)} className={inp} />
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Niveau</label>
              <input value={form.level} onChange={e => set('level', e.target.value)} className={inp} placeholder="Ex : CM2, 6e…" list="eleve-modal-levels" />
              <datalist id="eleve-modal-levels">
                {['PS','MS','GS','CP','CE1','CE2','CM1','CM2','6e','5e','4e','3e','2nde','1re','Tle'].map(l => <option key={l} value={l} />)}
              </datalist>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Type AESH</label>
              <select value={form.aeshType} onChange={e => set('aeshType', e.target.value as AshStudent['aeshType'])} className={inp}>
                <option value="Aucune">Aucune</option>
                <option value="Individuelle (AESH-I)">Individuelle (AESH-I)</option>
                <option value="Mutualisée (AESH-M)">Mutualisée (AESH-M)</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Statut PPS</label>
              <select value={form.ppsStatus} onChange={e => set('ppsStatus', e.target.value as AshStudent['ppsStatus'])} className={inp}>
                <option value="À jour">À jour</option>
                <option value="Révision demandée">Révision demandée</option>
                <option value="Ébauche en attente">Ébauche en attente</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Notes</label>
              <input value={form.notes} onChange={e => set('notes', e.target.value)} className={inp} placeholder="Optionnel" />
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-t border-slate-100 flex justify-end gap-2 shrink-0">
          <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">Annuler</button>
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



export default function SchoolDrawer({ school, onClose, onUpdateSchool }: SchoolDrawerProps) {
  const [baseChecked, setBaseChecked] = useState(school.ashDevice.baseChecked);
  const [valChecked, setValChecked] = useState(school.ashDevice.valChecked);
  const [comments, setComments] = useState(school.ashDevice.comments);
  const [successMsg, setSuccessMsg] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<MockStudentCase | null>(null);
  const [editingSchool, setEditingSchool] = useState<School | null>(null);
  const [editingEleve, setEditingEleve] = useState<AshStudent | null>(null);

  // Synchronize component states when selected school changes
  useEffect(() => {
    setBaseChecked(school.ashDevice.baseChecked);
    setValChecked(school.ashDevice.valChecked);
    setComments(school.ashDevice.comments);
    setSuccessMsg('');
  }, [school]);

  // Handle saving the updated validation status and comments
  const handleSaveValidation = () => {
    const updatedSchool: School = {
      ...school,
      ashDevice: {
        ...school.ashDevice,
        baseChecked,
        valChecked,
        comments
      }
    };
    onUpdateSchool(updatedSchool);
    setSuccessMsg('Mise à jour enregistrée avec succès !');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // Aucun élève nominatif n'est stocké (RGPD)

  return (
    <>
    {selectedStudent && <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />}
    {editingEleve && (
      <EleveModal
        student={editingEleve}
        onSave={updated => {
          const newStudents = (school.ashStudents ?? []).map(s => s.id === updated.id ? updated : s);
          onUpdateSchool({ ...school, ashStudents: newStudents, studentsCount: { ...school.studentsCount, total: newStudents.length }, ashDevice: { ...school.ashDevice, assignedStudents: newStudents.length } });
          setEditingEleve(null);
        }}
        onClose={() => setEditingEleve(null)}
      />
    )}
    {editingSchool && (
      <SchoolModal
        school={editingSchool}
        onSave={s => { onUpdateSchool(s); setEditingSchool(null); }}
        onClose={() => setEditingSchool(null)}
      />
    )}

    <div className="bg-white overflow-hidden flex flex-col h-full" id={`school-pane-${school.rne}`}>
      {/* DRAWER HEADER */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-start shrink-0">
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase border border-slate-200">
              {({ elementaire: 'Primaire', college: 'Collège', lycee: 'Lycée', maternelle: 'Maternelle' } as Record<string, string>)[school.type] ?? school.type}
            </span>
            <span className="text-[10px] font-mono text-slate-400 font-bold">RNE: {school.rne}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight block truncate">{school.name}</h3>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <SchoolIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold">{school.city}</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 ml-2 shrink-0">
          <button
            onClick={() => setEditingSchool(school)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs border border-brand-700"
          >
            <Pencil className="w-3 h-3" />
            Modifier
          </button>
          <button
            onClick={onClose}
            className="p-1 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 font-bold text-xs transition-colors cursor-pointer shadow-xs border border-slate-200"
            id="btn-close-drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DRAWER SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">

        {/* SECTION 1: SYSTEM DEVICES */}
        <div className="space-y-4">
          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-brand-50 rounded-lg border border-brand-100">
              <p className="text-[10px] text-brand-600 font-medium mb-1.5">Effectif Scolaire</p>
              <p className="text-xl font-extrabold text-slate-800 font-sans">
                {school.ashStudents?.length ?? 0} <span className="text-xs font-normal text-brand-400">élèves</span>
              </p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-[10px] text-emerald-600 font-medium mb-1.5">Taux d'occupation</p>
              <p className="text-xl font-extrabold text-emerald-600 font-sans">
                {school.ashDevice.capacity > 0
                  ? `${Math.round(((school.ashStudents?.length ?? 0) / school.ashDevice.capacity) * 100)}%`
                  : '—'}
              </p>
            </div>
          </div>

          <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3.5">
            <span className="text-xs font-semibold text-slate-400 block mb-2">
              Dispositif ASH Actif
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-1 text-xs font-extrabold border rounded uppercase ${
                school.ashDevice.type === 'NONE'
                  ? 'bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-brand-50 border-brand-200 text-brand-700'
              }`}>
                {school.ashDevice.type} · {DEVICE_LABELS[school.ashDevice.type]}
              </span>
              {school.ashDevice.type !== 'NONE' && (
                <span className="text-xs font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                  Inclusion: {school.ashStudents?.length ?? 0} / {school.ashDevice.capacity} places
                </span>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 2: ACADEMIC ROLES */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 flex items-center mb-1">
            <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
            Intervenants & Encadrement
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1">
            {/* Direction */}
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <span className="text-[10px] text-slate-400 font-medium block">Direction</span>
              {school.directorName && school.directorName !== 'nan' ? (
                <>
                  <span className="text-[11px] font-extrabold text-slate-800 break-words mt-0.5 block">
                    {school.directorName}
                  </span>
                  {school.email && (
                    <span className="text-[8px] font-mono text-slate-400 block truncate mt-1 flex items-center gap-1">
                      <Mail className="w-2.5 h-2.5 shrink-0" />{school.email}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-[11px] font-extrabold text-slate-400 italic mt-0.5 block">Non renseignée</span>
              )}
            </div>

            {/* ERSEH Référent */}
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <span className="text-[10px] text-slate-400 font-medium block">ERSEH Référent</span>
              {school.referentName && school.referentName !== 'nan' ? (
                <>
                  <span className="text-[11px] font-extrabold text-brand-700 break-words mt-0.5 block">
                    {school.referentName}
                  </span>
                  {(school.referentEmail || school.referentPhone) && (
                    <div className="text-[8px] font-mono text-slate-400 mt-1 space-y-0.5">
                      {school.referentEmail && <div className="flex items-center gap-1"><Mail className="w-2.5 h-2.5 shrink-0" />{school.referentEmail}</div>}
                      {school.referentPhone && <div>{school.referentPhone}</div>}
                    </div>
                  )}
                </>
              ) : (
                <span className="text-[11px] font-extrabold text-slate-400 italic mt-0.5 block">Non renseigné</span>
              )}
            </div>

            {/* CPC */}
            <div className="bg-slate-50 p-2 rounded border border-slate-200">
              <span className="text-[10px] text-slate-400 font-medium block">Conseiller CPC</span>
              {school.cpcName && school.cpcName !== 'nan' && school.cpcName.trim() !== '' ? (
                <span className="text-[11px] font-extrabold text-slate-800 break-words mt-0.5 block">
                  {school.cpcName}
                </span>
              ) : (
                <span className="text-[11px] font-extrabold text-slate-400 italic mt-0.5 block">Non renseigné</span>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 4: PUPILS PATHWAYS FOR SPECIAL NEEDS */}
        {school.ashDevice.type !== 'NONE' && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 flex items-center">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
              Parcours des Élèves Rattachés (Dispositif ASH)
            </h4>
            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5">
              {(!school.ashStudents || school.ashStudents.length === 0) ? (
                <p className="text-xs text-slate-400 italic text-center py-2">Aucun élève enregistré</p>
              ) : (
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-slate-500 mb-2">{school.ashStudents.length} élève{school.ashStudents.length > 1 ? 's' : ''}</p>
                  {[...school.ashStudents].sort((a, b) => (a.nom ?? '').localeCompare(b.nom ?? '', 'fr')).map((s) => (
                    <button key={s.id} onClick={() => setEditingEleve(s)} className="w-full flex items-center gap-2 text-xs hover:bg-brand-50 hover:border-brand-200 border border-transparent rounded-lg px-2 py-1 transition-colors cursor-pointer text-left">
                      <span className="font-bold text-slate-800 shrink-0">
                        {s.prenom || s.nom
                          ? `${s.prenom ?? ''} ${s.nom ?? ''}`.trim()
                          : <span className="text-slate-400 italic font-normal">Anonyme</span>}
                      </span>
                      <span className="font-bold text-brand-700 w-10 shrink-0">{s.level}</span>
                      <span className="text-slate-500 flex-1 truncate">{s.aeshType}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${PPS_COLOR[s.ppsStatus]}`}>{s.ppsStatus}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 5: CPC / ERSEH VALIDATION PANEL */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-4" id="cpc-validation-panel">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0" />
            <div>
              <h4 className="text-xs font-semibold text-slate-500">Note Stratégique ERSEH / CPC</h4>
              <p className="text-[9px] text-slate-400">Validation et orientations du conseiller départemental</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <label className="flex items-start gap-2.5 cursor-pointer bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs select-none">
              <input
                type="checkbox"
                checked={baseChecked}
                onChange={(e) => setBaseChecked(e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 border-slate-300 focus:ring-brand-500 mt-0.5"
                id="check-base"
              />
              <div className="leading-none">
                <span className="text-[11px] font-bold text-slate-800 block">Données de Base OK</span>
                <span className="text-[9px] text-slate-400">RNE et Localisation validés</span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs select-none">
              <input
                type="checkbox"
                checked={valChecked}
                onChange={(e) => setValChecked(e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 border-slate-300 focus:ring-brand-500 mt-0.5"
                id="check-validator"
              />
              <div className="leading-none">
                <span className="text-[11px] font-bold text-slate-800 block">Effectifs Ciblés OK</span>
                <span className="text-[9px] text-slate-400">Vérifié d'après transporteurs/AESH</span>
              </div>
            </label>
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-slate-500 block">Commentaires & Ajustements ASH :</span>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Données supplémentaires, relance de transport, signalement d'erreur de place..."
              className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-700 h-20 outline-hidden focus:border-brand-500 resize-none font-medium leading-normal italic placeholder:text-slate-400"
              id="txt-comments"
            />
          </div>

          <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200 pt-3 mt-1.5">
            <p className="text-[9px] text-slate-400">
              Dernier : <strong className="text-slate-600">Utilisateur</strong>
            </p>
            <button
              onClick={handleSaveValidation}
              className="bg-brand-600 hover:bg-brand-700 font-bold text-xs text-white rounded-lg px-3.5 py-2 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              id="btn-save-validation"
            >
              <Save className="w-4 h-4" />
              Soumettre la mise à jour
            </button>
          </div>

          {successMsg && (
            <div className="bg-emerald-600 text-white font-bold text-xs text-center p-2 rounded-lg py-1.5 animate-pulse">
              {successMsg}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
