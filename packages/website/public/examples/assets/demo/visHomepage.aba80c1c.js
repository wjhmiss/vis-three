import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{bY as x}from"../three.237d835c.js";import{D as M}from"../index.869b4558.js";import{A as r,g as e,a as t}from"../vis-three.middleware.es.7f273029.js";import{l as T}from"../index.fdaaf24c.js";import{m as a}from"../Antdv.414c4eb5.js";import"../index.1d3a6ec0.js";import"../index.202ebdec.js";import"../index.edc751ad.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.e6be8a02.js";import"../index.2f498209.js";import"../index.2e2f06f6.js";import"../ShaderPass.02f07bc0.js";import"../vis-three.plugin-orbit-controls.es.9991f892.js";import"../index.692e1021.js";import"../index.90db9154.js";import"../vis-three.module-particle.es.8e43cbb8.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../index.ee52b7bf.js";import"../vis-three.convenient.es.7b860830.js";import"../index.c35e5a3e.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../vis-three.strategy-orbit-controls-support.es.706978dc.js";import"../index.117a61e1.js";import"../index.3b8dbf96.js";import"../index.d3463d42.js";import"../vis-three.library-parser.es.5c9e4dac.js";import"../vis-three.strategy-multi-renderer.es.a35ffd0a.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../G6.d44f13fb.js";r.register(T);const o=new M().setDom(document.getElementById("app")).play();o.loaderManager.setPath("/examples/");a.loading({content:"\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A0%",key:"loading",duration:0});o.loaderManager.addEventListener("loading",i=>{a.loading({content:`\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A${parseInt((i.loadSuccess/i.loadTotal*100).toString())}
            %`,key:"loading",duration:0})});o.loaderManager.addEventListener("loaded",i=>{a.success({content:"\u52A0\u8F7D\u5B8C\u6210\uFF01",key:"loading",duration:1})});(async()=>{e.injectEngine=o,e(t.WEBGLRENDERER,{clearColor:"rgba(10, 2, 10, 1)",physicallyCorrectLights:!0,toneMapping:x,toneMappingExposure:3}),e(t.ORBITCONTROLS,{autoRotate:!0,autoRotateSpeed:.5,enableDamping:!0,maxDistance:200,minDistance:100,enablePan:!1});const i=e(t.PERSPECTIVECAMERA,{far:1e4,near:.01,position:{x:90,y:-90,z:100}});o.setCameraBySymbol(i.vid).setSize();const n=e(t.SCENE);o.setSceneBySymbol(n.vid),e.injectScene=!0;const l=await o.loadResourcesAsync(["/model/three.obj","/model/vis.obj","/texture/vis/colorMap.png","/skyBox/lightblue/px.png","/skyBox/lightblue/py.png","/skyBox/lightblue/pz.png","/skyBox/lightblue/nx.png","/skyBox/lightblue/ny.png","/skyBox/lightblue/nz.png"]).catch(b=>{console.log(b)}),s=e(t.CUBETEXTURE,{cube:{px:"/skyBox/lightblue/px.png",py:"/skyBox/lightblue/py.png",pz:"/skyBox/lightblue/pz.png",nx:"/skyBox/lightblue/nx.png",ny:"/skyBox/lightblue/ny.png",nz:"/skyBox/lightblue/nz.png"}});n.background=s.vid,n.environment=s.vid,e(t.AMBIENTLIGHT,{intensity:1}),e(t.DIRECTIONALLIGHT,{color:"rgb(255, 255, 255)",position:{x:-10,y:40,z:20},intensity:1e3*4*Math.PI}),e(t.DIRECTIONALLIGHT,{color:"rgb(255, 255, 255)",position:{x:10,y:40,z:-20},intensity:1e3*4*Math.PI});const p=l.resourceConfig,g=e(t.LOADGEOMETRY,Object.assign(Object.values(p["/model/three.obj"].geometry)[0],{rotation:{x:Math.PI/2,y:-(Math.PI/180)*30},position:{x:.13,y:-.14},scale:{x:80,y:80,z:80}})),m=e(t.MESHSTANDARDMATERIAL,{color:"white",metalness:1,roughness:0,envMapIntensity:.8}),c=e(t.MESH,{geometry:g.vid,material:m.vid}),y=e(t.LOADGEOMETRY,Object.assign(Object.values(p["/model/vis.obj"].geometry)[0],{scale:{x:6,y:6,z:6}})),u=e(t.IMAGETEXTURE,{url:"/texture/vis/colorMap.png"}),d=e(t.MESHSTANDARDMATERIAL,{map:u.vid,metalness:1,roughness:0,transparent:!0,opacity:.8}),E=e(t.MESH,{geometry:y.vid,material:d.vid});e(t.SCRIPTANIMATION,{target:c.vid,attribute:".rotation.z",script:r.generateConfig("linearTime",{multiply:.2})},{strict:!1}),e(t.SCRIPTANIMATION,{target:E.vid,attribute:".rotation.y",script:r.generateConfig("linearTime",{multiply:.7})},{strict:!1})})();window.engine=o;