import React from "react";
import { Panel } from "../../ds/core/Panel.jsx";
import { Button } from "../../ds/core/Button.jsx";
import { Badge } from "../../ds/core/Badge.jsx";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { Section, PageHeader, CtaBand } from "../Shared.jsx";

function SeminarModal({ seminar, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(6,6,8,.82)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-5)" }}>
      <div onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: "760px", maxHeight: "88vh", overflowY: "auto",
          background: "var(--surface-card)", border: "var(--hairline) solid var(--border-hairline)",
          boxShadow: "var(--shadow-panel)" }}>
        <button type="button" onClick={onClose} aria-label="Schließen"
          style={{ position: "absolute", top: "var(--space-4)", right: "var(--space-4)", zIndex: 2,
            width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center",
            background: "var(--void)", border: "var(--hairline) solid var(--border-hairline)", color: "var(--ash)",
            fontSize: "1.1rem", lineHeight: 1, cursor: "pointer" }}>✕</button>

        <div style={{ position: "relative", aspectRatio: "16 / 8", overflow: "hidden",
          background: seminar.image ? "var(--void-2)" : "repeating-linear-gradient(135deg,var(--panel) 0 10px,var(--void-2) 10px 20px)" }}>
          {seminar.image
            ? <img src={seminar.image} alt={seminar.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "var(--text-xs)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", color: "var(--ash-dim)" }}>Foto folgt</span>}
          <span style={{ position: "absolute", inset: 0, background: "var(--fade-bottom)" }} />
        </div>

        <div style={{ padding: "var(--space-7)" }}>
          {seminar.badge && <Badge tone="ember" style={{ marginBottom: "var(--space-4)" }}>{seminar.badge}</Badge>}
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)",
            lineHeight: "var(--lh-display)", textTransform: "uppercase", color: "var(--ash)", textWrap: "balance" }}>{seminar.title}</h2>
          <div style={{ marginTop: "var(--space-3)", display: "flex", flexWrap: "wrap", gap: "var(--space-4)",
            fontWeight: "var(--fw-bold)", fontSize: "var(--text-label)", letterSpacing: "var(--ls-label)",
            textTransform: "uppercase", color: "var(--red)" }}>
            <span>{seminar.dateLabel}</span>
            {seminar.location && <span style={{ color: "var(--ash-dim)" }}>{seminar.location}</span>}
          </div>
          <p style={{ margin: "var(--space-5) 0 0", color: "var(--text-secondary)", textWrap: "pretty", whiteSpace: "pre-wrap" }}>{seminar.body}</p>

          {seminar.gallery?.length > 0 && (
            <div style={{ marginTop: "var(--space-6)", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: "var(--space-2)" }}>
              {seminar.gallery.map((src, k) => (
                <div key={k} style={{ aspectRatio: "1 / 1", overflow: "hidden", background: "var(--void-2)" }}>
                  <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: "var(--space-7)" }}>
            <Button href={seminar.ctaHref || "/probetraining"}>{seminar.ctaLabel || "Jetzt anmelden"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeminarsContent({ seminars, settings, page }) {
  const [openId, setOpenId] = React.useState(null);
  const p = page || {};
  const open = seminars.find(s => s.id === openId) || null;

  return (
    <div>
      <PageHeader mode={p.mode || "Side Quests"} title={p.title || "Seminare"}
        subhead={p.subhead || "Sondertrainings, Gastlehrer und Themenabende — abseits des regulären Stundenplans."} />

      <Section>
        {seminars.length === 0 ? (
          <p style={{ color: "var(--text-secondary)" }}>Aktuell sind keine Seminare eingetragen.</p>
        ) : (
          <div className="r-cols-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
            {seminars.map((s, i) => (
              <Panel key={s.id} hover pad="0" onClick={() => setOpenId(s.id)} style={{ overflow: "hidden", cursor: "pointer" }}>
                <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden",
                  background: s.image ? "var(--void-2)" : "repeating-linear-gradient(135deg,var(--panel) 0 10px,var(--void-2) 10px 20px)" }}>
                  {s.image
                    ? <img src={s.image} alt={s.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    : <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "var(--text-xs)", letterSpacing: "var(--ls-nav)", textTransform: "uppercase", color: "var(--ash-dim)" }}>Foto folgt</span>}
                  <span style={{ position: "absolute", inset: 0, background: "var(--fade-bottom)" }} />
                  {s.badge && <span style={{ position: "absolute", top: "var(--space-3)", left: "var(--space-3)" }}><Badge tone="ember">{s.badge}</Badge></span>}
                </div>
                <div style={{ padding: "var(--space-6)" }}>
                  <SectionLabel num={"0" + (i + 1)}>{s.dateLabel}</SectionLabel>
                  <h3 style={{ margin: "var(--space-4) 0 0", fontFamily: "var(--font-display)", fontSize: "1.75rem",
                    textTransform: "uppercase", color: "var(--ash)", lineHeight: "var(--lh-heading)" }}>{s.title}</h3>
                  <p style={{ margin: "var(--space-3) 0 0", color: "var(--text-secondary)", textWrap: "pretty" }}>{s.summary}</p>
                  <span style={{ display: "inline-block", marginTop: "var(--space-5)", fontSize: "var(--text-xs)",
                    letterSpacing: "var(--ls-nav)", textTransform: "uppercase", color: "var(--red)", fontWeight: "var(--fw-bold)" }}>Details ansehen →</span>
                </div>
              </Panel>
            ))}
          </div>
        )}
      </Section>

      <CtaBand settings={settings} />
      {open && <SeminarModal seminar={open} onClose={() => setOpenId(null)} />}
    </div>
  );
}
