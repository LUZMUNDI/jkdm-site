import React from "react";

export function Checkbox({children,checked=false,onChange,required=false,name,style}){
  return (
    <label style={{display:"flex",gap:"var(--space-3)",alignItems:"flex-start",cursor:"pointer",...style}}>
      <input type="checkbox" name={name} checked={checked} onChange={onChange} style={{position:"absolute",opacity:0,width:0,height:0}}/>
      <span aria-hidden="true" style={{flex:"0 0 auto",width:"20px",height:"20px",marginTop:"2px",
        background:checked?"var(--red)":"transparent",
        border:"var(--hairline) solid "+(checked?"var(--red)":"var(--border-strong)"),
        display:"flex",alignItems:"center",justifyContent:"center",
        color:"var(--ash)",fontSize:"13px",fontWeight:"var(--fw-black)",lineHeight:1,
        transition:"background var(--dur-fast) var(--ease-snap),border-color var(--dur-fast) var(--ease-snap)"}}>{checked?"✕":""}</span>
      <span style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",lineHeight:"var(--lh-body)"}}>
        {children}{required&&<span style={{color:"var(--red)"}}> *</span>}
      </span>
    </label>
  );
}
