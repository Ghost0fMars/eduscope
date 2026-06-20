export interface AshDevice {
  type: 'TSA' | 'TFC' | 'TSLA' | 'TFA' | 'TFM' | 'TED' | 'SEGPA' | 'NONE';
  assignedStudents: number;
  capacity: number;
  placesVacantes?: number;
  effectifAvantCommission?: number;
  baseChecked: boolean;
  valChecked: boolean;
  comments: string;
}

// Note : les données nominatives par élève (DossierASH) ont été retirées
// de l'application pour des raisons de protection des données (RGPD art. 9).
// Seuls les agrégats par établissement (type de dispositif, capacité) sont conservés.

export interface School {
  id: string;
  rne: string;
  name: string;
  type: 'maternelle' | 'elementaire' | 'college' | 'lycee';
  city: string;
  address?: string;
  postalCode?: string;
  latitude: number;
  longitude: number;
  studentsCount: {
    total: number;
    byLevel: Record<string, number>;
  };
  successRate?: number;
  ashDevice: AshDevice;
  ashDevices?: AshDevice[];
  directorName: string;
  referentName: string;
  referentPhone?: string;
  referentEmail?: string;
  secteurERSEH?: string;
  cpcName: string;
  email?: string;
  phone?: string;
}

export const DEVICE_LABELS: Record<string, string> = {
  TSA:  "Troubles du Spectre de l'Autisme",
  TFC:  'Troubles des Fonctions Cognitives',
  TSLA: 'Troubles Spécifiques du Langage et des Apprentissages',
  TFA:  'Troubles de la Fonction Auditive',
  TFM:  'Troubles de la Fonction Motrice',
  TED:  'Troubles Envahissants du Développement',
  NONE: 'Aucun dispositif spécifique',
};

export const DEVICE_COLORS: Record<string, string> = {
  TSA:  'bg-purple-100 text-purple-800 border-purple-200 ring-purple-500',
  TFC:  'bg-blue-100   text-blue-800   border-blue-200   ring-blue-500',
  TSLA: 'bg-indigo-100 text-indigo-800 border-indigo-200 ring-indigo-500',
  TFA:  'bg-teal-100   text-teal-800   border-teal-200   ring-teal-500',
  TFM:  'bg-rose-100   text-rose-800   border-rose-200   ring-rose-500',
  TED:  'bg-amber-100  text-amber-800  border-amber-200  ring-amber-500',
  NONE: 'bg-slate-100  text-slate-500  border-slate-200  ring-slate-400',
};

export { schoolsData } from './schoolsData.generated';
