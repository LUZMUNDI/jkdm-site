import React from "react";

export function StatPill({value,label,style}){
  return (
    <span style={{display:"inline-flex",alignItems:"baseline",gap:"var(--space-3)",
      padding:"9px 15px",background:"var(--ash-ghost)",border:"var(--hairline) solid var(--border-hairline)",...style}}>
      <strong style={{fontFamily:"var(--font-body)",fontWeight:700,fontSize:"0.9375rem",letterSpacing:".01em",color:"var(--ash)",lineHeight:1,textShadow:"none"}}>{value}</strong>
      <span style={{fontFamily:"var(--font-body)",fontWeight:"var(--fw-bold)",fontSize:"var(--text-label)",
        letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--red)"}}>{label}</span>
    </span>
  );
}
