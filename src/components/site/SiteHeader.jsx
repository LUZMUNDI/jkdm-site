import React from "react";
import { NavBar } from "../ds/navigation/NavBar.jsx";

const NAV = [
  { id: "home", label: "Main Menu", href: "/" },
  { id: "about", label: "Story Mode", href: "/ueber-uns" },
  { id: "training", label: "Training Mode", href: "/training" },
  { id: "voices", label: "Roster", href: "/stimmen" },
  { id: "book", label: "Archive", href: "/buch" }
];

export default function SiteHeader({ active }) {
  return (
    <NavBar
      logoSrc="/assets/jkdm-logo-white.png"
      items={NAV.map(n => ({ id: n.id, label: n.label }))}
      active={active}
      cta="Probetraining"
      onCta={() => { window.location.href = "/probetraining"; }}
      onNavigate={(id) => {
        const target = NAV.find(n => n.id === id);
        if (target) window.location.href = target.href;
      }}
    />
  );
}
