import"../modulepreload-polyfill.b7f2da20.js";import{M as s,B as d,a as m,P as p,L as l,b as g}from"../three.837c9bb0.js";import{g as c}from"../lil-gui.module.min.095a7f3d.js";import{W as u,C as f}from"../index.1d7ad8b9.js";import{R as y}from"../index.9c42f01c.js";import{E as b}from"../index.388dadd4.js";import{G as M}from"../index.9a7b1aa5.js";import{E as P}from"../index.b828c96c.js";import{K as w,a as S}from"../index.7e76d8d2.js";import{d as v}from"../index.7d48aff8.js";import"../Pass.1ae4f2a0.js";const r=v({plugins:[y(),u({antialias:!0,alpha:!0}),b({WebGLMultisampleRenderTarget:!0}),f(),M(),w({movementSpeed:30,quickenSpeed:20})],strategy:[P(),S()]}).setDom(document.getElementById("app")).setSize().play(),e=r.scene,o=new s(new d(10,10,10),new m({color:"rgb(255, 105, 100)"}));o.position.x=10;e.add(o);const a=new p("rgb(255, 255, 255)",1,300,0);a.position.y=30;e.add(a);const E=new l(o.geometry);e.add(E);const i=new g(o.geometry);i.position.x=-10;e.add(i);const t=new c,n=r.keyboardMoveControls;t.add(n,"enabled");t.add(n,"movementSpeed",0,50,1);t.add(n,"quickenSpeed",0,50,1);t.add(n,"space",["local","world"]);