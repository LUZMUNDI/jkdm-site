import React from "react";
import { FeaturedFighter } from "../../ds/select/FeaturedFighter.jsx";
import { FighterThumb } from "../../ds/select/FighterThumb.jsx";
import { Button } from "../../ds/core/Button.jsx";
import { Wordmark } from "../../ds/core/Wordmark.jsx";
import { Section, CtaBand, jkdmShell, ModeTag } from "../Shared.jsx";

export default function AboutContent({ roster, settings, page }) {
  const [id, setId] = React.useState(roster[0]?.id);
  const active = roster.find(r => r.id === id) || roster[0];
  const p = page || {};
  return (
    <div>
      <header style={{ padding: "var(--space-9) 0 var(--space-7)", borderBottom: "var(--hairline) solid var(--border-hairline)" }}>
        <div className="r-stack" style={{ ...jkdmShell, display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "var(--space-8)", alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <ModeTag>{p.mode || "Story Mode"}</ModeTag>
            <Wordmark text={p.title || "Über uns"} size="xl" />
            <p style={{ margin: 0, maxWidth: "44ch", fontSize: "var(--text-lead)", color: "var(--text-secondary)", textWrap: "pretty" }}>
              {p.subhead || "Drei Lehrer, eine Linie. Klick dich durch — einer von ihnen wird dir bald sagen, dass deine Deckung unten ist."}
            </p>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-3)" }}>
              {roster.map(r => <FighterThumb key={r.id} name={r.short} role={r.role} image={r.image}
                selected={r.id === id} onClick={() => setId(r.id)} />)}
            </div>
            <p style={{ margin: "var(--space-3) 0 0", fontSize: "var(--text-xs)", color: "var(--ash-dim)",
              letterSpacing: "var(--ls-nav)", textTransform: "uppercase" }}>Klick auf einen Kopf — der Rest der Seite wechselt mit.</p>
          </div>
        </div>
      </header>
      <Section>
        <FeaturedFighter label="Wähle deinen Lehrer" name={active.name} title={active.title}
          tagline={active.tagline} bio={active.bio} stats={active.stats} image={active.image} brush={active.brush}>
          <div style={{ marginTop: "var(--space-5)" }}>
            <Button href="/probetraining">Bei {active.short.split(" ").slice(-1)} studieren</Button>
          </div>
        </FeaturedFighter>
      </Section>
      <CtaBand settings={settings} />
    </div>
  );
}
