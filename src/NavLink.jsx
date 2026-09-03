import React from "react";

export function NavLink({children,active=false,href,onClick,style}){
  const [hot,setHot]=React.useState(false);
  return (
    <a href={href||"#"} onClick={onClick}
      onMouseEnter={()=>setHot(true)} onMouseLeave={()=>setHot(false)}
      style={{position:"relative",display:"inline-block",padding:"6px 0",textDecoration:"none",whiteSpace:"nowrap",
        fontFamily:"var(--font-body)",fontWeight:"var(--fw-bold)",fontSize:"var(--text-xs)",
        letterSpacing:"var(--ls-label)",textTransform:"uppercase",
        color:active?"var(--ash)":hot?"var(--ash)":"var(--ash-dim)",
        transition:"color var(--dur) var(--ease-out)",...style}}>
      {children}
      <span aria-hidden="true" style={{position:"absolute",left:0,bottom:0,height:"var(--bar-accent)",
        width:active||hot?"100%":"0%",background:"var(--red)",
        transition:"width var(--dur) var(--ease-out)"}}/>
    </a>
  );
}
