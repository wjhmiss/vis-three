import"../modulepreload-polyfill.b7f2da20.js";import{W as o,C as m}from"../index.071db2cc.js";import{E as n}from"../index.d73b554e.js";import{E as p}from"../index.a270601c.js";import{g as e,i as t}from"../index.5e7c9076.js";import{d as a}from"../index.d2cf6216.js";import"../index.8b9e7665.js";import"../index.453e5660.js";import"../index.9a3e1c8e.js";import"../index.6ff295ff.js";import"../index.f27dc7ff.js";import{C as s}from"../index.91968bd0.js";import"../three.a7f96461.js";import"../G6.cf5ff0af.js";import"../Antdv.35288747.js";import"../index.b0fe2ce4.js";import"../TextureDisplayer.4cf2d30b.js";import"../UnrealBloomPass.cda4d03b.js";const r=a({plugins:[o({antialias:!0,alpha:!0}),n({WebGLMultisampleRenderTarget:!0}),m()],strategy:[p(),s()]}).setDom(document.getElementById("app")).setSize();e.injectEngine=r;const g=e(t.SCENE);r.setSceneBySymbol(g.vid);e.injectScene=!0;e(t.AMBIENTLIGHT);const i=e(t.BOXGEOMETRY,{width:10,height:10,depth:10}),E=e(t.MESHSTANDARDMATERIAL,{color:"rgb(255, 0, 0)"}),d=e(t.LINEBASICMATERIAL,{color:"rgb(255, 255, 0)"});e(t.MESH,{geometry:i.vid,material:E.vid,position:{x:-10}});e(t.LINE,{geometry:i.vid,material:d.vid,position:{x:10}});e(t.UNREALBLOOMPASS,{strength:1.5,threshold:0,radius:0});e(t.SMAAPASS);r.render();