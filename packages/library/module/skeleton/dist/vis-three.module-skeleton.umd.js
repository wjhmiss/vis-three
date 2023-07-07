(function(n,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("@vis-three/middleware"),require("uuid"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/middleware","uuid","three"],o):(n=typeof globalThis!="undefined"?globalThis:n||self,o((n["vis-three"]=n["vis-three"]||{},n["vis-three"]["module-skeleton"]={}),n.middleware,n.uuid,n.three))})(this,function(n,o,d,f){"use strict";class r extends o.Compiler{constructor(){super()}}const p=function(e,s,t=d.validate){o.Rule(e,s,t)},u=function(){return Object.assign(o.getSymbolConfig(),{bones:[]})};var b=o.defineProcessor({type:"Skeleton",config:u,commands:{add:{bones({target:e,value:s,engine:t}){const i=t.getObjectBySymbol(s);i?(e.bones.push(i),e.boneInverses=[],e.init()):console.warn(`skeleton processor can not found bone in engine: ${s}`)}},set:{},delete:{bones({target:e,value:s,engine:t}){e.bones.splice(s,1),e.boneInverses=[],e.init()}}},create(e,s){const t=[];e.bones.forEach(c=>{const l=s.getObjectBySymbol(c);l?t.push(l):console.warn(`skeleton processor can not found bone in engine: ${c}`)});const i=new f.Skeleton(t);return o.globalAntiShake.append(()=>(i.calculateInverses(),!0)),i},dispose(e){e.bones=[],e.boneInverses=[],e.dispose()}}),h={type:"skeleton",compiler:r,rule:p,processors:[b],lifeOrder:o.SUPPORT_LIFE_CYCLE.THREE-1};n.SkeletonCompiler=r,n.default=h,n.getSkeletonConfig=u,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
