(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("@vis-three/middleware"),require("@vis-three/module-object"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/middleware","@vis-three/module-object","three"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t((e["vis-three"]=e["vis-three"]||{},e["vis-three"]["module-object3d"]={}),e.middleware,e.moduleObject,e.three))})(this,function(e,t,r,n){"use strict";class s extends r.ObjectCompiler{constructor(){super()}}const c=function(){return Object.assign(r.getObjectConfig(),{})};var u=t.defineProcessor({type:"Object3D",config:c,commands:r.objectCommands,create(i,o){return r.objectCreate(new n.Object3D,i,{},o)},dispose:r.objectDispose}),d={type:"object3D",object:!0,compiler:s,rule:function(i,o){r.ObjectRule(i,o)},processors:[u],lifeOrder:t.SUPPORT_LIFE_CYCLE.THREE};e.Object3DCompiler=s,e.default=d,e.getObject3DConfig=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});