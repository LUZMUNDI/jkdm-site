import React from "react";
import { NavBar } from "../ds/navigation/NavBar.jsx";

const DEFAULT_NAV = [
  { id: "home", key: "navHomeLabel", fallback: "Main Menu", href: "/" },
  { id: "about", key: "navAboutLabel", fallback: "Story Mode", href: "/ueber-uns" },
  { id: "training", key: "navTrainingLabel", fallback: "Training Mode", href: "/training" },
  { id: "voices", key: "navVoicesLabel", fallback: "Roster", href: "/stimmen" },
  { id: "seminars", key: "navSeminarsLabel", fallback: "Side Quests", href: "/seminare" },
  { id: "book", key: "navBookLabel", fallback: "Archive", href: "/buch" }
];

export default function SiteHeader({ active, settings }) {
  const s = settings || {};
  const nav = DEFAULT_NAV.map(n => ({ id: n.id, label: s[n.key] || n.fallback, href: n.href }));
  return (
    <NavBar
      logoSrc="/assets/jkdm-logo-white.png"
      items={nav.map(n => ({ id: n.id, label: n.label }))}
      active={active}
      cta="Probetraining"
      onCta={() => { window.location.href = "/probetraining"; }}
      onNavigate={(id) => {
        const target = nav.find(n => n.id === id);
        if (target) window.location.href = target.href;
      }}
    />
  );
}
