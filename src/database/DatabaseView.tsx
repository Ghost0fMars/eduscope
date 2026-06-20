import { useState, useMemo, useRef } from 'react';
import {
  Building2, Users, User, Landmark, GraduationCap,
  Search, Pencil, Plus, X, Save, ChevronUp, ChevronDown, Trash2,
  Upload, FileDown, CheckCircle2, AlertCircle, Menu
} from 'lucide-react';
import { School, AshStudent } from '../data/schoolsData';
import { ErsehReferent, ersehData as initialErsehData } from '../data/ersehData';
import { SchoolModal } from '../components/SchoolModal';

type DbCategory = 'schools' | 'erseh' | 'directors' | 'cpc' | 'ien' | 'eleves';
type SortDir = 'asc' | 'desc';

interface DatabaseViewProps {
  schools: School[];
  onUpdateSchool: (school: School) => void;
  onAddSchool: (school: School) => void;
  onDeleteSchool: (id: string) => void;
}

const SCHOOL_TYPE_LABELS: Record<string, string> = {
  elementaire: 'Primaire',
  college: 'Collège',
  lycee: 'Lycée',
};

const CATEGORIES: { id: DbCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'schools',   label: 'Établissements', icon: <Building2 className="w-4 h-4" /> },
  { id: 'eleves',    label: 'Élèves',         icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'erseh',     label: 'ERSEH',          icon: <Users className="w-4 h-4" /> },
  { id: 'directors', label: 'Directeurs',     icon: <User className="w-4 h-4" /> },
  { id: 'ien',       label: 'IEN',            icon: <Landmark className="w-4 h-4" /> },
];

function SortIcon({ field, sortField, sortDir }: { field: string; sortField: string; sortDir: SortDir }) {
  if (sortField !== field) return <ChevronUp className="w-3 h-3 opacity-20" />;
  return sortDir === 'asc'
    ? <ChevronUp className="w-3 h-3 text-brand-600" />
    : <ChevronDown className="w-3 h-3 text-brand-600" />;
}

function Th({ label, field, sortField, sortDir, onSort }: {
  label: string; field: string; sortField: string; sortDir: SortDir; onSort: (f: string) => void;
}) {
  return (
    <th
      className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 cursor-pointer select-none hover:text-slate-800 whitespace-nowrap"
      onClick={() => onSort(field)}
    >
      <span className="flex items-center gap-1">
        {label}
        <SortIcon field={field} sortField={sortField} sortDir={sortDir} />
      </span>
    </th>
  );
}

function blankSchool(): School {
  return {
    id: `new_${Date.now()}`,
    rne: '',
    name: '',
    type: 'elementaire',
    city: '',
    address: '',
    postalCode: '',
    latitude: 43.3,
    longitude: 5.4,
    studentsCount: { total: 0, byLevel: {} },
    ashDevice: { type: 'NONE', assignedStudents: 0, capacity: 12, baseChecked: false, valChecked: false, comments: '' },
    directorName: '',
    referentName: '',
    referentPhone: '',
    referentEmail: '',
    secteurERSEH: '',
    cpcName: '',
    email: '',
    phone: '',
  };
}

function blankErseh(): ErsehReferent {
  return {
    secteurCode: '',
    secteurLabel: '',
    secteurAsh: '',
    circonscription: '',
    nom: '',
    prenom: '',
    telephone: '',
    mail: '',
    lieuImplantation: '',
    ville: '',
    publicPrive: 'PUBLIC',
  };
}

// ─── School edit modal ────────────────────────────────────────────────────────

// ─── ERSEH edit modal ─────────────────────────────────────────────────────────

function ErsehModal({ erseh, onSave, onClose }: {
  erseh: ErsehReferent;
  onSave: (e: ErsehReferent) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<ErsehReferent>({ ...erseh });
  const set = (key: keyof ErsehReferent, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-brand-600" />
            {form.prenom || form.nom ? `${form.prenom} ${form.nom}`.trim() : 'Nouvel ERSEH'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-6">
          <section>
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-3">Identité</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nom">
                <input value={form.nom} onChange={e => set('nom', e.target.value)} className={input} />
              </Field>
              <Field label="Prénom">
                <input value={form.prenom} onChange={e => set('prenom', e.target.value)} className={input} />
              </Field>
              <Field label="Téléphone">
                <input value={form.telephone ?? ''} onChange={e => set('telephone', e.target.value)} className={input} />
              </Field>
              <Field label="Mail" span={1}>
                <input value={form.mail} onChange={e => set('mail', e.target.value)} className={input} />
              </Field>
            </div>
          </section>

          <section>
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-3">Secteur & affectation</p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Code secteur">
                <input value={form.secteurCode} onChange={e => set('secteurCode', e.target.value)} className={input} />
              </Field>
              <Field label="Libellé réseau">
                <input value={form.secteurLabel ?? ''} onChange={e => set('secteurLabel', e.target.value)} className={input} />
              </Field>
              <Field label="Secteur ASH">
                <input value={form.secteurAsh ?? ''} onChange={e => set('secteurAsh', e.target.value)} className={input} />
              </Field>
              <Field label="Circonscription">
                <input value={form.circonscription ?? ''} onChange={e => set('circonscription', e.target.value)} className={input} />
              </Field>
              <Field label="Lieu d'implantation">
                <input value={form.lieuImplantation ?? ''} onChange={e => set('lieuImplantation', e.target.value)} className={input} />
              </Field>
              <Field label="Ville">
                <input value={form.ville ?? ''} onChange={e => set('ville', e.target.value)} className={input} />
              </Field>
              <Field label="Public / Privé">
                <select value={form.publicPrive ?? 'PUBLIC'} onChange={e => set('publicPrive', e.target.value)} className={input}>
                  <option value="PUBLIC">Public</option>
                  <option value="PRIVE">Privé</option>
                </select>
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${color}`}>
      {label}
    </span>
  );
}

const TYPE_BADGE: Record<string, string> = {
  elementaire: 'bg-blue-50 text-blue-700 border-blue-200',
  college: 'bg-amber-50 text-amber-700 border-amber-200',
  lycee: 'bg-green-50 text-green-700 border-green-200',
};

function AddEleveModal({ schools, onSave, onClose, initialSchoolId, initialStudent }: {
  schools: School[];
  onSave: (school: School, student: AshStudent) => void;
  onClose: () => void;
  initialSchoolId?: string;
  initialStudent?: AshStudent;
}) {
  const [schoolId, setSchoolId] = useState(initialSchoolId ?? '');
  const [nom, setNom] = useState(initialStudent?.nom ?? '');
  const [prenom, setPrenom] = useState(initialStudent?.prenom ?? '');
  const [dateNaissance, setDateNaissance] = useState(initialStudent?.dateNaissance ?? '');
  const [level, setLevel] = useState(initialStudent?.level ?? '');
  const [aeshType, setAeshType] = useState<AshStudent['aeshType']>(initialStudent?.aeshType ?? 'Aucune');
  const [ppsStatus, setPpsStatus] = useState<AshStudent['ppsStatus']>(initialStudent?.ppsStatus ?? 'À jour');
  const [notes, setNotes] = useState(initialStudent?.notes ?? '');

  const ashSchools = schools.filter(s => s.ashDevice.type !== 'NONE');
  const canSave = schoolId && level.trim();

  const handleSave = () => {
    const school = schools.find(s => s.id === schoolId);
    if (!school || !level.trim()) return;
    const student: AshStudent = {
      id: initialStudent?.id ?? `${Date.now()}`,
      nom: nom.trim() || undefined,
      prenom: prenom.trim() || undefined,
      dateNaissance: dateNaissance || undefined,
      level: level.trim(),
      aeshType,
      ppsStatus,
      notes,
    };
    onSave(school, student);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-brand-600" />
            {initialStudent ? 'Modifier l\'élève' : 'Ajouter un élève'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer"><X className="w-4 h-4" /></button>
        </div>

        <div className="px-6 py-5 space-y-4">
          <Field label="Établissement">
            <select value={schoolId} onChange={e => setSchoolId(e.target.value)} className={input}>
              <option value="">— Sélectionner un établissement —</option>
              {ashSchools.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.city})</option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Nom">
              <input value={nom} onChange={e => setNom(e.target.value)} className={input} placeholder="Nom de famille" />
            </Field>
            <Field label="Prénom">
              <input value={prenom} onChange={e => setPrenom(e.target.value)} className={input} placeholder="Prénom" />
            </Field>
            <Field label="Date de naissance" span={2}>
              <input type="date" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} className={input} />
            </Field>

            <Field label="Niveau">
              <input
                value={level}
                onChange={e => setLevel(e.target.value)}
                className={input}
                placeholder="Ex : CM2, 6e…"
                list="add-eleve-levels"
              />
              <datalist id="add-eleve-levels">
                {['PS','MS','GS','CP','CE1','CE2','CM1','CM2','6e','5e','4e','3e','2nde','1re','Tle'].map(l => <option key={l} value={l} />)}
              </datalist>
            </Field>

            <Field label="Type AESH">
              <select value={aeshType} onChange={e => setAeshType(e.target.value as AshStudent['aeshType'])} className={input}>
                <option value="Aucune">Aucune</option>
                <option value="Individuelle (AESH-I)">Individuelle (AESH-I)</option>
                <option value="Mutualisée (AESH-M)">Mutualisée (AESH-M)</option>
              </select>
            </Field>

            <Field label="Statut PPS" span={2}>
              <select value={ppsStatus} onChange={e => setPpsStatus(e.target.value as AshStudent['ppsStatus'])} className={input}>
                <option value="À jour">À jour</option>
                <option value="Révision demandée">Révision demandée</option>
                <option value="Ébauche en attente">Ébauche en attente</option>
              </select>
            </Field>

            <Field label="Notes" span={2}>
              <input value={notes} onChange={e => setNotes(e.target.value)} className={input} placeholder="Optionnel" />
            </Field>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-2 shrink-0">
          <button onClick={onClose} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">Annuler</button>
          <button
            onClick={handleSave}
            disabled={!canSave}
            className="px-4 py-2 text-xs font-bold bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" /> Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}

function sortData<T>(data: T[], field: string, dir: SortDir): T[] {
  return [...data].sort((a, b) => {
    const av = String((a as Record<string, unknown>)[field] ?? '').toLowerCase();
    const bv = String((b as Record<string, unknown>)[field] ?? '').toLowerCase();
    return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
  });
}

// ─── CSV utilities ────────────────────────────────────────────────────────────

function parseCsv(text: string): Record<string, string>[] {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const delim = lines[0].includes(';') ? ';' : ',';
  const headers = lines[0].split(delim).map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const vals = line.split(delim).map(v => v.trim().replace(/^"|"$/g, ''));
    return Object.fromEntries(headers.map((h, i) => [h, vals[i] ?? '']));
  });
}

function downloadCsv(filename: string, headers: string[], sample: string[]) {
  const content = [headers.join(';'), sample.join(';')].join('\n');
  const blob = new Blob(['﻿' + content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DatabaseView({ schools, onUpdateSchool, onAddSchool, onDeleteSchool }: DatabaseViewProps) {
  const [category, setCategory] = useState<DbCategory>('schools');
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const [editingSchool, setEditingSchool] = useState<School | null>(null);
  const [deletingSchool, setDeletingSchool] = useState<School | null>(null);

  const [ersehList, setErsehList] = useState<ErsehReferent[]>(initialErsehData);
  const [editingErseh, setEditingErseh] = useState<ErsehReferent | null>(null);

  const [addingEleve, setAddingEleve] = useState(false);
  const [editingEleve, setEditingEleve] = useState<{ student: AshStudent; school: School } | null>(null);
  const [deletingEleve, setDeletingEleve] = useState<{ student: AshStudent; school: School } | null>(null);

  const [importResult, setImportResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const csvInputRef = useRef<HTMLInputElement>(null);

  const importErsehCsv = (text: string) => {
    const rows = parseCsv(text);
    let count = 0;
    const updated = [...ersehList];
    const schoolUpdates: School[] = [];

    for (const row of rows) {
      const code = row['secteurcode'] || row['secteur_code'] || row['secteurcode'];
      if (!code) continue;
      const idx = updated.findIndex(e => e.secteurCode.toLowerCase() === code.toLowerCase());
      if (idx < 0) continue;
      updated[idx] = {
        ...updated[idx],
        nom: row['nom'] !== undefined ? row['nom'] : updated[idx].nom,
        prenom: row['prenom'] !== undefined ? row['prenom'] : updated[idx].prenom,
        telephone: row['telephone'] !== undefined ? row['telephone'] : updated[idx].telephone,
        mail: row['mail'] !== undefined ? row['mail'] : updated[idx].mail,
      };
      count++;
      // sync schools linked to this secteur
      for (const s of schools) {
        if (s.secteurERSEH?.toLowerCase() === code.toLowerCase()) {
          const nom = row['nom'] || '';
          const prenom = row['prenom'] || '';
          schoolUpdates.push({
            ...s,
            referentName: prenom || nom ? `${prenom} ${nom}`.trim() : s.referentName,
            referentPhone: row['telephone'] || s.referentPhone,
            referentEmail: row['mail'] || s.referentEmail,
          });
        }
      }
    }
    setErsehList(updated);
    schoolUpdates.forEach(onUpdateSchool);
    setImportResult({ ok: true, msg: `${count} ERSEH mis à jour${schoolUpdates.length ? `, ${schoolUpdates.length} établissement(s) synchronisé(s)` : ''}` });
    setTimeout(() => setImportResult(null), 5000);
  };

  const importSchoolPersonnelCsv = (text: string) => {
    const rows = parseCsv(text);
    let count = 0;
    for (const row of rows) {
      const rne = (row['rne'] || '').toUpperCase().trim();
      if (!rne) continue;
      const school = schools.find(s => s.rne.toUpperCase() === rne);
      if (!school) continue;
      onUpdateSchool({
        ...school,
        directorName: row['directeur'] !== undefined ? row['directeur'] : school.directorName,
        cpcName: row['cpc'] !== undefined ? row['cpc'] : school.cpcName,
        email: row['email'] !== undefined ? row['email'] : school.email,
        phone: row['telephone'] !== undefined ? row['telephone'] : school.phone,
      });
      count++;
    }
    setImportResult({ ok: count > 0, msg: count > 0 ? `${count} établissement(s) mis à jour` : 'Aucun RNE correspondant trouvé' });
    setTimeout(() => setImportResult(null), 5000);
  };

  const handleCsvFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      const text = evt.target?.result as string;
      if (category === 'erseh' || category === 'ien') importErsehCsv(text);
      else importSchoolPersonnelCsv(text); // schools, directors, cpc, eleves → mapped by RNE
    };
    reader.readAsText(file, 'utf-8');
    e.target.value = '';
  };

  const handleSort = (field: string) => {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDir('asc'); }
  };

  const handleCategoryChange = (cat: DbCategory) => {
    setCategory(cat);
    setSearch('');
    setSortField(cat === 'erseh' ? 'nom' : 'name');
    setSortDir('asc');
    setShowSidebar(false);
  };

  const q = search.toLowerCase().trim();

  // ── Schools ──
  const filteredSchools = useMemo(() => {
    const filtered = schools.filter(s =>
      !q || s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) ||
      s.rne.toLowerCase().includes(q) || (s.directorName ?? '').toLowerCase().includes(q) ||
      (s.cpcName ?? '').toLowerCase().includes(q) || (s.referentName ?? '').toLowerCase().includes(q)
    );
    return sortData(filtered, sortField, sortDir);
  }, [schools, q, sortField, sortDir]);

  // ── ERSEH ──
  const filteredErseh = useMemo(() => {
    const filtered = ersehList.filter(e =>
      !q || e.nom.toLowerCase().includes(q) || e.prenom.toLowerCase().includes(q) ||
      (e.secteurLabel ?? '').toLowerCase().includes(q) || (e.ville ?? '').toLowerCase().includes(q) ||
      (e.circonscription ?? '').toLowerCase().includes(q)
    );
    return sortData(filtered, sortField, sortDir);
  }, [ersehList, q, sortField, sortDir]);

  // ── Directors ──
  const filteredDirectors = useMemo(() => {
    const filtered = schools
      .filter(s => !q || (s.directorName ?? '').toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q))
      .map(s => ({ school: s, director: s.directorName || '—' }));
    return [...filtered].sort((a, b) => {
      const av = sortField === 'name' ? a.school.name.toLowerCase() : a.director.toLowerCase();
      const bv = sortField === 'name' ? b.school.name.toLowerCase() : b.director.toLowerCase();
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
    });
  }, [schools, q, sortField, sortDir]);

  // ── CPC ──
  const cpcGroups = useMemo(() => {
    const map = new Map<string, School[]>();
    for (const s of schools) {
      const k = s.cpcName?.trim() || '(non renseigné)';
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(s);
    }
    const entries = [...map.entries()]
      .filter(([k]) => !q || k.toLowerCase().includes(q))
      .sort(([a], [b]) => (sortDir === 'asc' ? a.localeCompare(b) : b.localeCompare(a)));
    return entries;
  }, [schools, q, sortDir]);

  // ── Élèves ──
  type EleveRow = AshStudent & { school: School };
  const filteredEleves = useMemo<EleveRow[]>(() => {
    const all: EleveRow[] = schools.flatMap(s =>
      (s.ashStudents ?? []).map(e => ({ ...e, school: s }))
    );
    return all.filter(e =>
      !q ||
      (e.nom ?? '').toLowerCase().includes(q) ||
      (e.prenom ?? '').toLowerCase().includes(q) ||
      e.level.toLowerCase().includes(q) ||
      e.school.name.toLowerCase().includes(q) ||
      e.school.city.toLowerCase().includes(q) ||
      e.ppsStatus.toLowerCase().includes(q) ||
      e.aeshType.toLowerCase().includes(q) ||
      e.notes.toLowerCase().includes(q)
    );
  }, [schools, q]);

  // ── IEN ──
  const ienGroups = useMemo(() => {
    const map = new Map<string, ErsehReferent[]>();
    for (const e of ersehList) {
      const k = e.circonscription?.trim() || '(non renseignée)';
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(e);
    }
    const entries = [...map.entries()]
      .filter(([k]) => !q || k.toLowerCase().includes(q))
      .sort(([a], [b]) => (sortDir === 'asc' ? a.localeCompare(b) : b.localeCompare(a)));
    return entries;
  }, [ersehList, q, sortDir]);

  const totalEleveCount = schools.reduce((n, s) => n + (s.ashStudents?.length ?? 0), 0);

  const totalCount = {
    schools: schools.length,
    eleves: totalEleveCount,
    erseh: ersehList.length,
    directors: schools.length,
    cpc: new Set(schools.map(s => s.cpcName)).size,
    ien: new Set(ersehList.map(e => e.circonscription)).size,
  };

  const filteredCount = {
    schools: filteredSchools.length,
    eleves: filteredEleves.length,
    erseh: filteredErseh.length,
    directors: filteredDirectors.length,
    cpc: cpcGroups.length,
    ien: ienGroups.length,
  };

  return (
    <div className="flex flex-1 h-full overflow-hidden">

      {/* Overlay mobile pour la sidebar */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* ── Left sidebar ── */}
      <aside className={[
        'bg-white border-r border-slate-200 flex-col shrink-0 py-4',
        showSidebar
          ? 'flex fixed inset-y-0 left-0 w-52 z-50 shadow-2xl'
          : 'hidden sm:flex sm:w-52',
      ].join(' ')}>
        <div className="sm:hidden flex items-center justify-between px-4 mb-4 pb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-800">Tables</span>
          <button
            onClick={() => setShowSidebar(false)}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Données</p>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
              category === cat.id
                ? 'bg-brand-50 text-brand-700 border-r-2 border-brand-600'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <span className={category === cat.id ? 'text-brand-600' : 'text-slate-400'}>{cat.icon}</span>
              {cat.label}
            </span>
            <span className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 ${
              category === cat.id ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-500'
            }`}>
              {totalCount[cat.id]}
            </span>
          </button>
        ))}
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">

        {/* Toolbar */}
        <div className="bg-white border-b border-slate-200 px-3 sm:px-6 py-3 flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Hamburger — mobile uniquement */}
          <button
            onClick={() => setShowSidebar(true)}
            className="sm:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer shrink-0"
            title="Choisir la table"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Nom de la catégorie active — mobile uniquement */}
          <span className="sm:hidden flex items-center gap-1.5 text-xs font-bold text-brand-700 shrink-0">
            <span className="text-brand-500">{CATEGORIES.find(c => c.id === category)?.icon}</span>
            {CATEGORIES.find(c => c.id === category)?.label}
          </span>

          <div className="relative flex-1 sm:max-w-sm">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher…"
              className="pl-9 pr-4 py-1.5 text-xs border border-slate-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
          <span className="hidden sm:block text-[11px] text-slate-400 font-medium shrink-0">
            {filteredCount[category]} / {totalCount[category]}
          </span>
          <div className="hidden sm:block flex-1" />

          <input type="file" accept=".csv,.txt" ref={csvInputRef} className="hidden" onChange={handleCsvFile} />

          <button
            onClick={() => {
              if (category === 'erseh' || category === 'ien') {
                downloadCsv('modele_erseh.csv',
                  ['secteurCode', 'nom', 'prenom', 'telephone', 'mail'],
                  ['AIX_1', 'DUPONT', 'Jean', '06 12 34 56 78', 'ce.erseh13-aix1@ac-aix-marseille.fr']
                );
              } else if (category === 'schools') {
                downloadCsv('modele_etablissements.csv',
                  ['rne', 'nom', 'type', 'ville', 'adresse', 'codePostal'],
                  ['0130248Z', 'ÉCOLE JULIEN', 'elementaire', 'MARSEILLE', '3 RUE JULIEN', '13006']
                );
              } else if (category === 'eleves') {
                downloadCsv('modele_eleves.csv',
                  ['rne', 'niveau', 'aesh', 'pps', 'notes'],
                  ['0130248Z', 'CM2', 'Individuelle (AESH-I)', 'À jour', '']
                );
              } else {
                downloadCsv('modele_ecoles_personnel.csv',
                  ['rne', 'directeur', 'cpc', 'email', 'telephone'],
                  ['0130248Z', 'MME MARTIN Sophie', 'LECLERC Paul', 'ce.0130248Z@ac-aix-marseille.fr', '0491234567']
                );
              }
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg cursor-pointer"
            title="Télécharger un modèle CSV"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Modèle</span>
          </button>

          <button
            onClick={() => csvInputRef.current?.click()}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg cursor-pointer"
            title="Importer CSV"
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Importer CSV</span>
          </button>

          <button
            onClick={() => {
              if (category === 'erseh' || category === 'ien') setEditingErseh(blankErseh());
              else if (category === 'eleves') setAddingEleve(true);
              else setEditingSchool(blankSchool());
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-lg cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ajouter</span>
          </button>
        </div>

        {/* Import result banner */}
        {importResult && (
          <div className={`px-6 py-2 flex items-center gap-2 text-xs font-semibold border-b ${
            importResult.ok
              ? 'bg-green-50 text-green-700 border-green-200'
              : 'bg-red-50 text-red-700 border-red-200'
          }`}>
            {importResult.ok
              ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
            {importResult.msg}
          </div>
        )}

        {/* Table area */}
        <div className="flex-1 overflow-auto px-3 sm:px-6 py-3 sm:py-4">

          {/* ── Établissements ── */}
          {category === 'schools' && (
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-white sticky top-0">
                  <Th label="Établissement" field="name" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Type" field="type" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Ville" field="city" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="RNE" field="rne" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Directeur·rice" field="directorName" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="ERSEH" field="referentName" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="CPC" field="cpcName" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Dispositif" field="ashDevice" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {filteredSchools.map((school, i) => (
                  <tr key={school.id} className={`border-b border-slate-100 hover:bg-white transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                    <td className="px-3 py-2 font-semibold text-slate-800 max-w-[180px] truncate">{school.name}</td>
                    <td className="px-3 py-2">
                      <Badge label={SCHOOL_TYPE_LABELS[school.type] ?? school.type} color={TYPE_BADGE[school.type] ?? 'bg-slate-100 text-slate-600 border-slate-200'} />
                    </td>
                    <td className="px-3 py-2 text-slate-600">{school.city}</td>
                    <td className="px-3 py-2 text-slate-500 font-mono text-[10px]">{school.rne}</td>
                    <td className="px-3 py-2 text-slate-600 max-w-[140px] truncate">{school.directorName || '—'}</td>
                    <td className="px-3 py-2 text-slate-600 max-w-[120px] truncate">{school.referentName || '—'}</td>
                    <td className="px-3 py-2 text-slate-600 max-w-[120px] truncate">{school.cpcName || '—'}</td>
                    <td className="px-3 py-2">
                      {school.ashDevice.type !== 'NONE' ? (
                        <span className="font-bold text-slate-700">{school.ashDevice.type}</span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setEditingSchool(school)}
                          className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-md cursor-pointer"
                          title="Modifier"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDeletingSchool(school)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md cursor-pointer"
                          title="Supprimer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* ── ERSEH ── */}
          {category === 'erseh' && (
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-white sticky top-0">
                  <Th label="Nom" field="nom" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Prénom" field="prenom" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Secteur" field="secteurCode" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Réseau" field="secteurLabel" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Circonscription" field="circonscription" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Téléphone" field="telephone" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Mail" field="mail" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Ville" field="ville" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {filteredErseh.map((e, i) => (
                  <tr key={e.secteurCode || i} className={`border-b border-slate-100 hover:bg-white transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                    <td className="px-3 py-2 font-semibold text-slate-800">{e.nom}</td>
                    <td className="px-3 py-2 text-slate-700">{e.prenom}</td>
                    <td className="px-3 py-2 font-mono text-[10px] text-slate-500">{e.secteurCode}</td>
                    <td className="px-3 py-2 text-slate-600">{e.secteurLabel ?? '—'}</td>
                    <td className="px-3 py-2">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-semibold">{e.circonscription ?? '—'}</span>
                    </td>
                    <td className="px-3 py-2 text-slate-600">{e.telephone ?? '—'}</td>
                    <td className="px-3 py-2 text-slate-500 max-w-[200px] truncate">{e.mail}</td>
                    <td className="px-3 py-2 text-slate-600">{e.ville ?? '—'}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setEditingErseh(e)}
                          className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-md cursor-pointer"
                          title="Modifier"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setErsehList(prev => prev.filter(r => r !== e))}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md cursor-pointer"
                          title="Supprimer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* ── Directeurs ── */}
          {category === 'directors' && (
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-white sticky top-0">
                  <Th label="Directeur·rice" field="director" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Établissement" field="name" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Type" field="type" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Ville" field="city" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">Tél.</th>
                  <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">Email école</th>
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {filteredDirectors.map(({ school, director }, i) => (
                  <tr key={school.id} className={`border-b border-slate-100 hover:bg-white transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                    <td className="px-3 py-2 font-semibold text-slate-800">{director}</td>
                    <td className="px-3 py-2 text-slate-700">{school.name}</td>
                    <td className="px-3 py-2">
                      <Badge label={SCHOOL_TYPE_LABELS[school.type]} color={TYPE_BADGE[school.type] ?? ''} />
                    </td>
                    <td className="px-3 py-2 text-slate-600">{school.city}</td>
                    <td className="px-3 py-2 text-slate-500">{school.phone || '—'}</td>
                    <td className="px-3 py-2 text-slate-500 max-w-[180px] truncate">{school.email || '—'}</td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() => setEditingSchool(school)}
                        className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-md cursor-pointer"
                        title="Modifier"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* ── CPC ── */}
          {category === 'cpc' && (
            <div className="space-y-3">
              {cpcGroups.map(([cpc, linkedSchools]) => (
                <div key={cpc} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/60">
                    <div>
                      <p className="text-xs font-bold text-slate-800">{cpc}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{linkedSchools.length} établissement{linkedSchools.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 flex flex-wrap gap-2">
                    {linkedSchools.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setEditingSchool(s)}
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-200 rounded-lg text-[11px] text-slate-700 hover:text-brand-700 cursor-pointer transition-colors"
                      >
                        <span>{s.name}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">{s.city}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {cpcGroups.length === 0 && (
                <p className="text-xs text-slate-400 text-center py-12">Aucun CPC trouvé</p>
              )}
            </div>
          )}

          {/* ── IEN ── */}
          {category === 'ien' && (
            <div className="space-y-3">
              {ienGroups.map(([circonscription, referents]) => (
                <div key={circonscription} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/60">
                    <div>
                      <p className="text-xs font-bold text-slate-800">{circonscription}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{referents.length} ERSEH</p>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                          <th className="pb-1.5 text-left pr-4">Nom</th>
                          <th className="pb-1.5 text-left pr-4">Secteur</th>
                          <th className="pb-1.5 text-left pr-4">Réseau</th>
                          <th className="pb-1.5 text-left pr-4">Téléphone</th>
                          <th className="pb-1.5 text-left">Lieu</th>
                          <th className="pb-1.5" />
                        </tr>
                      </thead>
                      <tbody>
                        {referents.map((e, i) => (
                          <tr key={e.secteurCode || i} className="border-b border-slate-50 last:border-0">
                            <td className="py-1.5 pr-4 font-semibold text-slate-700">{e.prenom} {e.nom}</td>
                            <td className="py-1.5 pr-4 font-mono text-[10px] text-slate-500">{e.secteurCode}</td>
                            <td className="py-1.5 pr-4 text-slate-600">{e.secteurLabel ?? '—'}</td>
                            <td className="py-1.5 pr-4 text-slate-500">{e.telephone ?? '—'}</td>
                            <td className="py-1.5 text-slate-500">{e.lieuImplantation ?? '—'}</td>
                            <td className="py-1.5">
                              <button
                                onClick={() => setEditingErseh(e)}
                                className="p-1 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded cursor-pointer"
                              >
                                <Pencil className="w-3 h-3" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              {ienGroups.length === 0 && (
                <p className="text-xs text-slate-400 text-center py-12">Aucune circonscription trouvée</p>
              )}
            </div>
          )}

          {/* ── Élèves ── */}
          {category === 'eleves' && (
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-white sticky top-0">
                  <Th label="Nom"           field="nom"    sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Prénom"        field="prenom" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Naissance"     field="dateNaissance" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Établissement" field="school" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="Niveau"        field="level"  sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="AESH"          field="aesh"   sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <Th label="PPS"           field="pps"    sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                  <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Notes</th>
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {filteredEleves.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-3 py-12 text-center text-xs text-slate-400">
                      Aucun élève enregistré
                    </td>
                  </tr>
                )}
                {filteredEleves.map((e, i) => {
                  const ppsColor =
                    e.ppsStatus === 'À jour' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    e.ppsStatus === 'Révision demandée' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-slate-100 text-slate-600 border-slate-200';
                  return (
                    <tr key={`${e.school.id}-${e.id}`} className={`border-b border-slate-100 hover:bg-white transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                      <td className="px-3 py-2 font-semibold text-slate-800">{e.nom || <span className="text-slate-300">—</span>}</td>
                      <td className="px-3 py-2 text-slate-700">{e.prenom || <span className="text-slate-300">—</span>}</td>
                      <td className="px-3 py-2 text-slate-500 font-mono text-[11px]">
                        {e.dateNaissance ? new Date(e.dateNaissance).toLocaleDateString('fr-FR') : <span className="text-slate-300">—</span>}
                      </td>
                      <td className="px-3 py-2 text-slate-600 max-w-[160px] truncate">{e.school.name}</td>
                      <td className="px-3 py-2 font-bold text-slate-700">{e.level}</td>
                      <td className="px-3 py-2 text-slate-600 max-w-[140px] truncate">{e.aeshType}</td>
                      <td className="px-3 py-2">
                        <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded border ${ppsColor}`}>{e.ppsStatus}</span>
                      </td>
                      <td className="px-3 py-2 text-slate-400 italic max-w-[160px] truncate">{e.notes || '—'}</td>
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setEditingEleve({ student: e, school: e.school })}
                            className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-md cursor-pointer"
                            title="Modifier"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDeletingEleve({ student: e, school: e.school })}
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md cursor-pointer"
                            title="Supprimer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* ── Edit modals ── */}
      {addingEleve && (
        <AddEleveModal
          schools={schools}
          onSave={(school, student) => {
            const newStudents = [...(school.ashStudents ?? []), student];
            onUpdateSchool({ ...school, ashStudents: newStudents, studentsCount: { ...school.studentsCount, total: newStudents.length }, ashDevice: { ...school.ashDevice, assignedStudents: newStudents.length } });
          }}
          onClose={() => setAddingEleve(false)}
        />
      )}

      {editingSchool && (
        <SchoolModal
          school={editingSchool}
          onSave={s => {
            if (schools.some(x => x.id === s.id)) onUpdateSchool(s);
            else onAddSchool(s);
          }}
          onClose={() => setEditingSchool(null)}
        />
      )}

      {editingErseh && (
        <ErsehModal
          erseh={editingErseh}
          onSave={updated => {
            setErsehList(prev =>
              prev.some(e => e === editingErseh)
                ? prev.map(e => e === editingErseh ? updated : e)
                : [...prev, updated]
            );
          }}
          onClose={() => setEditingErseh(null)}
        />
      )}

      {/* ── Élève edit ── */}
      {editingEleve && (
        <AddEleveModal
          schools={schools}
          initialSchoolId={editingEleve.school.id}
          initialStudent={editingEleve.student}
          onSave={(school, student) => {
            const newStudents = (school.ashStudents ?? []).map(s => s.id === student.id ? student : s);
            onUpdateSchool({ ...school, ashStudents: newStudents, studentsCount: { ...school.studentsCount, total: newStudents.length }, ashDevice: { ...school.ashDevice, assignedStudents: newStudents.length } });
          }}
          onClose={() => setEditingEleve(null)}
        />
      )}

      {/* ── Élève delete confirm ── */}
      {deletingEleve && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setDeletingEleve(null)}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-4" onClick={e => e.stopPropagation()}>
            <p className="text-sm font-bold text-slate-900 mb-2">Supprimer cet élève ?</p>
            <p className="text-xs text-slate-500 mb-5">
              <strong>{[deletingEleve.student.prenom, deletingEleve.student.nom].filter(Boolean).join(' ') || 'Cet élève'}</strong> sera retiré de <strong>{deletingEleve.school.name}</strong>. Cette action ne peut pas être annulée.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setDeletingEleve(null)} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                Annuler
              </button>
              <button
                onClick={() => {
                  const school = deletingEleve.school;
                  const newStudents = (school.ashStudents ?? []).filter(s => s.id !== deletingEleve.student.id);
                  onUpdateSchool({ ...school, ashStudents: newStudents, studentsCount: { ...school.studentsCount, total: newStudents.length }, ashDevice: { ...school.ashDevice, assignedStudents: newStudents.length } });
                  setDeletingEleve(null);
                }}
                className="px-4 py-2 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete confirm ── */}
      {deletingSchool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setDeletingSchool(null)}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-4" onClick={e => e.stopPropagation()}>
            <p className="text-sm font-bold text-slate-900 mb-2">Supprimer cet établissement ?</p>
            <p className="text-xs text-slate-500 mb-5">
              <strong>{deletingSchool.name}</strong> ({deletingSchool.city}) sera retiré de la liste.
              Cette action ne peut pas être annulée.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setDeletingSchool(null)} className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                Annuler
              </button>
              <button
                onClick={() => { onDeleteSchool(deletingSchool.id); setDeletingSchool(null); }}
                className="px-4 py-2 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
