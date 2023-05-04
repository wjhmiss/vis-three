(function(u,c){typeof exports=="object"&&typeof module!="undefined"?c(exports,require("@vis-three/middleware"),require("uuid"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/middleware","uuid","three"],c):(u=typeof globalThis!="undefined"?globalThis:u||self,c((u["vis-three"]=u["vis-three"]||{},u["vis-three"]["module-path"]={}),u.middleware,u.uuid,u.three))})(this,function(u,c,P,s){"use strict";class d extends c.Compiler{constructor(){super()}compile(r,n){return super.compile(r,n),this}}const y=function(e,r,n=P.validate){c.Rule(e,r,n)},m=function(){return Object.assign(c.getSymbolConfig(),{curves:[],autoClose:!1})},V=function(){return Object.assign(c.getSymbolConfig(),{})},f={arc:(e,r,n,t,o,a)=>{const p=new s.Vector2(e,r),l=new s.Vector2(o,a),x=new s.Vector2((o+e)/2,(a+r)/2),i=new s.Vector2().copy(l).sub(p);i.set(-i.y,i.x).negate().normalize().multiplyScalar(n).add(x);const h=new s.Vector2().copy(l).sub(i).length(),E=new s.Vector2().copy(p).sub(i).angle(),O=new s.Vector2().copy(l).sub(i).angle();return new s.EllipseCurve(i.x,i.y,h,h,E,O,t,0)},line:(e,r,n,t)=>new s.LineCurve(new s.Vector2(e,r),new s.Vector2(n,t)),bezier:(e,r,n,t,o,a,p,l)=>new s.CubicBezierCurve(new s.Vector2(e,r),new s.Vector2(n,t),new s.Vector2(o,a),new s.Vector2(p,l)),quadratic:(e,r,n,t,o,a)=>new s.QuadraticBezierCurve(new s.Vector2(e,r),new s.Vector2(n,t),new s.Vector2(o,a))},C=function(e,r){return r==="start"?{x:e.params[0],y:e.params[1]}:{x:e.params[e.params.length-2],y:e.params[e.params.length-1]}},v=function(e){return f[e.curve]?f[e.curve](...e.params):(console.warn(`path processor can not support this curve: ${e.curve}`),null)},w=function(e,r,n){if(n==="start")e.params[0]!==r[0]&&(e.params[0]=r[0]),e.params[1]!==r[1]&&(e.params[1]=r[1]);else{const t=e.params.length-1;e.params[t-1]!==r[0]&&(e.params[t-1]=r[0]),e.params[t]!==r[1]&&(e.params[t]=r[1])}};var b=c.defineProcessor({type:"Path",config:m,commands:{add:{curves({target:e,config:r,value:n}){const t=v(n);t&&e.curves.push(t)}},set:{curves({target:e,config:r,path:n}){const t=Number(n[1]);if(!Number.isInteger(t)){console.warn("path processor: set curves path error:",n);return}const o=v(r.curves[t]);e.curves[t]=o;const a=C(r.curves[t],"start"),p=C(r.curves[t],"end");t-1>=0&&w(r.curves[t-1],[a.x,a.y],"end"),t+1<=e.curves.length-1&&w(r.curves[t+1],[p.x,p.y],"start")}},delete:{curves({target:e,key:r}){e.curves.length-1<Number(r)||e.curves.splice(Number(r),e.curves.length)}}},create(e,r){const n=new s.Path;if(e.curves.length)for(const t of e.curves){const o=v(t);o&&n.curves.push(o)}return n.autoClose=e.autoClose,n},dispose(e){e.curves=[]}}),g={type:"path",compiler:d,rule:y,processors:[b],lifeOrder:c.SUPPORT_LIFE_CYCLE.ZERO};u.PathCompiler=d,u.default=g,u.getPath3Config=V,u.getPathConfig=m,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
