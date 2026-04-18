// ============================================================
// NeuroManifest — Bonus pages
// ============================================================

function EnvAudit() {
  const sections = [
    { t: "Chambre à coucher", items: ["Écran hors de la pièce 30 min avant le sommeil", "Température < 19°C", "Lumière chaude uniquement après 21h", "Livre de visualisation à portée de main", "Alarme réveil hors du lit"] },
    { t: "Espace de travail", items: ["Une seule tâche visible à la fois", "Téléphone en pièce adjacente", "Eau à moins d'un pas", "Lumière naturelle directe", "Un déclencheur de pratique (objet)"] },
    { t: "Cuisine · Corps", items: ["Fruits en position dominante", "Ultra-transformés hors vue", "Bouteille d'eau pré-remplie", "Café décalé à 9h30", "Verre d'eau avant chaque repas"] },
    { t: "Rituels · Seuils", items: ["Tapis de méditation déployé la veille", "Journal ouvert à la bonne page", "Playlist audio NM prête", "Vêtements du lendemain préparés", "Premier geste du matin : eau + respiration"] },
  ];
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NM · Bonus · Audit d'environnement" right="Finding 04" />
      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">Bonus · 01</div>
        <div style={{ height: 12 }} />
        <div className="display" style={{ fontSize: 58, color: "var(--deep)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
          Audit <span className="display--italic">d'environnement.</span>
        </div>
        <div style={{ height: 10 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 15, color: "var(--muted)", maxWidth: 520 }}>
          L'espace façonne l'acte. Coche ce qui est vrai aujourd'hui. Le reste devient ton chantier.
        </div>
      </div>

      <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        {sections.map((s, i) => (
          <div key={s.t} style={{ borderTop: "1px solid var(--rule-paper)", paddingTop: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div className="eyebrow" style={{ color: "var(--deep)" }}>0{i+1} · {s.t}</div>
              <GeoGlyph id={i+1} size={16} fg="var(--deep)" />
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 12 }}>
              {s.items.map((it, j) => (
                <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ marginTop: 4 }}><TickBox size={14} checked={i === 0 && j < 2} /></div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.45 }}>{it}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Bonus · Audit</span>
        <span>— 088 —</span>
      </div>
    </div>
  );
}

function GoalsTemplate() {
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NM · Bonus · Objectifs écrits" right="Finding 06" />
      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">Bonus · 02</div>
        <div style={{ height: 12 }} />
        <div className="display" style={{ fontSize: 58, color: "var(--deep)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
          Écris. <span className="display--italic">Puis relis.</span>
        </div>
        <div style={{ height: 10 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 15, color: "var(--muted)", maxWidth: 540 }}>
          Un objectif écrit est 42% plus probable. Trois phrases suffisent — au présent, au sensoriel, au vrai.
        </div>
      </div>

      <div style={{ marginTop: 40, borderTop: "1px solid var(--rule-paper)", paddingTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", rowGap: 28, columnGap: 24 }}>
          <div className="eyebrow">Horizon</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["90 jours", "12 mois", "3 ans", "Vie"].map(h => (
              <div key={h} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <TickBox size={14} checked={h === "90 jours"} />
                <span style={{ fontSize: 13, color: "var(--ink-soft)", fontFamily: "var(--ff-display)", fontStyle: "italic" }}>{h}</span>
              </div>
            ))}
          </div>

          <div className="eyebrow">Domaine</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Santé", "Relations", "Œuvre", "Finance", "Élan intérieur"].map(d => (
              <span key={d} style={{ border: "1px solid var(--rule-paper)", padding: "5px 12px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--ff-mono)", color: "var(--ink-soft)" }}>{d}</span>
            ))}
          </div>

          <div className="eyebrow">Phrase 01 · L'état</div>
          <div style={{ borderBottom: "1px solid var(--rule-paper)", paddingBottom: 10, fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 17, color: "var(--muted)" }}>
            « Je suis… »
          </div>

          <div className="eyebrow">Phrase 02 · Le geste</div>
          <div style={{ borderBottom: "1px solid var(--rule-paper)", paddingBottom: 10, fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 17, color: "var(--muted)" }}>
            « Chaque jour je… »
          </div>

          <div className="eyebrow">Phrase 03 · La preuve</div>
          <div style={{ borderBottom: "1px solid var(--rule-paper)", paddingBottom: 10, fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 17, color: "var(--muted)" }}>
            « Je sais que c'est vrai quand… »
          </div>
        </div>
      </div>

      <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, borderTop: "1px solid var(--rule-paper)", paddingTop: 22 }}>
        <div>
          <div className="eyebrow">Sensation corporelle associée</div>
          <div style={{ height: 14 }} />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--rule-paper)", height: 28 }} />
          ))}
        </div>
        <div>
          <div className="eyebrow">Prochain pas · Cette semaine</div>
          <div style={{ height: 14 }} />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--rule-paper)", height: 28 }} />
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Bonus · Objectifs</span>
        <span>— 090 —</span>
      </div>
    </div>
  );
}

function EvidenceJournal() {
  const items = [
    { d: "17.04", t: "Message de N., opportunité inattendue.", tag: "Filtre" },
    { d: "18.04", t: "Refus accepté sans contraction.", tag: "Chimie" },
  ];
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NM · Bonus · Journal des preuves · RAS" right="Finding 02" />
      <div style={{ marginTop: 64 }}>
        <div className="eyebrow">Bonus · 03</div>
        <div style={{ height: 12 }} />
        <div className="display" style={{ fontSize: 58, color: "var(--deep)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
          Le journal <span className="display--italic">des preuves.</span>
        </div>
        <div style={{ height: 10 }} />
        <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 15, color: "var(--muted)", maxWidth: 540 }}>
          Le RAS cherche ce que tu lui donnes à chercher. Note les indices — le monde en produira d'autres.
        </div>
      </div>

      <div style={{ marginTop: 36, borderTop: "1px solid var(--rule-paper)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 120px 32px", padding: "14px 0", borderBottom: "1px solid var(--rule-paper)", fontFamily: "var(--ff-mono)", fontSize: 9, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
          <div>Date</div><div>Preuve observée</div><div>Catégorie</div><div style={{ textAlign: "right" }}>✓</div>
        </div>
        {items.map((it, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 1fr 120px 32px", padding: "18px 0", borderBottom: "1px solid var(--rule-paper)", alignItems: "center" }}>
            <div className="num-mono" style={{ fontSize: 12, color: "var(--deep)" }}>{it.d}</div>
            <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 15, color: "var(--deep)" }}>{it.t}</div>
            <div className="num-mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase" }}>{it.tag}</div>
            <div style={{ textAlign: "right" }}><TickBox size={14} checked /></div>
          </div>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 1fr 120px 32px", padding: "18px 0", borderBottom: "1px solid var(--rule-paper)", alignItems: "center" }}>
            <div className="num-mono" style={{ fontSize: 12, color: "var(--muted)" }}>__.__</div>
            <div style={{ borderBottom: "1px dotted var(--rule-paper)", height: 16, marginRight: 16 }} />
            <div style={{ borderBottom: "1px dotted var(--rule-paper)", height: 16, marginRight: 12 }} />
            <div style={{ textAlign: "right" }}><TickBox size={14} /></div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Bonus · Journal RAS</span>
        <span>— 092 —</span>
      </div>
    </div>
  );
}

/* --- Pocket cards : printable sheet with 7 cards + 1 cover card --- */
function PocketCards() {
  const cards = [
    { n: 1, fr: "Tes pensées recâblent ton cerveau.", en: "Thoughts physically rewire your brain.", act: "Visualiser 5 min, 5 sens." },
    { n: 2, fr: "La gratitude recalibre ton filtre.", en: "Gratitude tunes your reticular filter.", act: "3 gratitudes précises, au réveil." },
    { n: 3, fr: "Deux minutes suffisent au corps.", en: "Posture shifts hormones in 2 minutes.", act: "Posture ouverte · respiration 4-7-8." },
    { n: 4, fr: "L'environnement décide pour toi.", en: "Environment outranks willpower.", act: "Retire 1 friction. Ajoute 1 déclencheur." },
    { n: 5, fr: "Huit semaines changent ton cerveau.", en: "8 weeks reshape brain density.", act: "5 min Présence + 5 min scan corporel." },
    { n: 6, fr: "Écrire, c'est déjà commencer.", en: "Written goals: +42% probability.", act: "1 objectif, 3 phrases, au présent." },
    { n: 7, fr: "Le sommeil écrit en dur.", en: "Sleep consolidates learning.", act: "Rituel du soir · 10 min · gratitude + visualisation." },
  ];
  return (
    <div className="page" data-grain="on" style={{ padding: "var(--pad)" }}>
      <Running left="NM · Cartes de poche · 7 findings" right="À découper" />

      <div style={{ marginTop: 60 }}>
        <div className="eyebrow">Bonus · 04</div>
        <div style={{ height: 10 }} />
        <div className="display" style={{ fontSize: 46, color: "var(--deep)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
          Cartes <span className="display--italic">de poche.</span>
        </div>
        <div style={{ height: 8 }} />
        <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
          Découper · plastifier · glisser dans une poche
        </div>
      </div>

      <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {/* Cover card */}
        <div style={{ background: "var(--deep)", color: "var(--paper)", padding: 18, aspectRatio: "1.6 / 1", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px dashed rgba(255,255,255,0)", boxShadow: "0 0 0 1px rgba(10,37,64,0.14)" }}>
          <div className="eyebrow" style={{ color: "var(--cyan)" }}>NeuroManifest · Deck</div>
          <div>
            <div className="display" style={{ fontSize: 26, letterSpacing: "-0.025em", lineHeight: 0.95 }}>
              Sept <span className="display--italic">découvertes.</span>
            </div>
            <div style={{ fontFamily: "var(--ff-mono)", fontSize: 9, letterSpacing: "0.2em", color: "rgba(246,242,234,0.6)", textTransform: "uppercase", marginTop: 8 }}>
              Harvard · 2 mois · 10 min/jour
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <BrainMark size={56} stroke="var(--cyan)" accent="var(--cyan)" />
            <div className="num-mono" style={{ fontSize: 10, color: "rgba(246,242,234,0.6)" }}>00 / 07</div>
          </div>
        </div>

        {cards.map(c => (
          <div key={c.n} style={{ background: "var(--paper-2)", padding: 16, aspectRatio: "1.6 / 1", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 0 0 1px rgba(10,37,64,0.14)", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div className="num-mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Finding</div>
                <div className="display" style={{ fontSize: 38, color: "var(--deep)", letterSpacing: "-0.03em", lineHeight: 0.9 }}>0{c.n}</div>
              </div>
              <GeoGlyph id={c.n} size={18} fg="var(--deep)" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--ff-display)", fontSize: 15, color: "var(--deep)", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
                {c.fr}
              </div>
              <div style={{ fontFamily: "var(--ff-display)", fontStyle: "italic", fontSize: 11, color: "var(--muted)", marginTop: 4, lineHeight: 1.3 }}>
                {c.en}
              </div>
            </div>
            <div style={{ borderTop: "1px solid var(--rule-paper)", paddingTop: 8, fontFamily: "var(--ff-mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--deep)", textTransform: "uppercase" }}>
              → {c.act}
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: 36, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--muted)", textTransform: "uppercase" }}>
        <span>Cartes · 85 × 55 mm</span>
        <span>— 094 —</span>
      </div>
    </div>
  );
}

Object.assign(window, { EnvAudit, GoalsTemplate, EvidenceJournal, PocketCards });
