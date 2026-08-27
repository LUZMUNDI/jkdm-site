import React from "react";
import { StatPill } from "../core/StatPill.jsx";
import { EmberField } from "../effects/EmberField.jsx";
import { SectionLabel } from "../core/SectionLabel.jsx";

export function FeaturedFighter({name,title,tagline,bio,stats=[],image,brush,label,children,style}){
  const [narrow,setNarrow]=React.useState(typeof window==="undefined"?false:window.innerWidth<820);
  React.useEffect(()=>{
    const on=()=>setNarrow(window.innerWidth<820);
    on();window.addEventListener("resize",on);
    return ()=>window.removeEventListener("resize",on);
  },[]);
  return (
    <div style={{display:"grid",gridTemplateColumns:narrow?"1fr":"minmax(280px,42%) 1fr",background:"var(--surface-card)",
      border:"var(--hairline) solid var(--border-hairline)",boxShadow:"var(--shadow-panel)",...style}}>
      <div style={{position:"relative",minHeight:narrow?"320px":"520px",overflow:"hidden",background:"var(--void-2)"}}>
        <img src={image} alt={name} style={{position:"absolute",inset:0,width:"100%",height:"100%",
          objectFit:"cover",objectPosition:"top center"}}/>
        <span style={{position:"absolute",inset:0,background:"var(--vignette-ember)",mixBlendMode:"screen"}}/>
        <EmberField count={16}/>
        {brush&&<span style={{position:"absolute",right:"var(--space-4)",bottom:"var(--space-3)",
          fontFamily:"var(--font-brush)",fontSize:"var(--brush-lg)",lineHeight:.9,color:"var(--red)",
          opacity:.8,textShadow:"0 0 12px rgba(227,28,54,.18)",pointerEvents:"none"}}>{brush}</span>}
      </div>
      <div style={{padding:narrow?"var(--space-6)":"var(--space-7)",display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        {label&&<SectionLabel>{label}</SectionLabel>}
        <div>
          <h2 style={{margin:0,fontFamily:"var(--font-display)",fontSize:"var(--text-display-2)",
            lineHeight:"var(--lh-display)",textTransform:"uppercase",letterSpacing:"var(--ls-display)",color:"var(--ash)"}}>{name}</h2>
          {title&&<div style={{marginTop:"var(--space-2)",fontWeight:"var(--fw-bold)",fontSize:"var(--text-label)",
            letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--red)"}}>{title}</div>}
        </div>
        {tagline&&<p style={{margin:0,fontFamily:"var(--font-body)",fontWeight:"var(--fw-semi)",
          fontSize:"var(--text-lead)",lineHeight:1.35,color:"var(--ash)",textWrap:"pretty"}}>{tagline}</p>}
        {bio&&<p style={{margin:0,color:"var(--text-secondary)",textWrap:"pretty"}}>{bio}</p>}
        {stats.length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:"var(--space-2)",marginTop:"auto"}}>
          {stats.map((s,i)=><StatPill key={i} value={s.value} label={s.label}/>)}
        </div>}
        {children}
      </div>
    </div>
  );
}
