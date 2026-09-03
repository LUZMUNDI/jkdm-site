import React from "react";
import { StatCard } from "../../ds/core/StatCard.jsx";
import { Button } from "../../ds/core/Button.jsx";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { Badge } from "../../ds/core/Badge.jsx";
import { Checkbox } from "../../ds/forms/Checkbox.jsx";
import { Section, PageHeader, CtaBand } from "../Shared.jsx";

function buildMailtoHref(c, settings) {
  const to = settings?.contactEmail || "";
  const subject = "Buchbestellung \u2014 Zahlungsbeleg";
  const body = [
    "Hallo Dominik,",
    "",
    `ich habe ${settings?.bookPrice || c.statCards?.[1]?.value || "15 \u20ac"} f\u00fcr \u00bb${c.title}\u00ab \u00fcberwiesen.`,
    "Verwendungszweck / Name: ",
    "Datum der \u00dcberweisung: ",
    "",
    "Anbei/angeh\u00e4ngt der Beleg. Bitte um Zusendung des PDFs, danke!"
  ].join("\n");
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
}

export default function BookContent({ content, settings }) {
  const c = content;
  const hasTransferDetails = c.transferAccountHolder || c.transferIban;
  const [widerrufConsent, setWiderrufConsent] = React.useState(false);
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
              <Button size="lg" href="#buch-bestellen">{c.primaryButton}</Button>
              <Button variant="quiet" href="/probetraining">{c.secondaryButton}</Button>
            </div>
            <div style={{ marginTop: "var(--space-5)" }}>
              <Badge tone="ember">{c.badgeText}</Badge>
            </div>
          </div>
        </div>
      </Section>

      {hasTransferDetails && (
        <Section id="buch-bestellen">
          <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
            <div>
              <SectionLabel>{c.transferTitle}</SectionLabel>
              {c.transferIntro && <p style={{ margin: "var(--space-4) 0 0", color: "var(--text-secondary)", maxWidth: "48ch", textWrap: "pretty" }}>{c.transferIntro}</p>}
              {c.transferNote && <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--text-sm)", color: "var(--ash-dim)", maxWidth: "48ch" }}>{c.transferNote}</p>}
            </div>
            <div style={{ background: "var(--surface-card)", border: "var(--hairline) solid var(--border-hairline)", padding: "var(--space-6)" }}>
              <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--text-sm)" }}>
                {c.transferAccountHolder && (
                  <div><span style={{ color: "var(--ash-dim)" }}>Kontoinhaber: </span><span style={{ color: "var(--ash)" }}>{c.transferAccountHolder}</span></div>
                )}
                {c.transferIban && (
                  <div><span style={{ color: "var(--ash-dim)" }}>IBAN: </span><span style={{ color: "var(--ash)", fontFamily: "monospace" }}>{c.transferIban}</span></div>
                )}
                {c.transferBic && (
                  <div><span style={{ color: "var(--ash-dim)" }}>BIC: </span><span style={{ color: "var(--ash)", fontFamily: "monospace" }}>{c.transferBic}</span></div>
                )}
                {c.transferReferenceHint && (
                  <div><span style={{ color: "var(--ash-dim)" }}>Verwendungszweck: </span><span style={{ color: "var(--ash)" }}>{c.transferReferenceHint}</span></div>
                )}
              </div>
              <div style={{ marginTop: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <Checkbox required checked={widerrufConsent} onChange={e => setWiderrufConsent(e.target.checked)}>
                  Ich bin einverstanden, dass mit der Zusendung des PDFs vor Ablauf der 14-tägigen Widerrufsfrist begonnen wird, und weiß, dass ich damit mein Widerrufsrecht verliere.
                  {" "}<a href="/widerruf" style={{ color: "var(--red)" }}>Widerrufsbelehrung lesen</a>.
                </Checkbox>
                <Button href={widerrufConsent ? buildMailtoHref(c, settings) : undefined}
                  disabled={!widerrufConsent}>{c.transferButtonLabel}</Button>
              </div>
            </div>
          </div>
        </Section>
      )}

      <CtaBand settings={settings} />
    </div>
  );
}
