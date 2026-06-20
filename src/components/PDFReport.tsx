import { School, DEVICE_LABELS } from '../data/schoolsData';
import { Printer, FileText, BarChart } from 'lucide-react';

interface PDFReportProps {
  filteredSchools: School[];
  onClose: () => void;
  selectedType: string;
  selectedDevice: string;
}

export default function PDFReport({ filteredSchools, onClose, selectedType, selectedDevice }: PDFReportProps) {
  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  const totalPupils   = filteredSchools.reduce((sum, s) => sum + (s.ashDevice?.assignedStudents || 0), 0);
  const totalCapacity = filteredSchools.reduce((sum, s) => sum + (s.ashDevice?.capacity || 0), 0);

  const alertSchools = filteredSchools.filter(s =>
    s.ashDevice?.comments &&
    s.ashDevice.comments !== 'ok' &&
    s.ashDevice.comments !== '' &&
    s.ashDevice.type !== 'NONE'
  );

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-8" id="print-view-container">

      {/* Barre d'actions */}
      <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-3 no-print">
        <div>
          <h3 className="text-sm font-bold text-slate-800">Rapport PDF — Bouches-du-Rhône</h3>
          <p className="text-xs text-slate-500">Exportez le bilan stratégique pour votre réunion d'inspection.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
          >
            Fermer l'aperçu
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-xs font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-xs"
          >
            <Printer className="w-4 h-4" />
            Imprimer / PDF
          </button>
        </div>
      </div>

      {/* Feuille imprimable */}
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-lg px-8 py-10 rounded-2xl text-slate-800" id="academic-print-sheet">

        {/* En-tête rapport */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b-2 border-slate-900 pb-6 mb-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600">
              Région Académique Provence-Alpes-Côte d'Azur
            </span>
            <h1 className="text-xl font-black text-slate-950 uppercase tracking-tight">
              Bouches-du-Rhône — Département 13
            </h1>
            <p className="text-xs font-bold text-slate-600 uppercase">
              Service Départemental de l'École Inclusive · ASH
            </p>
          </div>
          <div className="text-right text-[10px] sm:text-xs text-slate-500 font-medium">
            <p>Date : {today}</p>
            <p>Document Secret Professionnel · ERSEH-CPC</p>
            <p className="font-semibold text-slate-700 mt-1">Utilisateur</p>
          </div>
        </div>

        {/* Récapitulatif filtres */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6 text-xs grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <span className="text-slate-400 font-semibold block uppercase text-[9px] tracking-wider">Périmètre</span>
            <span className="font-bold text-slate-800">Bouches-du-Rhône (13)</span>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase text-[9px] tracking-wider">Type scolaire</span>
            <span className="font-bold text-slate-800">{selectedType === 'ALL' ? 'Tous niveaux' : selectedType}</span>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase text-[9px] tracking-wider">Dispositif ASH</span>
            <span className="font-bold text-slate-800">
              {selectedDevice === 'ALL' ? 'Tous' : `${selectedDevice} · ${DEVICE_LABELS[selectedDevice] ?? ''}`}
            </span>
          </div>
        </div>

        {/* Section 1 — Synthèse */}
        <div className="space-y-4 mb-8">
          <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            1. Note de Synthèse Stratégique
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
            Ce document regroupe les établissements scolaires du département des Bouches-du-Rhône (13). Il fournit aux Inspecteurs en Éducation Inclusive, aux Conseillers Pédagogiques de Circonscription (CPC) et aux Enseignants Référents (ERSEH) une vision d'ensemble du maillage territorial et de la répartition des dispositifs d'inclusion spécialisés (ULIS TSA, TFC, TSLA, TFA, TFM).
          </p>
        </div>

        {/* Section 2 — Indicateurs */}
        <div className="space-y-4 mb-8">
          <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center gap-2">
            <BarChart className="w-4 h-4 text-slate-600" />
            2. Indicateurs Clés
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-slate-200 p-3 rounded-lg text-center">
              <span className="text-[9px] text-slate-500 font-bold block uppercase">Établissements</span>
              <strong className="text-lg text-slate-900 font-black">{filteredSchools.length}</strong>
            </div>
            <div className="border border-slate-200 p-3 rounded-lg text-center">
              <span className="text-[9px] text-slate-500 font-bold block uppercase">Effectif ASH</span>
              <strong className="text-lg text-slate-900 font-black">{totalPupils} élèves</strong>
            </div>
            <div className="border border-slate-200 p-3 rounded-lg text-center">
              <span className="text-[9px] text-slate-500 font-bold block uppercase">Taux d'occupation</span>
              <strong className="text-lg text-slate-900 font-black">
                {totalCapacity > 0 ? Math.round((totalPupils / totalCapacity) * 100) : 0}%
              </strong>
            </div>
          </div>
        </div>

        {/* Section 3 — Alertes */}
        {alertSchools.length > 0 && (
          <div className="space-y-4 mb-10">
            <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5 text-amber-800 flex items-center gap-2">
              ⚠️ 3. Alertes & Ajustements Prioritaires
            </h2>
            <div className="border border-amber-200 rounded-lg overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-amber-50 border-b border-amber-200 text-[10px] font-bold text-amber-900">
                    <th className="p-2 sm:p-3 w-28">RNE</th>
                    <th className="p-2 sm:p-3">Établissement</th>
                    <th className="p-2 sm:p-3 w-16 text-center">Nbr.</th>
                    <th className="p-2 sm:p-3">Observations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100 font-semibold text-slate-700">
                  {alertSchools.map(school => (
                    <tr key={school.id} className="hover:bg-amber-50/30">
                      <td className="p-2 sm:p-3 font-mono font-bold text-amber-900">{school.rne}</td>
                      <td className="p-2 sm:p-3 font-bold text-slate-900">
                        {school.name} <span className="text-[9px] text-slate-500 font-normal">({school.city})</span>
                      </td>
                      <td className="p-2 sm:p-3 text-center font-bold">{school.ashDevice.assignedStudents}</td>
                      <td className="p-2 sm:p-3 text-amber-800 italic font-medium">{school.ashDevice.comments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Section 4 — Répertoire */}
        <div className="space-y-4 mb-12">
          <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider border-b border-slate-200 pb-1.5 flex items-center gap-2">
            📋 {alertSchools.length > 0 ? '4.' : '3.'} Répertoire des Établissements ({filteredSchools.length})
          </h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden text-[10px] sm:text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-600">
                  <th className="p-2">RNE</th>
                  <th className="p-2">Établissement</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Ville</th>
                  <th className="p-2 text-center">Dispositif</th>
                  <th className="p-2 text-center">Élèves</th>
                  <th className="p-2">ERSEH Référent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-semibold text-slate-700">
                {filteredSchools.map(school => (
                  <tr key={school.id} className="hover:bg-slate-50/50">
                    <td className="p-2 font-mono font-bold text-slate-900">{school.rne}</td>
                    <td className="p-2 font-bold text-slate-950">{school.name}</td>
                    <td className="p-2 font-medium capitalize text-slate-500">{school.type}</td>
                    <td className="p-2 font-bold">{school.city}</td>
                    <td className="p-2 text-center">
                      <span className="text-[9px] font-bold border rounded px-1 text-slate-900 bg-slate-100 uppercase">
                        {school.ashDevice.type}
                      </span>
                    </td>
                    <td className="p-2 text-center font-bold text-slate-900">{school.studentsCount.total}</td>
                    <td className="p-2 text-[9px] text-slate-500">{school.referentName.split('(')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Signatures */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs text-center font-bold">
          <div>
            <p className="uppercase text-slate-400 text-[9px] tracking-wider mb-8">Visa Inspecteur d'Académie (ASH)</p>
            <div className="w-40 mx-auto border-t border-dashed border-slate-300 mb-1" />
            <p className="text-slate-500 text-[10px] italic">Signature & Date</p>
          </div>
          <div>
            <p className="uppercase text-slate-400 text-[9px] tracking-wider mb-8">Visa Référent de Circonscription (CPC)</p>
            <div className="w-40 mx-auto border-t border-dashed border-slate-300 mb-1" />
            <p className="text-slate-500 text-[10px] italic">Signature & Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
