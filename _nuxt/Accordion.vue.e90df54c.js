import{o as l,c,a,j as p,s as _,d as f,t as m,C as E,D as x,E as k,F as w,q as y,l as C}from"./entry.0bb3efb5.js";const L={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus"},$=a("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"},null,-1),b=[$];function B(u,o){return l(),c("svg",L,b)}const z={render:B},A={class:"v-accordion__item"},I={class:"pb-4"},T=p({__name:"Item",props:{item:{}},setup(u){const o=_(!1),s=_(null),t=_("0"),i=()=>o.value?g():h(),h=()=>{r(),o.value=!0,k(()=>{var e,n;t.value=((e=s.value)==null?void 0:e.scrollHeight)+"px",(n=s.value)==null||n.addEventListener("transitionend",v)})},g=()=>{var e;r(),t.value=t.value!=="auto"?t.value:`${(e=s.value)==null?void 0:e.scrollHeight}px`,setTimeout(()=>{var n;o.value=!1,t.value="0",(n=s.value)==null||n.addEventListener("transitionend",d)},10)},v=()=>{t.value="auto",r()},d=()=>{r()},r=()=>{var e,n;(e=s.value)==null||e.removeEventListener("transitionend",v),(n=s.value)==null||n.removeEventListener("transitionend",d)};return(e,n)=>(l(),c("div",A,[a("label",{onClick:i},[f(m(e.item.title)+" ",1),a("img",{class:E(["w-8 h-8",{"-rotate-45":o.value}]),src:z},null,2)]),a("div",{style:x({height:t.value}),ref_key:"content",ref:s},[a("p",I,m(e.item.content),1)],4)]))}});const V={class:"v-accordion"},F=p({__name:"Accordion",props:{items:{}},setup(u){return(o,s)=>{const t=T;return l(),c("div",V,[(l(!0),c(w,null,y(o.items,i=>(l(),C(t,{item:i},null,8,["item"]))),256))])}}});export{F as _};
