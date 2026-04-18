// ============================================================
// NeuroManifest — Shared primitives (brain mark, rule, icons)
// ============================================================

// Neural brain mark — elegant connected-nodes graphic.
// Variant:
//   'network' = organic nodes + soft lines (default)
//   'orbits'  = concentric + curves
//   'grid'    = regular lattice
//   'hemisphere' = two halves of brain
function BrainMark({ variant = "network", size = 280, stroke = "#40E0D0", accent = "#40E0D0", bg = "transparent" }) {
  const nodes = React.useMemo(() => {
    // Deterministic pseudo-random nodes arranged around a central hub.
    const pts = [];
    const R = 100, cx = 150, cy = 150;
    // Core
    pts.push({ x: cx, y: cy, r: 4.5, core: true });
    // Ring 1
    const ring1 = 7;
    for (let i = 0; i < ring1; i++) {
      const a = (i / ring1) * Math.PI * 2 + 0.3;
      const rr = R * 0.42 + (i % 2) * 8;
      pts.push({ x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr, r: 2.2 });
    }
    // Ring 2
    const ring2 = 11;
    for (let i = 0; i < ring2; i++) {
      const a = (i / ring2) * Math.PI * 2 + 0.1;
      const rr = R * 0.78 + (i % 3) * 6 - 4;
      pts.push({ x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr, r: 1.6 });
    }
    // Ring 3 (sparse, outer)
    const ring3 = 13;
    for (let i = 0; i < ring3; i++) {
      const a = (i / ring3) * Math.PI * 2 + 0.7;
      const rr = R * 1.08 + ((i * 37) % 11) - 5;
      pts.push({ x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr, r: 1.1 });
    }
    return pts;
  }, []);

  // Build edges: from core to ring1, from ring1 to nearest ring2, ring2 to nearest ring3
  const edges = React.useMemo(() => {
    const es = [];
    const core = nodes[0];
    const r1 = nodes.slice(1, 8);
    const r2 = nodes.slice(8, 19);
    const r3 = nodes.slice(19);
    r1.forEach(p => es.push([core, p]));
    r1.forEach(p => {
      // connect each r1 to 2 closest r2
      const sorted = [...r2].sort((a, b) => dist(p, a) - dist(p, b));
      es.push([p, sorted[0]]);
      es.push([p, sorted[1]]);
    });
    r2.forEach(p => {
      const sorted = [...r3].sort((a, b) => dist(p, a) - dist(p, b));
      es.push([p, sorted[0]]);
      if (Math.random() < 1) es.push([p, sorted[1]]);
    });
    return es;
  }, [nodes]);

  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  return (
    <svg viewBox="0 0 300 300" width={size} height={size} style={{ display: "block" }}>
      {bg !== "transparent" && <rect width="300" height="300" fill={bg} />}
      <defs>
        <radialGradient id="bm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="45%" stopColor={accent} stopOpacity="0.06" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="130" fill="url(#bm-glow)" />
      <g stroke={stroke} strokeWidth="0.6" opacity="0.55" fill="none">
        {edges.map((e, i) => (
          <line key={i} x1={e[0].x} y1={e[0].y} x2={e[1].x} y2={e[1].y} />
        ))}
      </g>
      <g fill={accent}>
        {nodes.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} opacity={p.core ? 1 : 0.75 - (i > 18 ? 0.3 : 0.1)} />
        ))}
      </g>
      {/* Inner concentric hints */}
      <g fill="none" stroke={accent} strokeWidth="0.3" opacity="0.25">
        <circle cx="150" cy="150" r="42" />
        <circle cx="150" cy="150" r="78" />
        <circle cx="150" cy="150" r="108" />
      </g>
    </svg>
  );
}

// Geometric shape glyph — "solid geometric" iconography alternative to pictograms.
// Each finding / week gets a distinct shape id (1..8).
function GeoGlyph({ id = 1, size = 44, fg = "#0A2540", bg = "transparent" }) {
  const s = size;
  const shapes = {
    1: <circle cx="22" cy="22" r="14" fill={fg} />,
    2: <rect x="8" y="8" width="28" height="28" fill={fg} />,
    3: <polygon points="22,6 38,36 6,36" fill={fg} />,
    4: <polygon points="22,4 40,22 22,40 4,22" fill={fg} />,
    5: <g fill={fg}><circle cx="22" cy="22" r="14" /><circle cx="22" cy="22" r="5" fill={bg === "transparent" ? "#F6F2EA" : bg} /></g>,
    6: <g fill={fg}><rect x="6" y="6" width="14" height="14" /><rect x="24" y="24" width="14" height="14" /></g>,
    7: <g fill={fg}><polygon points="22,6 38,22 22,38 6,22" /><circle cx="22" cy="22" r="4" fill={bg === "transparent" ? "#F6F2EA" : bg} /></g>,
    8: <g fill={fg}><circle cx="14" cy="22" r="10" /><circle cx="30" cy="22" r="10" /></g>,
  };
  return (
    <svg viewBox="0 0 44 44" width={s} height={s} style={{ display: "block" }}>
      {shapes[id] || shapes[1]}
    </svg>
  );
}

// Tick box
function TickBox({ checked = false, size = 14, onClick, color = "#0A2540" }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-block", width: size, height: size,
        border: `1px solid ${color}`, background: checked ? color : "transparent",
        position: "relative", cursor: onClick ? "pointer" : "default",
        verticalAlign: "middle", flexShrink: 0,
      }}
    >
      {checked && (
        <svg viewBox="0 0 14 14" width={size} height={size}>
          <polyline points="3,7 6,10 11,4" stroke="#F6F2EA" strokeWidth="2" fill="none" />
        </svg>
      )}
    </span>
  );
}

// Progress bar (thin, editorial)
function ProgressBar({ value = 0, total = 8, height = 2, color = "#0A2540" }) {
  return (
    <div style={{ display: "flex", gap: 4, width: "100%" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height,
          background: i < value ? color : "rgba(0,0,0,0.12)",
        }} />
      ))}
    </div>
  );
}

// Small caps label
function Eyebrow({ children, color }) {
  return <span className="eyebrow" style={{ color }}>{children}</span>;
}

// Running header for pages
function Running({ left, right, position = "top" }) {
  return (
    <div className={`page__running page__running--${position}`}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

Object.assign(window, { BrainMark, GeoGlyph, TickBox, ProgressBar, Eyebrow, Running });
