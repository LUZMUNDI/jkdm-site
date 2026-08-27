import React from "react";

export function StatCard({value,label,note,align="left",style}){
  return (
    <div style={{padding:"var(--space-5)",background:"var(--surface-card)",
      border:"var(--hairline) solid var(--border-hairline)",textAlign:align,...style}}>
      <div style={{fontFamily:"var(--font-display)",fontSize:"var(--text-numeral)",lineHeight:"1.02",
        color:"var(--ash)",letterSpacing:".01em",textShadow:"none"}}>{value}</div>
      <div style={{marginTop:"var(--space-4)",fontFamily:"var(--font-body)",fontWeight:"var(--fw-bold)",
        fontSize:"var(--text-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--red)"}}>{label}</div>
      {note&&<p style={{margin:"var(--space-2) 0 0",color:"var(--text-secondary)",fontSize:"var(--text-sm)"}}>{note}</p>}
    </div>
  );
}
