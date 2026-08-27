import React from "react";

export function FighterThumb({name,role,image,selected=false,onClick,style}){
  const [hot,setHot]=React.useState(false);
  const live=selected||hot;
  return (
    <button type="button" onClick={onClick}
      onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
      style={{position:"relative",display:"block",width:"100%",aspectRatio:"1 / 1",padding:0,textAlign:"left",cursor:"pointer",
        background:"var(--surface-card)",borderRadius:"var(--radius-0)",overflow:"hidden",
        border:"var(--hairline) solid "+(selected?"var(--red)":"var(--border-hairline)"),
        boxShadow:live?"var(--glow-red-soft)":"none",
        transition:"border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out)",...style}}>
      <img src={image} alt={name} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",
        filter:live?"saturate(1.05) contrast(1.05)":"saturate(.15) contrast(1.05) brightness(.85)",
        transform:live?"scale(1.04)":"scale(1)",
        transition:"filter var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)"}}/>
      <span style={{position:"absolute",inset:0,background:"var(--fade-bottom)"}}/>
      {selected&&<span style={{position:"absolute",left:0,right:0,bottom:0,height:"var(--bar-accent)",background:"var(--red)"}}/>}
      <div style={{position:"absolute",left:"var(--space-3)",right:"var(--space-3)",bottom:"var(--space-3)"}}>
        <div style={{fontFamily:"var(--font-display)",fontSize:"1.0625rem",lineHeight:1.05,
          textTransform:"uppercase",color:"var(--ash)"}}>{name}</div>
        {role&&<div lang="de" style={{marginTop:"3px",fontWeight:"var(--fw-bold)",fontSize:"10px",
          letterSpacing:".08em",textTransform:"uppercase",hyphens:"auto",overflowWrap:"break-word",
          color:selected?"var(--red)":"var(--ash-dim)"}}>{role}</div>}
      </div>
    </button>
  );
}
