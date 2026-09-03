import React from "react";
import { NavLink } from "./NavLink.jsx";
import { Wordmark } from "../core/Wordmark.jsx";
import { Button } from "../core/Button.jsx";

export function NavBar({items=[],active,onNavigate,logoSrc,cta,onCta,sticky=true,
  brandFull="Jeet Kune Do München",brandShort="JKDM",brandBreakpoint=1024,style}){
  const [wide,setWide]=React.useState(typeof window==="undefined"?true:window.innerWidth>=brandBreakpoint);
  const [compact,setCompact]=React.useState(typeof window==="undefined"?false:window.innerWidth<760);
  const [open,setOpen]=React.useState(false);

  React.useEffect(()=>{
    const on=()=>{setWide(window.innerWidth>=brandBreakpoint);setCompact(window.innerWidth<760);};
    on();window.addEventListener("resize",on);
    return ()=>window.removeEventListener("resize",on);
  },[brandBreakpoint]);

  // If the window grows back past the compact breakpoint, make sure the mobile
  // menu doesn't stay stuck open in the background.
  React.useEffect(()=>{ if(!compact) setOpen(false); },[compact]);

  // Lock page scroll while the mobile menu is open, so it reads as a proper
  // overlay panel instead of one more thing to scroll past.
  React.useEffect(()=>{
    if (!compact) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  },[compact, open]);

  const handleNavigate = (id) => { setOpen(false); onNavigate && onNavigate(id); };

  return (
    <header style={{position:sticky?"sticky":"static",top:0,zIndex:20,
      background:"rgba(7,6,5,.86)",backdropFilter:"blur(10px)",
      borderBottom:"var(--hairline) solid var(--border-hairline)",...style}}>
      <div style={{maxWidth:"var(--container)",margin:"0 auto",padding:"var(--space-4) var(--gutter)",
        display:"flex",alignItems:"center",gap:"var(--space-5)"}}>
        <Wordmark text={compact?brandShort:(wide?brandFull:brandShort)} size="sm" logoSrc={logoSrc}
          style={{flex:"0 1 auto",minWidth:0}}/>

        {!compact && (
          <nav style={{display:"flex",gap:"var(--space-5)",alignItems:"center",marginLeft:"auto"}}>
            {items.map(it=>{const id=typeof it==="string"?it:it.id,l=typeof it==="string"?it:it.label;
              return <NavLink key={id} active={active===id}
                onClick={e=>{e.preventDefault();handleNavigate(id);}}>{l}</NavLink>;})}
            {cta && <Button size="sm" onClick={onCta}>{cta}</Button>}
          </nav>
        )}

        {compact && (
          <div style={{display:"flex",alignItems:"center",gap:"var(--space-2)",marginLeft:"auto",flex:"0 0 auto"}}>
            {cta && <Button size="sm" onClick={onCta} style={{padding:"10px 14px"}}>{cta}</Button>}
            <button type="button" aria-label={open?"Menü schließen":"Menü öffnen"} aria-expanded={open}
              aria-controls="jkdm-mobile-nav"
              onClick={()=>setOpen(o=>!o)}
              style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"5px",
                width:"38px",height:"38px",padding:0,background:"transparent",
                border:"var(--hairline) solid var(--border-hairline)",cursor:"pointer",flex:"0 0 auto"}}>
              <span aria-hidden="true" style={{display:"block",height:"2px",width:"18px",
                background:"var(--ash)",transition:"transform var(--dur) var(--ease-out)",
                transform:open?"translateY(7px) rotate(45deg)":"none"}}/>
              <span aria-hidden="true" style={{display:"block",height:"2px",width:"18px",
                background:"var(--ash)",opacity:open?0:1,transition:"opacity var(--dur) var(--ease-out)"}}/>
              <span aria-hidden="true" style={{display:"block",height:"2px",width:"18px",
                background:"var(--ash)",transition:"transform var(--dur) var(--ease-out)",
                transform:open?"translateY(-7px) rotate(-45deg)":"none"}}/>
            </button>
          </div>
        )}
      </div>

      {compact && open && (
        <nav id="jkdm-mobile-nav" style={{borderTop:"var(--hairline) solid var(--border-hairline)",
          background:"var(--void)",padding:"var(--space-3) var(--gutter) var(--space-5)",
          display:"flex",flexDirection:"column"}}>
          {items.map(it=>{const id=typeof it==="string"?it:it.id,l=typeof it==="string"?it:it.label;
            return (
              <a key={id} href="#" onClick={e=>{e.preventDefault();handleNavigate(id);}}
                style={{display:"block",padding:"var(--space-4) 0",textDecoration:"none",
                  borderBottom:"var(--hairline) solid var(--border-hairline)",
                  fontFamily:"var(--font-body)",fontWeight:"var(--fw-bold)",fontSize:"var(--text-sm)",
                  letterSpacing:"var(--ls-label)",textTransform:"uppercase",
                  color:active===id?"var(--red)":"var(--ash)"}}>{l}</a>
            );})}
        </nav>
      )}
    </header>
  );
}
