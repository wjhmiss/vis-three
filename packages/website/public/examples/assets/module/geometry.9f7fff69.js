import"../modulepreload-polyfill.b7f2da20.js";import{M as c}from"../index.7ee6895f.js";import{g as e,a as t}from"../vis-three.middleware.es.2e80d21b.js";import"../index.1d7ad8b9.js";import"../index.7d48aff8.js";import"../three.837c9bb0.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.62992928.js";import"../index.f4f5b765.js";import"../index.a87f8394.js";import"../index.9a7b1aa5.js";import"../index.8de980d1.js";import"../index.9f3e0a95.js";import"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../Antdv.a86c3c0d.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.9c42f01c.js";import"../index.ddb76977.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../index.f7cac396.js";import"../index.9dfaa1ec.js";import"../index.ce95ade9.js";import"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../index.484afc60.js";import"../index.29f340c8.js";import"../index.cfa4ec79.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.83638baf.js";import"../index.e327b72e.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../G6.7a2bba98.js";const m=new c().setDom(document.getElementById("app")).setSize().setStats(!0).play();e.injectEngine=m;const n=e("Scene");m.setSceneBySymbol(n.vid);e.injectScene=!0;e("PointLight",{position:{y:50},distance:150});const i=e("MeshStandardMaterial"),z=[t.BOXGEOMETRY,t.SPHEREGEOMETRY,t.PLANEGEOMETRY,t.CIRCLEGEOMETRY,t.CONEGEOMETRY,t.CYLINDERGEOMETRY,t.RINGGEOMETRY,t.TORUSGEOMETRY],a=15;z.forEach((s,x)=>{const y=e(s),r=x+1,p=e("Mesh",{material:i.vid,geometry:y.vid,position:{x:r%2?-(Math.floor(r/2)+1)*a:Math.floor(r/2)*a},scale:{x:2,y:2,z:2}});m.applyConfig(y,p),n.children.push(p.vid)});const o=e("LineBasicMaterial",{color:"white"}),l=e("LineCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),v=e("SplineCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),d=e("CubicBezierCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:20,z:5},{x:0,y:-15,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10},{x:10,y:0,z:10},{x:0,y:0,z:20},{x:10,y:0,z:10}]}),h=e("QuadraticBezierCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),u=e("SplineTubeGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}],radialSegments:8}),E=e("LineTubeGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}],radialSegments:8});e("Line",{geometry:l.vid,material:o.vid});e("Line",{geometry:v.vid,material:o.vid,position:{y:10}});e("Line",{geometry:d.vid,material:o.vid,position:{y:20}});e("Line",{geometry:h.vid,material:o.vid,position:{y:30}});e("Mesh",{geometry:u.vid,material:i.vid,position:{y:-10}});e("Mesh",{geometry:E.vid,material:i.vid,position:{y:-20}});const G=e("LineShapeGeometry",{path:[{x:-5,y:5},{x:0,y:10},{x:5,y:5},{x:5,y:-5},{x:-5,y:-5}]});e("Mesh",{geometry:G.vid,material:i.vid,position:{x:15,y:20}});const g=e("Path",{curves:[{curve:"line",params:[0,0,10,10]},{curve:"line",params:[10,10,15,10]},{curve:"line",params:[15,10,15,15]},{curve:"line",params:[15,15,0,15]}]}),M=e("LatheGeometry",{path:g.vid});e("Mesh",{geometry:M.vid,material:i.vid,position:{x:-15,y:20}});