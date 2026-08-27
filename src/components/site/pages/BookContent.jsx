import React from "react";
import { StatCard } from "../../ds/core/StatCard.jsx";
import { Button } from "../../ds/core/Button.jsx";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { Badge } from "../../ds/core/Badge.jsx";
import { Section, PageHeader, CtaBand } from "../Shared.jsx";

export default function BookContent({ content, settings }) {
  const c = content;
  return (
    <div>
      <PageHeader mode="Archive" title={c.headline} subhead={c.subhead} />
      <Section>
        <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "minmax(280px,380px) 1fr", gap: "var(--space-8)", alignItems: "center" }}>
          <div style={{ position: "relative", border: "var(--hairline) solid var(--border-hairline)",
            boxShadow: "var(--shadow-panel)" }}>
            <img src="/assets/book-cover.jpg" alt={c.title}
              style={{ width: "100%", height: "auto" }} />
          </div>
          <div>
            <SectionLabel>{c.coverCaption}</SectionLabel>
            <h2 style={{ margin: "var(--space-4) 0 0", fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)",
              lineHeight: "1.02", paddingTop: ".06em", textTransform: "uppercase", color: "var(--ash)", textWrap: "balance" }}>
              {c.title}
            </h2>
            <p style={{ margin: "var(--space-5) 0 0", color: "var(--text-secondary)", maxWidth: "52ch", textWrap: "pretty" }}>
              {c.body}
            </p>
            <div className="r-cols-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", marginTop: "var(--space-6)" }}>
              {c.statCards.map((s, i) => <StatCard key={i} value={s.value} label={s.label} note={s.note} />)}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-5)", marginTop: "var(--space-7)" }}>
              <Button size="lg">{c.primaryButton}</Button>
              <Button variant="quiet" href="/probetraining">{c.secondaryButton}</Button>
            </div>
            <div style={{ marginTop: "var(--space-5)" }}>
              <Badge tone="ember">{c.badgeText}</Badge>
            </div>
          </div>
        </div>
      </Section>
      <CtaBand settings={settings} />
    </div>
  );
}
