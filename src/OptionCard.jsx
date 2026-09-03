import React from "react";

export function OptionCard({children,selected=false,onClick,multi=false,num,style}){
  const [hot,setHot]=React.useState(false);
  return (
    <button type="button" onClick={onClick}
      onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
      style={{display:"flex",alignItems:"center",gap:"var(--space-3)",width:"100%",textAlign:"left",
        padding:"16px 18px",background:selected?"var(--red-ember)":"var(--surface-card)",
        border:"var(--hairline) solid "+(selected?"var(--red)":hot?"var(--border-strong)":"var(--border-hairline)"),
        borderRadius:"var(--radius-0)",cursor:"pointer",fontFamily:"var(--font-body)",
        fontSize:"var(--text-sm)",color:selected?"var(--ash)":"var(--text-secondary)",
        transition:"all var(--dur) var(--ease-out)",...style}}>
      <span aria-hidden="true" style={{flex:"0 0 auto",width:"18px",height:"18px",
        borderRadius:multi?"var(--radius-0)":"var(--radius-pill)",
        background:selected?"var(--red)":"transparent",
        border:"var(--hairline) solid "+(selected?"var(--red)":"var(--border-strong)")}}/>
      <span style={{flex:1,lineHeight:1.4}}>{children}</span>
      {num&&<span style={{fontFamily:"var(--font-display)",fontSize:"var(--text-xs)",color:"var(--red)"}}>{num}</span>}
    </button>
  );
}
