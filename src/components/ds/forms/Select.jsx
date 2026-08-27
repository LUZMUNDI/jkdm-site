import React from "react";

export function Select({label,options=[],value,onChange,required=false,name,id,style}){
  const [focus,setFocus]=React.useState(false);
  const fid=id||name;
  return (
    <label htmlFor={fid} style={{display:"block",...style}}>
      {label&&<span style={{display:"block",marginBottom:"var(--space-2)",fontWeight:"var(--fw-bold)",
        fontSize:"var(--text-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",
        color:"var(--ash-dim)"}}>{label}{required&&<span style={{color:"var(--red)"}}> *</span>}</span>}
      <select id={fid} name={name} value={value} onChange={onChange}
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{width:"100%",boxSizing:"border-box",padding:"14px 16px",background:"var(--void-2)",
          color:"var(--ash)",fontFamily:"var(--font-body)",fontSize:"var(--text-body)",
          border:"var(--hairline) solid "+(focus?"var(--red)":"var(--border-hairline)"),
          borderRadius:"var(--radius-0)",outline:"none",appearance:"none",
          backgroundImage:"linear-gradient(45deg,transparent 50%,var(--red) 50%),linear-gradient(135deg,var(--red) 50%,transparent 50%)",
          backgroundPosition:"calc(100% - 20px) 50%,calc(100% - 14px) 50%",
          backgroundSize:"6px 6px,6px 6px",backgroundRepeat:"no-repeat"}}>
        {options.map(o=>{const v=typeof o==="string"?o:o.value,l=typeof o==="string"?o:o.label;
          return <option key={v} value={v} style={{background:"var(--void-2)"}}>{l}</option>;})}
      </select>
    </label>
  );
}
