import React from "react";

const seed=(i)=>{const r=Math.sin(i*97.13)*10000;return r-Math.floor(r);};

export function EmberField({count=16,style}){
  const id=React.useMemo(()=>"ember-"+Math.random().toString(36).slice(2,8),[]);
  const parts=React.useMemo(()=>Array.from({length:count},(_,i)=>({
    left:(seed(i)*100).toFixed(2)+"%",
    size:(1.5+seed(i+41)*3).toFixed(2)+"px",
    dur:(6+seed(i+7)*9).toFixed(2)+"s",
    delay:(-seed(i+13)*12).toFixed(2)+"s",
    drift:((seed(i+23)-.5)*60).toFixed(1)+"px",
    op:(.35+seed(i+31)*.5).toFixed(2)
  })),[count]);
  return (
    <div aria-hidden="true" style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",...style}}>
      <style>{`@keyframes ${id}{0%{transform:translate3d(0,0,0);opacity:0}12%{opacity:1}100%{transform:translate3d(var(--dx),-115%,0);opacity:0}}`}</style>
      {parts.map((p,i)=>(
        <span key={i} style={{position:"absolute",bottom:"-6%",left:p.left,width:p.size,height:p.size,
          borderRadius:"var(--radius-pill)",background:"var(--red)",boxShadow:"var(--glow-red)",
          opacity:p.op,"--dx":p.drift,
          animation:`${id} ${p.dur} linear ${p.delay} infinite`}}/>
      ))}
    </div>
  );
}
