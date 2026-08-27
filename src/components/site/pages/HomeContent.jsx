import React from "react";
import { Button } from "../../ds/core/Button.jsx";
import { StatPill } from "../../ds/core/StatPill.jsx";
import { Panel } from "../../ds/core/Panel.jsx";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { Badge } from "../../ds/core/Badge.jsx";
import { EmberField } from "../../ds/effects/EmberField.jsx";
import { VideoPanel } from "../../ds/media/VideoPanel.jsx";
import { Section, CtaBand, jkdmShell } from "../Shared.jsx";

export default function HomeContent({ dominikImage, content, settings }) {
  const c = content;
  return (
    <div>
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "var(--hairline) solid var(--border-hairline)" }}>
        <img src={dominikImage} alt="" className="r-hero-img" style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "52%",
          objectFit: "cover", objectPosition: "top center", opacity: .9 }} />
        <span style={{ position: "absolute", inset: 0, background: "var(--vignette-ember)", mixBlendMode: "screen" }} />
        <span className="r-hero-scrim" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,var(--void) 26%,rgba(7,6,5,.72) 52%,rgba(7,6,5,.25) 100%)" }} />
        <EmberField count={16} />
        <div className="r-hero-pad" style={{ ...jkdmShell, position: "relative", padding: "var(--space-10) var(--gutter) var(--space-9)" }}>
          <div style={{ maxWidth: "720px" }}>
            <SectionLabel>{c.heroEyebrow}</SectionLabel>
            <h1 style={{ margin: "var(--space-5) 0 0", fontFamily: "var(--font-display)", fontSize: "var(--text-hero)",
              lineHeight: "1.04", paddingTop: ".08em", textTransform: "uppercase", letterSpacing: "var(--ls-display)",
              backgroundImage: "var(--chrome-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text",
              color: "transparent", WebkitTextFillColor: "transparent", filter: "drop-shadow(var(--chrome-shadow))" }}>
              {c.heroHeadline}
            </h1>
            <p style={{ margin: "var(--space-5) 0 0", maxWidth: "46ch", fontSize: "var(--text-lead)",
              color: "var(--ash)", textWrap: "pretty" }}>
              {c.heroSubhead}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginTop: "var(--space-7)",
              fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: "var(--fw-semi)",
              textTransform: "uppercase", letterSpacing: ".26em", color: "var(--ash-dim)", animation: "jkdmBlink 1.6s steps(1,end) infinite" }}>
              <span style={{ color: "var(--red)" }}>▶</span>Press Start
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-5)", marginTop: "var(--space-4)" }}>
              <Button size="lg" href="/probetraining">{c.heroPrimaryButton}</Button>
              <Button variant="quiet" href="/training">{c.heroSecondaryButton}</Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-7)" }}>
              {c.heroStats.map((s, i) => <StatPill key={i} value={s.value} label={s.label} />)}
            </div>
          </div>
        </div>
      </section>

      <Section style={{ paddingBottom: "var(--space-9)" }}>
        <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "minmax(260px,340px) 1fr", gap: "var(--space-8)", alignItems: "center" }}>
          <VideoPanel label="Sifu Dominik" poster={dominikImage}
            href="https://www.instagram.com/p/DXr_xTejlHo/"
            caption="Eine Minute. Dann weisst du, ob du hierher gehörst."
            note="Reel · @jkdmuenchen auf Instagram" />
          <div>
            <SectionLabel num="01">{c.minuteLabel}</SectionLabel>
            <h2 style={{ margin: "var(--space-4) 0 0", fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)",
              lineHeight: "var(--lh-display)", textTransform: "uppercase", color: "var(--ash)", textWrap: "balance" }}>
              {c.minuteTitle}
            </h2>
            <p style={{ margin: "var(--space-5) 0 var(--space-6)", maxWidth: "52ch", color: "var(--text-secondary)", textWrap: "pretty" }}>
              {c.minuteBody}
            </p>
            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              {c.minuteQuotes.map((q, i) => (
                <p key={i} style={{ margin: 0, paddingLeft: "var(--space-4)", borderLeft: "var(--bar-accent) solid var(--red)",
                  fontFamily: "var(--font-body)", fontWeight: "var(--fw-semi)", fontSize: "var(--text-lead)",
                  lineHeight: 1.35, color: "var(--ash)", textWrap: "pretty" }}>„{q}“</p>))}
            </div>
            <p style={{ margin: "var(--space-6) 0 0", fontFamily: "var(--font-display)", fontSize: "1.5rem",
              textTransform: "uppercase", color: "var(--red)" }}>{c.minuteClosing}</p>
          </div>
        </div>
      </Section>

      <Section tone="band" label={c.whyLabel} title={c.whyTitle} lead={c.whyLead}>
        <div className="r-cols-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-5)" }}>
          {c.whyReasons.map((r, i) => (
            <Panel key={i} hover>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-label)", color: "var(--red)", letterSpacing: "var(--ls-label)" }}>{"0" + (i + 1)}</div>
              <h3 style={{ margin: "var(--space-3) 0 0", fontFamily: "var(--font-display)", fontSize: "1.5rem",
                textTransform: "uppercase", color: "var(--ash)", lineHeight: "var(--lh-heading)" }}>{r.title}</h3>
              <p style={{ margin: "var(--space-3) 0 0", color: "var(--text-secondary)", fontSize: "var(--text-sm)", textWrap: "pretty" }}>{r.body}</p>
            </Panel>))}
        </div>
      </Section>

      <Section label={c.disciplinesLabel} title={c.disciplinesTitle}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
          {c.disciplines.map((d, i) => <Badge key={i} cjk={d.cjk || undefined}>{d.name}</Badge>)}
        </div>
        <p style={{ margin: "var(--space-6) 0 0", maxWidth: "58ch", color: "var(--text-secondary)" }}>
          {c.locationLine}
        </p>
      </Section>

      <CtaBand settings={settings} />
    </div>
  );
}
