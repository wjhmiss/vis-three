import{d as a,u as t,C as m,D as S,M as n,a as o,P as c}from"./vis-three.middleware.es.2585b78e.js";import{b as R}from"./index.e6c950f1.js";import{s as E,t as i}from"./index.5fd0e639.js";import{g as p}from"./index.7bdd9bd7.js";import{a as d}from"./index.db239e15.js";import{i as C}from"./vis-three.module-animation-action.es.6d7baff5.js";const D=function(){return Object.assign(p(),{vid:t("CSS3DRenderer")})};var P=a({type:"CSS3DRenderer",config:D,commands:{set:{size({target:e,config:r}){r.size?e.setSize(r.size.x,r.size.y):e.setSize(e.domElement.offsetWidth,e.domElement.offsetHeight)}}},create(e,r){let s=r.css3DRenderer;return e.size&&s.setSize(e.size.x,e.size.y),E(e,s,{size:!0}),s},dispose(e){}});const u="@vis-three/strategy-css3d-renderer-support",l=i(u),O=function(){return{name:l,condition:[m,S,R],exec(e){e.compilerManager.getCompiler(n.RENDERER).reigstProcessor(P,s=>{s.map.set(t(o.CSS3DRENDERER),e.css3DRenderer),s.weakMap.set(e.css3DRenderer,t(o.CSS3DRENDERER))})},rollback(){}}},f="@vis-three/strategy-composer-support",N=i(f),A=function(){return{name:N,condition:[...c,d],exec(e){const r=e.compilerManager.getCompiler(n.PASS);r||e.registModule(C),r.useEngine(e)},rollback(e){}}};export{O as C,A as a};
