import{n as s}from"./index.1f24cd40.js";import{a as t,b as n}from"./index.4d1bf992.js";import{t as a}from"./index.4a26448f.js";import{a as o}from"./index.e09ad1cd.js";const c="@vis-three/css2d-render-strategy",d=a(c),v=function(){let r;return{name:d,condition:[s,t],exec(e){r=()=>{e.css2DRenderer.render(e.scene,e.camera)},e.renderManager.addEventListener(n.RENDER,r)},rollback(e){e.renderManager.removeEventListener(n.RENDER,r)}}},E="@vis-three/css3d-render-strategy",R=a(E),S=function(){let r;return{name:R,condition:[o,t],exec(e){r=()=>{e.css3DRenderer.render(e.scene,e.camera)},e.renderManager.addEventListener(n.RENDER,r)},rollback(e){e.renderManager.removeEventListener(n.RENDER,r)}}};export{v as C,S as a};