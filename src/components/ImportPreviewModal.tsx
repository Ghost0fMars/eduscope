import { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

export type ImportStatus = 'new' | 'duplicate' | 'conflict';

export interface ImportPreviewRow {
  status: ImportStatus;
  key: string;
  label: string;
  incoming: Record<string, string>;
  diff?: Record<string, { old: string; new: string }>;
}

const FIELD_LABELS: Record<string, string> = {
  nom: 'Nom', prenom: 'Prénom', type: 'Type', ville: 'Ville',
  adresse: 'Adresse', codepostal: 'Code postal',
  directeur: 'Directeur·rice', cpc: 'CPC',
  referenterseh: 'ERSEH', email: 'Email', telephone: 'Téléphone',
  secteurlabel: 'Réseau', mail: 'Mail', circonscription: 'Circonscription',
};

const STATUS_CFG = {
  new:       { label: 'Nouveau',      badge: 'bg-green-100 text-green-700 border-green-200', row: 'bg-green-50/40' },
  conflict:  { label: 'Mise à jour',  badge: 'bg-amber-100 text-amber-700 border-amber-200',  row: 'bg-amber-50/40'  },
  duplicate: { label: 'Doublon',      badge: 'bg-slate-100 text-slate-500 border-slate-200',  row: ''                },
} satisfies Record<ImportStatus, { label: string; badge: string; row: string }>;

interface Props {
  preview: ImportPreviewRow[];
  onConfirm: (selectedRows: Record<string, string>[]) => void;
  onCancel: () => void;
  loading: boolean;
}

export function ImportPreviewModal({ preview, onConfirm, onCancel, loading }: Props) {
  const [selected, setSelected] = useState<Set<string>>(() => {
    const s = new Set<string>();
    for (const r of preview) if (r.status !== 'duplicate') s.add(r.key);
    return s;
  });
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const actionable = preview.filter(r => r.status !== 'duplicate');
  const newCount      = preview.filter(r => r.status === 'new').length;
  const conflictCount = preview.filter(r => r.status === 'conflict').length;
  const dupCount      = preview.filter(r => r.status === 'duplicate').length;

  const toggleAll = () =>
    setSelected(selected.size === actionable.length ? new Set() : new Set(actionable.map(r => r.key)));

  const toggle = (key: string) =>
    setSelected(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });

  const toggleExpand = (key: string) =>
    setExpanded(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <div>
            <h2 className="text-sm font-bold text-slate-900">Aperçu de l'import</h2>
            <p className="text-xs text-slate-500 mt-0.5">{preview.length} ligne(s) analysée(s)</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
              {newCount} nouveau{newCount > 1 ? 'x' : ''}
            </span>
            <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">
              {conflictCount} mise{conflictCount > 1 ? 's' : ''} à jour
            </span>
            <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold">
              {dupCount} doublon{dupCount > 1 ? 's' : ''}
            </span>
            <button onClick={onCancel} className="ml-1 text-slate-400 hover:text-slate-700 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-y-auto flex-1">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 sticky top-0">
                <th className="px-3 py-2 w-8">
                  <input
                    type="checkbox"
                    className="rounded cursor-pointer"
                    checked={selected.size > 0 && selected.size === actionable.length}
                    onChange={toggleAll}
                    title="Tout sélectionner"
                  />
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Statut</th>
                <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Identifiant</th>
                <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Nom / Label</th>
                <th className="px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider text-slate-500">Modifications</th>
              </tr>
            </thead>
            <tbody>
              {preview.map(row => {
                const cfg = STATUS_CFG[row.status];
                const isSelected = selected.has(row.key);
                const isExpanded = expanded.has(row.key);
                const diffEntries = row.diff ? Object.entries(row.diff) : [];

                return (
                  <tr
                    key={row.key}
                    className={`border-b border-slate-100 ${cfg.row} ${row.status === 'duplicate' ? 'opacity-50' : ''}`}
                  >
                    <td className="px-3 py-2 align-top pt-3">
                      <input
                        type="checkbox"
                        className="rounded cursor-pointer"
                        checked={isSelected}
                        disabled={row.status === 'duplicate'}
                        onChange={() => toggle(row.key)}
                      />
                    </td>
                    <td className="px-3 py-2 align-top pt-2.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${cfg.badge}`}>
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-3 py-2 font-mono text-[10px] text-slate-500 align-top pt-3">{row.key}</td>
                    <td className="px-3 py-2 font-semibold text-slate-700 align-top pt-3">{row.label}</td>
                    <td className="px-3 py-2 align-top pt-2">
                      {row.status === 'new' && (
                        <span className="text-green-600 font-semibold">Nouvelle entrée</span>
                      )}
                      {row.status === 'duplicate' && (
                        <span className="text-slate-400">Aucun changement</span>
                      )}
                      {row.status === 'conflict' && diffEntries.length > 0 && (
                        <div>
                          <button
                            onClick={() => toggleExpand(row.key)}
                            className="flex items-center gap-1 text-amber-600 hover:text-amber-800 font-semibold cursor-pointer mb-1"
                          >
                            {isExpanded
                              ? <ChevronDown className="w-3 h-3" />
                              : <ChevronRight className="w-3 h-3" />}
                            {diffEntries.length} champ{diffEntries.length > 1 ? 's' : ''} modifié{diffEntries.length > 1 ? 's' : ''}
                          </button>
                          {isExpanded && (
                            <div className="flex flex-col gap-1">
                              {diffEntries.map(([field, { old: oldVal, new: newVal }]) => (
                                <div
                                  key={field}
                                  className="flex items-center gap-1.5 bg-white border border-amber-200 rounded-lg px-2 py-1 text-[11px]"
                                >
                                  <span className="font-bold text-slate-600 shrink-0">
                                    {FIELD_LABELS[field] ?? field} :
                                  </span>
                                  <span className="text-slate-400 line-through truncate max-w-[100px]">
                                    {oldVal || '(vide)'}
                                  </span>
                                  <span className="text-amber-500 shrink-0">→</span>
                                  <span className="text-slate-800 font-semibold truncate max-w-[140px]">
                                    {newVal || '(vide)'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {preview.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400">
              <p className="text-sm font-semibold">Aucune ligne reconnue dans ce fichier.</p>
              <p className="text-xs mt-1">Vérifiez que la colonne <code className="bg-slate-100 px-1 rounded">rne</code> ou <code className="bg-slate-100 px-1 rounded">secteurCode</code> est présente.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            {selected.size} ligne{selected.size > 1 ? 's' : ''} sélectionnée{selected.size > 1 ? 's' : ''} / {actionable.length} modifiable{actionable.length > 1 ? 's' : ''}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onCancel}
              disabled={loading}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer disabled:opacity-40"
            >
              Annuler
            </button>
            <button
              onClick={() => onConfirm(preview.filter(r => selected.has(r.key)).map(r => r.incoming))}
              disabled={loading || selected.size === 0}
              className="px-4 py-2 text-xs font-bold bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              {loading ? 'Enregistrement…' : `Valider (${selected.size})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
