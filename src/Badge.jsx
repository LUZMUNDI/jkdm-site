import React from "react";

export function Badge({children,cjk,tone="outline",style}){
  const looks={
    outline:{background:"transparent",color:"var(--ash)",border:"var(--hairline) solid var(--border-hairline)"},
    solid:{background:"var(--red)",color:"var(--ash)",border:"var(--hairline) solid var(--red)"},
    ember:{background:"var(--red-ember)",color:"var(--red)",border:"var(--hairline) solid var(--red)"}
  }[tone];
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",padding:"6px 12px",
      fontFamily:"var(--font-body)",fontWeight:"var(--fw-bold)",fontSize:"var(--text-label)",
      letterSpacing:"var(--ls-label)",textTransform:"uppercase",...looks,...style}}>
      {children}
      {cjk&&<span style={{fontFamily:"var(--font-cjk)",fontSize:"var(--text-xs)",letterSpacing:0,opacity:.8}}>{cjk}</span>}
    </span>
  );
}
