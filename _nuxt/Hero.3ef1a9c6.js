import r from"./ContentSlot.f1407f6d.js";import{a as d,o as a,e as m,f as t,h as i,j as n,i as c,c as u,v as _,s as p,x as f,m as g}from"./entry.fba31984.js";/* empty css                 */const h={class:"hero"},v={class:"layout"},C={class:"content"},x={class:"title"},y={class:"description"},H=d({__name:"Hero",props:{image:{type:String,default:null},imageAlt:{type:String,default:"Hero Image"},imagePosition:{type:String,default:"right"}},setup(e){return(s,N)=>{const o=r,l=f;return a(),m("section",h,[t("div",v,[t("div",C,[t("div",x,[i(o,{use:s.$slots.title,unwrap:"p"},{default:n(()=>[c(" Hero title ")]),_:1},8,["use"])]),t("div",y,[i(o,{use:s.$slots.description,unwrap:"p"},{default:n(()=>[c(" Hero description ")]),_:1},8,["use"])])]),e.image?(a(),u(l,{key:0,class:_(e.imagePosition),src:e.image,alt:e.imageAlt,width:16,height:9},null,8,["class","src","alt"])):p("",!0)])])}}}),B=g(H,[["__scopeId","data-v-f8481eef"]]);export{B as default};