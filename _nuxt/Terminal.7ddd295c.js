import{u as m}from"./index.89f455b9.js";import{a as v,B as h,b as y,o as e,e as o,u as i,s as p,f as t,F as f,r as k,p as C,k as b,t as g,m as B}from"./entry.95c85785.js";/* empty css                     */const n=s=>(C("data-v-c33b9d7c"),s=s(),b(),s),S={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),x=n(()=>t("div",{class:"content"}," Copied! ",-1)),I=[w,x],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>t("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(s){const a=s,{copy:l}=m(),c=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(e(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(e(),o("div",S,I)):p("",!0),T,t("div",F,[(e(!0),o(f,null,k(i(r),d=>(e(),o("span",{key:d,class:"line"},[N,t("span",V,g(d),1)]))),128))]),i(c)!=="copied"?(e(),o("div",j," Click to copy ")):p("",!0)]))}}),$=B(q,[["__scopeId","data-v-c33b9d7c"]]);export{$ as default};