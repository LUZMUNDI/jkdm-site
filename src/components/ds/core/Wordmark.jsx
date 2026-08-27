import React from "react";

export function Wordmark({text="JKDM",size="lg",logoSrc,style}){
  const px={sm:"1.125rem",md:"2rem",lg:"var(--text-display-2)",xl:"var(--text-display-1)"}[size]||size;
  const chrome={
    fontFamily:"var(--font-display)",fontSize:px,lineHeight:"1.02",paddingTop:".08em",
    textTransform:"uppercase",letterSpacing:"var(--ls-display)",
    backgroundImage:"var(--chrome-gradient)",WebkitBackgroundClip:"text",backgroundClip:"text",
    color:"transparent",WebkitTextFillColor:"transparent",
    filter:"drop-shadow(var(--chrome-shadow))",margin:0,whiteSpace:"nowrap"
  };
  if(!logoSrc) return <span style={{...chrome,...style}}>{text}</span>;
  const mark={height:size==="sm"?"28px":size==="md"?"44px":"64px",width:"auto",display:"block"};
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:"var(--space-3)",...style}}>
      <img src={logoSrc} alt="" style={mark}/>
      <span style={chrome}>{text}</span>
    </span>
  );
}
