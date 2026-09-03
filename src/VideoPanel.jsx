import React from "react";
import { SectionLabel } from "../core/SectionLabel.jsx";

export function VideoPanel({src,poster,aspect="9 / 16",label,caption,note,href,autoPlay=false,style}){
  const [playing,setPlaying]=React.useState(!!src&&autoPlay);
  const [hot,setHot]=React.useState(false);
  const frame={position:"relative",aspectRatio:aspect,overflow:"hidden",background:"var(--void-2)",
    border:"var(--hairline) solid "+(hot?"var(--red)":"var(--border-hairline)"),
    boxShadow:hot?"var(--glow-red-soft)":"var(--shadow-lift)",
    transition:"border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out)"};

  const body=playing&&src
    ? <video src={src} poster={poster} controls autoPlay playsInline
        style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",background:"var(--void)"}}/>
    : <React.Fragment>
        {poster&&<img src={poster} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",
          objectFit:"cover",objectPosition:"top center",
          filter:hot?"saturate(1.05) contrast(1.05)":"saturate(.55) contrast(1.05) brightness(.8)",
          transform:hot?"scale(1.03)":"scale(1)",
          transition:"filter var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)"}}/>}
        <span style={{position:"absolute",inset:0,background:"var(--fade-bottom)"}}/>
        <span aria-hidden="true" style={{position:"absolute",left:"50%",top:"50%",width:"72px",height:"72px",
          transform:"translate(-50%,-50%)",background:hot?"var(--red)":"rgba(7,6,5,.62)",
          border:"var(--rule-strong) solid var(--red)",display:"flex",alignItems:"center",justifyContent:"center",
          transition:"background var(--dur) var(--ease-out)"}}>
          <span style={{width:0,height:0,marginLeft:"5px",borderStyle:"solid",borderWidth:"13px 0 13px 20px",
            borderColor:"transparent transparent transparent var(--ash)"}}/>
        </span>
        {caption&&<span style={{position:"absolute",left:"var(--space-4)",right:"var(--space-4)",bottom:"var(--space-4)",
          fontFamily:"var(--font-body)",fontWeight:"var(--fw-semi)",fontSize:"var(--text-sm)",
          color:"var(--ash)",textWrap:"pretty"}}>{caption}</span>}
      </React.Fragment>;

  const clickable=!!(src||href);
  return (
    <figure style={{margin:0,display:"flex",flexDirection:"column",gap:"var(--space-3)",...style}}>
      {label&&<SectionLabel>{label}</SectionLabel>}
      <div style={{...frame,cursor:clickable?"pointer":"default"}}
        onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
        onClick={()=>{if(src)setPlaying(true);else if(href)window.open(href,"_blank","noopener");}}>
        {body}
      </div>
      {note&&<figcaption style={{margin:0,fontSize:"var(--text-xs)",color:"var(--ash-dim)"}}>{note}</figcaption>}
    </figure>
  );
}
