import React from "react";
import { SelectTile } from "../../ds/select/SelectTile.jsx";
import { Badge } from "../../ds/core/Badge.jsx";
import { Button } from "../../ds/core/Button.jsx";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { StatPill } from "../../ds/core/StatPill.jsx";
import { EmberField } from "../../ds/effects/EmberField.jsx";
import { Section, PageHeader, CtaBand } from "../Shared.jsx";

export default function VoicesContent({ voices, settings }) {
  const [i, setI] = React.useState(0);
  const a = voices[i];
  React.useEffect(() => {
    const on = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); setI(v => (v + 1) % voices.length); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); setI(v => (v - 1 + voices.length) % voices.length); }
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [voices.length]);

  return (
    <div>
      <PageHeader mode="Character Select" title="Stimmen" subhead="Zehn Schüler, zehn Wege in dieselbe Linie. Klick dich durch die Reihe.">
        <Badge tone="ember">Luciano & Michael sind echt — die übrigen acht sind Platzhalter, Fotos und Zitate folgen</Badge>
      </PageHeader>

      <Section style={{ paddingTop: "var(--space-7)" }}>
        <div className="r-stack r-stage" style={{ position: "relative", overflow: "hidden", background: "var(--surface-card)",
          border: "var(--hairline) solid var(--border-hairline)", boxShadow: "var(--shadow-panel)",
          display: "grid", gridTemplateColumns: "minmax(260px,34%) 1fr", minHeight: "440px" }}>
          <div style={{ position: "relative", overflow: "hidden", background: a.image ? "var(--void-2)" :
            "repeating-linear-gradient(135deg,var(--panel) 0 10px,var(--void-2) 10px 20px)" }}>
            {a.image
              ? <img src={a.image} alt={a.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "top center" }} />
              : <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontSize: "9rem", lineHeight: 1, color: "var(--ash-faint)" }}>{a.initial}</span>}
            <span style={{ position: "absolute", inset: 0, background: "var(--vignette-ember)", mixBlendMode: "screen" }} />
            <EmberField count={16} />
            {!a.image && <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "var(--space-4)",
              background: "var(--fade-bottom)", fontSize: "var(--text-xs)", color: "var(--ash-dim)",
              letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>Foto folgt</span>}
          </div>
          <div style={{ position: "relative", padding: "var(--space-7)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <SectionLabel>Schüler {String(i + 1).padStart(2, "0")} / {voices.length}</SectionLabel>
            <div>
              <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display-1)",
                lineHeight: "1.02", paddingTop: ".06em", textTransform: "uppercase", letterSpacing: "var(--ls-display)",
                color: "var(--ash)" }}>{a.name}</h2>
              <div style={{ marginTop: "var(--space-2)", display: "flex", flexWrap: "wrap", gap: "var(--space-3)",
                fontWeight: "var(--fw-bold)", fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)",
                textTransform: "uppercase", color: "var(--red)" }}>
                <span>{a.disc}</span><span style={{ color: "var(--ash-dim)" }}>{a.since}</span>
                <span style={{ color: "var(--ash-dim)" }}>Stil: {a.style}</span>
              </div>
            </div>
            <blockquote style={{ position: "relative", margin: 0, paddingLeft: "var(--space-5)",
              borderLeft: "var(--bar-accent) solid var(--red)", fontFamily: "var(--font-body)",
              fontWeight: "var(--fw-semi)", fontSize: "var(--text-lead)", lineHeight: 1.4, color: "var(--ash)",
              textWrap: "pretty" }}>„{a.quote}“</blockquote>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "auto" }}>
              {a.stats.map((s, k) => <StatPill key={k} value={s.value} label={s.label} />)}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(112px,1fr))", gap: "var(--space-2)", marginTop: "var(--space-5)" }}>
          {voices.map((v, k) => <SelectTile key={v.id} name={v.name} initial={v.initial} image={v.image}
            selected={k === i} onClick={() => setI(k)} />)}
        </div>
        <div style={{ marginTop: "var(--space-4)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-5)" }}>
          <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--ash-dim)", letterSpacing: "var(--ls-nav)",
            textTransform: "uppercase" }}>Klicken oder mit ← → durch die Reihe</p>
          <Button href="/probetraining">Dein Platz in der Reihe — 20 €</Button>
        </div>
      </Section>
      <CtaBand settings={settings} />
    </div>
  );
}
