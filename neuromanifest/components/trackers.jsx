// ============================================================
// NeuroManifest — Trackers (daily + weekly)
// ============================================================

function DailyTracker() {
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NM · Tracker quotidien" right="Semaine __ / 08" />

      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">Tracker · Quotidien</div>
        <div style={{ height: 14 }} />
        <div className="display" style={{ fontSize: 64, color: "var(--deep)", letterSpacing: "-0.03em", lineHeight: 0.94 }}>
          Sept jours,<br />
          <span className="display--italic">dix minutes.</span>
        </div>
        <div style={{ height: 10 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 16, color: "var(--muted)", maxWidth: 540 }}>
          Coche à la fin de chaque pratique. L'œil voit ce que la main confirme.
        </div>
      </div>

      <div style={{ marginTop: 40, borderTop: "1px solid var(--rule-paper)" }}>
        {/* Header row */}
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 90px 90px 1fr", padding: "14px 0", borderBottom: "1px solid var(--rule-paper)", fontFamily: "var(--ff-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
          <div>Jour</div>
          <div>Date · Sensation dominante</div>
          <div style={{ textAlign: "center" }}>Présence 5'</div>
          <div style={{ textAlign: "center" }}>NM 5'</div>
          <div>Note du jour</div>
        </div>

        {days.map((d, i) => (
          <div key={d} style={{ display: "grid", gridTemplateColumns: "120px 1fr 90px 90px 1fr", padding: "22px 0", borderBottom: "1px solid var(--rule-paper)", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--ff-display)", fontSize: 18, color: "var(--deep)" }}>{d}</div>
              <div className="num-mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.14em" }}>J · 0{i+1}</div>
            </div>
            <div style={{ borderBottom: "1px dotted var(--rule-paper)", height: 20, marginRight: 20 }} />
            <div style={{ textAlign: "center" }}>
              <TickBox size={16} color="var(--deep)" />
            </div>
            <div style={{ textAlign: "center" }}>
              <TickBox size={16} color="var(--cyan-bright)" checked={i === 0} />
            </div>
            <div style={{ borderBottom: "1px dotted var(--rule-paper)", height: 20, marginLeft: 12 }} />
          </div>
        ))}
      </div>

      {/* Bottom: week signature */}
      <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }}>
        <div>
          <div className="eyebrow">Total semaine</div>
          <div className="num-mono" style={{ fontSize: 48, color: "var(--deep)", letterSpacing: "-0.02em", marginTop: 8 }}>
            __ / 14
          </div>
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>pratiques cochées</div>
        </div>
        <div>
          <div className="eyebrow">Cohérence</div>
          <div style={{ marginTop: 12 }}>
            <ProgressBar value={3} total={7} color="var(--deep)" />
          </div>
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 8 }}>Jours consécutifs</div>
        </div>
        <div>
          <div className="eyebrow">Sensation dominante</div>
          <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Calme", "Clarté", "Tension", "Élan", "Flou", "Paix"].map(s => (
              <span key={s} style={{ border: "1px solid var(--rule-paper)", padding: "5px 10px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--ff-mono)", color: "var(--ink-soft)" }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Tracker · Quotidien</span>
        <span>— 081 —</span>
      </div>
    </div>
  );
}

function WeeklyTracker() {
  const pillars = [
    { n: 1, label: "Recâblage · Visualisation", v: 5 },
    { n: 2, label: "Filtrage · Gratitude", v: 4 },
    { n: 3, label: "Chimie · Posture", v: 3 },
    { n: 4, label: "Environnement", v: 2 },
    { n: 5, label: "Présence · Méditation", v: 4 },
    { n: 6, label: "Clarté · Écriture", v: 3 },
    { n: 7, label: "Consolidation · Sommeil", v: 5 },
  ];
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NM · Tracker hebdomadaire" right="7 piliers" />

      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">Tracker · Hebdomadaire</div>
        <div style={{ height: 14 }} />
        <div className="display" style={{ fontSize: 64, color: "var(--deep)", letterSpacing: "-0.03em", lineHeight: 0.94 }}>
          Les sept piliers,<br />
          <span className="display--italic">en équilibre.</span>
        </div>
      </div>

      <div style={{ marginTop: 40, borderTop: "1px solid var(--rule-paper)" }}>
        {pillars.map(p => (
          <div key={p.n} style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 40px", padding: "22px 0", borderBottom: "1px solid var(--rule-paper)", alignItems: "center", gap: 18 }}>
            <GeoGlyph id={p.n} size={22} fg="var(--deep)" />
            <div style={{ fontFamily: "var(--ff-display)", fontSize: 18, color: "var(--deep)" }}>{p.label}</div>
            <div style={{ display: "flex", gap: 6 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: 18, background: i < p.v ? "var(--deep)" : "rgba(10,37,64,0.08)" }} />
              ))}
            </div>
            <div className="num-mono" style={{ fontSize: 13, color: "var(--deep)", textAlign: "right" }}>{p.v}/7</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <div className="eyebrow">Réflexion · Cette semaine</div>
        <div style={{ height: 10 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 16, color: "var(--ink-soft)" }}>
          « Où as-tu senti un glissement ? Quel pilier demande plus d'attention la semaine prochaine ? »
        </div>
        <div style={{ height: 18 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ height: 1, background: "var(--rule-paper)" }} />
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Tracker · Hebdomadaire</span>
        <span>— 082 —</span>
      </div>
    </div>
  );
}

Object.assign(window, { DailyTracker, WeeklyTracker });
