import React from "react";
import { SectionLabel } from "../ds/core/SectionLabel.jsx";
import { Button } from "../ds/core/Button.jsx";

export const jkdmShell = { maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" };

export function Section({ children, label, title, lead, tone = "page", style, id }) {
  return (
    <section id={id} style={{ background: tone === "band" ? "var(--bg-band)" : "var(--bg-page)",
      padding: "var(--section-y) 0", borderTop: "var(--hairline) solid var(--border-hairline)", ...style }}>
      <div style={jkdmShell}>
        {(label || title || lead) && <div style={{ maxWidth: "48ch", marginBottom: "var(--space-7)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {label && <SectionLabel>{label}</SectionLabel>}
          {title && <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)",
            lineHeight: "var(--lh-display)", textTransform: "uppercase", letterSpacing: "var(--ls-display)",
            color: "var(--ash)", textWrap: "balance" }}>{title}</h2>}
          {lead && <p style={{ margin: 0, fontSize: "var(--text-lead)", color: "var(--text-secondary)", textWrap: "pretty" }}>{lead}</p>}
        </div>}
        {children}
      </div>
    </section>
  );
}

export function ModeTag({ children }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", alignSelf: "flex-start",
      fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: "var(--fw-semi)", textTransform: "uppercase",
      letterSpacing: ".22em", color: "var(--ash-dim)", border: "var(--hairline) solid var(--border-hairline)",
      background: "var(--surface-card)", padding: ".42em .8em .42em .7em",
      clipPath: "polygon(0 0,calc(100% - .55em) 0,100% .55em,100% 100%,.55em 100%,0 calc(100% - .55em))" }}>
      <span style={{ color: "var(--red)", fontSize: ".9em" }}>▶</span>{children}
    </span>
  );
}

export function PageHeader({ title, subhead, children, mode }) {
  return (
    <header style={{ padding: "var(--space-9) 0 var(--space-7)", borderBottom: "var(--hairline) solid var(--border-hairline)" }}>
      <div style={{ ...jkdmShell, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {mode && <ModeTag>{mode}</ModeTag>}
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-1)", lineHeight: "1.02",
          paddingTop: ".08em", textTransform: "uppercase", letterSpacing: "var(--ls-display)",
          backgroundImage: "var(--chrome-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text",
          color: "transparent", WebkitTextFillColor: "transparent", filter: "drop-shadow(var(--chrome-shadow))",
          margin: 0 }}>{title}</h1>
        {subhead && <p style={{ margin: 0, maxWidth: "52ch", fontSize: "var(--text-lead)", color: "var(--text-secondary)", textWrap: "pretty" }}>{subhead}</p>}
        {children}
      </div>
    </header>
  );
}

export function CtaBand({ settings }) {
  const headline = settings?.ctaBandHeadline || "Ein Abend bei uns. Dann gehörst du dazu.";
  const body = settings?.ctaBandBody || "Der erste Abend kostet 20 €. Danach entscheidest du, ob du zur Linie gehörst — und wir freuen uns, wenn ja.";
  const button = settings?.ctaBandButton || "Jetzt Probetraining buchen";
  return (
    <section style={{ background: "var(--bg-band)", borderTop: "var(--hairline) solid var(--border-hairline)",
      borderBottom: "var(--hairline) solid var(--border-hairline)", padding: "var(--space-8) 0" }}>
      <div style={{ ...jkdmShell, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-6)" }}>
        <div style={{ flex: "1 1 420px" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)",
            lineHeight: "var(--lh-display)", textTransform: "uppercase", color: "var(--ash)" }}>{headline}</h2>
          <p style={{ margin: "var(--space-4) 0 0", color: "var(--text-secondary)" }}>{body}</p>
        </div>
        <Button size="lg" href="/probetraining">{button}</Button>
      </div>
    </section>
  );
}

export function SiteFooter({ settings }) {
  const col = { display: "flex", flexDirection: "column", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-secondary)" };
  const s = settings || {};
  const probetrainingPrice = s.probetrainingPrice || "20 €";
  const bookPrice = s.bookPrice || "15 €";
  return (
    <footer style={{ background: "var(--void)", borderTop: "var(--hairline) solid var(--border-hairline)", padding: "var(--space-8) 0 var(--space-6)" }}>
      <div style={{ ...jkdmShell, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <ModeTag>Options</ModeTag>
        <span style={{ flex: 1, height: "var(--hairline)", background: "var(--border-hairline)" }} />
      </div>
      <div className="r-cols-4" style={{ ...jkdmShell, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "var(--space-7)" }}>
        <div>
          <img src="/assets/jkdm-logo-white.png" alt="JKDM" style={{ height: "72px", width: "auto" }} />
          <p style={{ margin: "var(--space-4) 0 0", maxWidth: "38ch", fontSize: "var(--text-sm)", color: "var(--text-secondary)", textWrap: "pretty" }}>
            {s.footerBlurb || "Jeet Kune Do München. Privates Studio in Obergiesing-Ramersdorf, gegründet 2017 von Sifu Dominik Rettig."}<br />
            <span style={{ color: "var(--ash)", fontWeight: "var(--fw-semi)" }}>{s.footerBlurbBold || "Fünf Stile, zwei Abende, eine Linie — seit 1992 weitergegeben."}</span>
          </p>
        </div>
        <div style={col}>
          <SectionLabel rule={false}>Studio</SectionLabel>
          <span>{s.addressStreet || "Redlingerstr. 7"}</span><span>{s.addressCity || "81735 München"}</span><span>{s.addressUbahn || "U5 Michaelibad"}</span>
          <span style={{ marginTop: "var(--space-2)", color: "var(--ash)" }}>{s.scheduleLine || "Mittwoch 19:00 · Sonntag 18:00"}</span>
        </div>
        <div style={col}>
          <SectionLabel rule={false}>Los geht&#39;s</SectionLabel>
          <a href="/probetraining">Probetraining {probetrainingPrice} →</a>
          <a href="/training">Trainingsformate</a>
          <a href="/buch">Das Buch — {bookPrice}</a>
          <span style={{ marginTop: "var(--space-3)", fontSize: "var(--text-xs)", color: "var(--ash-dim)" }}>
            <a href="/impressum" style={{ color: "inherit" }}>Impressum</a> · <a href="/datenschutz" style={{ color: "inherit" }}>Datenschutz</a>{s.contactEmail && <> · <a href={`mailto:${s.contactEmail}`} style={{ color: "inherit" }}>Kontakt</a></>}
          </span>
        </div>
        <div style={col}>
          <SectionLabel rule={false}>Folg uns</SectionLabel>
          <a href={s.instagramUrl || "https://www.instagram.com/jkdmuenchen"} target="_blank" rel="noopener">Instagram — {s.instagramHandle || "@jkdmuenchen"}</a>
          <a href={s.tiktokUrl || "https://www.tiktok.com/@sifudominik"} target="_blank" rel="noopener">TikTok — {s.tiktokHandle || "@sifudominik"}</a>
          <span style={{ marginTop: "var(--space-2)", fontSize: "var(--text-xs)", color: "var(--ash-dim)" }}>Technik, Studio-Alltag, kein Schnickschnack.</span>
        </div>
      </div>
      <div style={{ ...jkdmShell, marginTop: "var(--space-7)", paddingTop: "var(--space-4)",
        borderTop: "var(--hairline) solid var(--border-hairline)", fontSize: "var(--text-xs)", color: "var(--ash-dim)" }}>
        © JKDM — Jeet Kune Do München. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
