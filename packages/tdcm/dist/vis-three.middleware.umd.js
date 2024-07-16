(function(l,p){typeof exports=="object"&&typeof module!="undefined"?p(exports,require("@vis-three/utils"),require("uuid"),require("@vis-three/core"),require("rxjs"),require("@vis-three/plugin-loader-manager"),require("@vis-three/plugin-pointer-manager"),require("@vis-three/plugin-event-manager"),require("@vis-three/plugin-render-manager")):typeof define=="function"&&define.amd?define(["exports","@vis-three/utils","uuid","@vis-three/core","rxjs","@vis-three/plugin-loader-manager","@vis-three/plugin-pointer-manager","@vis-three/plugin-event-manager","@vis-three/plugin-render-manager"],p):(l=typeof globalThis!="undefined"?globalThis:l||self,p((l["vis-three"]=l["vis-three"]||{},l["vis-three"].middleware={}),l.utils,l.uuid,l.core,l.rxjs,l.pluginLoaderManager,l.pluginPointerManager,l.pluginEventManager,l.pluginRenderManager))})(this,function(l,p,M,w,ne,O,H,W,F){"use strict";var ht=Object.defineProperty;var dt=(l,p,M)=>p in l?ht(l,p,{enumerable:!0,configurable:!0,writable:!0,value:M}):l[p]=M;var u=(l,p,M)=>(dt(l,typeof p!="symbol"?p+"":p,M),M);const b={},z={},U={},P={},X={},J={},B=r=>X[r]||null,se=r=>P[r],oe=r=>{const t=B(r);return t?se(t):!1},Z=function(r,t){J[r.type]=r,U[r.type.toLocaleUpperCase()]=r.type,b[r.type]=r.config,X[r.type]=t},d={proxy:{expand:void 0,timing:"before",toRaw:void 0,ignore:{}},symbol:{generator:M.v4,validator:M.validate}},We=function(r){r.proxy&&Object.assign(d.proxy,r.proxy),r.symbol&&Object.assign(d.symbol,r.symbol)},K="vis.father",C="vis.key",Q="vis.observer",ie=new WeakMap,G=function(r){Array.isArray(r)&&ie.set(r,r.concat([]))},Fe=function(r){return ie.get(r)},Y=function(r){let t="";const e=n=>{n[Symbol.for(C)]!==void 0&&(t=`${n[Symbol.for(C)]}${t?`.${t}`:""}`,n[Symbol.for(K)]&&e(n[Symbol.for(K)]))};return e(r),t},ze=function(r){if(r.length&&p.isObject(r[0])){const t=r.length;for(let e=0;e<t;e+=1)r[e][Symbol.for(C)]=e}},R=function(r){return r[Symbol.for(Q)]},ae=function(r){return Boolean(r[Symbol.for(Q)])},A=(r,t)=>t===1/0?"Infinity":t===-1/0?"-Infinity":t,_=(r,t)=>t==="Infinity"?1/0:t==="-Infinity"?-1/0:t,L=r=>JSON.parse(JSON.stringify(r,A),_);class ce{constructor(t){u(this,"config");this.config=t}pipe(t){return this.config=t(this.config),this}get(){return this.config}}var D={stringify:A,parse:_,clone:L,Pipeline:ce},Xe=Object.freeze(Object.defineProperty({__proto__:null,stringify:A,parse:_,clone:L,Pipeline:ce,default:D},Symbol.toStringTag,{value:"Module"}));const g=function(r,t,e={observer:!0,strict:!0,warn:!0}){if(e.observer===void 0&&(e.observer=!0),e.strict===void 0&&(e.strict=!0),e.warn===void 0&&(e.warn=!0),e.handler===void 0&&(e.handler=d.proxy.expand),!b[r])return console.error(`type: ${r} can not be found in configList.`),{vid:"",type:r};const n=(i,a)=>{for(const c in a){if(i[c]===void 0){!e.strict&&(i[c]=a[c]),e.strict&&e.warn&&console.warn(`'${r}' config can not set key: ${c}`);continue}typeof a[c]=="object"&&a[c]!==null&&!Array.isArray(a[c])?(i[c]===null&&(i[c]={...a[c]}),n(i[c],a[c])):i[c]=a[c]}};let s=b[r]();if(s.vid===""&&(s.vid=d.symbol.generator()),t&&n(s,t),e.observer===!1)return s;e.handler&&d.proxy.timing==="before"&&(s=e.handler(s));let o=Ce(s);if(e.handler&&d.proxy.timing==="after"&&(o=e.handler(o)),g.autoInject&&g.injectEngine){const i=g.injectEngine;if(i.applyConfig(o),g.injectScene&&oe(s.type)&&s.type!==U.SCENE){let a=null;typeof g.injectScene=="boolean"?a=i.getObjectConfig(i.scene):typeof g.injectScene=="string"&&(a=i.getConfigBySymbol(g.injectScene)),a?a.children.push(s.vid):console.warn("current engine scene can not found it config",i,i.scene)}return o}return o};g.autoInject=!0,g.injectScene=!1,g.injectEngine=null;const le=(r,t={})=>{let e=JSON.stringify(r,D.stringify);const n={};!t.filter&&(t.filter=["assets"]);const s=Object.keys(r).filter(i=>!t.filter.includes(i));for(const i of s)for(const a of r[i]){const c=a.vid,f=M.v4();e=e.replace(new RegExp(c,"g"),f),t.detail&&(n[c]=f)}const o=JSON.parse(e,D.parse);if(t.fillName)if(typeof t.fillName=="function")for(const i of s)for(const a of o[i])a.name||(a.name=t.fillName(a));else for(const i of s)for(const a of o[i])a.name||(a.name=`${a.type}-${a.vid.slice(-2)}`);return t.detail?{config:o,detail:n}:o},ee=(r,t,e={filter:["assets"],clone:!0})=>{const n=e.clone?D.clone(r):r;!e.filter&&(e.filter=["assets"]);const s=Object.keys(n).filter(o=>!e.filter.includes(o));for(const o of s)n[o].forEach((a,c,f)=>{f[c]=t(a)});return n},ue=function(r){const t={};for(const e of Object.keys(r))for(const n of r[e])t[n.name]=n;return t},fe=function(r,t){return typeof r=="string"&&(r=JSON.parse(r,D.parse)),ee(D.clone(r),e=>(e=g(e.type,e,{strict:!1}),t?t(e):e))};var Ze={clone:le,handler:ee,planish:ue,observable:fe},Ke=Object.freeze(Object.defineProperty({__proto__:null,clone:le,handler:ee,planish:ue,observable:fe,default:Ze},Symbol.toStringTag,{value:"Module"}));class pe{constructor(){u(this,"list",[]);u(this,"timer");u(this,"time",0)}exec(t){if(t(!1))return;this.list.includes(t)||this.list.push(t);let e=0;const n=()=>{this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{const s=[];for(const o of this.list)o(!1)||s.push(o);if(s.length)if(s.length===e){for(const o of s)o(!0);this.list=[]}else e=s.length,this.list=s,n();else this.list=[]},this.time)};n()}append(t){this.list.length&&!this.list.includes(t)?this.list.push(t):this.exec(t)}nextTick(t){setTimeout(()=>{t()},this.time)}}const Qe=new pe;class te{constructor(){u(this,"map",new WeakMap)}create(t){if(this.map.has(t)){console.warn("object is exist.",t);return}this.map.set(t,new w.EventDispatcher)}dispose(t){this.map.delete(t)}check(t){return this.map.has(t)}emit(t,e,n){if(!this.map.has(t)){console.warn("object can not create eventDispatcher please create it",t);return}this.map.get(t).emit(e,n)}on(t,e,n){if(!this.map.has(t)){console.warn("object can not create eventDispatcher please create it",t);return}this.map.get(t).on(e,n)}off(t,e,n){if(!this.map.has(t)){console.warn("object can not create eventDispatcher please create it",t);return}this.map.get(t).off(e,n)}}const v=new te,Ye=new te;var _e=Object.freeze(Object.defineProperty({__proto__:null,Bus:te,compilerEvent:v,configEvent:Ye},Symbol.toStringTag,{value:"Module"}));class he{constructor(){u(this,"condition",{})}registerModule(t){return this.condition[t]=!1,this}updateCondition(t){return typeof this.condition[t]!="undefined"&&(this.condition[t]=!0),this}reset(){Object.keys(this.condition).forEach(t=>{this.condition[t]=!1})}test(){return!Object.values(this.condition).includes(!1)}trig(){}}class de extends he{constructor(){super();u(this,"triggerList",[])}registerModule(e){return P[e]?super.registerModule(e):this}registerExec(e){e(!0)||this.triggerList.push(e)}trig(){const e=this.triggerList;for(const n of e)n();this.reset()}reset(){this.triggerList=[],super.reset()}}const ge=new de,et=function(){return d.symbol.generator()},tt=function(r,t){const e=R(r);if(!e){console.warn("this object can not found it observer:",r);return}e.disable=!0,t(),e.disable=!1};var ye=(r=>(r.ADD="compiler.add",r.REMOVE="compiler.remove",r.COMPILE="compiler.compile",r.UPDATE="compiler.update",r))(ye||{});class rt{constructor(){u(this,"MODULE","");u(this,"processors",new Map);u(this,"target",{});u(this,"map",new Map);u(this,"weakMap",new WeakMap);u(this,"engine");u(this,"cacheCompile")}getMap(){return this.map}useEngine(t){return this.engine=t,this}setTarget(t){return this.target=t,this}add(t){if(!this.processors.has(t.type))return console.warn(`${this.MODULE} compiler can not support this type: ${t.type}`),null;const n=this.processors.get(t.type).create(t,this.engine,this);return this.map.set(t.vid,n),this.weakMap.set(n,t.vid),v.create(n),v.emit(n,"compiler.add"),n}remove(t){const e=t.vid;if(!this.map.has(e))return console.warn(`${this.MODULE} compiler can not found this vid object: ${e}.`),this;if(!this.processors.has(t.type))return console.warn(`${this.MODULE} compiler can not support this type: ${t.type}`),this;const n=this.map.get(e);return this.processors.get(t.type).dispose(n,this.engine,this),this.map.delete(e),this.weakMap.delete(n),v.emit(n,"compiler.remove"),v.dispose(n),this.cacheCompile&&this.cacheCompile.vid===e&&(this.cacheCompile=void 0),this}cover(t){const e=t.vid;return this.map.has(e)?(Promise.resolve().then(()=>{p.syncObject(t,t,{vid:!0,type:!0})}),this):(console.warn(`${this.MODULE} compiler can not found this vid object: ${e}.`),this)}compile(t,e){const n=this.cacheCompile;let s,o,i;if(n&&n.vid===t)s=n.target,o=n.config,i=n.processor;else{if(!this.map.has(t))return console.warn(`${this.MODULE} compiler set function: can not found object which vid is: '${t}'`),this;if(!this.target[t])return console.warn(`${this.MODULE} compiler set function: can not found config which vid is: '${t}'`),this;if(s=this.map.get(t),o=this.target[t],!this.processors.has(o.type))return console.warn(`PassCompiler can not support this type: ${o.type}`),this;i=this.processors.get(o.type),this.cacheCompile={target:s,config:o,processor:i,vid:t}}i.process({config:o,target:s,engine:this.engine,processor:i,compiler:this,...e});const a=e.path.join(".");return v.emit(s,`compiler.compile:${a&&a+"."}${e.key}`),v.emit(s,"compiler.update"),this}compileAll(){const t=this.target;for(const e of Object.values(t))this.add(e);return this}dispose(){this.cacheCompile&&(this.cacheCompile=void 0);for(const t of Object.values(this.target)){if(!this.map.has(t.vid)){console.warn(`${this.MODULE} compiler set function: can not found object which vid is: '${t.vid}'`);continue}const e=this.map.get(t.vid);if(!this.processors.has(t.type)){console.warn(`${this.MODULE}  can not support this type: ${t.type}`);continue}this.processors.get(t.type).dispose(e,this.engine,this)}return this.map.clear(),this.target={},this}reigstProcessor(t,e){return this.processors.has(t.type)?(console.warn(`${this.MODULE} compiler has already exist this processor ${t.type}, that will be cover.`),this):(this.processors.set(t.type,t),Z(t,this.MODULE),e(this),this)}getObjectSymbol(t){return this.weakMap.get(t)||null}getObjectBySymbol(t){return this.map.get(t)||null}}const me=function(r,t,e){return class extends t{constructor(){super();u(this,"MODULE",r);for(const s of e)this.processors.set(s.type,s)}}},Me=function(r,t,e){return Reflect.get(r,t,e)},be=function(r,t,e,n,s){if(typeof t=="symbol")return Reflect.set(r,t,e,n);if(r[t]===void 0){const o=Reflect.set(r,t,e);return s.add(e),s.next({operate:"add",path:t,key:t,value:e}),o}else{const o=Reflect.set(r,t,e);return s.remove(e.vid),s.add(e),s.next({operate:"set",path:t,key:t,value:e}),o}},Se=function(r,t,e){if(typeof t=="symbol")return Reflect.deleteProperty(r,t);const n=r[t],s=Reflect.deleteProperty(r,t);return e.next({operate:"delete",path:t,key:t,value:n}),e.remove(n.vid),s};class Oe extends ne.Subject{constructor(){super();u(this,"container");u(this,"subscriptions",new Map);const e=d.proxy.expand?(n={})=>d.proxy.expand(n):(n={})=>n;d.proxy.timing==="before"?this.container=new Proxy(e(),{get:Me,set:(n,s,o,i)=>be(n,s,o,i,this),deleteProperty:(n,s)=>Se(n,s,this)}):this.container=e(new Proxy({},{get:Me,set:(n,s,o,i)=>be(n,s,o,i,this),deleteProperty:(n,s)=>Se(n,s,this)}))}add(e){const n=R(e);if(!n){console.error("DataContainer: this config can not observer",e);return}this.subscriptions.set(n.target.vid,n.subscribe(s=>{this.next({operate:s.operate,path:p.extendPath(n.target.vid,s.path),key:s.key,value:s.value})}))}remove(e){this.subscriptions.delete(e)}}class ve{constructor(){u(this,"rule",()=>{});u(this,"members",[])}apply(t){return this.members.includes(t)||this.members.push(t),this}cancel(t){return this.members.includes(t)&&this.members.splice(this.members.indexOf(t),1),this}setRule(t){return this.rule=t,this}translate(t){const e=this.rule;for(const n of this.members)e(t,n);return this}}class Ee{constructor(t,e=[]){u(this,"MODULE","");u(this,"dataContainer",new Oe);u(this,"translater");this.translater=new ve().setRule(t),this.dataContainer.subscribe(n=>{this.translater.translate(n)});for(const n of e)this.addConfig(n)}getData(){return this.dataContainer.container}existSymbol(t){return Boolean(this.dataContainer.container[t])}addConfig(t){return this.dataContainer.container[t.vid]=t,this}getConfig(t){return this.dataContainer.container[t]}removeConfig(t){const e=this.dataContainer.container;e[t]!==void 0&&delete e[t]}addCompiler(t){return t.setTarget(this.dataContainer.container),t.compileAll(),this.translater.apply(t),this}toJSON(t=!0){return t?JSON.stringify(this.exportConfig(),A):JSON.stringify(Object.values(this.dataContainer.container),A)}exportConfig(t=!0){if(t){const e=this.dataContainer.container,n=[],s={},o=(i,a,c={})=>{for(const f in i){if(["vid","type"].includes(f)){c[f]=i[f];continue}if(typeof i[f]=="object"&&i[f]!==null){if(Array.isArray(i[f])){if(!i[f].length)continue;c[f]=i[f].map(m=>typeof m=="object"&&m!==null?L(m):m);continue}c[f]={},a[f]?(o(i[f],a[f],c[f]),Object.keys(c[f]).length===0&&delete c[f]):c[f]=L(i[f])}else a[f]!==i[f]&&(c[f]=i[f])}};for(const i of Object.values(e)){if(!s[i.type]){if(!b[i.type]){console.error(`can not font some config with: ${i.type}`);continue}s[i.type]=b[i.type]()}const a={};o(i,s[i.type],a),n.push(a)}return n}else return Object.values(L(this.dataContainer.container))}load(t){const e=this.dataContainer.container,n={},s=(o,i)=>{for(const a in i)typeof o[a]=="object"&&o[a]!==null&&typeof i[a]=="object"&&i[a]!==null?s(o[a],i[a]):o[a]===void 0&&(o[a]=i[a])};for(const o of t){if(!n[o.type]){if(!b[o.type]){console.error(`can not font some config with: ${o.type}`);continue}n[o.type]=b[o.type]()}s(o,n[o.type]),e[o.vid]=o}return this}remove(t){const e=this.dataContainer.container;for(const n of t)e[n.vid]!==void 0&&delete e[n.vid];return this}}const we=function(r,t){return class extends Ee{constructor(n=[]){super(t,n);u(this,"MODULE",r)}}},nt=["push","pop","shift","unshift","splice","sort","reverse"],$=new WeakSet,st={get:function(r,t,e){return Array.isArray(r)&&nt.includes(t)&&$.add(r),Reflect.get(r,t,e)},set:function(r,t,e,n){const s=Y(r),o=R(r);if(typeof t=="symbol"||o.isIgnore(p.extendPath(s,t)))return Reflect.set(r,t,e,n);if(p.isObject(e)&&!ae(e)&&(e=I(o,e,r,t)),r[t]===void 0){p.isObject(e)&&(e[Symbol.for(C)]=t,p.isArray(e)&&G(e)),p.isArray(r)&&$.delete(r);const c=Reflect.set(r,t,e);return p.isArray(r)&&G(r),o.next({operate:"add",path:s,key:t,value:e}),c}const i=r[t],a=Reflect.set(r,t,e);if(p.isArray(r)){if($.has(r)&&t==="length"){const c=Fe(r);if(!c)return Array.isArray(i)&&console.error("array value is not be cached:",r),a;ze(r);const f=Math.abs(c.length-r.length),m=c.length>=r.length?"delete":"add",N=c.length>=r.length?r:c;let qe=0,Ve=0;for(const He of m==="delete"?c:r){if(!N.includes(He)&&(o.next({operate:m,path:s,key:Ve.toString(),value:He}),qe+=1,qe===f))break;Ve+=1}return G(r),$.delete(r),a}else if($.has(r)||t==="length")return a}return o.next({operate:"set",path:s,key:t,value:e}),a},deleteProperty:function(r,t){const e=Y(r),n=R(r);if(typeof t=="symbol"||n.isIgnore(e))return Reflect.deleteProperty(r,t);const s=r[t],o=Reflect.deleteProperty(r,t);return p.isArray(r)||n.next({operate:"delete",path:e,key:t,value:s}),o}},I=function(r,t,e,n){if(!p.isObject(t)||ae(t))return t;const s=e?Y(e):"";if(r.isIgnore(s))return t;e&&(t[Symbol.for(K)]=e),t[Symbol.for(Q)]=r;for(const i in t){const a=p.extendPath(s,i);if(!r.isIgnore(a)&&p.isObject(t[i])){if(p.isArray(t[i])){const c=t[i];t[i]=I(r,t[i],t),G(c)}else t[i]=I(r,t[i],t);t[i][Symbol.for(C)]=i}}return n&&(t[Symbol.for(C)]=n),new Proxy(t,st)};class ot extends ne.Subject{constructor(e,n){super();u(this,"ignore",{});u(this,"target");u(this,"disable",!1);n?this.ignore=n:this.ignore=Object.assign({meta:!0,alias:!0},d.proxy.ignore||{}),this.target=I(this,e)}isIgnore(e){let n=this.ignore;for(const s of e.split(".")){if(n[s]===void 0)return!1;if(typeof n[s]=="boolean"&&n[s])return!0;n=n[s]}return!1}setIgnore(e){this.ignore=e}mergeIgnore(e){this.ignore=Object.assign(this.ignore,e)}next(e){this.disable||super.next(e)}}const Ce=function(r,t){return new ot(r,t).target};class Ae{constructor(t){u(this,"type");u(this,"config");u(this,"commands");u(this,"create");u(this,"dispose");this.type=t.type,this.commands=t.commands,this.create=t.create,this.dispose=t.dispose,this.config=()=>{const e=t.config();return e.type=this.type,e},U[this.type.toLocaleUpperCase()]=this.type,b[this.type]=this.config}process(t){if(!this.commands||!this.commands[t.operate]){this[t.operate](t);return}let e=this.commands[t.operate];for(const n of[].concat(t.path,t.key))if(!e[n]&&!e.$reg){this[t.operate](t);return}else if(e[n])if(typeof e[n]=="function"){e[n](t);return}else e=e[n];else if(e.$reg){for(const s of e.$reg)if(s.reg.test(n)){s.handler(t);return}}this[t.operate](t)}add(t){let e=t.target;const n=t.path;for(const s of n)if(typeof e[s]!==void 0)e=e[s];else{console.warn("processor can not exec default add operate.",t);return}e[t.key]=t.value}set(t){let e=t.target;const n=t.path;for(const s of n)if(typeof e[s]!==void 0)e=e[s];else{console.warn("processor can not exec default set operate.",t);return}e[t.key]=t.value}delete(t){let e=t.target;const n=t.path;for(const s of n)if(typeof e[s]!==void 0)e=e[s];else{console.warn("processor can not exec default delete operate.",t);return}delete e[t.key]}expand(t){const e=function(n,s){for(const o in s)p.isObject(s[o])&&p.isObject(n[o])?e(n[o],s[o]):(p.isObject(s[o])&&!n[o]||!p.isObject(s[o])&&!n[o])&&(n[o]=s[o])};return this.commands||(this.commands={}),e(this.commands,t),this}}const it=r=>new Ae(r),at=(r,t,e=M.validate)=>{const{operate:n,key:s,path:o,value:i}=r;let a=s;const c=o.split(".");if(c.length&&(a=c.shift()),!e(a)){console.warn(`${t.MODULE} Rule: vid is illeage: ${a}`);return}if(n==="add"&&!c.length&&a===s){t.add(i);return}if(r.operate==="delete"&&!c.length){t.remove(i);return}if(r.operate==="set"&&!c.length&&s===a){t.cover(i);return}t.compile(a,{operate:n,key:s,path:c,value:i})},ct=function(){return{vid:"",type:"",name:"",alias:"",meta:{}}},lt=function(r){return`DEFUALT-${r}`},ut=function(){};class De extends w.EventDispatcher{constructor(){super();u(this,"compilerMap",new Map)}extend(e,n=!1){this.compilerMap.has(e.MODULE)?(console.warn("compiler manager has exist this compiler",e),n&&this.compilerMap.set(e.MODULE,e)):this.compilerMap.set(e.MODULE,e)}getCompiler(e){return this.compilerMap.has(e)?this.compilerMap.get(e):(console.warn(`can not found this type in compiler manager: ${e}`),null)}getObjectSymbol(e){for(const n of this.compilerMap.values()){const s=n.getObjectSymbol(e);if(s)return s}return null}getObjectBySymbol(e){for(const n of this.compilerMap.values()){const s=n.getObjectBySymbol(e);if(s)return s}return null}getObjectfromModule(e,n){return this.compilerMap.has(e)?this.compilerMap.get(e).map.get(n)||null:(console.warn(`compiler manager can not found this module: ${e}`),null)}getObjectfromModules(e,n){Array.isArray(e)||(e=Object.keys(e));for(const s of e){if(!this.compilerMap.has(s)){console.warn(`compiler manager can not found this module: ${s}`);continue}const o=this.compilerMap.get(s);if(o.map.has(n))return o.map.get(n)}return null}dispose(){for(const e of this.compilerMap.values())e.dispose();return this.compilerMap.clear(),this}}const k="CompilerManagerPlugin",je=function(){return{name:k,install(r){const t=new De;r.compilerManager=t,r.getObjectSymbol=function(e){return t.getObjectSymbol(e)},r.getObjectBySymbol=function(e){return t.getObjectBySymbol(e)},r.getObjectfromModule=function(e,n){return t.getObjectfromModule(e,n)},r.getObjectfromModules=function(e,n){return t.getObjectfromModules(e,n)},r.getObject3D=function(e){return t.getObjectfromModules(P,e)}},dispose(r){r.compilerManager.dispose(),delete r.compilerManager,delete r.getObjectSymbol,delete r.getObjectBySymbol,delete r.getObjectfromModule,delete r.getObjectfromModules,delete r.getObject3D}}};class Ne extends w.EventDispatcher{constructor(){super();u(this,"dataSupportMap",new Map)}extend(e,n=!1){this.dataSupportMap.has(e.MODULE)?(console.warn("dataSupport manager has exist this dataSupport",e),n&&this.dataSupportMap.set(e.MODULE,e)):this.dataSupportMap.set(e.MODULE,e)}getDataSupport(e){return this.dataSupportMap.has(e)?this.dataSupportMap.get(e):(console.warn(`can not found this type in dataSupportManager: ${e}`),null)}getConfigBySymbol(e){const n=this.dataSupportMap.values();for(const s of n){const o=s.getConfig(e);if(o)return o}return null}getConfigfromModule(e,n){return this.dataSupportMap.has(e)?this.dataSupportMap.get(e).getConfig(n)||null:(console.warn(`data support manager can not found this module: ${e}`),null)}getConfigfromModules(e,n){Array.isArray(e)||(e=Object.keys(e));for(const s of e){if(!this.dataSupportMap.has(s)){console.warn(`data support manager can not found this module: ${s}`);continue}const i=this.dataSupportMap.get(s).getConfig(n);if(i)return i}return null}removeConfigBySymbol(...e){for(const n of e)for(const s of this.dataSupportMap.values())if(s.existSymbol(n)){s.removeConfig(n);break}return this}getModuleBySymbol(e){const n=this.dataSupportMap.values();for(const s of n)if(s.existSymbol(e))return s.MODULE;return null}applyConfig(...e){for(const n of e){const s=B(n.type);s?this.dataSupportMap.get(s).addConfig(n):console.warn(`dataSupportManager can not found this config module: ${n.type}`)}return this}load(e){return this.dataSupportMap.forEach((s,o)=>{e[o]&&s.load(e[o])}),this}loadByModule(e,n){const s=this.dataSupportMap.get(n);return s?(s.load(e),this):(console.warn(`DataSupportManager can not support this module: ${n}`),this)}remove(e){return this.dataSupportMap.forEach((s,o)=>{e[o]&&s.remove(e[o])}),this}toJSON(e={},n=!0){return JSON.stringify(this.exportConfig(e,n),A)}exportConfig(e={},n=!0){return this.dataSupportMap.forEach((o,i)=>{e[i]=o.exportConfig(n)}),e}}const T="DataSupportManagerPlugin",Pe=function(){return{name:T,install(r){const t=new Ne;r.dataSupportManager=t,r.applyConfig=function(...e){return t.applyConfig(...e),r},r.getConfigBySymbol=function(e){return t.getConfigBySymbol(e)},r.getConfigfromModule=function(e,n){return t.getConfigfromModule(e,n)},r.getConfigfromModules=function(e,n){return t.getConfigfromModules(e,n)},r.removeConfigBySymbol=function(...e){return t.removeConfigBySymbol(...e),r},r.toJSON=function(){return t.toJSON()},r.exportConfig=function(){return t.exportConfig()}},dispose(r){delete r.dataSupportManager,delete r.applyConfig,delete r.getConfigBySymbol,delete r.removeConfigBySymbol,delete r.toJSON,delete r.exportConfig}}};class Re{}class q extends Re{constructor(){super(...arguments);u(this,"selector",(e,n,s)=>s.get(q)||null)}parse({url:e,resource:n,configMap:s,resourceMap:o}){o.set(e,n)}}var V=(r=>(r.MAPPED="mapped",r))(V||{});class Le extends w.EventDispatcher{constructor(e={}){super();u(this,"configMap",new Map);u(this,"resourceMap",new Map);u(this,"paserMap",new Map);u(this,"defalutParser",new q);const n=new Map;for(const s in e)n.has(s)&&console.warn(`resourceManager construct params rescource already exist: ${s}, that will be cover.`),n.set(s,e[s]);this.mappingResource(n)}addParser(e){return this.paserMap.has(e.constructor)?this:(this.paserMap.set(e.constructor,e),this)}mappingResource(e,n){const s=this.configMap,o=this.resourceMap,i=[...this.paserMap.values()],a={};for(const[c,f]of e.entries()){if((n==null?void 0:n.parser)&&n.parser[c]){n.parser[c].parse({url:c,resource:f,configMap:s,resourceMap:o});continue}if((n==null?void 0:n.selector)&&n.selector[c]){const N=n.selector[c](c,f,this.paserMap);if(!N){console.warn("resource manager hanlder can not found this resource parser: ",f,n.selector[c]);continue}N.parse({url:c,resource:f,configMap:s,resourceMap:o}),a[c]=this.getResourceConfig(c);continue}let m=null;for(const N of i)if(m=N.selector(c,f,this.paserMap),m)break;if(!m){console.warn("resouce manager can not found some handler to parser this resource, that will use default parser do it:",f),this.defalutParser.parse({url:c,resource:f,configMap:s,resourceMap:o});continue}m.parse({url:c,resource:f,configMap:s,resourceMap:o}),a[c]=this.getResourceConfig(c)}return this.dispatchEvent({type:"mapped",configMap:s,resourceMap:o,resourceConfig:a}),this}getResourceConfig(e){const n=this.configMap,s={};return[...n.keys()].filter(o=>o.startsWith(e)).forEach(o=>{const i=n.get(o);if(!i)console.error(`unknow error: can not found config by url: ${o}`);else{const a=B(i.type);a?(!s[a]&&(s[a]=[]),s[a].push(i)):console.error(`unknow error: can not found module by type: ${i.type}`,i)}}),s}hasResource(e){return this.resourceMap.has(e)}remove(e){const n=this.configMap,s=this.resourceMap;return[...n.keys()].filter(o=>o.startsWith(e)).forEach(o=>{n.delete(o);const i=s.get(o);i.dispose&&i.dispose(),s.delete(o)}),this}dispose(){this.resourceMap.forEach((e,n)=>{e.dispose&&e.dispose()}),this.resourceMap.clear(),this.configMap.clear()}}const re="ResourceManagerPlugin",$e=function(r={}){return{name:re,install(t){const e=new Le(r.resources);t.resourceManager=e,t.registerResources=n=>{const s=new Map;return Object.keys(n).forEach(o=>{s.set(o,n[o])}),e.mappingResource(s),t}},dispose(t){t.addEventListener(w.ENGINE_EVENT.DISPOSE,()=>{t.resourceManager.dispose()})}}},Te="LoaderDataSupportStrategy",xe=function(){let r,t;return{name:Te,condition:[T,O.LOADER_MANAGER_PLUGIN],exec(e){r=e.toJSON,e.toJSON=function(){const n={assets:JSON.parse(e.loaderManager.toJSON())};return e.dataSupportManager.toJSON(n)},t=e.exportConfig,e.exportConfig=function(){let n={};return n={assets:e.loaderManager.exportConfig()},e.dataSupportManager.exportConfig(n)}},rollback(e){e.toJSON=r,e.exportConfig=t}}},Ue="LoaderMappingStrategy",Je=function(){let r,t;return{name:Ue,condition:[re,O.LOADER_MANAGER_PLUGIN],exec(e){r=e.loadResources,e.loadResources=(n,s)=>{const o=i=>{s(void 0,i),e.resourceManager.removeEventListener(O.LOADER_EVENT.LOADED,o)};try{e.resourceManager.addEventListener(O.LOADER_EVENT.LOADED,o)}catch(i){s(i)}return e.loaderManager.reset().load(n),e},t=e.loadResourcesAsync,e.loadResourcesAsync=n=>new Promise((s,o)=>{try{e.loaderManager.once(O.LOADER_EVENT.LOADED,i=>{e.resourceManager.once(V.MAPPED,c=>{s(c)});const a=new Map;n.forEach(c=>{typeof c=="string"?a.set(c,i.resourceMap.get(c)):a.set(c.url,i.resourceMap.get(c.url))}),e.resourceManager.mappingResource(a)})}catch(i){o(i)}e.loaderManager.reset().load(n)})},rollback(e){e.loadResources=r,e.loadResourcesAsync=t}}},Be="CompilerSupportStrategy",Ge=function(){return{name:Be,condition:[k,T],exec(r){r.compilerManager.compilerMap.forEach((t,e)=>{var n;t.useEngine(r),(n=r.dataSupportManager.dataSupportMap.get(e))==null||n.addCompiler(t)})},rollback(){}}};var Ie=(r=>(r[r.ZERO=0]="ZERO",r[r.ONE=100]="ONE",r[r.TWO=200]="TWO",r[r.THREE=300]="THREE",r[r.FOUR=400]="FOUR",r[r.FIVE=500]="FIVE",r[r.SIX=600]="SIX",r[r.SEVEN=700]="SEVEN",r[r.EIGHT=800]="EIGHT",r[r.NINE=900]="NINE",r))(Ie||{});class ke extends w.Engine{constructor(e={}){super();u(this,"moduleLifeCycle",[]);u(this,"moduleTriggers",[ge]);u(this,"processorExpands",[]);this.install(O.LoaderManagerPlugin(e.LoaderManagerPlugin)).install(H.PointerManagerPlugin(e.PointerManagerPlugin)).install(W.EventManagerPlugin(e.EventManagerPlugin)).install(F.RenderManagerPlugin(e.RenderManagerPlugin)).install($e(e.ResourceManagerPlugin)).install(Pe(e.DataSupportManagerPlugin)).install(je(e.CompilerManagerPlugin)),this.exec(xe()).exec(Je()).exec(Ge())}loadLifeCycle(e){const n=this.dataSupportManager,s=this.moduleTriggers,o=this.moduleLifeCycle.sort((i,a)=>i.order-a.order);for(const{module:i}of o){e[i]&&n.loadByModule(e[i],i);for(const a of s)a.updateCondition(i),a.test()&&a.trig()}}removeLifeCycle(e){const n=this.dataSupportManager,s=this.moduleLifeCycle.sort((c,f)=>f.order-c.order);for(const{module:c}of s)e[c]&&n.remove({[c]:e[c]});const o=e.assets||[],i=this.resourceManager,a=this.loaderManager;o.forEach(c=>{i.remove(c),a.remove(c)})}loadConfig(e,n){const s=this.renderManager.hasRendering();if(s&&this.renderManager.stop(),e.assets&&e.assets.length){const o=i=>{delete e.assets,this.loadLifeCycle(e),this.resourceManager.removeEventListener("mapped",o),n&&n(i),s?this.renderManager.play():this.renderManager.render()};this.resourceManager.addEventListener("mapped",o),this.loaderManager.reset().load(e.assets)}else this.loadLifeCycle(e),n&&n(),s?this.renderManager.play():this.renderManager.render();return this}loadConfigAsync(e,n){return new Promise((s,o)=>{const i=this.renderManager.hasRendering();i&&this.renderManager.stop(),e.assets&&e.assets.length?this.loadResourcesAsync(e.assets).then(a=>{delete e.assets,this.loadLifeCycle(e),i?this.renderManager.play():this.renderManager.render(),s(a)}):(this.loadLifeCycle(e),i?this.renderManager.play():this.renderManager.render(),s({type:V.MAPPED,configMap:this.resourceManager.configMap,resourceMap:this.resourceManager.resourceMap,resourceConfig:{}}))})}removeConfig(e){this.removeLifeCycle(e)}getObjectConfig(e){const n=this.getObjectSymbol(e);return n?this.getConfigBySymbol(n):null}registModule(e){if(z[e.type.toLocaleUpperCase()])return console.warn(`module ${e.type} is already exist.`),this;z[e.type.toLocaleUpperCase()]=e.type,e.object&&(P[e.type]=!0);const n=we(e.type,e.rule),s=me(e.type,e.compiler,e.processors);for(const a of e.processors)Z(a,e.type);const o=new s,i=new n([]);this.dataSupportManager.extend(i),this.compilerManager.extend(o),o.useEngine(this),i.addCompiler(o),e.extend&&e.extend(this),e.processors.forEach(a=>{}),e.expand&&this.processorExpands.push(...e.expand);for(const a of this.processorExpands)Array.isArray(a.processors)?Object.values(J).forEach(c=>{a.processors.includes(c.type)&&c.expand(a.command)}):Object.values(J).forEach(c=>{a.processors.test(c.type)&&c.expand(a.command)});return this.moduleLifeCycle.push({module:e.type,order:e.lifeOrder||0}),this.moduleTriggers.forEach(a=>{a.registerModule(e.type)}),this}}const ft=function(r,t={}){const e=new ke(t);return r.modules&&r.modules.forEach(n=>{e.registModule(n)}),r.plugins&&r.plugins.forEach(n=>{e.install(n)}),r.strategy&&r.strategy.forEach(n=>{e.exec(n)}),e},y=class{static generateConfig(t,e){if(!y.configLibrary.has(t))return console.warn(`event library can not found config by name: ${t}`),{name:""};const n=(o,i)=>{for(const a in i)o[a]!==void 0&&(typeof i[a]=="object"&&i[a]!==null&&!Array.isArray(i[a])?n(o[a],i[a]):o[a]=i[a])},s=JSON.parse(JSON.stringify(y.configLibrary.get(t)));return n(s,e),s}static generateScript(t,e,n,s){return y.generatorLibrary.has(s.name)?y.generatorLibrary.get(s.name)(t,e,n,s):(console.error(`event library can not found generator by name: ${s.name}`),()=>{})}static has(t){return y.configLibrary.has(t)}};let j=y;u(j,"configLibrary",new Map),u(j,"generatorLibrary",new Map),u(j,"register",function({config:t,generator:e}){return y.configLibrary.has(t.name)?(console.warn(`EventLibrary has already exist this event generator: ${t.name}, that will be cover.`),y):(y.configLibrary.set(t.name,JSON.parse(JSON.stringify(t))),y.generatorLibrary.set(t.name,e),y)});const h=class{static generateConfig(t,e){if(!h.configLibrary.has(t))return console.warn(`event library can not found config by name: ${t}`),null;const n=(o,i)=>{for(const a in i)typeof i[a]=="object"&&i[a]!==null&&!Array.isArray(i[a])?n(o[a],i[a]):o[a]=i[a]},s=JSON.parse(JSON.stringify(h.configLibrary.get(t)));return n(s,e),s}static generateEvent(t,e){return h.generatorLibrary.has(t.name)?h.generatorLibrary.get(t.name)(e,t):(console.error(`event library can not found generator by name: ${t.name}`),()=>{})}static has(t){return h.configLibrary.has(t)}static useEngine(t){h.engine=t}static createEvent(t,e,n){if(!h.engine&&!n)return console.error("EventGenerator Manager createEvent must provide an engine, you can use 'useEngine' to set it."),null;const s=h.generateConfig(t,e);return s?h.generateEvent(s,n||h.engine):null}};let E=h;u(E,"engine"),u(E,"configLibrary",new Map),u(E,"generatorLibrary",new Map),u(E,"register",function({config:t,generator:e}){return h.configLibrary.has(t.name)?(console.warn(`EventGeneratorManager has already exist this event generator: ${t.name}, that will be cover.`),h):(h.configLibrary.set(t.name,JSON.parse(JSON.stringify(t))),h.generatorLibrary.set(t.name,e),h)});const S=class{static getShader(t){return S.library.has(t)?S.cloneShader(S.library.get(t)):(console.warn(`con not found shader in shader library: ${t}`),null)}static generateConfig(t,e){if(!S.library.has(t))return console.warn(`con not found shader in shader library: ${t}`),{shader:t,uniforms:{}};const n=S.library.get(t),s={shader:t,uniforms:{}};if(n.uniforms&&(s.uniforms=JSON.parse(JSON.stringify(n.uniforms))),e){const o=(i,a)=>{for(const c in a)i[c]!==void 0&&(typeof a[c]=="object"&&a[c]!==null&&!Array.isArray(a[c])?(i[c]===null&&(i[c]={...a[c]}),o(i[c],a[c])):i[c]=a[c])};o(s.uniforms,e)}return s}static cloneShader(t){const e={name:t.name};return t.vertexShader&&(e.vertexShader=t.vertexShader),t.fragmentShader&&(e.fragmentShader=t.fragmentShader),t.uniforms&&(e.uniforms=JSON.parse(JSON.stringify(t.uniforms))),e}};let x=S;u(x,"library",new Map),u(x,"register",function(t){S.library.has(t.name)&&console.warn(`shader library has exist shader: ${t.name} that will be cover.`),S.library.set(t.name,t)});const pt=[k,T];l.AniScriptGeneratorManager=j,l.AntiShake=pe,l.Bus=_e,l.COMPILER_EVENT=ye,l.COMPILER_MANAGER_PLUGIN=k,l.COMPILER_SUPPORT_STRATEGY=Be,l.CONFIGFACTORY=b,l.CONFIGMODULE=X,l.CONFIGTYPE=U,l.Compiler=rt,l.CompilerFactory=me,l.CompilerManager=De,l.CompilerManagerPlugin=je,l.CompilerSupportStrategy=Ge,l.DATA_SUPPORT_MANAGER_PLUGIN=T,l.DataContainer=Oe,l.DataSupport=Ee,l.DataSupportFactory=we,l.DataSupportManager=Ne,l.DataSupportManagerPlugin=Pe,l.DefaultParser=q,l.EngineSupport=ke,l.EventGeneratorManager=E,l.JSONHandler=Xe,l.LOADER_DATA_SUPPORT_STRATEGY=Te,l.LOADER_MAPPING_STRATEGY=Ue,l.LoaderDataSupportStrategy=xe,l.LoaderMappingStrategy=Je,l.MODULETYPE=z,l.ModuleTrigger=he,l.OBJECTMODULE=P,l.ObjectModuleTrigger=de,l.PLUGINS=pt,l.Parser=Re,l.Processor=Ae,l.ProcessorMembers=J,l.RESOURCE_EVENT=V,l.RESOURCE_MANAGER_PLUGIN=re,l.ResourceManager=Le,l.ResourceManagerPlugin=$e,l.Rule=at,l.SUPPORT_LIFE_CYCLE=Ie,l.ShaderGeneratorManager=x,l.Template=Ke,l.Translater=ve,l.createSymbol=et,l.defineEngineSupport=ft,l.defineOption=We,l.defineProcessor=it,l.emptyHandler=ut,l.generateConfig=g,l.getModule=B,l.getObserver=R,l.getSymbolConfig=ct,l.globalAntiShake=Qe,l.globalObjectModuleTrigger=ge,l.globalOption=d,l.installProcessor=Z,l.isObjectModule=se,l.isObjectType=oe,l.observable=Ce,l.slientUpdate=tt,l.uniqueSymbol=lt,Object.keys(O).forEach(function(r){r!=="default"&&!l.hasOwnProperty(r)&&Object.defineProperty(l,r,{enumerable:!0,get:function(){return O[r]}})}),Object.keys(H).forEach(function(r){r!=="default"&&!l.hasOwnProperty(r)&&Object.defineProperty(l,r,{enumerable:!0,get:function(){return H[r]}})}),Object.keys(W).forEach(function(r){r!=="default"&&!l.hasOwnProperty(r)&&Object.defineProperty(l,r,{enumerable:!0,get:function(){return W[r]}})}),Object.keys(F).forEach(function(r){r!=="default"&&!l.hasOwnProperty(r)&&Object.defineProperty(l,r,{enumerable:!0,get:function(){return F[r]}})}),Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});