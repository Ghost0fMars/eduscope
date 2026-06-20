import { useRef, useState, useEffect } from 'react';
import { School, DEVICE_LABELS } from '../data/schoolsData';
// Recherche par élève retirée (données nominatives non stockées dans l'application)
import { Search, Filter, RefreshCw, CheckCircle2, AlertTriangle } from 'lucide-react';

const TYPE_LABELS: Record<string, string> = {
  elementaire: 'Primaire',
  college: 'Collège',
  lycee: 'Lycée',
};

type MatchKind = 'school' | 'director' | 'erseh';

interface Suggestion {
  school: School;
  kind: MatchKind;
  matchLabel?: string;
}

const KIND_LABELS: Record<MatchKind, string> = {
  school:   'École',
  director: 'Directeur',
  erseh:    'ERSEH',
};

const KIND_COLORS: Record<MatchKind, string> = {
  school:   'bg-brand-100 text-brand-700',
  director: 'bg-violet-100 text-violet-700',
  erseh:    'bg-teal-100 text-teal-700',
};

function buildSuggestions(schools: School[], rawQuery: string): Suggestion[] {
  const q = rawQuery.toLowerCase().trim();
  if (q.length < 2) return [];
  const results: Suggestion[] = [];
  const seen = new Set<string>();

  const add = (s: Suggestion) => {
    const key = `${s.kind}-${s.school.id}-${s.matchLabel ?? ''}`;
    if (!seen.has(key)) { seen.add(key); results.push(s); }
  };

  for (const school of schools) {
    if (results.length >= 10) break;

    if (school.name.toLowerCase().includes(q) || school.rne.toLowerCase().includes(q) || school.city.toLowerCase().includes(q))
      add({ school, kind: 'school' });

    if (school.directorName && school.directorName.toLowerCase().includes(q))
      add({ school, kind: 'director', matchLabel: school.directorName });

    if (school.referentName && school.referentName.toLowerCase().includes(q))
      add({ school, kind: 'erseh', matchLabel: school.referentName });

    if (school.secteurERSEH && school.secteurERSEH.toLowerCase().replace(/_/g, ' ').includes(q))
      add({ school, kind: 'erseh', matchLabel: school.secteurERSEH.replace(/_/g, ' ') });
  }

  return results.slice(0, 8);
}

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  selectedDevice: string;
  setSelectedDevice: (val: string) => void;
  resetFilters: () => void;
  hasMismatches: boolean;
  filteredSchoolsCount: number;
  totalSchoolsCount: number;
  schools: School[];
  onSelectSchool: (school: School) => void;
}

export default function Filters({
  searchTerm, setSearchTerm,
  selectedType, setSelectedType,
  selectedDevice, setSelectedDevice,
  resetFilters,
  hasMismatches,
  filteredSchoolsCount, totalSchoolsCount,
  schools, onSelectSchool,
}: FiltersProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = buildSuggestions(schools, searchTerm);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(school: School) {
    onSelectSchool(school);
    setSearchTerm('');
    setShowSuggestions(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs space-y-5" id="filters-container">

      {/* En-tête */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <h2 className="text-base font-bold text-gray-800">Filtres</h2>
        </div>
        <button
          onClick={resetFilters}
          className="text-xs flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-medium transition-colors"
          id="btn-reset-filters"
        >
          <RefreshCw className="w-3 h-3" />
          Réinitialiser
        </button>
      </div>

      {/* Recherche */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-500 block">
          Recherche
        </label>
        <div className="relative" ref={containerRef}>
          <input
            type="text"
            placeholder="École, directeur, ERSEH, élève…"
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setShowSuggestions(true); }}
            onFocus={() => setShowSuggestions(true)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-4 text-xs text-gray-700 outline-hidden focus:bg-white focus:border-brand-500 transition-all placeholder:text-gray-400 font-medium"
            id="input-search"
            autoComplete="off"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />

          {/* Dropdown suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onMouseDown={() => handleSelect(s.school)}
                  className="w-full text-left px-3 py-2.5 hover:bg-brand-50 transition-colors border-b border-slate-100 last:border-0 flex items-center gap-2.5"
                >
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${KIND_COLORS[s.kind]}`}>
                        {KIND_LABELS[s.kind]}
                      </span>
                      {s.kind !== 'school' && (
                        <p className="text-xs font-semibold text-slate-800 truncate">{s.matchLabel}</p>
                      )}
                      {s.kind === 'school' && (
                        <p className="text-xs font-semibold text-slate-800 truncate">{s.school.name}</p>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium truncate">
                      {s.kind !== 'school' ? s.school.name + ' · ' : ''}{s.school.city} · {TYPE_LABELS[s.school.type]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Type d'établissement */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-500 block">
          Type d'établissement
        </label>
        <div className="space-y-1">
          {[
            { value: 'ALL',         label: 'Tous niveaux' },
            { value: 'elementaire', label: 'Primaires'    },
            { value: 'college',     label: 'Collèges'     },
            { value: 'lycee',       label: 'Lycées'       },
          ].map(item => (
            <button
              key={item.value}
              onClick={() => setSelectedType(item.value)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center justify-between ${
                selectedType === item.value
                  ? 'bg-slate-100 border-slate-300 text-slate-900 font-bold'
                  : 'bg-white border-transparent text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{item.label}</span>
              {selectedType === item.value && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dispositif ASH */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-slate-500 block">
          Dispositif ASH / ULIS
        </label>
        <select
          value={selectedDevice}
          onChange={e => setSelectedDevice(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-gray-700 outline-hidden focus:bg-white focus:border-brand-500 transition-all font-semibold"
          id="select-device"
        >
          <option value="ALL">Tous les dispositifs</option>
          {Object.entries(DEVICE_LABELS)
            .filter(([code]) => code !== 'NONE')
            .map(([code, label]) => (
              <option key={code} value={code}>{code} · {label}</option>
            ))}
        </select>
      </div>

      {/* Statut validation */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3" id="validation-note">
        <div className="flex gap-2">
          {hasMismatches
            ? <AlertTriangle  className="w-4 h-4 text-amber-600  shrink-0 mt-0.5" />
            : <CheckCircle2   className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          }
          <div className="space-y-0.5">
            <h4 className="text-[11px] font-bold text-gray-800">Validation CPC</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">
              {hasMismatches
                ? "Certaines données nécessitent des rectifications urgentes."
                : "Toutes les affectations correspondent aux bilans MDPH."}
            </p>
          </div>
        </div>
      </div>

      {/* Compteur */}
      <div className="pt-2">
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
          <p className="text-[10px] text-slate-400 font-medium mb-1">
            Établissements sélectionnés
          </p>
          <p className="text-2xl font-bold font-sans text-slate-800">
            {filteredSchoolsCount}{' '}
            <span className="text-xs font-normal text-slate-400">/ {totalSchoolsCount}</span>
          </p>
          <div className="w-full bg-slate-200 h-1 mt-2.5 rounded-full overflow-hidden">
            <div
              className="bg-brand-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${(filteredSchoolsCount / totalSchoolsCount) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
