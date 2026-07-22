import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import type { Translator } from "@app/types";

import {
  PARTNER_CATEGORIES,
  PARTNER_LOCATIONS,
  getPartnerCategory,
  localizePartnerLocation,
  type LocalizedPartnerLocation,
  type PartnerCategory,
} from "@app/data/content";

/*
  PartnerMap — space-robots.org-style interactive tile map.

  Behaviour:
    • Real slippy map (Leaflet + CARTO tiles), pan / scroll-zoom / pinch.
    • Logo-tile pins colored by category; they RESCALE with the zoom level.
    • Selecting a pin docks an info card in the LOWER-RIGHT (logo, name,
      category, description, address, Website + Directions).
    • Category legend lower-left doubles as a filter (click to toggle).
    • LIGHT / DARK basemap toggle top-right; custom zoom + reset controls.

  Dependencies (new):  npm i leaflet   &&   npm i -D @types/leaflet
  Content coords in PARTNER_LOCATIONS are [lng, lat] (GeoJSON) → flipped here.
*/

const LIGHT_TILES =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
const DARK_TILES =
  "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
const TILE_ATTR = "&copy; OpenStreetMap &copy; CARTO";

// Bilingual continent labels (English on top, Chinese below).
const CONTINENTS = [
  { en: "North America", na: "\u5317\u7f8e\u6d32", lat: 46, lng: -100 },
  { en: "South America", na: "\u5357\u7f8e\u6d32", lat: -15, lng: -60 },
  { en: "Europe", na: "\u6b27\u6d32", lat: 50, lng: 14 },
  { en: "Africa", na: "\u975e\u6d32", lat: 3, lng: 20 },
  { en: "Asia", na: "\u4e9a\u6d32", lat: 46, lng: 92 },
  { en: "Oceania", na: "\u5927\u6d0b\u6d32", lat: -25, lng: 134 },
];

const CHECK_SVG =
  '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

const PIN_SVG =
  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
const EXT_SVG =
  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';
const DIR_SVG =
  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 19-9-9 19-2-8-8-2Z"/></svg>';

const sizeForZoom = (z: number) =>
  Math.round(Math.max(28, Math.min(66, 20 + (z - 2) * 5)));

export function PartnerMap({ t }: { t: Translator }) {
  const partners = useMemo<LocalizedPartnerLocation[]>(
    () => PARTNER_LOCATIONS.map((p) => localizePartnerLocation(p, t)),
    [t],
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layersRef = useRef<{ light: L.TileLayer; dark: L.TileLayer } | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const boundsRef = useRef<L.LatLngBounds | null>(null);
  const selectedRef = useRef<string | null>(null);

  const [isDark, setIsDark] = useState(false);
  const [visibleCats, setVisibleCats] = useState<PartnerCategory[]>(
    () => PARTNER_CATEGORIES.map((c) => c.id),
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = partners.find((p) => p.id === selectedId) ?? null;

  const makeIcon = (p: LocalizedPartnerLocation, size: number, sel: boolean) => {
    const c = getPartnerCategory(p.category).color;
    const inner = p.logoUrl
      ? `<img src="${p.logoUrl}" alt="" />`
      : `<span style="font-size:${Math.max(9, size * 0.3)}px">${p.logoText}</span>`;
    return L.divIcon({
      className: "",
      html: `<div class="pm-pin${sel ? " sel" : ""}" style="--c:${c};width:${size}px;height:${size}px"><div class="pm-box">${inner}</div></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  const refreshIcons = () => {
    const map = mapRef.current;
    if (!map) return;
    const s = sizeForZoom(map.getZoom());
    partners.forEach((p) => {
      const m = markersRef.current[p.id];
      if (m) m.setIcon(makeIcon(p, s, p.id === selectedRef.current));
    });
  };

  /* ── build map once ── */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: false,
      scrollWheelZoom: true,
      worldCopyJump: true,
    });
    mapRef.current = map;

    const light = L.tileLayer(LIGHT_TILES, { maxZoom: 19, subdomains: "abcd", attribution: TILE_ATTR });
    const dark = L.tileLayer(DARK_TILES, { maxZoom: 19, subdomains: "abcd", attribution: TILE_ATTR });
    layersRef.current = { light, dark };
    light.addTo(map);

    const bounds = L.latLngBounds(
      partners.map((p) => [p.coordinates[1], p.coordinates[0]] as [number, number]),
    );
    boundsRef.current = bounds;
    map.fitBounds(bounds, { padding: [70, 70] });

    // bilingual continent labels
    CONTINENTS.forEach((c) => {
      L.marker([c.lat, c.lng], {
        interactive: false,
        keyboard: false,
        icon: L.divIcon({
          className: "",
          html: `<div class="pm-clabel"><div class="en">${c.en}</div><div class="na">${c.na}</div></div>`,
          iconSize: [140, 34],
          iconAnchor: [70, 17],
        }),
      }).addTo(map);
    });

    partners.forEach((p) => {
      const m = L.marker([p.coordinates[1], p.coordinates[0]], {
        icon: makeIcon(p, sizeForZoom(map.getZoom()), false),
        riseOnHover: true,
      });
      m.on("click", () => {
        selectedRef.current = p.id;
        setSelectedId(p.id);
        refreshIcons();
        map.panTo([p.coordinates[1], p.coordinates[0]], { animate: true });
      });
      m.addTo(map);
      markersRef.current[p.id] = m;
    });

    map.on("zoomend", refreshIcons);
    setTimeout(() => map.invalidateSize(), 120);

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partners]);

  /* ── basemap toggle ── */
  useEffect(() => {
    const map = mapRef.current;
    const layers = layersRef.current;
    if (!map || !layers) return;
    if (isDark) {
      if (map.hasLayer(layers.light)) map.removeLayer(layers.light);
      if (!map.hasLayer(layers.dark)) layers.dark.addTo(map);
    } else {
      if (map.hasLayer(layers.dark)) map.removeLayer(layers.dark);
      if (!map.hasLayer(layers.light)) layers.light.addTo(map);
    }
  }, [isDark]);

  /* ── legend filter (visibleCats = shown categories; all on by default) ── */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    partners.forEach((p) => {
      const m = markersRef.current[p.id];
      if (!m) return;
      const show = visibleCats.includes(p.category);
      if (show && !map.hasLayer(m)) m.addTo(map);
      else if (!show && map.hasLayer(m)) map.removeLayer(m);
    });
  }, [visibleCats, partners]);

  const toggleCat = (id: PartnerCategory) =>
    setVisibleCats((cur) =>
      cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id],
    );
  const selectAll = () => setVisibleCats(PARTNER_CATEGORIES.map((c) => c.id));
  const selectNone = () => setVisibleCats([]);

  const closeCard = () => {
    selectedRef.current = null;
    setSelectedId(null);
    refreshIcons();
  };

  const zoomIn = () => mapRef.current?.zoomIn();
  const zoomOut = () => mapRef.current?.zoomOut();
  const resetView = () =>
    boundsRef.current && mapRef.current?.fitBounds(boundsRef.current, { padding: [70, 70] });

  const selCat = selected ? getPartnerCategory(selected.category) : null;
  const dirUrl = selected
    ? selected.mapsUrl ??
      `https://www.google.com/maps/search/?api=1&query=${selected.coordinates[1]},${selected.coordinates[0]}`
    : "#";

  return (
    <div className="mt-12">
      <style>{PM_CSS}</style>
      <div className={`pm-wrap${isDark ? " dark" : ""}`}>
        <div ref={containerRef} className="pm-map" />

        {/* light / dark */}
        <div className="pm-toggle">
          <button type="button" className={isDark ? "" : "on"} onClick={() => setIsDark(false)}>
            {t("partners.map.light") || "LIGHT"}
          </button>
          <button type="button" className={isDark ? "on" : ""} onClick={() => setIsDark(true)}>
            {t("partners.map.dark") || "DARK"}
          </button>
        </div>

        {/* zoom */}
        <div className="pm-zoom">
          <button type="button" aria-label={t("partners.map.zoomIn")} onClick={zoomIn}>+</button>
          <button type="button" aria-label={t("partners.map.zoomOut")} onClick={zoomOut}>&minus;</button>
          <button type="button" aria-label={t("partners.map.resetZoom")} onClick={resetView} style={{ fontSize: 14 }}>&#8634;</button>
        </div>

        {/* legend / filter */}
        <div className="pm-legend">
          <div className="pm-leg-head">
            <h4>{t("partners.map.legendTitle") || "Partner Types"}</h4>
            <div className="pm-leg-btns">
              <button type="button" onClick={selectAll}>{t("partners.map.selectAll") || "All"}</button>
              <button type="button" onClick={selectNone}>{t("partners.map.selectNone") || "None"}</button>
            </div>
          </div>
          <ul>
            {PARTNER_CATEGORIES.map((c) => {
              const on = visibleCats.includes(c.id);
              return (
                <li
                  key={c.id}
                  className={on ? "on" : ""}
                  style={{ ["--c" as string]: c.color } as React.CSSProperties}
                  onClick={() => toggleCat(c.id)}
                >
                  <span className="cbx" dangerouslySetInnerHTML={{ __html: CHECK_SVG }} />
                  {t(c.labelKey)}
                </li>
              );
            })}
          </ul>
        </div>

        {/* info card */}
        <div
          className={`pm-card${selected ? " show" : ""}`}
          style={selCat ? ({ ["--c" as string]: selCat.color } as React.CSSProperties) : undefined}
        >
          {selected && selCat && (
            <>
              <button className="pm-close" aria-label="Close" onClick={closeCard}>&times;</button>
              <div className="pm-card-top">
                <div className="pm-card-logo">
                  {selected.logoUrl ? <img src={selected.logoUrl} alt="" /> : selected.logoText}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3>{selected.displayName}</h3>
                  <span className="cat"><span className="dot" />{t(selCat.labelKey)}</span>
                </div>
              </div>
              {selected.description && <p className="desc">{selected.description}</p>}
              <div className="addr">
                <span dangerouslySetInnerHTML={{ __html: PIN_SVG }} />
                <span>{selected.address ?? `${selected.city}, ${selected.countryCode}`}</span>
              </div>
              <div className="pm-actions">
                {selected.websiteUrl && (
                  <a className="primary" href={selected.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <span dangerouslySetInnerHTML={{ __html: EXT_SVG }} />
                    {t("partners.map.website")}
                  </a>
                )}
                <a
                  className={selected.websiteUrl ? "ghost" : "primary"}
                  href={dirUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span dangerouslySetInnerHTML={{ __html: DIR_SVG }} />
                  {t("partners.map.directions") || t("partners.map.googleMaps")}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* Scoped CSS — Leaflet needs real stylesheet rules (divIcon HTML, overlays). */
const PM_CSS = `
.pm-wrap { position:relative; width:100%; height:680px; border-radius:22px; overflow:hidden; box-shadow:0 24px 60px rgba(20,24,39,0.14); border:1px solid rgba(20,24,39,0.08); }
.pm-map { position:absolute; inset:0; background:#eaf0f4; }
.pm-wrap .leaflet-container { font-family:'Plus Jakarta Sans',sans-serif; background:#eaf0f4; }
.pm-wrap.dark .pm-map, .pm-wrap.dark .leaflet-container { background:#0d1526; }
.pm-wrap .leaflet-control-attribution { font-size:9px!important; background:rgba(255,255,255,0.6)!important; }
.pm-wrap.dark .leaflet-control-attribution { background:rgba(10,14,26,0.5)!important; }
.pm-wrap.dark .leaflet-control-attribution a { color:#9fb0c9!important; }
.pm-pin { display:flex; align-items:center; justify-content:center; transition:transform .18s cubic-bezier(.22,1,.36,1); }
.pm-box { width:100%; height:100%; border-radius:26%; background:#fff; border:2.5px solid var(--c); display:flex; align-items:center; justify-content:center; overflow:hidden; box-shadow:0 3px 9px rgba(20,24,39,0.28); font-family:'JetBrains Mono','DM Sans',monospace; font-weight:700; color:var(--c); line-height:1; }
.pm-wrap.dark .pm-box { background:#161d2e; box-shadow:0 3px 12px rgba(0,0,0,0.5); }
.pm-box img { width:74%; height:74%; object-fit:contain; }
.pm-pin:hover { transform:translateY(-3px) scale(1.06); z-index:600!important; }
.pm-pin.sel .pm-box { border-width:3.5px; box-shadow:0 0 0 4px color-mix(in srgb, var(--c) 26%, transparent), 0 8px 18px rgba(20,24,39,0.34); }
.pm-toggle { position:absolute; top:16px; right:16px; z-index:1000; display:flex; padding:4px; gap:4px; border-radius:12px; background:rgba(255,255,255,0.92); box-shadow:0 6px 18px rgba(20,24,39,0.16); border:1px solid rgba(20,24,39,0.06); backdrop-filter:blur(6px); }
.pm-wrap.dark .pm-toggle { background:rgba(20,26,42,0.92); border-color:rgba(255,255,255,0.08); }
.pm-toggle button { border:0; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:700; letter-spacing:0.12em; padding:7px 14px; border-radius:9px; background:transparent; color:#8a8f9c; transition:all .2s; }
.pm-wrap.dark .pm-toggle button { color:#7c88a0; }
.pm-toggle button.on { background:linear-gradient(135deg,#f09f74,#c96a3e); color:#fff; box-shadow:0 3px 10px rgba(201,106,62,0.4); }
.pm-zoom { position:absolute; top:66px; right:16px; z-index:1000; display:flex; flex-direction:column; gap:6px; }
.pm-zoom button { width:38px; height:38px; border:0; cursor:pointer; border-radius:11px; background:rgba(255,255,255,0.94); color:#1a1e2c; font-size:19px; font-weight:600; display:flex; align-items:center; justify-content:center; box-shadow:0 5px 14px rgba(20,24,39,0.16); border:1px solid rgba(20,24,39,0.06); transition:all .18s; }
.pm-zoom button:hover { color:#c96a3e; transform:translateY(-1px); }
.pm-wrap.dark .pm-zoom button { background:rgba(20,26,42,0.94); color:#e6ebf5; border-color:rgba(255,255,255,0.08); }
.pm-legend { position:absolute; left:16px; bottom:16px; z-index:1000; padding:14px 16px; border-radius:14px; background:rgba(13,19,34,0.92); backdrop-filter:blur(8px); box-shadow:0 10px 28px rgba(0,0,0,0.32); border:1px solid rgba(255,255,255,0.07); }
.pm-leg-head { display:flex; align-items:center; justify-content:space-between; gap:14px; margin-bottom:11px; }
.pm-legend h4 { margin:0; font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:rgba(255,255,255,0.5); }
.pm-leg-btns { display:flex; gap:6px; }
.pm-leg-btns button { border:0; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:9px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:4px 9px; border-radius:7px; background:rgba(255,255,255,0.1); color:rgba(255,255,255,0.78); transition:all .18s; }
.pm-leg-btns button:hover { background:rgba(240,159,116,0.3); color:#fff; }
.pm-legend ul { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:1fr 1fr; gap:3px 10px; }
.pm-legend li { --c:#888; display:flex; align-items:center; gap:9px; font-size:11.5px; font-weight:600; color:rgba(255,255,255,0.9); cursor:pointer; padding:4px 6px; border-radius:8px; transition:background .15s, opacity .15s; }
.pm-legend li:hover { background:rgba(255,255,255,0.08); }
.pm-legend li:not(.on) { opacity:0.45; }
.pm-legend .cbx { width:16px; height:16px; border-radius:5px; border:2px solid var(--c); flex:0 0 auto; display:flex; align-items:center; justify-content:center; color:#fff; transition:background .15s; }
.pm-legend li.on .cbx { background:var(--c); }
.pm-legend .cbx svg { opacity:0; transition:opacity .15s; }
.pm-legend li.on .cbx svg { opacity:1; }
.pm-clabel { pointer-events:none; text-align:center; white-space:nowrap; font-family:'Plus Jakarta Sans',sans-serif; }
.pm-clabel .en { font-size:13px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; line-height:1.1; color:#59626f; text-shadow:0 1px 3px rgba(255,255,255,0.85); }
.pm-clabel .na { font-size:11px; font-weight:600; line-height:1.3; color:#8b95a5; text-shadow:0 1px 3px rgba(255,255,255,0.85); }
.pm-wrap.dark .pm-clabel .en { color:#c6cfdd; text-shadow:0 1px 4px rgba(0,0,0,0.85); }
.pm-wrap.dark .pm-clabel .na { color:#8492a7; text-shadow:0 1px 4px rgba(0,0,0,0.85); }
.pm-card { position:absolute; right:16px; bottom:16px; z-index:1000; width:340px; max-width:calc(100% - 32px); border-radius:18px; background:#0d1322; color:#fff; box-shadow:0 20px 50px rgba(0,0,0,0.42); border:1px solid rgba(255,255,255,0.08); overflow:hidden; opacity:0; transform:translateY(16px) scale(0.97); pointer-events:none; transition:opacity .32s ease, transform .32s cubic-bezier(.22,1,.36,1); }
.pm-card.show { opacity:1; transform:none; pointer-events:auto; }
.pm-card-top { display:flex; gap:14px; align-items:flex-start; padding:20px 20px 14px; }
.pm-card-logo { flex:0 0 auto; width:52px; height:52px; border-radius:14px; background:#fff; border:2px solid var(--c); display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-weight:700; font-size:17px; color:var(--c); overflow:hidden; }
.pm-card-logo img { width:76%; height:76%; object-fit:contain; }
.pm-card h3 { margin:0; font-size:17px; font-weight:800; letter-spacing:-0.01em; line-height:1.2; }
.pm-card .cat { display:inline-flex; align-items:center; gap:7px; margin-top:7px; font-family:'JetBrains Mono',monospace; font-size:10.5px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--c); }
.pm-card .cat .dot { width:7px; height:7px; border-radius:50%; background:var(--c); }
.pm-close { position:absolute; top:14px; right:14px; width:28px; height:28px; border:0; cursor:pointer; border-radius:8px; background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.7); font-size:16px; line-height:1; display:flex; align-items:center; justify-content:center; transition:background .2s; }
.pm-close:hover { background:rgba(255,255,255,0.16); color:#fff; }
.pm-card p.desc { margin:0; padding:0 20px 4px; font-size:13.5px; line-height:1.6; color:rgba(255,255,255,0.72); }
.pm-card .addr { display:flex; gap:8px; align-items:flex-start; padding:14px 20px 0; font-family:'JetBrains Mono',monospace; font-size:11.5px; line-height:1.5; color:rgba(255,255,255,0.5); }
.pm-card .addr svg { flex:0 0 auto; margin-top:1px; }
.pm-actions { display:flex; gap:9px; padding:16px 20px 20px; }
.pm-actions a { flex:1; display:inline-flex; align-items:center; justify-content:center; gap:7px; padding:10px; border-radius:10px; font-size:12.5px; font-weight:700; text-decoration:none; transition:all .2s; }
.pm-actions .primary { background:linear-gradient(135deg,#f09f74,#c96a3e); color:#fff; box-shadow:0 6px 16px rgba(201,106,62,0.36); }
.pm-actions .primary:hover { transform:translateY(-1px); }
.pm-actions .ghost { background:rgba(255,255,255,0.08); color:#fff; border:1px solid rgba(255,255,255,0.14); }
.pm-actions .ghost:hover { background:rgba(255,255,255,0.14); }
`;