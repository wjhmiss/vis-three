(function(e,i){typeof exports=="object"&&typeof module!="undefined"?module.exports=i(require("@vis-three/middleware"),require("@vis-three/library-modifier"),require("@vis-three/utils")):typeof define=="function"&&define.amd?define(["@vis-three/middleware","@vis-three/library-modifier","@vis-three/utils"],i):(e=typeof globalThis!="undefined"?globalThis:e||self,e["vis-three"]=e["vis-three"]||{},e["vis-three"]["module-modifier"]=i(e.middleware,e.libraryModifier,e.utils))})(this,function(e,i,f){"use strict";var v=Object.defineProperty;var b=(e,i,f)=>i in e?v(e,i,{enumerable:!0,configurable:!0,writable:!0,value:f}):e[i]=f;var M=(e,i,f)=>(b(e,typeof i!="symbol"?i+"":i,f),f);const h=function(){return Object.assign(e.getSymbolConfig(),{name:"",visible:!0,source:"",index:0})},g=function(){return Object.assign(h(),{target:"",mode:"subtract"})},E=["position.x","position.y","position.z","rotation.x","rotation.y","rotation.z","scale.x","scale.y","scale.z","parent"],l=new Map;var y=e.defineProcessor({type:"BooleanModifier",config:g,commands:{set:{source:()=>{},target:({target:o,config:c,engine:t,compiler:r})=>{e.globalAntiShake.exec(s=>{if(c.target){const u=t.compilerManager.getObjectBySymbol(c.target);if(!u)return s&&console.warn(`Boolean modifier processor can not found object by vid: ${c.target}`),!1;o.target=u;const n=r.cacheRenderFun.get(o);if(!n)return console.error(`can not found cache render fun in ${r.MODULE} compiler`),!0;const a=l.get(o);if(a){for(const p of E)e.Bus.compilerEvent.off(a,`${e.COMPILER_EVENT.COMPILE}:${p}`,n);e.Bus.compilerEvent.off(a.geometry,e.COMPILER_EVENT.UPDATE,n)}for(const p of E)e.Bus.compilerEvent.on(u,`${e.COMPILER_EVENT.COMPILE}:${p}`,n);return e.Bus.compilerEvent.on(u.geometry,e.COMPILER_EVENT.UPDATE,n),l.set(o,u),n(),!0}return!0})},$reg:[{reg:new RegExp(".*"),handler({value:o,key:c,target:t,compiler:r}){t[c]=o;const s=r.cacheRenderFun.get(t);if(!s){console.error(`can not found cache render fun in ${r.MODULE} compiler`);return}s()}}]}},create:function(o,c,t){const r=new i.BooleanModifier({mode:o.mode}),s=()=>{r.render(),t.chainRender(r)};return t.cacheRenderFun.set(r,s),e.globalAntiShake.exec(u=>{if(o.source){const n=c.compilerManager.getObjectBySymbol(o.source);if(!n)return u&&console.warn(`Boolean modifier processor can not found object by vid: ${o.source}`),!1;r.source=n;for(const a of E)e.Bus.compilerEvent.on(n,`${e.COMPILER_EVENT.COMPILE}:${a}`,s);return e.Bus.compilerEvent.on(n.geometry,e.COMPILER_EVENT.UPDATE,s),t.integrateModifer(r),s(),!0}return!0}),e.globalAntiShake.exec(u=>{if(o.target){const n=c.compilerManager.getObjectBySymbol(o.target);if(!n)return u&&console.warn(`Boolean modifier processor can not found object by vid: ${o.target}`),!1;r.target=n;for(const a of E)e.Bus.compilerEvent.on(n,`${e.COMPILER_EVENT.COMPILE}:${a}`,s);return e.Bus.compilerEvent.on(n.geometry,e.COMPILER_EVENT.UPDATE,s),l.set(r,n),s(),!0}return!0}),f.syncObject(o,r,{target:!0,source:!0}),r},dispose:function(o,c,t){o.dispose()}});class d extends e.Compiler{constructor(){super();M(this,"cacheRenderFun",new Map);M(this,"sourceModifiers",new Map)}integrateModifer(t){this.sourceModifiers.has(t.source)||this.sourceModifiers.set(t.source,[]);const r=this.sourceModifiers.get(t.source);r.includes(t)||r.push(t)}chainRender(t){if(!this.sourceModifiers.has(t.source)){console.error(`${this.MODULE} compiler can not found modifier list`,t);return}const r=this.sourceModifiers.get(t.source);r.includes(t)||console.error(`${this.MODULE} compiler: can not found this modifier in source list`,t);const s=r.slice(r.indexOf(t)+1,r.length);for(const u of s)u.render()}}var O={type:"modifier",compiler:d,rule:function(o,c){e.Rule(o,c)},processors:[y],lifeOrder:e.SUPPORT_LIFE_CYCLE.NINE};return O});