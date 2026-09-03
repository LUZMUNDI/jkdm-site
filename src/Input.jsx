import React from "react";

export function Input({label,hint,required=false,error,type="text",value,onChange,placeholder,name,id,style}){
  const [focus,setFocus]=React.useState(false);
  const fid=id||name;
  return (
    <label htmlFor={fid} style={{display:"block",...style}}>
      {label&&<span style={{display:"block",marginBottom:"var(--space-2)",fontWeight:"var(--fw-bold)",
        fontSize:"var(--text-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",
        color:"var(--ash-dim)"}}>{label}{required&&<span style={{color:"var(--red)"}}> *</span>}</span>}
      <input id={fid} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{width:"100%",boxSizing:"border-box",padding:"14px 16px",background:"var(--void-2)",
          color:"var(--ash)",fontFamily:"var(--font-body)",fontSize:"var(--text-body)",
          border:"var(--hairline) solid "+(error?"var(--red)":focus?"var(--red)":"var(--border-hairline)"),
          borderRadius:"var(--radius-0)",outline:"none",
          boxShadow:focus?"var(--glow-red-soft)":"none",
          transition:"border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out)"}}/>
      {(error||hint)&&<span style={{display:"block",marginTop:"var(--space-2)",fontSize:"var(--text-xs)",
        color:error?"var(--red)":"var(--text-secondary)"}}>{error||hint}</span>}
    </label>
  );
}
