import { useState, useEffect } from 'react';
import { schoolsData, School } from './data/schoolsData';
// Recherche par élève retirée (données nominatives non stockées dans l'application)
import AcademyMap from './components/AcademyMap';
import Filters from './components/Filters';
import KPICards from './components/KPICards';
import SchoolDrawer from './components/SchoolDrawer';
import PDFReport from './components/PDFReport';
import KanbanView from './kanban/KanbanView';
import AgendaView from './agenda/AgendaView';
import DatabaseView from './database/DatabaseView';
import { Printer, LayoutDashboard, Kanban, CalendarDays, Database } from 'lucide-react';

function syncSchoolCounts(schools: School[]): School[] {
  return schools.map(s => {
    const count = s.ashStudents?.length ?? 0;
    return {
      ...s,
      studentsCount: { ...s.studentsCount, total: count },
      ashDevice: { ...s.ashDevice, assignedStudents: count },
    };
  });
}

export default function App() {
  const [schools, setSchools] = useState<School[]>(syncSchoolCounts(schoolsData));

  // Charge les établissements depuis le serveur (données persistées)
  useEffect(() => {
    fetch('/api/schools')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setSchools(syncSchoolCounts(data));
      })
      .catch(() => {});
  }, []);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedDevice, setSelectedDevice] = useState('ALL');
  const [showReport, setShowReport] = useState(false);
  const [activeView, setActiveView] = useState<'dashboard' | 'kanban' | 'agenda' | 'database'>(
    () => (localStorage.getItem('eduscope_activeView') as 'dashboard' | 'kanban' | 'agenda' | 'database') || 'dashboard'
  );

  const handleSetActiveView = (view: 'dashboard' | 'kanban' | 'agenda' | 'database') => {
    localStorage.setItem('eduscope_activeView', view);
    setActiveView(view);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('ALL');
    setSelectedDevice('ALL');
  };

  const handleUpdateSchool = (updatedSchool: School) => {
    const count = updatedSchool.ashStudents?.length ?? 0;
    const synced: School = {
      ...updatedSchool,
      studentsCount: { ...updatedSchool.studentsCount, total: count },
      ashDevice: { ...updatedSchool.ashDevice, assignedStudents: count },
    };
    setSchools(prev => prev.map(s => s.id === synced.id ? synced : s));
    setSelectedSchool(prev => prev && prev.id === synced.id ? synced : prev);
    fetch(`/api/schools/${updatedSchool.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(synced),
    }).catch(console.error);
  };

  const handleAddSchool = (newSchool: School) => {
    setSchools(prev => [...prev, newSchool]);
    fetch('/api/schools', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSchool),
    }).catch(console.error);
  };

  const handleDeleteSchool = (id: string) => {
    setSchools(prev => prev.filter(s => s.id !== id));
    setSelectedSchool(prev => prev?.id === id ? null : prev);
    fetch(`/api/schools/${id}`, { method: 'DELETE' }).catch(console.error);
  };

  const filteredSchools = schools.filter(school => {
    if (searchTerm) {
      const q = searchTerm.toLowerCase().trim();
      if (q.length < 2) return true;
      const matchName     = school.name.toLowerCase().includes(q);
      const matchCity     = school.city.toLowerCase().includes(q);
      const matchRne      = school.rne.toLowerCase().includes(q);
      const matchDirector = school.directorName?.toLowerCase().includes(q) ?? false;
      const matchErseh    = school.referentName?.toLowerCase().includes(q) ?? false;
      const matchSecteur  = school.secteurERSEH?.toLowerCase().replace(/_/g, ' ').includes(q) ?? false;
      if (!matchName && !matchCity && !matchRne && !matchDirector && !matchErseh && !matchSecteur) return false;
    }
    if (selectedType !== 'ALL' && school.type !== selectedType) {
      return false;
    }
    if (selectedDevice !== 'ALL' && school.ashDevice.type !== selectedDevice) {
      return false;
    }
    return true;
  });

  const hasMismatches = filteredSchools.some(s => s.ashDevice.assignedStudents > s.ashDevice.capacity);

  if (showReport) {
    return (
      <PDFReport
        filteredSchools={filteredSchools}
        selectedType={selectedType}
        selectedDevice={selectedDevice}
        onClose={() => setShowReport(false)}
      />
    );
  }
  return (
    <div className="h-screen bg-slate-50 font-sans flex flex-col antialiased overflow-hidden">

      {/* ── Header ── */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-30 shadow-xs">
        <div className="flex items-center space-x-4">
          <div className="w-9 h-9 bg-brand-800 flex items-center justify-center rounded-lg shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.954L9 1l6 3 5.447-2.724A2 2 0 0121 3.236v9.964a2 2 0 01-1.553 1.954L15 18l-6 2z" />
            </svg>
          </div>
          <h1 className="text-sm font-bold uppercase tracking-tight text-slate-900">
            EduScope
          </h1>
        </div>

        {/* Navigation Tabs in Header */}
        <div className="flex h-9 bg-slate-100 border border-slate-200 rounded-lg p-0.5">
          <button
            onClick={() => handleSetActiveView('dashboard')}
            className={`flex items-center gap-1.5 px-4 rounded-md text-xs font-bold transition-all cursor-pointer ${
              activeView === 'dashboard'
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50 font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Tableau de bord</span>
          </button>
          <button
            onClick={() => handleSetActiveView('database')}
            className={`flex items-center gap-1.5 px-4 rounded-md text-xs font-bold transition-all cursor-pointer ${
              activeView === 'database'
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50 font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Bases de données</span>
          </button>
          <button
            onClick={() => handleSetActiveView('kanban')}
            className={`flex items-center gap-1.5 px-4 rounded-md text-xs font-bold transition-all cursor-pointer ${
              activeView === 'kanban'
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50 font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Kanban className="w-3.5 h-3.5" />
            <span>Tâches en cours</span>
          </button>
          <button
            onClick={() => handleSetActiveView('agenda')}
            className={`flex items-center gap-1.5 px-4 rounded-md text-xs font-bold transition-all cursor-pointer ${
              activeView === 'agenda'
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50 font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Agenda</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowReport(true)}
            className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-[11px] font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Bilan PDF
          </button>

          <div className="hidden sm:flex items-center text-xs border-l border-slate-200 pl-4">
            <span className="font-semibold mr-2 text-right leading-tight text-slate-700">
              Utilisateur<br />
              <span className="text-[9px] text-brand-600 uppercase font-bold">Rectorat Aix-Marseille</span>
            </span>
            <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold">
              U
            </div>
          </div>
        </div>
      </header>

      {/* ── Main content layout ── */}
      {activeView === 'dashboard' ? (
        <div className="flex-1 flex overflow-hidden">
          {/* Barre latérale gauche: Filtres */}
          <aside className="w-80 border-r border-slate-200 bg-white flex flex-col p-4 overflow-y-auto shrink-0 z-20 shadow-xs">
            <Filters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedDevice={selectedDevice}
              setSelectedDevice={setSelectedDevice}
              resetFilters={resetFilters}
              hasMismatches={hasMismatches}
              filteredSchoolsCount={filteredSchools.length}
              totalSchoolsCount={schools.length}
              schools={schools}
              onSelectSchool={setSelectedSchool}
            />
          </aside>

          {/* Zone centrale: KPIs + Carte */}
          <main className="flex-1 flex flex-col overflow-hidden relative p-6 gap-6">
            <KPICards
              filteredSchools={filteredSchools}
              totalSchoolsCount={schools.length}
              isSidebarOpen={!!selectedSchool}
            />
            <div className="flex-1 min-h-0 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs relative">
              <AcademyMap
                filteredSchools={filteredSchools}
                selectedSchool={selectedSchool}
                setSelectedSchool={setSelectedSchool}
              />
            </div>
          </main>

          {/* Tiroir d'informations de l'école (à droite) */}
          <div className={`transition-all duration-300 ease-in-out border-l border-slate-200 bg-white z-30 shrink-0 h-full shadow-2xl overflow-hidden ${
            selectedSchool ? 'w-96 md:w-[420px] opacity-100' : 'w-0 opacity-0 pointer-events-none'
          }`}>
            {selectedSchool && (
              <SchoolDrawer
                school={selectedSchool}
                onClose={() => setSelectedSchool(null)}
                onUpdateSchool={handleUpdateSchool}
              />
            )}
          </div>
        </div>
      ) : activeView === 'database' ? (
        <div className="flex-1 flex overflow-hidden">
          <DatabaseView
            schools={schools}
            onUpdateSchool={handleUpdateSchool}
            onAddSchool={handleAddSchool}
            onDeleteSchool={handleDeleteSchool}
          />
        </div>
      ) : activeView === 'kanban' ? (
        <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50">
          <KanbanView />
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50">
          <AgendaView />
        </div>
      )}

    </div>
  );
}
