import React from "react";
import { Panel } from "../../ds/core/Panel.jsx";
import { StatPill } from "../../ds/core/StatPill.jsx";
import { Button } from "../../ds/core/Button.jsx";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { Badge } from "../../ds/core/Badge.jsx";
import { VideoPanel } from "../../ds/media/VideoPanel.jsx";
import { Section, PageHeader, CtaBand } from "../Shared.jsx";

export default function TrainingContent({ jakobImage, content, settings }) {
  const c = content;
  return (
    <div>
      <PageHeader mode="Training Mode" title={c.headline} subhead={c.subhead} />
      <Section>
        <div className="r-cols-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
          {c.formats.map((fo, i) => (
            <Panel key={i} hover pad="var(--space-7)">
              <SectionLabel num={"0" + (i + 1)}>Format</SectionLabel>
              <h3 style={{ margin: "var(--space-4) 0 0", fontFamily: "var(--font-display)", fontSize: "2rem",
                textTransform: "uppercase", color: "var(--ash)", lineHeight: "var(--lh-heading)" }}>{fo.title}</h3>
              <p style={{ margin: "var(--space-4) 0 var(--space-5)", color: "var(--text-secondary)", textWrap: "pretty" }}>{fo.body}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {fo.stats.map((st, k) => <StatPill key={k} value={st.value} label={st.label} />)}
              </div>
            </Panel>))}
        </div>
        <div style={{ marginTop: "var(--space-7)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-5)" }}>
          <p style={{ margin: 0, maxWidth: "52ch", color: "var(--text-secondary)" }}>
            {c.locationLine}
          </p>
          <Button href="/probetraining">{c.ctaButton}</Button>
          <Badge tone="ember">{c.badgeText}</Badge>
        </div>
      </Section>
      <Section tone="band" style={{ paddingTop: "var(--space-8)" }}>
        <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "minmax(240px,300px) 1fr", gap: "var(--space-8)", alignItems: "center" }}>
          <VideoPanel label={c.videoLabel} poster={jakobImage}
            href={c.videoHref}
            caption={c.videoCaption}
            note={c.videoNote} />
          <div>
            <SectionLabel>{c.section2Label}</SectionLabel>
            <h2 style={{ margin: "var(--space-4) 0 0", fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)",
              lineHeight: "var(--lh-display)", textTransform: "uppercase", color: "var(--ash)", textWrap: "balance" }}>
              {c.section2Title}
            </h2>
            <p style={{ margin: "var(--space-5) 0 var(--space-6)", maxWidth: "52ch", color: "var(--text-secondary)", textWrap: "pretty" }}>
              {c.section2Body}
            </p>
            <Button href="/probetraining">{c.section2Button}</Button>
          </div>
        </div>
      </Section>
      <CtaBand settings={settings} />
    </div>
  );
}
