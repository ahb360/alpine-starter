import{J as s,u as i,b as p,a as c,a2 as u,B as l,Q as e,m as d}from"./entry.95c85785.js";import{u as f}from"./asyncData.2e9701ef.js";import y from"./Ellipsis.e762618f.js";import g from"./ComponentPlaygroundData.c323863a.js";/* empty css                                *//* empty css                     */import"./TabsHeader.4ce86b5f.js";/* empty css                       */import"./ComponentPlaygroundProps.badc3f5d.js";import"./ProseH4.130a1f1f.js";/* empty css                    */import"./ProseCodeInline.ece1a088.js";/* empty css                            */import"./Badge.3db2076e.js";import"./ContentSlot.761c2bd5.js";/* empty css                  */import"./ProseP.74199ddd.js";/* empty css                   */import"./index.89f455b9.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.5d611f3b.js";import"./ComponentPlaygroundTokens.vue.bb6d6a7e.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,m])=>{if(r.startsWith("component-")){const a=r.replace("component-","");n[a]=m}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),x=d(_,[["__scopeId","data-v-ffdff82a"]]);export{x as default};