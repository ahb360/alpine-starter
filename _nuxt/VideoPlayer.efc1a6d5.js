import{a as m,b as i,B as f,o as s,e as a,u as e,c as _,s as u,F as v,r as h,v as k,x as b,p as w,k as g,f as x,m as B}from"./entry.fba31984.js";/* empty css                        */const I=t=>(w("data-v-db4f7db4"),t=t(),g(),t),S={key:1,class:"loaded"},C=["poster"],V=["src"],$=["src","type"],N=["autoplay","src"],E=I(()=>x("button",null,null,-1)),F=[E],P=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,c=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),p=f(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var o,l;return r.src||((l=(o=r.sources)==null?void 0:o[0])==null?void 0:l.src)||!1});return(o,l)=>{const y=b;return s(),a("div",{class:k(["video-player",{loaded:e(p)}])},[(e(c)?e(c).poster:t.poster)?(s(),_(y,{key:0,src:e(c)?e(c).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(s(),a("div",S,[e(c)?e(c).name==="youtube"?(s(),a("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(c).src},null,8,N)):u("",!0):(s(),a("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(s(),a("source",{key:0,src:e(d)},null,8,V)):u("",!0),(s(!0),a(v,null,h(t.sources,n=>(s(),a("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,$))),128))],8,C))])):u("",!0),e(p)?u("",!0):(s(),a("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>p.value=!0)},F))],2)}}}),z=B(P,[["__scopeId","data-v-db4f7db4"]]);export{z as default};