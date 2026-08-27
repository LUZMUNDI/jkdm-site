import React from "react";

export function QuoteCard({quote,name,discipline,featured=false,onClick,selected=false,style}){
  const [hot,setHot]=React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
      style={{position:"relative",padding:featured?"var(--space-7)":"var(--space-5)",
        background:featured?"var(--surface-raised)":"var(--surface-card)",
        border:"var(--hairline) solid "+(selected||featured?"var(--red)":hot?"var(--border-strong)":"var(--border-hairline)"),
        cursor:onClick?"pointer":"default",transition:"all var(--dur) var(--ease-out)",...style}}>
      <span aria-hidden="true" style={{position:"absolute",top:featured?"12px":"6px",left:featured?"18px":"12px",
        fontFamily:"var(--font-display)",fontSize:featured?"5rem":"2.5rem",lineHeight:1,color:"var(--red)",opacity:.25}}>„</span>
      <blockquote style={{position:"relative",margin:0,fontFamily:"var(--font-body)",
        fontWeight:featured?"var(--fw-semi)":"var(--fw-med)",
        fontSize:featured?"var(--text-lead)":"var(--text-sm)",lineHeight:1.45,color:"var(--ash)",textWrap:"pretty"}}>{quote}</blockquote>
      <div style={{marginTop:"var(--space-4)",display:"flex",alignItems:"baseline",gap:"var(--space-3)"}}>
        <span style={{fontFamily:"var(--font-display)",fontSize:featured?"1.5rem":"1rem",
          textTransform:"uppercase",color:"var(--ash)"}}>{name}</span>
        {discipline&&<span style={{fontWeight:"var(--fw-bold)",fontSize:"var(--text-label)",
          letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--red)"}}>{discipline}</span>}
      </div>
    </div>
  );
}
