var Re=Object.defineProperty;var Se=(p,n,i)=>n in p?Re(p,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[n]=i;var s=(p,n,i)=>(Se(p,typeof n!="symbol"?n+"":n,i),i);import{t as le,a as Y}from"./index.4a26448f.js";import{V as y,K as j,X as S,u as _,Q as ae,Y as re,m,g as Z}from"./three.073ebd5b.js";import{a as xe,b as he}from"./index.4d1bf992.js";const je="@vis-three/orbit-controls-plugin";class ve{constructor(){s(this,"listeners",new Map)}addEventListener(n,i){const r=this.listeners;r.has(n)||r.set(n,new Set),r.get(n).add(i)}hasEventListener(n,i){const r=this.listeners;return r.has(n)?r.get(n).has(i):!1}removeEventListener(n,i){const r=this.listeners;!r.has(n)||!r.get(n).has(i)||r.get(n).delete(i)}dispatchEvent(n){var o;const i=n.type,r=this.listeners;if(r.has(i))try{(o=r.get(i))==null||o.forEach(a=>{a.call(this,n)})}catch(a){console.error(a)}}clear(){this.listeners.clear()}useful(){return Boolean([...this.listeners.keys()].length)}once(n,i){const r=function(o){i.call(this,o),this.removeEventListener(n,r)};this.addEventListener(n,r)}emit(n,i={}){var o;const r=this.listeners;if(r.has(n))try{(o=r.get(n))==null||o.forEach(a=>{a.call(this,i)})}catch(a){console.error(a)}}on(n,i){this.addEventListener(n,i)}has(n,i){return this.hasEventListener(n,i)}off(n,i){if(i)this.removeEventListener(n,i);else{const r=this.listeners;if(!r.has(n))return;r.delete(n)}}}class ke extends ve{constructor(i,r){super();s(this,"object");s(this,"domElement");s(this,"enabled",!0);s(this,"target",new y);s(this,"minDistance",0);s(this,"maxDistance",1/0);s(this,"minZoom",0);s(this,"maxZoom",1/0);s(this,"minPolarAngle",0);s(this,"maxPolarAngle",Math.PI);s(this,"minAzimuthAngle",-1/0);s(this,"maxAzimuthAngle",1/0);s(this,"enableDamping",!1);s(this,"dampingFactor",.05);s(this,"enableZoom",!0);s(this,"zoomSpeed",1);s(this,"enableRotate",!0);s(this,"rotateSpeed",1);s(this,"enablePan",!0);s(this,"panSpeed",1);s(this,"screenSpacePanning",!0);s(this,"keyPanSpeed",7);s(this,"autoRotate",!1);s(this,"autoRotateSpeed",2);s(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"});s(this,"mouseButtons",{LEFT:null,MIDDLE:j.DOLLY,RIGHT:j.ROTATE});s(this,"touches",{ONE:S.ROTATE,TWO:S.DOLLY_PAN});s(this,"target0");s(this,"position0");s(this,"zoom0");s(this,"_domElementKeyEvents",null);s(this,"spherical");s(this,"reset");s(this,"update");s(this,"onContextMenu");s(this,"onPointerDown");s(this,"onPointerCancel");s(this,"onMouseWheel");s(this,"onPointerMove");s(this,"onPointerUp");s(this,"onKeyDown");this.object=i||new _,this.domElement=r||document.createElement("div"),this.domElement.style.touchAction="none",this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.update=(()=>{const e=new y,t=new ae().setFromUnitVectors(this.object.up,new y(0,1,0)),c=t.clone().invert(),d=new y,b=new ae,g=2*Math.PI;return()=>{const ie=this.object.position;e.copy(ie).sub(this.target),e.applyQuaternion(t),l.setFromVector3(e),this.autoRotate&&a===o.NONE&&U(de()),this.enableDamping?(l.theta+=u.theta*this.dampingFactor,l.phi+=u.phi*this.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let f=this.minAzimuthAngle,E=this.maxAzimuthAngle;return isFinite(f)&&isFinite(E)&&(f<-Math.PI?f+=g:f>Math.PI&&(f-=g),E<-Math.PI?E+=g:E>Math.PI&&(E-=g),f<=E?l.theta=Math.max(f,Math.min(E,l.theta)):l.theta=l.theta>(f+E)/2?Math.max(f,l.theta):Math.min(E,l.theta)),l.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=v,l.radius=Math.max(this.minDistance,Math.min(this.maxDistance,l.radius)),this.enableDamping===!0?this.target.addScaledVector(L,this.dampingFactor):this.target.add(L),e.setFromSpherical(l),e.applyQuaternion(c),ie.copy(this.target).add(e),this.object.lookAt(this.target),this.enableDamping===!0?(u.theta*=1-this.dampingFactor,u.phi*=1-this.dampingFactor,L.multiplyScalar(1-this.dampingFactor)):(u.set(0,0,0),L.set(0,0,0)),v=1,k||d.distanceToSquared(this.object.position)>X||8*(1-b.dot(this.object.quaternion))>X?(this.dispatchEvent({type:"change"}),d.copy(this.object.position),b.copy(this.object.quaternion),k=!1,!0):!1}})();const o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const X=1e-6,l=new re,u=new re;let v=1;const L=new y;let k=!1;const P=new m,T=new m,w=new m,M=new m,O=new m,D=new m,A=new m,N=new m,x=new m,h=[],C={},de=()=>2*Math.PI/60/60*this.autoRotateSpeed,I=()=>Math.pow(.95,this.zoomSpeed),U=e=>{u.theta-=e},K=e=>{u.phi-=e},V=function(){const e=new y;return function(c,d){e.setFromMatrixColumn(d,0),e.multiplyScalar(-c),L.add(e)}}(),W=(()=>{const e=new y;return(t,c)=>{this.screenSpacePanning===!0?e.setFromMatrixColumn(c,1):(e.setFromMatrixColumn(c,0),e.crossVectors(this.object.up,e)),e.multiplyScalar(t),L.add(e)}})(),R=(()=>{const e=new y;return(t,c)=>{const d=this.domElement;if(this.object instanceof _){const b=this.object.position;e.copy(b).sub(this.target);let g=e.length();g*=Math.tan(this.object.fov/2*Math.PI/180),V(2*t*g/d.clientHeight,this.object.matrix),W(2*c*g/d.clientHeight,this.object.matrix)}else this.object instanceof Z?(V(t*(this.object.right-this.object.left)/this.object.zoom/d.clientWidth,this.object.matrix),W(c*(this.object.top-this.object.bottom)/this.object.zoom/d.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}})(),z=e=>{this.object instanceof _?v/=e:this.object instanceof Z?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*e)),this.object.updateProjectionMatrix(),k=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},G=e=>{this.object instanceof _?v*=e:this.object instanceof Z?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/e)),this.object.updateProjectionMatrix(),k=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)};function B(e){P.set(e.clientX,e.clientY)}function pe(e){A.set(e.clientX,e.clientY)}function q(e){M.set(e.clientX,e.clientY)}const me=e=>{T.set(e.clientX,e.clientY),w.subVectors(T,P).multiplyScalar(this.rotateSpeed);const t=this.domElement;U(2*Math.PI*w.x/t.clientHeight),K(2*Math.PI*w.y/t.clientHeight),P.copy(T),this.update()},ue=e=>{N.set(e.clientX,e.clientY),x.subVectors(N,A),x.y>0?z(I()):x.y<0&&G(I()),A.copy(N),this.update()},fe=e=>{O.set(e.clientX,e.clientY),D.subVectors(O,M).multiplyScalar(this.panSpeed),R(D.x,D.y),M.copy(O),this.update()},Ee=e=>{e.deltaY<0?G(I()):e.deltaY>0&&z(I()),this.update()},be=e=>{let t=!1;switch(e.code){case this.keys.UP:R(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:R(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:R(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:R(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())};function Q(){if(h.length===1)P.set(h[0].pageX,h[0].pageY);else{const e=.5*(h[0].pageX+h[1].pageX),t=.5*(h[0].pageY+h[1].pageY);P.set(e,t)}}function $(){if(h.length===1)M.set(h[0].pageX,h[0].pageY);else{const e=.5*(h[0].pageX+h[1].pageX),t=.5*(h[0].pageY+h[1].pageY);M.set(e,t)}}function J(){const e=h[0].pageX-h[1].pageX,t=h[0].pageY-h[1].pageY,c=Math.sqrt(e*e+t*t);A.set(0,c)}const ge=()=>{this.enableZoom&&J(),this.enablePan&&$()},ye=()=>{this.enableZoom&&J(),this.enableRotate&&Q()},ee=e=>{if(h.length==1)T.set(e.pageX,e.pageY);else{const c=F(e),d=.5*(e.pageX+c.x),b=.5*(e.pageY+c.y);T.set(d,b)}w.subVectors(T,P).multiplyScalar(this.rotateSpeed);const t=this.domElement;U(2*Math.PI*w.x/t.clientHeight),K(2*Math.PI*w.y/t.clientHeight),P.copy(T)},te=e=>{if(h.length===1)O.set(e.pageX,e.pageY);else{const t=F(e),c=.5*(e.pageX+t.x),d=.5*(e.pageY+t.y);O.set(c,d)}D.subVectors(O,M).multiplyScalar(this.panSpeed),R(D.x,D.y),M.copy(O)},ne=e=>{const t=F(e),c=e.pageX-t.x,d=e.pageY-t.y,b=Math.sqrt(c*c+d*d);N.set(0,b),x.set(0,Math.pow(N.y/A.y,this.zoomSpeed)),z(x.y),A.copy(N)},Pe=e=>{this.enableZoom&&ne(e),this.enablePan&&te(e)},Te=e=>{this.enableZoom&&ne(e),this.enableRotate&&ee(e)};this.onPointerDown=e=>{this.enabled!==!1&&(h.length===0&&(this.domElement.addEventListener("pointermove",this.onPointerMove),this.domElement.addEventListener("pointerup",this.onPointerUp)),Ne(e),e.pointerType==="touch"?we(e):Me(e))};let H=!1;this.onPointerMove=e=>{this.enabled!==!1&&(H||(this.domElement.setPointerCapture(e.pointerId),H=!0),e.pointerType==="touch"?De(e):Oe(e))},this.onPointerUp=e=>{this.enabled!==!1&&(H=!1,e.pointerType==="touch"?Ae():Le(),se(e),h.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this.onPointerMove),this.domElement.removeEventListener("pointerup",this.onPointerUp)))},this.onPointerCancel=e=>{se(e)};const Me=e=>{let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case j.DOLLY:if(this.enableZoom===!1)return;pe(e),a=o.DOLLY;break;case j.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;q(e),a=o.PAN}else{if(this.enableRotate===!1)return;B(e),a=o.ROTATE}break;case j.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;B(e),a=o.ROTATE}else{if(this.enablePan===!1)return;q(e),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&this.dispatchEvent({type:"start"})},Oe=e=>{if(this.enabled!==!1)switch(a){case o.ROTATE:if(this.enableRotate===!1)return;me(e);break;case o.DOLLY:if(this.enableZoom===!1)return;ue(e);break;case o.PAN:if(this.enablePan===!1)return;fe(e);break}},Le=e=>{this.dispatchEvent({type:"end"}),a=o.NONE};this.onMouseWheel=e=>{this.enabled===!1||this.enableZoom===!1||a!==o.NONE||(e.preventDefault(),this.dispatchEvent({type:"start"}),Ee(e),this.dispatchEvent({type:"end"}))},this.onKeyDown=e=>{this.enabled===!1||this.enablePan===!1||be(e)};const we=e=>{switch(oe(e),h.length){case 1:switch(this.touches.ONE){case S.ROTATE:if(this.enableRotate===!1)return;Q(),a=o.TOUCH_ROTATE;break;case S.PAN:if(this.enablePan===!1)return;$(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(this.touches.TWO){case S.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;ge(),a=o.TOUCH_DOLLY_PAN;break;case S.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;ye(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&this.dispatchEvent({type:"start"})},De=e=>{switch(oe(e),a){case o.TOUCH_ROTATE:if(this.enableRotate===!1)return;ee(e),this.update();break;case o.TOUCH_PAN:if(this.enablePan===!1)return;te(e),this.update();break;case o.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;Pe(e),this.update();break;case o.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;Te(e),this.update();break;default:a=o.NONE}},Ae=e=>{this.dispatchEvent({type:"end"}),a=o.NONE};this.onContextMenu=e=>{this.enabled!==!1&&e.preventDefault()};function Ne(e){h.push(e)}const se=e=>{delete C[e.pointerId];for(let t=0;t<h.length;t++)if(h[t].pointerId==e.pointerId){h.splice(t,1);return}};function oe(e){let t=C[e.pointerId];t===void 0&&(t=new m,C[e.pointerId]=t),t.set(e.pageX,e.pageY)}function F(e){const t=e.pointerId===h[0].pointerId?h[1]:h[0];return C[t.pointerId]}this.spherical=l,this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),this.domElement.addEventListener("wheel",this.onMouseWheel,{passive:!1}),this.reset=()=>{this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent({type:"change"}),this.update(),a=o.NONE},this.update()}getPolarAngle(){return this.spherical.phi}getAzimuthalAngle(){return this.spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(i){i.addEventListener("keydown",this.onKeyDown),this._domElementKeyEvents=i}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}setCamera(i){this.object=i}setDom(i){this.dispose(),this.domElement=i,this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),this.domElement.addEventListener("wheel",this.onMouseWheel,{passive:!1})}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointercancel",this.onPointerCancel),this.domElement.removeEventListener("wheel",this.onMouseWheel),this.domElement.removeEventListener("pointermove",this.onPointerMove),this.domElement.removeEventListener("pointerup",this.onPointerUp),this._domElementKeyEvents!==null&&this._domElementKeyEvents.removeEventListener("keydown",this.onKeyDown)}}const ce=le(je),He=function(){let p,n,i;return{name:ce,install(r){const o=new ke(r.camera,r.dom);r.orbitControls=o,p=a=>{o.setDom(a.dom)},r.addEventListener(Y.SETDOM,p),n=a=>{a.options.orbitControls&&o.setCamera(a.camera)},r.addEventListener(Y.SETCAMERA,n),i=r.render,r.render=function(a){return i(a),o.update(),this}},dispose(r){r.removeEventListener(Y.SETDOM,p),r.removeEventListener(Y.SETCAMERA,n),r.render=i}}},Ce="@vis-three/orbit-render-strategy",Ie=le(Ce),Fe=function(){let p;return{name:Ie,condition:[ce,xe],exec(n){p=()=>{n.orbitControls.update()},n.renderManager.addEventListener(he.RENDER,p)},rollback(n){n.renderManager.removeEventListener(he.RENDER,p)}}};export{He as O,Fe as a,ce as b};