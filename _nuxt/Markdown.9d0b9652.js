import r from"./ContentSlot.f1407f6d.js";import{a as s,P as u,b as f,O as p}from"./entry.fba31984.js";const m=s({name:"Markdown",extends:r,setup(t){const{parent:e}=p(),{between:n,default:a}=u(),o=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:o,between:n,parent:e}}});export{m as default};