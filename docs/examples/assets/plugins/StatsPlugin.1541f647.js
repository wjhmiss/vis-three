import{v as n}from"../index.4a26448f.js";import{R as i}from"../index.4d1bf992.js";import{S as o}from"../index.4ec4ab6a.js";import"../three.073ebd5b.js";const e=n({plugins:[i(),o({rmode:1,top:window.innerHeight/2,left:window.innerWidth/2})]}).setDom(document.getElementById("app"));e.setStats(!0);setInterval(()=>{e.stats.update()},1e3/60);let t=!0;document.getElementById("visible").onclick=()=>{t=!t,e.setStats(t)};