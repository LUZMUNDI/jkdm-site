import React from "react";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { Section, jkdmShell } from "../Shared.jsx";

export default function LegalContent({ page }) {
  const p = page || { title: "", sections: [] };
  return (
    <div>
      <header style={{ padding: "var(--space-9) 0 var(--space-6)", borderBottom: "var(--hairline) solid var(--border-hairline)" }}>
        <div style={jkdmShell}>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)",
            lineHeight: "var(--lh-display)", textTransform: "uppercase", color: "var(--ash)" }}>{p.title}</h1>
        </div>
      </header>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)", maxWidth: "68ch" }}>
          {(p.sections || []).map((s, i) => (
            <div key={i}>
              <SectionLabel>{s.heading}</SectionLabel>
              <p style={{ margin: "var(--space-3) 0 0", color: "var(--text-secondary)", whiteSpace: "pre-wrap", textWrap: "pretty" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
