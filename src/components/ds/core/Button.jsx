import React from "react";

const sizes={
  sm:{padding:"10px 18px",fontSize:"var(--text-xs)",shadow:"var(--shadow-press-sm)",travel:4},
  md:{padding:"14px 28px",fontSize:"var(--text-sm)",shadow:"var(--shadow-press)",travel:6},
  lg:{padding:"20px 40px",fontSize:"var(--text-body)",shadow:"var(--shadow-press)",travel:6}
};

export function Button({children,variant="primary",size="md",href,onClick,disabled=false,fullWidth=false,type="button",style}){
  const [hot,setHot]=React.useState(false);
  const [down,setDown]=React.useState(false);
  const s=sizes[size]||sizes.md;
  const shift=disabled?0:(down?s.travel:hot?Math.round(s.travel/2):0);
  const base={
    display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",
    font:"inherit",fontFamily:"var(--font-body)",fontWeight:"var(--fw-bold)",fontSize:s.fontSize,
    letterSpacing:"var(--ls-button)",textTransform:"uppercase",lineHeight:1,
    padding:s.padding,borderRadius:"var(--radius-0)",border:0,cursor:disabled?"not-allowed":"pointer",
    width:fullWidth?"100%":"auto",opacity:disabled?.4:1,textDecoration:"none",
    transition:"transform var(--dur-fast) var(--ease-snap),box-shadow var(--dur-fast) var(--ease-snap),background var(--dur) var(--ease-out),color var(--dur) var(--ease-out)",
    transform:`translate(${shift}px,${shift}px)`
  };
  const looks={
    primary:{background:"var(--red)",color:"var(--ash)",boxShadow:disabled?"none":`${s.travel-shift}px ${s.travel-shift}px 0 var(--red-deep)`},
    ghost:{background:"transparent",color:"var(--ash)",boxShadow:"inset 0 0 0 1px var(--border-strong)",transform:"none",
      ...(hot&&!disabled?{boxShadow:"inset 0 0 0 1px var(--red)",color:"var(--red)"}:{})},
    quiet:{background:"transparent",color:hot?"var(--ash)":"var(--ash-dim)",boxShadow:"none",transform:"none",padding:0}
  };
  const props={
    style:{...base,...looks[variant],...style},
    onMouseEnter:()=>setHot(true),onMouseLeave:()=>{setHot(false);setDown(false);},
    onMouseDown:()=>setDown(true),onMouseUp:()=>setDown(false),
    onClick:disabled?undefined:onClick
  };
  if(href&&!disabled) return <a href={href} {...props}>{children}</a>;
  return <button type={type} disabled={disabled} {...props}>{children}</button>;
}
