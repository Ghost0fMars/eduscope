import { useState } from 'react';
import { School } from '../data/schoolsData';
import { Users, GraduationCap, ShieldCheck, PieChart, ClipboardList, X, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface KPICardsProps {
  filteredSchools: School[];
  totalSchoolsCount: number;
  isSidebarOpen?: boolean;
}

const DEVICE_COLORS: Record<string, string> = {
  TSA:  '#7c3aed',
  TFC:  '#2563eb',
  TSLA: '#4f46e5',
  TFA:  '#0d9488',
  TFM:  '#e11d48',
  TED:  '#f59e0b',
};

const DEVICE_BG: Record<string, string> = {
  TSA:  'bg-purple-50 text-purple-700 border-purple-200',
  TFC:  'bg-brand-50 text-brand-700 border-brand-200',
  TSLA: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  TFA:  'bg-teal-50 text-teal-700 border-teal-200',
  TFM:  'bg-rose-50 text-rose-700 border-rose-200',
  TED:  'bg-amber-50 text-amber-700 border-amber-200',
  NONE: 'bg-slate-100 text-slate-500 border-slate-200',
  SEGPA:'bg-orange-50 text-orange-700 border-orange-200',
};

const TYPE_LABEL: Record<string, string> = {
  elementaire: 'Primaire',
  college: 'Collège',
  lycee: 'Lycée',
};

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <h2 className="text-sm font-bold text-slate-900">{title}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 p-6">{children}</div>
      </div>
    </div>
  );
}

export default function KPICards({ filteredSchools, totalSchoolsCount, isSidebarOpen }: KPICardsProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const { totalPupils, totalCapacity } = filteredSchools.reduce(
    (acc, school) => {
      const devices = school.ashDevices ?? [school.ashDevice];
      return {
        totalPupils: acc.totalPupils + (school.ashStudents?.length ?? devices.reduce((s, d) => s + d.assignedStudents, 0)),
        totalCapacity: acc.totalCapacity + devices.reduce((s, d) => s + d.capacity, 0),
      };
    },
    { totalPupils: 0, totalCapacity: 0 }
  );

  const occupancyRate = totalCapacity > 0 ? Math.round((totalPupils / totalCapacity) * 100) : 0;

  // Donnée non disponible : l'application ne stocke plus de dossiers élèves nominatifs.
  const listeAttenteCount = 0;

  const schoolsWithSuccessRate = filteredSchools.filter(s => s.successRate !== undefined);
  const avgSuccessRate = schoolsWithSuccessRate.length > 0
    ? Math.round((schoolsWithSuccessRate.reduce((sum, s) => sum + (s.successRate || 0), 0) / schoolsWithSuccessRate.length) * 10) / 10
    : 89.4;

  const deviceCounts: Record<string, number> = {
    TSA: 0, TFC: 0, TSLA: 0, TFA: 0, TFM: 0, TED: 0,
  };
  filteredSchools.forEach(school => {
    const devices = school.ashDevices ?? [school.ashDevice];
    for (const d of devices) {
      if (d.type in deviceCounts) deviceCounts[d.type]++;
    }
  });

  const totalDevicesMap = Object.values(deviceCounts).reduce((a, b) => a + b, 0);

  // ── Contenu des modaux ──

  const modalSchools = (
    <div className="space-y-3">
      <p className="text-xs text-slate-500 mb-4">
        <strong className="text-slate-800">{filteredSchools.length}</strong> établissements affichés sur <strong className="text-slate-800">{totalSchoolsCount}</strong> au total.
      </p>
      {(['elementaire', 'college', 'lycee'] as const).map(type => {
        const group = filteredSchools.filter(s => s.type === type);
        if (group.length === 0) return null;
        return (
          <div key={type}>
            <h3 className="text-xs font-semibold text-slate-400 mb-2">{TYPE_LABEL[type]} — {group.length}</h3>
            <div className="space-y-1.5">
              {group.map(s => {
                const devices = s.ashDevices ?? [s.ashDevice];
                const mainDevice = devices.find(d => d.type !== 'NONE') ?? devices[0];
                return (
                  <div key={s.id} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                    <div>
                      <span className="text-xs font-bold text-slate-800">{s.name}</span>
                      <span className="text-[10px] text-slate-400 ml-2">{s.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-slate-400">{s.rne}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${DEVICE_BG[mainDevice.type]}`}>
                        {mainDevice.type}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  const modalEffectifs = (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 text-center">
          <p className="text-2xl font-extrabold text-brand-700">{totalPupils}</p>
          <p className="text-[10px] text-brand-500 font-medium mt-0.5">Élèves affectés</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
          <p className="text-2xl font-extrabold text-slate-700">{totalCapacity}</p>
          <p className="text-[10px] text-slate-400 font-medium mt-0.5">Places totales</p>
        </div>
        <div className={`border rounded-xl p-3 text-center ${occupancyRate >= 90 ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50 border-emerald-100'}`}>
          <p className={`text-2xl font-extrabold ${occupancyRate >= 90 ? 'text-rose-600' : 'text-emerald-600'}`}>{occupancyRate}%</p>
          <p className={`text-[10px] font-medium mt-0.5 ${occupancyRate >= 90 ? 'text-rose-400' : 'text-emerald-400'}`}>Occupation</p>
        </div>
      </div>
      {listeAttenteCount > 0 && (
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700 font-semibold">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
          {listeAttenteCount} élèves en liste d'attente sur le périmètre filtré
        </div>
      )}
      <h3 className="text-xs font-semibold text-slate-400">Détail par établissement</h3>
      <div className="space-y-2">
        {filteredSchools
          .filter(s => (s.ashDevices ?? [s.ashDevice]).some(d => d.type !== 'NONE'))
          .sort((a, b) => {
            const aAssigned = a.ashStudents?.length ?? (a.ashDevices ?? [a.ashDevice]).reduce((s, d) => s + d.assignedStudents, 0);
            const bAssigned = b.ashStudents?.length ?? (b.ashDevices ?? [b.ashDevice]).reduce((s, d) => s + d.assignedStudents, 0);
            const aCap = Math.max(1, (a.ashDevices ?? [a.ashDevice]).reduce((s, d) => s + d.capacity, 0));
            const bCap = Math.max(1, (b.ashDevices ?? [b.ashDevice]).reduce((s, d) => s + d.capacity, 0));
            return (bAssigned / bCap) - (aAssigned / aCap);
          })
          .map(s => {
            const devices = s.ashDevices ?? [s.ashDevice];
            const assigned = s.ashStudents?.length ?? devices.reduce((sum, d) => sum + d.assignedStudents, 0);
            const capacity = devices.reduce((sum, d) => sum + d.capacity, 0);
            const pct = capacity > 0 ? Math.round((assigned / capacity) * 100) : 0;
            const isFull = assigned >= capacity;
            return (
              <div key={s.id} className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-800">{s.name}</span>
                  <span className={`text-[10px] font-bold ${isFull ? 'text-rose-600' : 'text-slate-500'} flex items-center gap-1`}>
                    {isFull && <AlertTriangle className="w-3 h-3" />}
                    {assigned}/{capacity}
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${isFull ? 'bg-rose-500' : pct >= 80 ? 'bg-amber-400' : 'bg-brand-600'}`}
                    style={{ width: `${Math.min(100, pct)}%` }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

  const modalExamens = (
    <div className="space-y-4">
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4 mb-4">
        <div>
          <p className="text-3xl font-extrabold text-emerald-700">{avgSuccessRate}%</p>
          <p className="text-xs text-emerald-600 font-semibold">Moyenne générale — Brevet & Bac 2025</p>
        </div>
        <div className="flex items-center gap-1.5 ml-auto bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
          <CheckCircle2 className="w-3.5 h-3.5" />
          +1.2% vs 2024
        </div>
      </div>
      {schoolsWithSuccessRate.length > 0 ? (
        <>
          <h3 className="text-xs font-semibold text-slate-400">Classement par taux de réussite</h3>
          <div className="space-y-2">
            {[...schoolsWithSuccessRate]
              .sort((a, b) => (b.successRate ?? 0) - (a.successRate ?? 0))
              .map((s, i) => (
                <div key={s.id} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5">
                  <span className="text-[10px] font-black text-slate-300 w-5 shrink-0">#{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-800 truncate">{s.name}</p>
                    <p className="text-[10px] text-slate-400">{TYPE_LABEL[s.type]} — {s.city}</p>
                  </div>
                  <div className="w-24 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${s.successRate}%` }} />
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 w-12 text-right">{s.successRate}%</span>
                </div>
              ))}
          </div>
        </>
      ) : (
        <p className="text-xs text-slate-400 italic text-center py-6">Aucune donnée de taux de réussite disponible pour le filtre actuel.</p>
      )}
    </div>
  );

  const modalDispositifs = (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3 mb-2">
        {Object.entries(deviceCounts).map(([type, count]) => (
          <div key={type} className={`border rounded-xl p-3 text-center ${DEVICE_BG[type]}`}>
            <p className="text-xl font-extrabold">{count}</p>
            <p className="text-[10px] font-bold uppercase mt-0.5">{type}</p>
          </div>
        ))}
      </div>
      {Object.entries(deviceCounts)
        .filter(([, count]) => count > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([type, total]) => {
          const schools = filteredSchools.filter(s =>
            (s.ashDevices ?? [s.ashDevice]).some(d => d.type === type)
          );
          return (
            <div key={type}>
              <h3 className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: DEVICE_COLORS[type] }} />
                {type} — {total} établissement{total > 1 ? 's' : ''}
              </h3>
              <div className="space-y-1.5">
                {schools.map(s => {
                  const d = (s.ashDevices ?? [s.ashDevice]).find(d => d.type === type)!;
                  return (
                    <div key={s.id} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                      <div>
                        <span className="text-xs font-bold text-slate-800">{s.name}</span>
                        <span className="text-[10px] text-slate-400 ml-2">{s.city}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-semibold">{d.assignedStudents}/{d.capacity} pl.</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );

  const modalCommissions = (
    <div className="space-y-4">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-slate-600 mb-1">Aucune donnée élève importée</p>
        <p className="text-xs text-slate-400 leading-relaxed">
          Pour des raisons de protection des données, l'application ne stocke aucune information
          nominative sur les élèves. Cet espace s'activera lors d'une prochaine importation,
          réalisée dans le respect du cadre RGPD.
        </p>
      </div>
    </div>
  );

  const minimized = !!isSidebarOpen;
  const cardBase = minimized
    ? 'bg-white rounded-xl shadow-xs border border-gray-100 p-2.5 transition-all duration-200 cursor-pointer hover:shadow-md hover:border-brand-200 active:scale-100 select-none flex flex-col justify-between'
    : 'bg-white rounded-xl shadow-xs border border-gray-100 p-4 transition-all duration-200 cursor-pointer hover:shadow-md hover:scale-[1.02] hover:border-brand-200 active:scale-100 select-none';

  return (
    <>
      {activeModal === 'schools'      && <Modal title="Établissements suivis"        onClose={() => setActiveModal(null)}>{modalSchools}</Modal>}
      {activeModal === 'effectifs'    && <Modal title="Effectifs ULIS / ASH"         onClose={() => setActiveModal(null)}>{modalEffectifs}</Modal>}
      {activeModal === 'examens'      && <Modal title="Taux de réussite aux examens" onClose={() => setActiveModal(null)}>{modalExamens}</Modal>}
      {activeModal === 'dispositifs'  && <Modal title="Répartition des dispositifs"  onClose={() => setActiveModal(null)}>{modalDispositifs}</Modal>}
      {activeModal === 'commissions'  && <Modal title="Dossiers en commission"       onClose={() => setActiveModal(null)}>{modalCommissions}</Modal>}

      <div className={minimized ? 'grid grid-cols-5 gap-2 mb-3' : 'grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'}>

        {/* ── FEATURED: Effectifs ULIS / ASH (spans 2 of 3 columns in full mode) ── */}
        <div
          className={minimized
            ? cardBase
            : 'bg-white rounded-xl shadow-xs border border-gray-100 p-5 transition-all duration-200 cursor-pointer hover:shadow-md hover:border-brand-200 active:scale-100 select-none md:col-span-2 flex flex-col justify-between'
          }
          onClick={() => setActiveModal('effectifs')}
          id="kpi-pupils"
        >
          {minimized ? (
            /* Compact layout — same as other cards */
            <>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-slate-400 truncate">Effectifs ASH</span>
                <div className="p-1 bg-brand-50 text-brand-600 rounded-md">
                  <Users className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-slate-900 tabular-nums">{totalPupils}</span>
                <span className="text-xs text-gray-400">élèves</span>
              </div>
              <div className="mt-1 flex flex-col gap-0.5">
                <div className="flex justify-between text-[9px] text-gray-500">
                  <span>Occ. : {occupancyRate}%</span>
                  <span>Max : {totalCapacity}</span>
                </div>
                {listeAttenteCount > 0 && (
                  <div className="flex items-center gap-1 text-[9px] text-amber-700 font-semibold">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{listeAttenteCount} en attente</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Wide featured layout — number left, capacity viz right */
            <>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-slate-400">Effectifs ULIS / ASH</span>
                <div className="p-2 bg-brand-50 text-brand-600 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-end gap-8">
                {/* Primary metric */}
                <div className="shrink-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-slate-900 tabular-nums leading-none">{totalPupils}</span>
                    <span className="text-sm text-gray-400 mb-0.5">élèves affectés</span>
                  </div>
                  {listeAttenteCount > 0 ? (
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                      <span className="text-xs text-amber-700 font-medium">{listeAttenteCount} en liste d'attente</span>
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                      <span className="text-xs text-emerald-600 font-medium">Aucune liste d'attente</span>
                    </div>
                  )}
                </div>
                {/* Capacity visualization */}
                <div className="flex-1 min-w-0 pb-1">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs text-gray-500 font-medium">{totalPupils} placés sur {totalCapacity} places</span>
                    <span className={`text-sm font-bold tabular-nums ${occupancyRate >= 90 ? 'text-rose-600' : 'text-slate-700'}`}>{occupancyRate}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${occupancyRate >= 90 ? 'bg-rose-500' : occupancyRate >= 75 ? 'bg-amber-400' : 'bg-brand-600'}`}
                      style={{ width: `${Math.min(100, occupancyRate)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1.5 block">Taux d'occupation des dispositifs sur le périmètre filtré</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* ── Dossiers Commission ── */}
        <div className={cardBase} onClick={() => setActiveModal('commissions')} id="kpi-commissions">
          <div className="flex items-center justify-between mb-1">
            <span className={minimized ? "text-[10px] font-medium text-slate-400 truncate" : "text-xs font-medium text-slate-400"}>
              {minimized ? "Dossiers Comm." : "Dossiers Commission"}
            </span>
            <div className={minimized ? "p-1 bg-slate-100 text-slate-400 rounded-md" : "p-2 bg-slate-100 text-slate-400 rounded-lg"}>
              <ClipboardList className={minimized ? "w-3.5 h-3.5" : "w-5 h-5"} />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className={minimized ? "text-xl font-bold text-slate-300 tabular-nums" : "text-3xl font-bold text-slate-300 tabular-nums"}>—</span>
            <span className="text-xs text-gray-400">en attente d'import</span>
          </div>
          <div className={minimized ? "mt-1 flex items-center justify-between gap-1 text-[9px]" : "mt-3 flex items-center justify-between"}>
            <span className={minimized ? "text-slate-400 truncate" : "text-xs text-slate-400"}>
              Aucune donnée élève stockée
            </span>
          </div>
        </div>

        {/* ── Établissements ── */}
        <div className={cardBase} onClick={() => setActiveModal('schools')} id="kpi-schools">
          <div className="flex items-center justify-between mb-1">
            <span className={minimized ? "text-[10px] font-medium text-slate-400 truncate" : "text-xs font-medium text-slate-400"}>
              Échange & Suivi
            </span>
            <div className={minimized ? "p-1 bg-brand-50 text-brand-600 rounded-md" : "p-2 bg-brand-50 text-brand-600 rounded-lg"}>
              <ShieldCheck className={minimized ? "w-3.5 h-3.5" : "w-5 h-5"} />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className={minimized ? "text-xl font-bold text-gray-900 tabular-nums" : "text-3xl font-bold text-gray-900 tabular-nums"}>{filteredSchools.length}</span>
            <span className="text-xs text-gray-400">{minimized ? `/ ${totalSchoolsCount}` : `sur ${totalSchoolsCount} totaux`}</span>
          </div>
          <div className={minimized ? "mt-1 flex items-center gap-1" : "mt-3 flex items-center gap-1.5"}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className={minimized ? "text-[9px] text-gray-500 truncate" : "text-xs text-gray-500"}>
              {minimized ? "Sync OK" : "Flux de synchronisation académique OK"}
            </span>
          </div>
        </div>

        {/* ── Taux de réussite aux examens ── */}
        <div className={cardBase} onClick={() => setActiveModal('examens')} id="kpi-exams">
          <div className="flex items-center justify-between mb-1">
            <span className={minimized ? "text-[10px] font-medium text-slate-400 truncate" : "text-xs font-medium text-slate-400"}>
              Taux Insertion / Ex.
            </span>
            <div className={minimized ? "p-1 bg-slate-100 text-slate-600 rounded-md" : "p-2 bg-slate-100 text-slate-600 rounded-lg"}>
              <GraduationCap className={minimized ? "w-3.5 h-3.5" : "w-5 h-5"} />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className={minimized ? "text-xl font-bold text-slate-900 tabular-nums" : "text-3xl font-bold text-slate-900 tabular-nums"}>{avgSuccessRate}%</span>
            {!minimized && <span className="text-xs text-gray-400">moyenne examens</span>}
          </div>
          <div className={minimized ? "mt-1 flex items-center justify-between" : "mt-3 flex items-center justify-between"}>
            <span className={minimized ? "text-[9px] text-slate-400" : "text-xs text-slate-500"}>
              {minimized ? "Moyenne" : "Brevet & Bac (Sec. Ordinaire)"}
            </span>
            <span className={minimized ? "text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1 rounded-full" : "text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full"}>
              {minimized ? "+1.2%" : "+1.2% vs 2025"}
            </span>
          </div>
        </div>

        {/* ── Répartition dispositifs ── */}
        <div className={cardBase} onClick={() => setActiveModal('dispositifs')} id="kpi-devices">
          <div className="flex items-center justify-between mb-1.5">
            <span className={minimized ? "text-[10px] font-medium text-slate-400 truncate" : "text-xs font-medium text-slate-400"}>
              {minimized ? "Dispositifs" : "Répartition Dispositifs"}
            </span>
            <div className={minimized ? "text-[9px] bg-slate-100 text-slate-700 font-semibold px-1 rounded-full" : "p-1 px-2 text-[10px] bg-slate-100 text-slate-700 font-medium rounded-full flex items-center gap-1"}>
              {!minimized && <PieChart className="w-3 h-3 text-slate-500" />}
              {minimized ? totalDevicesMap : `ULIS : ${totalDevicesMap}`}
            </div>
          </div>
          {!minimized ? (
            <div className="space-y-1 mt-1">
              {Object.entries(deviceCounts).map(([type, count]) => {
                const percentage = totalDevicesMap > 0 ? (count / totalDevicesMap) * 100 : 0;
                return (
                  <div key={type} className="flex items-center gap-2 text-[10px]">
                    <span className="font-bold text-gray-700 w-8">{type}</span>
                    <div className="flex-1 bg-gray-100 h-2 rounded-sm overflow-hidden">
                      <div className="h-full rounded-sm" style={{ width: `${percentage}%`, backgroundColor: DEVICE_COLORS[type] ?? '#94a3b8' }} />
                    </div>
                    <span className="text-gray-500 font-semibold w-5 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-x-1 gap-y-0.5 mt-1">
              {Object.entries(deviceCounts).map(([type, count]) => (
                <div key={type} className="flex items-center gap-0.5 text-[9px]">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: DEVICE_COLORS[type] ?? '#94a3b8' }} />
                  <span className="font-bold text-gray-700">{type}</span>
                  <span className="text-gray-500 ml-auto font-semibold">{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  );
}
