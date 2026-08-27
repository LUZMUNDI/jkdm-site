import React from "react";
import { NavLink } from "./NavLink.jsx";
import { Wordmark } from "../core/Wordmark.jsx";
import { Button } from "../core/Button.jsx";

export function NavBar({items=[],active,onNavigate,logoSrc,cta,onCta,sticky=true,
  brandFull="Jeet Kune Do München",brandShort="JKDM",brandBreakpoint=1024,style}){
  const [wide,setWide]=React.useState(typeof window==="undefined"?true:window.innerWidth>=brandBreakpoint);
  const [compact,setCompact]=React.useState(typeof window==="undefined"?false:window.innerWidth<760);
  React.useEffect(()=>{
    const on=()=>{setWide(window.innerWidth>=brandBreakpoint);setCompact(window.innerWidth<760);};
    on();window.addEventListener("resize",on);
    return ()=>window.removeEventListener("resize",on);
  },[brandBreakpoint]);
  const nav=(
    <nav style={{display:"flex",gap:"var(--space-5)",alignItems:"center",
      marginLeft:compact?0:"auto",overflowX:compact?"auto":"visible",
      scrollbarWidth:"none",msOverflowStyle:"none",paddingBottom:compact?"2px":0,
      WebkitOverflowScrolling:"touch"}}>
      {items.map(it=>{const id=typeof it==="string"?it:it.id,l=typeof it==="string"?it:it.label;
        return <NavLink key={id} active={active===id}
          onClick={e=>{e.preventDefault();onNavigate&&onNavigate(id);}}>{l}</NavLink>;})}
      {!compact&&cta&&<Button size="sm" onClick={onCta}>{cta}</Button>}
    </nav>
  );
  return (
    <header style={{position:sticky?"sticky":"static",top:0,zIndex:20,
      background:"rgba(7,6,5,.86)",backdropFilter:"blur(10px)",
      borderBottom:"var(--hairline) solid var(--border-hairline)",...style}}>
      <div style={{maxWidth:"var(--container)",margin:"0 auto",padding:"var(--space-4) var(--gutter)",
        display:"flex",flexDirection:compact?"column":"row",
        alignItems:compact?"stretch":"center",gap:compact?"var(--space-3)":"var(--space-6)"}}>
        {compact
          ? <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-4)"}}>
              <Wordmark text={brandShort} size="sm" logoSrc={logoSrc}/>
              {cta&&<Button size="sm" onClick={onCta}>{cta}</Button>}
            </div>
          : <Wordmark text={wide?brandFull:brandShort} size="sm" logoSrc={logoSrc}/>}
        {nav}
      </div>
    </header>
  );
}
