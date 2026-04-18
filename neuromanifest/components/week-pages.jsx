// ============================================================
// NeuroManifest — Interior pages: week template, TOC, opener
// ============================================================

const WEEKS = [
  {
    n: 1, title: "Recâblage",
    subtitle: "Visualisation vivante",
    finding: { n: 1, title: "Your thoughts physically rewire your brain", fr: "Tes pensées recâblent physiquement ton cerveau.", ref: "Pascual-Leone · Harvard Medical School · 1995" },
    lede: "Les pianistes qui jouent mentalement reconstruisent les mêmes circuits moteurs que ceux qui jouent réellement. La pensée n'est pas un reflet du réel — elle en est un bâtisseur.",
    practice: "Visualiser en 5 sens, 5 minutes, une scène de ta vie manifestée. Y sentir l'odeur, la lumière, le poids.",
    audio: "NM-01 · Visualisation vivante · 11:42",
    prompt: "Quelle scène précise choisis-tu ? Quels détails sensoriels la rendent réelle ?",
  },
  {
    n: 2, title: "Filtrage",
    subtitle: "Gratitude & RAS",
    finding: { n: 2, title: "Gratitude measurably increases income", fr: "La gratitude augmente mesurablement les revenus.", ref: "Harvard Business Review · Emmons & McCullough" },
    lede: "Le système réticulaire activateur (RAS) filtre chaque seconde 11 millions de bits de réalité. La gratitude recalibre ce filtre vers les opportunités.",
    practice: "Écrire 3 gratitudes précises du matin. 5 min. Sens corporel à chaque item.",
    audio: "NM-02 · Gratitude active · 09:58",
    prompt: "Qu'as-tu remarqué aujourd'hui qui t'aurait échappé hier ?",
  },
  {
    n: 3, title: "Chimie corporelle",
    subtitle: "Postures de puissance",
    finding: { n: 3, title: "Body posture changes your hormones in 2 minutes", fr: "La posture modifie tes hormones en deux minutes.", ref: "Cuddy, Carney, Yap · Harvard Business School" },
    lede: "Deux minutes d'ouverture physique suffisent à élever la testostérone de 20% et réduire le cortisol de 25%. Le corps précède l'esprit.",
    practice: "2 min de posture ouverte + 3 min de respiration 4-7-8.",
    audio: "NM-03 · Corps souverain · 08:12",
    prompt: "Quelle sensation dominait avant ? Après ?",
  },
  {
    n: 4, title: "Environnement",
    subtitle: "Habitudes automatiques",
    finding: { n: 4, title: "Environment shapes behavior more than willpower", fr: "L'environnement façonne ton comportement plus que la volonté.", ref: "Wood · Duke / Harvard" },
    lede: "45% de nos actes quotidiens sont des habitudes déclenchées par l'environnement — pas par la volonté. Change l'espace, change le résultat.",
    practice: "Audit d'une pièce. Retirer 1 friction. Ajouter 1 déclencheur positif.",
    audio: "NM-04 · Architecture du quotidien · 10:04",
    prompt: "Quelle friction retirée aujourd'hui ? Quel déclencheur ajouté ?",
  },
  {
    n: 5, title: "Conscience",
    subtitle: "Méditation de Présence",
    finding: { n: 5, title: "Meditation changes brain density in 8 weeks", fr: "La méditation modifie la densité cérébrale en 8 semaines.", ref: "Lazar · Harvard Massachusetts General Hospital" },
    lede: "Huit semaines de pratique réduisent l'amygdale de stress et densifient le cortex préfrontal. Tu tiens, littéralement, les clés de ta sérénité.",
    practice: "5 min de Méditation de Présence + 5 min de scan corporel.",
    audio: "NM-05 · Présence pure · 12:30",
    prompt: "Quelle pensée est revenue le plus ? Comment l'as-tu laissée passer ?",
  },
  {
    n: 6, title: "Clarté",
    subtitle: "Objectifs écrits",
    finding: { n: 6, title: "Writing goals makes them 42% more likely", fr: "Écrire un objectif le rend 42% plus probable.", ref: "Matthews · Dominican / Harvard derivative" },
    lede: "L'écriture transforme le désir flou en instruction neurologique. Le cerveau cherche ce qui est déjà nommé.",
    practice: "Écrire 1 objectif trimestriel au présent, en 3 phrases sensorielles.",
    audio: "NM-06 · Le futur écrit · 09:20",
    prompt: "Formule ton objectif comme s'il était déjà vrai.",
  },
  {
    n: 7, title: "Consolidation",
    subtitle: "Rituel du soir",
    finding: { n: 7, title: "Sleep consolidates long-term learning", fr: "Le sommeil consolide l'apprentissage à long terme.", ref: "Stickgold · Harvard Medical School" },
    lede: "Ce qui n'est pas dormi n'est pas appris. Le cerveau nocturne réécrit le jour en circuits durables.",
    practice: "Rituel du soir 10 min : gratitude + visualisation + respiration lente.",
    audio: "NM-07 · Portes du sommeil · 14:18",
    prompt: "Qu'as-tu déposé ce soir ? Qu'as-tu laissé partir ?",
  },
  {
    n: 8, title: "Intégration",
    subtitle: "Plan de maintenance à vie",
    finding: { n: 7, title: "The full NeuroManifest day", fr: "Une journée complète NeuroManifest.", ref: "Synthèse · Protocole NM" },
    lede: "Les sept piliers deviennent une seule journée. Un rythme, pas une discipline. Un terrain, pas un effort.",
    practice: "Journée NM complète + plan des 12 prochains mois.",
    audio: "NM-08 · L'ancrage · 16:02",
    prompt: "Quelle version de toi est sortie de ces 8 semaines ?",
  },
];

/* --- TOC / Sommaire --- */
function TOCPage() {
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NeuroManifest · Sommaire" right="ii" />
      <div style={{ marginTop: 80 }}>
        <div className="eyebrow">Sommaire</div>
        <div style={{ height: 14 }} />
        <div className="display" style={{ fontSize: 72, color: "var(--deep)", lineHeight: 0.94, letterSpacing: "-0.03em" }}>
          Huit semaines,<br />
          <span className="display--italic">sept découvertes.</span>
        </div>
      </div>

      <div style={{ marginTop: 56, borderTop: "1px solid var(--rule-paper)" }}>
        {WEEKS.map((w) => (
          <div key={w.n} style={{ display: "grid", gridTemplateColumns: "56px 1fr 60px 90px", alignItems: "baseline", padding: "22px 0", borderBottom: "1px solid var(--rule-paper)", gap: 16 }}>
            <div className="num-mono" style={{ fontSize: 13, color: "var(--deep)", letterSpacing: "0.1em" }}>
              0{w.n}
            </div>
            <div>
              <div style={{ fontFamily: "var(--ff-display)", fontSize: 22, color: "var(--deep)", letterSpacing: "-0.015em" }}>
                Semaine {w.n} — {w.title}
              </div>
              <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 14, color: "var(--muted)", marginTop: 2 }}>
                {w.subtitle} · Finding {w.finding.n}
              </div>
            </div>
            <div>
              <GeoGlyph id={w.n} size={22} fg="var(--deep)" />
            </div>
            <div className="num-mono" style={{ fontSize: 12, color: "var(--muted)", textAlign: "right", letterSpacing: "0.1em" }}>
              p. {String(10 + (w.n - 1) * 8).padStart(3, "0")}
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Bonus · Trackers · Cartes de poche</span>
        <span>p. 074 · 080 · 088</span>
      </div>
    </div>
  );
}

/* --- Week opener : full-bleed dark title page --- */
function WeekOpener({ week }) {
  const w = week;
  return (
    <div className="page page--dark" data-grain="on" style={{ padding: 0 }}>
      <Running left={`Semaine ${String(w.n).padStart(2,"0")} · ${w.title}`} right={`0${w.n} / 08`} />

      {/* Giant week number */}
      <div style={{ position: "absolute", top: 100, left: 56, right: 56 }}>
        <div className="eyebrow" style={{ color: "var(--cyan)" }}>Semaine · Week</div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginTop: 20 }}>
          <div className="display" style={{ fontSize: 320, color: "var(--paper)", letterSpacing: "-0.06em", lineHeight: 0.76 }}>
            0{w.n}
          </div>
          <div style={{ marginTop: 40 }}>
            <GeoGlyph id={w.n} size={64} fg="var(--cyan)" />
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: 520, left: 56, right: 56 }}>
        <div className="display" style={{ fontSize: 72, color: "var(--paper)", letterSpacing: "-0.035em", lineHeight: 0.92 }}>
          {w.title}
        </div>
        <div style={{ height: 18 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 22, color: "var(--cyan)", letterSpacing: "-0.005em" }}>
          — {w.subtitle}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 140, left: 56, right: 56, borderTop: "1px solid rgba(246,242,234,0.2)", paddingTop: 22, display: "flex", justifyContent: "space-between", gap: 40 }}>
        <div style={{ maxWidth: 440 }}>
          <div className="eyebrow" style={{ color: "rgba(64,224,208,0.8)" }}>
            Harvard Finding · {String(w.finding.n).padStart(2, "0")}
          </div>
          <div style={{ height: 12 }} />
          <div style={{ fontFamily: "var(--ff-display)", fontSize: 20, color: "var(--paper)", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
            {w.finding.title}.
          </div>
          <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 15, color: "rgba(246,242,234,0.7)", lineHeight: 1.4, marginTop: 10 }}>
            {w.finding.fr}
          </div>
        </div>
        <div style={{ textAlign: "right", minWidth: 180 }}>
          <div className="eyebrow" style={{ color: "rgba(246,242,234,0.5)" }}>Pratique</div>
          <div className="num-mono" style={{ fontSize: 22, color: "var(--paper)", marginTop: 10, letterSpacing: "0.02em" }}>
            10 min
          </div>
          <div className="num-mono" style={{ fontSize: 10, color: "rgba(246,242,234,0.55)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>
            Par jour
          </div>
        </div>
      </div>

      <Running left={w.finding.ref} right="Source" position="bottom" />
    </div>
  );
}

/* --- Week interior: finding explanation + practice + journal --- */
function WeekInterior({ week }) {
  const w = week;
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left={`NM · Semaine ${String(w.n).padStart(2,"0")} / 08`} right={`${w.title}`} />

      {/* Top header with week progress */}
      <div style={{ marginTop: 64 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div className="eyebrow">Semaine {w.n} · {w.subtitle}</div>
          <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
            Jour 01 · 07
          </div>
        </div>
        <div style={{ height: 10 }} />
        <ProgressBar value={w.n} total={8} />
      </div>

      {/* Finding card */}
      <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "64px 1fr", gap: 20, alignItems: "flex-start" }}>
        <div style={{ paddingTop: 6 }}>
          <GeoGlyph id={w.n} size={44} fg="var(--deep)" />
          <div className="num-mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.16em", marginTop: 8, textTransform: "uppercase" }}>
            F · 0{w.finding.n}
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: "var(--cyan-bright)" }}>
            Harvard Finding · {String(w.finding.n).padStart(2,"0")}
          </div>
          <div style={{ height: 10 }} />
          <div className="display" style={{ fontSize: 38, color: "var(--deep)", lineHeight: 1.02, letterSpacing: "-0.025em" }}>
            {w.finding.fr}
          </div>
          <div style={{ height: 14 }} />
          <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 16, color: "var(--muted)", lineHeight: 1.45, maxWidth: 520 }}>
            {w.finding.title}
          </div>
          <div style={{ height: 22 }} />
          <div style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65, maxWidth: 560 }}>
            {w.lede}
          </div>
          <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase", marginTop: 18 }}>
            Source · {w.finding.ref}
          </div>
        </div>
      </div>

      <div style={{ height: 34 }} />
      <hr className="hrule" />
      <div style={{ height: 30 }} />

      {/* Two-col : practice + audio */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 36 }}>
        <div>
          <div className="eyebrow">Exercice du jour</div>
          <div style={{ height: 10 }} />
          <div style={{ fontFamily: "var(--ff-display)", fontSize: 22, color: "var(--deep)", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
            {w.practice}
          </div>
          <div style={{ height: 20 }} />
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ width: 28, height: 28, background: "var(--deep)", color: "var(--cyan)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-mono)", fontSize: 11 }}>05</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>min · Présence</div>
            </div>
            <div style={{ width: 1, height: 22, background: "var(--rule-paper)" }} />
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ width: 28, height: 28, background: "var(--cyan)", color: "var(--deep)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-mono)", fontSize: 11 }}>05</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>min · NeuroManifest</div>
            </div>
          </div>
        </div>
        <div style={{ borderLeft: "1px solid var(--rule-paper)", paddingLeft: 28 }}>
          <div className="eyebrow">Audio guide</div>
          <div style={{ height: 10 }} />
          <div style={{ fontFamily: "var(--ff-display)", fontSize: 17, color: "var(--deep)", lineHeight: 1.3 }}>
            {w.audio}
          </div>
          <div style={{ height: 16 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--deep)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 0, height: 0, borderLeft: "7px solid var(--cyan)", borderTop: "5px solid transparent", borderBottom: "5px solid transparent", marginLeft: 2 }} />
            </div>
            <div style={{ flex: 1, height: 2, background: "var(--rule-paper)", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "32%", background: "var(--deep)" }} />
            </div>
            <div className="num-mono" style={{ fontSize: 10, color: "var(--muted)" }}>03:47 / 11:42</div>
          </div>
        </div>
      </div>

      <div style={{ height: 30 }} />
      <hr className="hrule" />
      <div style={{ height: 26 }} />

      {/* Journal zone */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div className="eyebrow">Journal · Réflexion</div>
          <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
            Date __ / __ / __
          </div>
        </div>
        <div style={{ height: 10 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 17, color: "var(--ink-soft)", letterSpacing: "-0.005em" }}>
          « {w.prompt} »
        </div>
        <div style={{ height: 18 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} style={{ height: 1, background: "var(--rule-paper)" }} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Pratique · 10 min / jour</span>
        <span>— {String(10 + (w.n - 1) * 8 + 2).padStart(3, "0")} —</span>
      </div>
    </div>
  );
}

Object.assign(window, { WEEKS, TOCPage, WeekOpener, WeekInterior });
