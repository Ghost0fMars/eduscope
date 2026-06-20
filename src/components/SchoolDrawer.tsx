import { useState, useEffect } from 'react';
import { School, DEVICE_LABELS } from '../data/schoolsData';
import { X, School as SchoolIcon, Save, ShieldAlert, Mail, ChevronRight, User, Car, Clock, FileText, Calendar, Phone } from 'lucide-react';

// Normalisation des e-mails académiques : prenom.nom@ac-aix-marseille.fr
function getReferentEmail(name: string): string {
  if (!name || name === 'nan' || name === 'Non renseigné') return '';
  const cleanName = name.split('(')[0].trim();
  const parts = cleanName.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const lastName = parts[0].toLowerCase();
    const firstName = parts[1].toLowerCase();
    const removeAccents = (str: string) =>
      str.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9.-]/g, "");
    return `${removeAccents(firstName)}.${removeAccents(lastName)}@ac-aix-marseille.fr`;
  }
  const fallback = name.toLowerCase().replace(/\s+/g, '.').normalize("NFD").replace(/[̀-ͯ]/g, "");
  return `${fallback}@ac-aix-marseille.fr`;
}

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

export default function SchoolDrawer({ school, onClose, onUpdateSchool }: SchoolDrawerProps) {
  const [baseChecked, setBaseChecked] = useState(school.ashDevice.baseChecked);
  const [valChecked, setValChecked] = useState(school.ashDevice.valChecked);
  const [comments, setComments] = useState(school.ashDevice.comments);
  const [successMsg, setSuccessMsg] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<MockStudentCase | null>(null);

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
    <div className="bg-white overflow-hidden flex flex-col h-full" id={`school-pane-${school.rne}`}>
      {/* DRAWER HEADER */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-start shrink-0">
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase border border-slate-200">
              {school.type}
            </span>
            <span className="text-[10px] font-mono text-slate-400 font-bold">RNE: {school.rne}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight block truncate">{school.name}</h3>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <SchoolIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold">{school.city}</span>
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 font-bold text-xs transition-transform cursor-pointer shadow-xs border border-slate-200 shrink-0 ml-2"
          id="btn-close-drawer"
        >
          <X className="w-4 h-4" />
        </button>
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
                {school.studentsCount.total} <span className="text-xs font-normal text-brand-400">élèves</span>
              </p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-[10px] text-emerald-600 font-medium mb-1.5">Réussite Examens</p>
              <p className="text-xl font-extrabold text-emerald-600 font-sans">{school.successRate !== undefined ? `${school.successRate}%` : "89.4%"}</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5">
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
                  Inclusion: {school.ashDevice.assignedStudents} / {school.ashDevice.capacity} places
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
            {school.directorName && school.directorName !== 'nan' ? (
              <a
                href={school.email ? `mailto:${school.email}` : '#'}
                onClick={e => {
                  if (!school.email) e.preventDefault();
                }}
                title={school.email ? `Envoyer un e-mail au Directeur (${school.email})` : "E-mail non renseigné"}
                className={`bg-slate-50 p-2 rounded border border-slate-200 block transition-all group ${
                  school.email
                    ? 'hover:bg-slate-100 hover:border-slate-200 cursor-pointer shadow-xs'
                    : 'cursor-default'
                }`}
              >
                <span className="text-[10px] text-slate-400 font-medium block flex items-center justify-between">
                  <span>Direction</span>
                  {school.email && (
                    <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500 transition-colors shrink-0" />
                  )}
                </span>
                <span className="text-[11px] font-extrabold text-slate-800 break-words mt-0.5 block group-hover:text-brand-600 transition-colors">
                  {school.directorName}
                </span>
                {school.email && (
                  <span className="text-[8px] font-mono text-slate-400 block truncate mt-1">
                    {school.email}
                  </span>
                )}
              </a>
            ) : (
              <div className="bg-slate-50 p-2 rounded border border-slate-200">
                <span className="text-[10px] text-slate-400 font-medium block">Direction</span>
                <span className="text-[11px] font-extrabold text-slate-400 italic mt-0.5 block">Non renseignée</span>
              </div>
            )}

            {school.referentName && school.referentName !== 'nan' ? (
              (() => {
                const referentEmail = school.referentEmail?.trim();
                return referentEmail ? (
                  <a
                    href={`mailto:${referentEmail}`}
                    title={`Envoyer un e-mail au Référent (${referentEmail})`}
                    className="bg-slate-50 p-2 rounded border border-slate-200 block hover:bg-slate-100 hover:border-slate-200 shadow-xs transition-all cursor-pointer group"
                  >
                    <span className="text-[10px] text-slate-400 font-medium block flex items-center justify-between">
                      <span>ERSEH Référent</span>
                      <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500 transition-colors shrink-0" />
                    </span>
                    <span className="text-[11px] font-extrabold text-brand-700 break-words mt-0.5 block group-hover:text-brand-800 transition-colors">
                      {school.referentName}
                    </span>
                    <div className="text-[8px] font-mono text-slate-400 block truncate mt-1">
                      <div>{referentEmail}</div>
                      {school.referentPhone && <div>{school.referentPhone}</div>}
                    </div>
                  </a>
                ) : (
                  <div className="bg-slate-50 p-2 rounded border border-slate-200">
                    <span className="text-[10px] text-slate-400 font-medium block">ERSEH Référent</span>
                    <span className="text-[11px] font-extrabold text-slate-800 break-words mt-0.5 block">
                      {school.referentName}
                    </span>
                    {school.referentPhone && (
                      <span className="text-[8px] font-mono text-slate-400 block truncate mt-1">
                        {school.referentPhone}
                      </span>
                    )}
                    <span className="text-[8px] text-slate-500 block mt-1">E-mail non renseigné</span>
                  </div>
                );
              })()
            ) : (
              <div className="bg-slate-50 p-2 rounded border border-slate-200">
                <span className="text-[10px] text-slate-400 font-medium block">ERSEH Référent</span>
                <span className="text-[11px] font-extrabold text-slate-400 italic mt-0.5 block">Non renseigné</span>
              </div>
            )}

            {school.cpcName && school.cpcName !== 'nan' && school.cpcName.trim() !== '' ? (
              <a
                href={`mailto:${getReferentEmail(school.cpcName)}`}
                title={`Envoyer un e-mail au Conseiller CPC (${getReferentEmail(school.cpcName)})`}
                className="bg-slate-50 p-2 rounded border border-slate-200 block hover:bg-slate-100 hover:border-slate-200 shadow-xs transition-all cursor-pointer group"
              >
                <span className="text-[10px] text-slate-400 font-medium block flex items-center justify-between">
                  <span>Conseiller CPC</span>
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500 transition-colors shrink-0" />
                </span>
                <span className="text-[11px] font-extrabold text-slate-800 break-words mt-0.5 block group-hover:text-brand-600 transition-colors">
                  {school.cpcName}
                </span>
                <span className="text-[8px] font-mono text-slate-400 block truncate mt-1">
                  {getReferentEmail(school.cpcName)}
                </span>
              </a>
            ) : (
              <div className="bg-slate-50 p-2 rounded border border-slate-200">
                <span className="text-[10px] text-slate-400 font-medium block">Conseiller CPC</span>
                <span className="text-[11px] font-extrabold text-slate-400 italic mt-0.5 block">Non renseigné</span>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 3: CLASSROOM STATISTICS */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 flex items-center">
            <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
            Répartition par Niveau
          </h4>

          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 space-y-2 text-xs">
            {Object.entries(school.studentsCount.byLevel).map(([lvl, qty]) => {
              const maxLvlValue = Math.max(...Object.values(school.studentsCount.byLevel));
              const progressPct = maxLvlValue > 0 ? (qty / maxLvlValue) * 100 : 0;
              return (
                <div key={lvl} className="text-xs">
                  <div className="flex justify-between mb-0.5 font-bold text-slate-700">
                    <span>{lvl}</span>
                    <span>{qty}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-600 h-1.5 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: PUPILS PATHWAYS FOR SPECIAL NEEDS */}
        {school.ashDevice.type !== 'NONE' && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 flex items-center">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
              Parcours des Elèves Rattachés (Dispositif ASH)
            </h4>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-xs font-semibold text-slate-600 mb-1">Aucune donnée élève stockée</p>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Conformément au RGPD (protection des données personnelles), aucun dossier nominatif d'élève n'est conservé dans l'application.
              </p>
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
