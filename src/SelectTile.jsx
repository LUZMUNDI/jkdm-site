import React from "react";

const CUT="polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)";

export function SelectTile({name,image,initial,selected=false,onClick,marker,style}){
  const [hot,setHot]=React.useState(false);
  const live=selected||hot;
  return (
    <button type="button" onClick={onClick} aria-pressed={selected}
      onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
      style={{position:"relative",display:"block",width:"100%",padding:0,border:0,background:"transparent",
        cursor:"pointer",clipPath:CUT,
        transform:live?"translateY(-3px)":"none",
        transition:"transform var(--dur) var(--ease-snap)",...style}}>
      <span style={{position:"absolute",inset:0,clipPath:CUT,
        background:selected?"var(--red)":hot?"var(--border-strong)":"var(--border-hairline)"}}/>
      <span style={{position:"relative",display:"block",clipPath:CUT,margin:"2px",background:"var(--panel)"}}>
        <span style={{position:"relative",display:"block",aspectRatio:"1 / 1",overflow:"hidden",background:"var(--void-2)"}}>
          {image
            ? <img src={image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",
                filter:live?"saturate(1.05) contrast(1.05)":"saturate(.12) contrast(1.05) brightness(.78)",
                transform:live?"scale(1.06)":"scale(1)",
                transition:"filter var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)"}}/>
            : <span style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",
                fontFamily:"var(--font-display)",fontSize:"2.5rem",lineHeight:1,
                color:live?"var(--red)":"var(--ash-faint)",
                background:"repeating-linear-gradient(135deg,var(--panel) 0 6px,var(--void-2) 6px 12px)",
                transition:"color var(--dur) var(--ease-out)"}}>{initial||"?"}</span>}
          {live&&<span style={{position:"absolute",inset:0,background:"var(--vignette-ember)",mixBlendMode:"screen"}}/>}
          {marker&&selected&&<span style={{position:"absolute",top:"6px",left:"6px",padding:"2px 6px",
            background:"var(--red)",color:"var(--ash)",fontFamily:"var(--font-display)",fontSize:"10px",
            letterSpacing:"var(--ls-label)"}}>{marker}</span>}
        </span>
        <span style={{display:"block",padding:"7px 6px 8px",textAlign:"center",
          background:selected?"var(--red)":"var(--panel-2)",
          fontFamily:"var(--font-display)",fontSize:"var(--text-xs)",letterSpacing:".04em",
          textTransform:"uppercase",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",
          color:selected?"var(--ash)":live?"var(--ash)":"var(--ash-dim)",
          transition:"background var(--dur) var(--ease-out),color var(--dur) var(--ease-out)"}}>{name}</span>
      </span>
    </button>
  );
}
