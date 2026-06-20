import React, { useState, useEffect, useRef, useCallback } from 'react';
import { School } from '../data/schoolsData';
import { SECTORS, geoToSVG, SVG_IMG } from '../data/sectorsData';
import { ZoomIn, ZoomOut, Maximize, Minimize2, MapPin, Layers, Search, X, Users } from 'lucide-react';

interface AcademyMapProps {
  filteredSchools: School[];
  selectedSchool: School | null;
  setSelectedSchool: (school: School | null) => void;
}

function getMarkerFill(type: string): string {
  switch (type) {
    case 'TSA':  return '#9333ea';
    case 'TFC':  return '#2563eb';
    case 'TSLA': return '#4f46e5';
    case 'TFA':  return '#0d9488';
    case 'TFM':  return '#e11d48';
    case 'TED':  return '#f59e0b';
    default:     return '#64748b';
  }
}

const INITIAL_VB = { x: SVG_IMG.x, y: SVG_IMG.y, w: SVG_IMG.w, h: SVG_IMG.h };
const ASPECT = SVG_IMG.h / SVG_IMG.w;
const MIN_W  = SVG_IMG.w / 7;   // zoom max ×7
const MAX_W  = SVG_IMG.w * 1.1; // légèrement dézoomé possible

export default function AcademyMap({ filteredSchools, selectedSchool, setSelectedSchool }: AcademyMapProps) {
  const [viewBox, setViewBox] = useState(INITIAL_VB);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const [activeSector, setActiveSector]   = useState<string | null>(null);
  const [hoveredSchool, setHoveredSchool] = useState<School | null>(null);
  const [tooltipPos, setTooltipPos]       = useState({ x: 0, y: 0 });
  const [schoolSectors, setSchoolSectors] = useState<Record<string, string>>({});
  const [sectorSearchQuery, setSectorSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const svgRef       = useRef<SVGSVGElement>(null);

  // Clear sector search query when active sector changes
  useEffect(() => {
    setSectorSearchQuery('');
  }, [activeSector]);

  // Auto-center on selected school
  useEffect(() => {
    if (selectedSchool) {
      const { x, y } = geoToSVG(selectedSchool.latitude, selectedSchool.longitude);
      setViewBox(vb => {
        const targetW = vb.w > INITIAL_VB.w * 0.5 ? INITIAL_VB.w * 0.4 : vb.w;
        const targetH = targetW * ASPECT;
        return {
          x: x - targetW / 2,
          y: y - targetH / 2,
          w: targetW,
          h: targetH
        };
      });
    }
  }, [selectedSchool]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const lastMouseRef  = useRef({ x: 0, y: 0 });

  // ── Calcul d'appartenance secteur via isPointInFill ─────────────────────
  const computeSchoolSectors = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const map: Record<string, string> = {};
    const pt = svg.createSVGPoint();
    for (const school of filteredSchools) {
      const { x, y } = geoToSVG(school.latitude, school.longitude);
      pt.x = x; pt.y = y;
      for (const sector of SECTORS) {
        const path = svg.getElementById(sector.id) as SVGPathElement | null;
        if (path?.isPointInFill(pt)) { map[school.id] = sector.label; break; }
      }
    }
    setSchoolSectors(map);
  }, [filteredSchools]);

  useEffect(() => {
    const t = setTimeout(computeSchoolSectors, 100);
    return () => clearTimeout(t);
  }, [computeSchoolSectors]);

  // ── Zoom/Pan automatique sur le secteur actif ───────────────────────────
  useEffect(() => {
    if (activeSector) {
      const sector = SECTORS.find(s => s.label === activeSector);
      if (sector) {
        const newW = SVG_IMG.w / 3.5;
        const newH = newW * ASPECT;
        setViewBox({
          x: sector.cx - newW / 2,
          y: sector.cy - newH / 2,
          w: newW,
          h: newH,
        });
      }
    } else {
      setViewBox(INITIAL_VB);
    }
  }, [activeSector]);

  // ── Zoom molette (non-passive) ──────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const svg = svgRef.current;
      if (!svg) return;
      // Convertir la position souris en coordonnées SVG
      const pt = svg.createSVGPoint();
      pt.x = e.clientX; pt.y = e.clientY;
      const o = pt.matrixTransform(svg.getScreenCTM()!.inverse());
      const factor = e.deltaY < 0 ? 0.85 : 1 / 0.85;
      setViewBox(vb => {
        const newW = Math.max(MIN_W, Math.min(MAX_W, vb.w * factor));
        const newH = newW * ASPECT;
        return {
          x: o.x - (o.x - vb.x) * (newW / vb.w),
          y: o.y - (o.y - vb.y) * (newH / vb.h),
          w: newW, h: newH,
        };
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // ── Boutons zoom ────────────────────────────────────────────────────────
  const zoomCenter = (factor: number) =>
    setViewBox(vb => {
      const newW = Math.max(MIN_W, Math.min(MAX_W, vb.w * factor));
      const newH = newW * ASPECT;
      return { x: vb.x + (vb.w - newW) / 2, y: vb.y + (vb.h - newH) / 2, w: newW, h: newH };
    });

  const handleZoomIn  = () => zoomCenter(0.7);
  const handleZoomOut = () => zoomCenter(1 / 0.7);

  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsFullscreen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreen]);

  // ── Glisser-déposer pour pan ────────────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    setHoveredSchool(null);
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    setViewBox(vb => ({
      ...vb,
      x: vb.x - dx * (vb.w / rect.width),
      y: vb.y - dy * (vb.h / rect.height),
    }));
  };

  const stopDrag = () => { isDraggingRef.current = false; setIsDragging(false); };

  // ── Clic secteur ────────────────────────────────────────────────────────
  const handleSectorClick = (e: React.MouseEvent, label: string) => {
    e.stopPropagation();
    setActiveSector(prev => prev === label ? null : label);
  };

  // ── Tooltip : positionné en coordonnées écran relatives au conteneur ────
  const handleSchoolEnter = (school: School, e: React.MouseEvent) => {
    if (isDraggingRef.current) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHoveredSchool(school);
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // ── Valeurs dérivées ────────────────────────────────────────────────────
  const schoolsInActiveSector = activeSector
    ? filteredSchools.filter(s => schoolSectors[s.id] === activeSector)
    : filteredSchools;
  const activeSectorDef = SECTORS.find(s => s.label === activeSector);

  const filteredActiveSectorSchools = activeSector
    ? schoolsInActiveSector.filter(school => {
        const query = sectorSearchQuery.toLowerCase().trim();
        if (!query) return true;
        return (
          school.name.toLowerCase().includes(query) ||
          school.city.toLowerCase().includes(query) ||
          school.rne.toLowerCase().includes(query)
        );
      })
    : [];

  const totalStudents = schoolsInActiveSector.reduce((sum, s) => sum + (s.studentsCount?.total || 0), 0);
  const ashDevicesCount = schoolsInActiveSector.filter(s => s.ashDevice?.type && s.ashDevice.type !== 'NONE').length;
  const ashAssigned = schoolsInActiveSector.reduce((sum, s) => sum + (s.ashDevice?.assignedStudents || 0), 0);
  const ashCapacity = schoolsInActiveSector.reduce((sum, s) => sum + (s.ashDevice?.capacity || 0), 0);

  // Rayon en unités SVG → taille écran constante quelle que soit le zoom
  // pixel_apparent = r * (containerWidth / viewBox.w)  → r = target_px * viewBox.w / containerWidth
  // En fixant target ≈ 5 px et containerWidth ≈ SVG_IMG.w à zoom=1, on obtient SVG_IMG.w/200
  const R = viewBox.w / 200;

  const vbStr = `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`;

  return (
    <div
      className={isFullscreen
        ? 'fixed inset-0 z-50 bg-slate-50 overflow-hidden flex flex-col text-slate-800'
        : 'bg-slate-50 overflow-hidden flex flex-col h-full relative text-slate-800'}
      id="academy-map-card"
    >

      {/* ── En-tête ─────────────────────────────────────────────────────── */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-200/80 pointer-events-auto shadow-lg">
          <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
          <div>
            <div className="font-bold text-slate-800">Bouches-du-Rhône</div>
            <div className="text-[10px] text-slate-500">Département 13 · DSDEN</div>
          </div>
        </div>

        <div className="flex gap-1 bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl border border-slate-200/80 pointer-events-auto shadow-md">
          <button onClick={handleZoomIn}  title="Zoom +"         className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 transition-colors"><ZoomIn  className="w-4 h-4" /></button>
          <button onClick={handleZoomOut} title="Zoom -"         className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 transition-colors"><ZoomOut className="w-4 h-4" /></button>
          <button onClick={() => setIsFullscreen(f => !f)} title={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 transition-colors">
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Légende secteurs ────────────────────────────────────────────── */}
      <div className="absolute top-24 left-4 z-20 bg-white/90 backdrop-blur-md p-2.5 rounded-xl text-[9px] border border-slate-200/80 hidden md:flex flex-col shadow-lg" style={{ maxHeight: '320px' }}>
        <div className="font-semibold text-slate-500 border-b border-slate-100 pb-1 mb-1 flex items-center gap-1 shrink-0">
          <Layers className="w-3 h-3 text-slate-400" /> Secteurs DSDEN
        </div>
        <div className="overflow-y-auto space-y-0.5 pr-1 scrollbar-thin">
          {SECTORS.map(sector => {
            const count = filteredSchools.filter(s => schoolSectors[s.id] === sector.label).length;
            const isActive = activeSector === sector.label;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(prev => prev === sector.label ? null : sector.label)}
                className={`w-full flex items-center gap-2 px-1.5 py-0.5 rounded-md transition-all text-left ${
                  isActive ? 'bg-slate-100 text-slate-900 border border-slate-200/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: sector.color }} />
                <span className="font-semibold leading-tight">{sector.name}</span>
                <span className="ml-auto pl-2 text-slate-400 font-mono">{count}</span>
              </button>
            );
          })}
        </div>
        {activeSector && (
          <button
            onClick={() => setActiveSector(null)}
            className="w-full text-center text-[8px] text-slate-500 hover:text-slate-800 pt-1.5 mt-1 border-t border-slate-100 font-semibold shrink-0"
          >
            ✕ Tout afficher
          </button>
        )}
      </div>

      {/* ── Canvas SVG vectoriel ─────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className={`flex-1 overflow-hidden relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        id="gis-map-viewport"
      >
        <svg
          ref={svgRef}
          viewBox={vbStr}
          className="w-full h-full select-none"
          id="dsden13-svg"
          onClick={() => setActiveSector(null)}
        >
          {/* ── Secteurs ──────────────────────────────────────────────── */}
          {SECTORS.map(sector => {
            const isHov = hoveredSector === sector.label;
            const isAct = activeSector  === sector.label;
            const op    = activeSector && !isAct ? 0.08 : isAct ? 0.45 : isHov ? 0.35 : 0.2;
            return (
              <path
                key={sector.id}
                id={sector.id}
                d={sector.d}
                fill={sector.color}
                fillOpacity={op}
                stroke={sector.color}
                strokeWidth={isAct || isHov ? 3 : 1.5}
                strokeOpacity={isAct ? 1 : isHov ? 0.9 : 0.55}
                strokeLinejoin="round"
                style={{ cursor: 'pointer', transition: 'fill-opacity 0.2s, stroke-opacity 0.2s' }}
                onClick={e => handleSectorClick(e, sector.label)}
                onMouseEnter={() => setHoveredSector(sector.label)}
                onMouseLeave={() => setHoveredSector(null)}
              />
            );
          })}

          {/* ── Épingles écoles — SVG natif, taille écran constante ────── */}
          {activeSector && filteredSchools
            .filter(school => schoolSectors[school.id] === activeSector)
            .map(school => {
              const { x, y } = geoToSVG(school.latitude, school.longitude);
              const isSelected = selectedSchool?.id === school.id;
              const fill = getMarkerFill(school.ashDevice?.type);
              const r    = isSelected ? R * 1.6 : R;

              return (
                <g
                  key={school.id}
                  style={{ cursor: 'pointer', opacity: 1, transition: 'opacity 0.2s' }}
                  onClick={e => { e.stopPropagation(); setSelectedSchool(school); }}
                  onMouseEnter={e => handleSchoolEnter(school, e)}
                  onMouseLeave={() => setHoveredSchool(null)}
                >
                  {/* Halo animé pour l'école sélectionnée */}
                  {isSelected && (
                    <circle cx={x} cy={y} r={R * 3} fill={fill} fillOpacity={0}>
                      <animate attributeName="r"            values={`${R};${R * 4};${R}`}     dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="fill-opacity" values="0.35;0;0.35"               dur="1.8s" repeatCount="indefinite" />
                    </circle>
                  )}

                  {/* Disque principal */}
                  <circle cx={x} cy={y} r={r} fill={fill} stroke="white" strokeWidth={R * 0.4} />

                  {/* Badge effectifs ULIS */}
                  {school.ashDevice.assignedStudents > 0 && (
                    <text
                      x={x + r * 1.15} y={y - r * 1.15}
                      fontSize={R * 1.2} fontWeight="bold" fontFamily="system-ui, sans-serif"
                      fill="white" stroke="rgba(0,0,0,0.55)" strokeWidth={R * 0.18}
                      paintOrder="stroke" textAnchor="middle" pointerEvents="none"
                    >
                      {school.ashDevice.assignedStudents}
                    </text>
                  )}
                </g>
              );
            })}

          {/* ── Label secteur survolé — rendu après les épingles pour passer au-dessus ── */}
          {(hoveredSector || activeSector) && (() => {
            const sector = SECTORS.find(s => s.label === (hoveredSector ?? activeSector));
            if (!sector) return null;
            const { cx, cy } = sector;
            // Taille écran constante : R ≈ 5px → fs ≈ 13px, indépendant du zoom
            const fs = R * 2.6;
            const rh = fs * 1.85;
            const rw = Math.max(fs * 14, sector.name.length * fs * 0.65);
            return (
              <g pointerEvents="none">
                <rect x={cx - rw / 2} y={cy - rh / 2} width={rw} height={rh} rx={R * 1.2}
                  fill="rgba(2,6,23,0.88)" stroke={sector.color} strokeWidth={R * 0.3} />
                <text x={cx} y={cy + fs * 0.35} textAnchor="middle" fill="white"
                  fontSize={fs} fontWeight="700" fontFamily="system-ui, sans-serif">
                  {sector.name}
                </text>
              </g>
            );
          })()}
        </svg>

        {/* ── Tooltip HTML — positionné en px dans le conteneur ─────────── */}
        {hoveredSchool && (() => {
          const s = hoveredSchool;
          const sectorDef = SECTORS.find(sec => sec.label === schoolSectors[s.id]);
          // Recadrage pour ne pas déborder à droite
          const container = containerRef.current;
          const maxLeft = container ? container.clientWidth - 210 : tooltipPos.x;
          const left = Math.min(tooltipPos.x + 14, maxLeft);

          return (
            <div
              className="absolute z-40 pointer-events-none select-none bg-stone-100 border border-stone-200 text-[10px] rounded-lg p-2.5 shadow-xl w-[200px]"
              style={{ left, top: tooltipPos.y - 70 }}
            >
              <div className="font-bold text-stone-800 truncate">{s.name}</div>
              <div className="text-[8px] text-stone-400 mb-1 flex items-center gap-1 flex-wrap">
                <span>{s.rne} · {s.city}</span>
                {sectorDef && (
                  <span className="px-1 rounded text-[7px] font-bold" style={{ backgroundColor: sectorDef.color + '22', color: sectorDef.color }}>
                    {sectorDef.name}
                  </span>
                )}
              </div>
              <div className="border-t border-stone-200 pt-1 space-y-0.5 font-semibold text-stone-600">
                <div className="flex justify-between">
                  <span>Élèves :</span>
                  <span className="text-stone-800 bg-stone-200 px-1 rounded">{s.studentsCount.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dispositif :</span>
                  <span className="text-blue-600">{s.ashDevice.type}</span>
                </div>
                {s.ashDevice.type !== 'NONE' && (
                  <div className="flex justify-between">
                    <span>ULIS :</span>
                    <span className="text-blue-600">{s.ashDevice.assignedStudents} / {s.ashDevice.capacity} pl.</span>
                  </div>
                )}
                {s.successRate !== undefined && (
                  <div className="flex justify-between">
                    <span>Réussite :</span>
                    <span className="text-emerald-600">{s.successRate}%</span>
                  </div>
                )}
              </div>
              {s.ashDevice.comments && s.ashDevice.comments !== 'ok' && (
                <div className="text-[8px] italic text-amber-600 truncate border-t border-stone-200 mt-1 pt-1">
                  {s.ashDevice.comments}
                </div>
              )}
            </div>
          );
        })()}
      </div>

      {/* ── Carte flottante du secteur actif ── */}
      <div
        className={`absolute top-24 right-4 z-20 w-80 md:w-96 bg-white/90 backdrop-blur-md border border-stone-200 rounded-2xl shadow-xl flex flex-col transition-all duration-300 ease-out transform ${
          activeSector
            ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100% - 130px)' }}
      >
        {activeSector && (
          <>
            {/* Header de la carte */}
            <div className="p-4 border-b border-stone-200/60 flex items-start justify-between bg-stone-50/50 rounded-t-2xl shrink-0">
              <div>
                <span className="text-[10px] font-medium text-stone-400 block">
                  Secteur sélectionné
                </span>
                <h3 className="text-sm font-bold text-stone-800 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block shrink-0" style={{ backgroundColor: activeSectorDef?.color }} />
                  {activeSectorDef?.name}
                </h3>
                <span className="text-[10px] text-stone-500 font-semibold mt-1 block">
                  {schoolsInActiveSector.length} établissement{schoolsInActiveSector.length > 1 ? 's' : ''} public{schoolsInActiveSector.length > 1 ? 's' : ''}
                </span>
              </div>
              <button
                onClick={() => setActiveSector(null)}
                className="p-1.5 hover:bg-stone-200 rounded-lg text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                title="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Barre de recherche */}
            <div className="p-3 border-b border-stone-200/60 shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une école, ville, RNE..."
                  value={sectorSearchQuery}
                  onChange={e => setSectorSearchQuery(e.target.value)}
                  className="w-full bg-stone-100 border border-stone-200 rounded-xl py-1.5 pl-8 pr-8 text-[11px] text-stone-700 outline-none focus:bg-white focus:border-brand-500 transition-all placeholder:text-stone-400"
                />
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                {sectorSearchQuery && (
                  <button
                    onClick={() => setSectorSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 font-bold text-[10px]"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Liste des écoles */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
              {filteredActiveSectorSchools.length > 0 ? (
                filteredActiveSectorSchools.map(school => {
                  const isSelected = selectedSchool?.id === school.id;
                  const markerColor = getMarkerFill(school.ashDevice?.type);
                  
                  return (
                    <div
                      key={school.id}
                      onClick={() => setSelectedSchool(school)}
                      className={`p-2.5 rounded-xl border text-left transition-all duration-250 cursor-pointer flex flex-col gap-1 ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-200 shadow-sm'
                          : 'bg-white/60 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                      }`}
                    >
                      {/* Titre & type */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[11px] font-bold text-stone-800 leading-tight line-clamp-2">
                          {school.name}
                        </span>
                        <span className={`px-1.5 py-0.5 text-[8px] font-bold rounded shrink-0 uppercase tracking-wide border ${
                          school.type === 'maternelle'
                            ? 'bg-amber-50 border-amber-200 text-amber-700'
                            : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        }`}>
                          {school.type === 'maternelle' ? 'Mat' : 'Élém'}
                        </span>
                      </div>

                      {/* Code RNE et Ville */}
                      <div className="flex items-center gap-1.5 text-[9px] text-stone-400 font-semibold leading-none">
                        <span>{school.rne}</span>
                        <span>·</span>
                        <span className="truncate">{school.city}</span>
                      </div>

                      {/* Dispositif ASH / effectifs */}
                      <div className="flex items-center justify-between mt-1 pt-1.5 border-t border-stone-100">
                        {school.ashDevice.type !== 'NONE' ? (
                          <div className="flex items-center gap-1">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: markerColor }}
                            />
                            <span className="text-[9px] font-extrabold text-stone-600 bg-stone-150/50 px-1.5 py-0.2 rounded uppercase">
                              ULIS {school.ashDevice.type}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[9px] text-stone-400 italic font-medium">
                            Sans ULIS
                          </span>
                        )}
                        
                        {school.ashDevice.type !== 'NONE' && (
                          <span className="text-[9px] font-bold text-stone-500">
                            {school.ashDevice.assignedStudents} / {school.ashDevice.capacity} pl.
                          </span>
                        )}

                        <span className="text-[9px] font-bold text-stone-400 bg-stone-100 px-1 rounded ml-auto">
                          {school.studentsCount.total} élèves
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-6 text-stone-400 text-[11px] font-medium italic">
                  Aucune école ne correspond aux critères
                </div>
              )}
            </div>

            {/* Footer Stats du secteur */}
            <div className="p-3 border-t border-stone-200/60 bg-stone-50/50 rounded-b-2xl shrink-0 flex items-center justify-between text-[10px] text-stone-500 font-medium">
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-stone-400" />
                <span>
                  <strong>{totalStudents}</strong> élèves
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span>
                  <strong>{ashDevicesCount}</strong> ULIS
                  {ashDevicesCount > 0 && ` (${ashAssigned}/${ashCapacity})`}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── Barre de statut ─────────────────────────────────────────────── */}
      <div className="bg-white border-t border-slate-200 px-4 py-2 flex text-[10px] text-slate-500 justify-between items-center z-10 font-mono shrink-0">
        <div className="flex items-center gap-3 font-sans">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>
              {activeSector ? (
                <>
                  <strong className="text-slate-800">{activeSectorDef?.name}</strong>
                  {' '}·{' '}
                  <strong className="text-blue-600">{schoolsInActiveSector.length}</strong> établissements
                </>
              ) : (
                <>Établissements : <strong className="text-slate-800">{filteredSchools.length}</strong></>
              )}
            </span>
          </div>
          {activeSector && (
            <span className="text-slate-400">
              {SECTORS.filter(s => s.label !== activeSector).map(s => {
                const n = filteredSchools.filter(sc => schoolSectors[sc.id] === s.label).length;
                return n > 0 ? `${s.name.split('—')[0].trim()} (${n})` : null;
              }).filter(Boolean).join(' · ')}
            </span>
          )}
        </div>
        <span>Lambert 93 · EPSG:2154 — Dept. 13</span>
      </div>
    </div>
  );
}
