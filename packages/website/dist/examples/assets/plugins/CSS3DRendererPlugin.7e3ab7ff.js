import"../modulepreload-polyfill.b7f2da20.js";import{E as r,g as t}from"../vis-three.middleware.es.7f273029.js";import{e as m,q as a}from"../vis-three.module-particle.es.8e43cbb8.js";import{a as c}from"../vis-three.library-parser.es.5c9e4dac.js";import{O as l}from"../vis-three.plugin-orbit-controls.es.9991f892.js";import{O as p}from"../index.3b8dbf96.js";import{C as d,a as g}from"../index.2f498209.js";import"../index.202ebdec.js";import"../three.237d835c.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.c35e5a3e.js";import"../index.e6be8a02.js";import"../G6.d44f13fb.js";import"../Antdv.414c4eb5.js";import"../ShaderPass.02f07bc0.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.ee52b7bf.js";import"../vis-three.convenient.es.7b860830.js";const e=new r().registModule(m).registModule(a).install(d()).install(l()).exec(g()).exec(p()).setDom(document.getElementById("app"));e.resourceManager.addParser(new c);e.registerResources({"examples.css3DObject":document.getElementById("element1"),"examples.css3DObject2":document.getElementById("element2"),"examples.css3DObject3":document.getElementById("element3")});const o=t("CSS3DPlane",{element:"examples.css3DObject",width:200,height:220,position:{x:-50,y:10},rotation:{y:Math.PI/180*20},scale:{x:.1,y:.1,z:.1}}),s=t("CSS3DPlane",{element:"examples.css3DObject2",width:200,height:220,position:{x:50,y:10},rotation:{y:-(Math.PI/180)*20},scale:{x:.1,y:.1,z:.1}}),i=t("CSS3DPlane",{element:"examples.css3DObject3",width:200,height:200,position:{z:-30,y:10},scale:{x:.5,y:.5,z:.5}}),n=t("Scene",{children:[o.vid,s.vid,i.vid]});e.applyConfig(o,s,i,n);e.setSceneBySymbol(n.vid).play();e.camera.position.set(0,50,100);e.camera.lookAt(0,20,0);window.engine=e;setTimeout(()=>{e.setSize().play()},0);