// ============================================================
// NeuroManifest — Cover variations (3)
// A4 (794 × 1123). All share the same brand system.
// ============================================================

/* --- Variation A : SOBRE (contemplatif, espace dominant) ----- */
function CoverSobre({ palette }) {
  return (
    <div className="page page--dark" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NeuroManifest" right="Édition 01 · 2026" />

      {/* Top eyebrow block */}
      <div style={{ position: "absolute", top: 110, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--cyan)" }}>Protocole · 01</div>
          <div style={{ height: 8 }} />
          <div className="smallcaps" style={{ color: "rgba(246,242,234,0.55)" }}>Basé sur 7 découvertes Harvard</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="num-mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(246,242,234,0.55)" }}>
            08 SEMAINES
          </div>
          <div className="num-mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(246,242,234,0.55)", marginTop: 4 }}>
            10 MIN / JOUR
          </div>
        </div>
      </div>

      {/* Central brain mark */}
      <div style={{ position: "absolute", top: 260, left: "50%", transform: "translateX(-50%)" }}>
        <BrainMark size={340} stroke="var(--cyan)" accent="var(--cyan)" />
      </div>

      {/* Title */}
      <div style={{ position: "absolute", top: 650, left: 56, right: 56, textAlign: "center" }}>
        <div className="display" style={{ fontSize: 92, color: "var(--paper)", letterSpacing: "-0.035em", lineHeight: 0.92 }}>
          Neuro<span className="display--italic" style={{ color: "var(--cyan)" }}>Manifest</span>
        </div>
        <div style={{ height: 24 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontSize: 19, fontStyle: "italic", color: "rgba(246,242,234,0.72)", letterSpacing: "0.01em", maxWidth: 540, margin: "0 auto", lineHeight: 1.4 }}>
          Le protocole pour recâbler ta réalité en juste deux mois.
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 96, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div className="smallcaps" style={{ color: "rgba(246,242,234,0.45)" }}>Auteur</div>
          <div style={{ height: 6 }} />
          <div style={{ fontFamily: "var(--ff-display)", fontSize: 17, color: "var(--paper)" }}>Josef Friedrich Kasz</div>
          <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: "rgba(246,242,234,0.45)", marginTop: 3, textTransform: "uppercase" }}>
            Programme de Méditation de Présence
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="smallcaps" style={{ color: "rgba(246,242,234,0.45)" }}>Livret</div>
          <div className="num-mono" style={{ fontSize: 24, color: "var(--cyan)", marginTop: 6 }}>I / VIII</div>
        </div>
      </div>

      <Running left="NM · PROTOCOL 01" right="FR / EN" position="bottom" />
    </div>
  );
}

/* --- Variation B : IMPACTANT (grand cerveau bleed, typo massive) --- */
function CoverImpact({ palette }) {
  return (
    <div className="page page--dark" data-grain="on" style={{ padding: 0 }}>
      {/* Huge brain bleed, top-right */}
      <div style={{ position: "absolute", top: -120, right: -150, opacity: 1 }}>
        <BrainMark size={780} stroke="var(--cyan)" accent="var(--cyan)" />
      </div>

      <Running left="NEUROMANIFEST" right="01" />

      {/* Number column */}
      <div style={{ position: "absolute", top: 110, left: 56, width: 180 }}>
        <div style={{ borderTop: "1px solid rgba(64,224,208,0.4)", paddingTop: 10 }}>
          <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--cyan)", textTransform: "uppercase" }}>
            Index
          </div>
          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "24px 1fr", rowGap: 8, columnGap: 12, fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.08em", color: "rgba(246,242,234,0.7)", textTransform: "uppercase" }}>
            <span>01</span><span>Recâblage</span>
            <span>02</span><span>Filtrage</span>
            <span>03</span><span>Chimie</span>
            <span>04</span><span>Environnement</span>
            <span>05</span><span>Conscience</span>
            <span>06</span><span>Clarté</span>
            <span>07</span><span>Consolidation</span>
            <span>08</span><span>Intégration</span>
          </div>
        </div>
      </div>

      {/* Massive title, bottom-aligned */}
      <div style={{ position: "absolute", bottom: 120, left: 56, right: 56 }}>
        <div className="display" style={{ fontSize: 168, color: "var(--paper)", letterSpacing: "-0.055em", lineHeight: 0.82 }}>
          Neuro<br />
          <span className="display--italic" style={{ color: "var(--cyan)" }}>Manifest.</span>
        </div>
        <div style={{ height: 32 }} />
        <div style={{ display: "flex", gap: 60, alignItems: "flex-start", borderTop: "1px solid rgba(246,242,234,0.18)", paddingTop: 18 }}>
          <div style={{ maxWidth: 380, fontFamily: "var(--ff-display)", fontStyle: "italic", fontWeight: 300, fontSize: 22, color: "var(--paper)", lineHeight: 1.32, letterSpacing: "-0.005em" }}>
            Le protocole pour recâbler ta réalité en juste deux mois.
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ textAlign: "right" }}>
            <div className="num-mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cyan)", textTransform: "uppercase" }}>
              Josef F. Kasz
            </div>
            <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(246,242,234,0.55)", textTransform: "uppercase", marginTop: 6 }}>
              8 SEM · 10 MIN/J · 7 FINDINGS
            </div>
          </div>
        </div>
      </div>

      <Running left="HARVARD · NEUROSCIENCE" right="EDITION 2026" position="bottom" />
    </div>
  );
}

/* --- Variation C : ÉDITORIAL (magazine, grille, chiffres en exergue) --- */
function CoverEditorial({ palette }) {
  return (
    <div className="page" data-grain="on" style={{ padding: 0, background: "var(--paper)" }}>
      {/* Editorial masthead bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "28px 56px", borderBottom: "1px solid var(--rule-paper)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ fontFamily: "var(--ff-display)", fontSize: 15, letterSpacing: "-0.01em", color: "var(--deep)" }}>
          Neuro<span style={{ fontStyle: "italic" }}>Manifest</span>
        </div>
        <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>
          Vol. 01 · Édition Pilote · 2026 · №001
        </div>
      </div>

      {/* Issue number as giant display */}
      <div style={{ position: "absolute", top: 84, left: 56 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
          <div className="display" style={{ fontSize: 260, color: "var(--deep)", lineHeight: 0.78, letterSpacing: "-0.06em" }}>01</div>
          <div style={{ paddingBottom: 24, maxWidth: 300 }}>
            <div className="eyebrow" style={{ color: "var(--muted)" }}>Le protocole</div>
            <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 22, color: "var(--ink-soft)", lineHeight: 1.28, marginTop: 10 }}>
              Recâbler sa réalité en deux mois, par la science du cerveau.
            </div>
          </div>
        </div>
      </div>

      {/* Brain figure card */}
      <div style={{ position: "absolute", top: 440, left: 56, width: 310 }}>
        <div style={{ background: "var(--deep)", aspectRatio: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <BrainMark size={260} stroke="var(--cyan)" accent="var(--cyan)" />
          <div style={{ position: "absolute", bottom: 10, left: 14, right: 14, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 9, letterSpacing: "0.2em", color: "rgba(246,242,234,0.6)", textTransform: "uppercase" }}>
            <span>Fig. 01</span><span>Neural connectivity</span>
          </div>
        </div>
        <div className="num-mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase", marginTop: 10 }}>
          Visuel · Réseau neuronal, protocole NM
        </div>
      </div>

      {/* Right column — manifesto + meta */}
      <div style={{ position: "absolute", top: 440, left: 400, right: 56, display: "flex", flexDirection: "column", gap: 28 }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--cyan-bright)", fontWeight: 600 }}>Manifesto</div>
          <div style={{ height: 12 }} />
          <div className="display" style={{ fontSize: 56, color: "var(--deep)", letterSpacing: "-0.035em", lineHeight: 0.94 }}>
            Ton cerveau <span className="display--italic">n'est pas</span> figé.
          </div>
        </div>
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontWeight: 300, fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.45, maxWidth: 340 }}>
          Huit semaines. Sept découvertes. Dix minutes par jour. Le protocole simple qui réécrit tes circuits profonds — et, à travers eux, ta réalité.
        </div>
        <div style={{ borderTop: "1px solid var(--rule-paper)", paddingTop: 14 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 10, fontSize: 11, color: "var(--muted)", fontFamily: "var(--ff-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <div>Durée</div><div style={{ color: "var(--deep)" }}>08 semaines</div>
            <div>Pratique</div><div style={{ color: "var(--deep)" }}>10 min / jour</div>
            <div>Appui</div><div style={{ color: "var(--deep)" }}>Harvard · 7 findings</div>
            <div>Format</div><div style={{ color: "var(--deep)" }}>Livret + audio</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 36, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid var(--rule-paper)", paddingTop: 18 }}>
        <div>
          <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 16, color: "var(--deep)" }}>
            Josef Friedrich Kasz
          </div>
          <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: "var(--muted)", textTransform: "uppercase", marginTop: 2 }}>
            Programme de Méditation de Présence
          </div>
        </div>
        <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>
          Cover · I / VIII
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CoverSobre, CoverImpact, CoverEditorial });
