import React from "react";
import { Input } from "../../ds/forms/Input.jsx";
import { Textarea } from "../../ds/forms/Textarea.jsx";
import { Select } from "../../ds/forms/Select.jsx";
import { Checkbox } from "../../ds/forms/Checkbox.jsx";
import { OptionCard } from "../../ds/forms/OptionCard.jsx";
import { Button } from "../../ds/core/Button.jsx";
import { SectionLabel } from "../../ds/core/SectionLabel.jsx";
import { StatPill } from "../../ds/core/StatPill.jsx";
import { EmberField } from "../../ds/effects/EmberField.jsx";
import { Section, PageHeader } from "../Shared.jsx";

export default function TrialContent({ content }) {
  const c = content;
  const [why, setWhy] = React.useState([0]);
  const [bring, setBring] = React.useState([]);
  const [consent, setConsent] = React.useState(false);
  const [news, setNews] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const toggle = (set, i) => set(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i]);

  // TODO: wire this to a real submission endpoint (e.g. a Cloudflare Pages Function
  // or a form service like Formspree/Web3Forms) before going live. For now this
  // only confirms locally, same as the design mockup.
  const submit = () => {
    if (!consent) { setErr(true); return; }
    setSent(true);
  };

  if (sent) return (
    <div>
      <Section style={{ borderTop: "none" }}>
        <div style={{ position: "relative", overflow: "hidden", padding: "var(--space-9) var(--space-7)",
          background: "var(--surface-card)", border: "var(--hairline) solid var(--red)" }}>
          <EmberField count={14} />
          <div style={{ position: "relative", maxWidth: "46ch" }}>
            <SectionLabel>Angemeldet</SectionLabel>
            <h1 style={{ margin: "var(--space-4) 0 0", fontFamily: "var(--font-display)", fontSize: "var(--text-display-1)",
              lineHeight: "var(--lh-display)", textTransform: "uppercase", color: "var(--ash)" }}>{c.confirmHeadline}</h1>
            <p style={{ margin: "var(--space-5) 0 var(--space-7)", color: "var(--text-secondary)" }}>
              {c.confirmBody}
            </p>
            <Button href="/">Zurück zur Startseite</Button>
          </div>
        </div>
      </Section>
    </div>);

  return (
    <div>
      <PageHeader title={c.headline} subhead={c.subhead}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-2)" }}>
          {c.statPills.map((s, i) => <StatPill key={i} value={s.value} label={s.label} />)}
        </div>
      </PageHeader>
      <Section>
        <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "var(--space-7)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
            <div>
              <SectionLabel num="01">Warum willst du studieren?</SectionLabel>
              <p style={{ margin: "var(--space-3) 0 var(--space-4)", fontSize: "var(--text-sm)", color: "var(--ash-dim)" }}>Mehrfachauswahl. Zwei Fragen, damit wir wissen, wen wir auf der Matte begrüssen. Dauert 30 Sekunden.</p>
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                {c.whyOptions.map((o, i) => <OptionCard key={i} multi num={"0" + (i + 1)} selected={why.includes(i)} onClick={() => toggle(setWhy, i)}>{o}</OptionCard>)}
              </div>
            </div>
            <div>
              <SectionLabel num="02">Was bringst du mit?</SectionLabel>
              <p style={{ margin: "var(--space-3) 0 var(--space-4)", fontSize: "var(--text-sm)", color: "var(--ash-dim)" }}>Mehrfachauswahl. Ehrlich sein lohnt sich hier.</p>
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                {c.bringOptions.map((o, i) => <OptionCard key={i} multi num={"0" + (i + 1)} selected={bring.includes(i)} onClick={() => toggle(setBring, i)}>{o}</OptionCard>)}
              </div>
            </div>
          </div>
          <div style={{ background: "var(--surface-card)", border: "var(--hairline) solid var(--border-hairline)",
            padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <SectionLabel>Kurz vorab</SectionLabel>
            <Input label="Name" name="name" required placeholder="Wie sollen wir dich rufen?" />
            <Input label="E-Mail" name="mail" type="email" required placeholder="Wohin schicken wir die Bestätigung?" />
            <Input label="Telefon (optional)" name="tel" placeholder="Nur falls kurzfristig etwas ausfällt" />
            <Select label="Wunschtermin" required options={["Mittwoch 19:00", "Sonntag 18:00"]} />
            <Textarea label="Noch was?" rows={3} placeholder="Verletzungen, Fragen, Ansagen" />
            <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--ash-dim)" }}>Felder mit * brauchen wir wirklich. Der Rest ist deine Entscheidung.</p>
            <Checkbox required checked={consent} onChange={e => { setConsent(e.target.checked); setErr(false); }}>
              Ich bin damit einverstanden, dass JKDM meine Angaben zur Bearbeitung meiner Anfrage speichert und verwendet. Datenschutzerklärung gelesen.
            </Checkbox>
            <Checkbox checked={news} onChange={e => setNews(e.target.checked)}>
              Schick mir Termine, Seminare und Studio-News. Kein Spam, kein Newsletter-Getöse.
            </Checkbox>
            {err && <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--red)" }}>Ohne dein Okay dürfen wir nicht.</p>}
            <Button size="lg" fullWidth onClick={submit}>{c.submitButton}</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
