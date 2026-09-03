import React from "react";

export function Panel({children,tone="card",pad="var(--space-6)",accent=false,hover=false,style,onClick}){
  const [hot,setHot]=React.useState(false);
  const bg={card:"var(--surface-card)",raised:"var(--surface-raised)",void:"var(--bg-band)",bare:"transparent"}[tone];
  return (
    <div onClick={onClick}
      onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
      style={{background:bg,padding:pad,borderRadius:"var(--radius-0)",
        border:"var(--hairline) solid "+(accent||(hover&&hot)?"var(--red)":"var(--border-hairline)"),
        boxShadow:hover&&hot?"var(--glow-red-soft)":"none",
        cursor:onClick?"pointer":"default",
        transition:"border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out),background var(--dur) var(--ease-out)",
        ...style}}>{children}</div>
  );
}
