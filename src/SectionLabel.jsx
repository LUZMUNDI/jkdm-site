import React from "react";

export function SectionLabel({children,num,rule=true,style}){
  return (
    <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",...style}}>
      {rule&&<span style={{width:"28px",height:"var(--bar-accent)",background:"var(--red)",flex:"0 0 auto"}}/>}
      {num&&<span style={{fontFamily:"var(--font-display)",fontSize:"var(--text-label)",color:"var(--red)",letterSpacing:"var(--ls-label)"}}>{num}</span>}
      <span style={{fontFamily:"var(--font-body)",fontWeight:"var(--fw-bold)",fontSize:"var(--text-label)",
        letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--red)"}}>{children}</span>
    </div>
  );
}
