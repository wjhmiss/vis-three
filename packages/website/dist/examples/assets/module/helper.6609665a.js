import"../modulepreload-polyfill.b7f2da20.js";import{M as p}from"../index.7fc95210.js";import{g as t,a as i}from"../vis-three.middleware.es.2585b78e.js";import{g as e}from"../lil-gui.module.min.095a7f3d.js";import"../index.be5e1784.js";import"../index.5fd0e639.js";import"../three.837c9bb0.js";import"../index.db239e15.js";import"../Pass.1ae4f2a0.js";import"../index.d505a6dc.js";import"../index.6bd8d818.js";import"../index.1d1f4865.js";import"../index.476759d5.js";import"../index.3e934afa.js";import"../index.8a974fac.js";import"../index.0eec027b.js";import"../vis-three.plugin-keyboard-manager.es.358da2a0.js";import"../Antdv.a86c3c0d.js";import"../index.32011c09.js";import"../CSS3DRenderer.d266155a.js";import"../index.813bc471.js";import"../index.e6c950f1.js";import"../index.c0066b9f.js";import"../index.80c3482e.js";import"../index.83518642.js";import"../index.5dfe0d36.js";import"../index.df02a99b.js";import"../vis-three.plugin-pointer-manager.es.9009bd78.js";import"../index.ca59a760.js";import"../index.c30fef9c.js";import"../index.66ce3d50.js";import"../index.9299f102.js";import"../index.7bdd9bd7.js";import"../vis-three.module-animation-action.es.6d7baff5.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.9947652a.js";import"../index.a7251911.js";import"../vis-three.strategy-orbit-controls-support.es.feebca3b.js";import"../index.cc89943f.js";import"../vis-three.library-parser.es.152102aa.js";import"../vis-three.strategy-multi-renderer.es.35c3b855.js";import"../vis-three.plugin-loader-manager.es.dd5ac293.js";import"../G6.7a2bba98.js";const m=new p().setDom(document.getElementById("app")).setSize().setStats(!0).play();t.injectEngine=m;const n=t("Scene");m.setSceneBySymbol(n.vid);t.injectScene=!0;const s=t(i.POINTLIGHT,{position:{y:20,z:15}}),a=t(i.MESHSTANDARDMATERIAL,{}),d=t(i.BOXGEOMETRY,{width:20,height:10,depth:10}),g=t(i.MESH,{material:a.vid,geometry:d.vid});t(i.OBJECTHELPER,{target:s.vid,shape:!0});const o=t(i.OBJECTHELPER,{target:g.vid,shape:!0}),r=new e;r.add(o,"shape");r.add(o,"boundingBox");r.add(o,"geometricOrigin");r.add(o,"localAxes");window.engine=m;
