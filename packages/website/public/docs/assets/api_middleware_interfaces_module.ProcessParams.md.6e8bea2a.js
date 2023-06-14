import{_ as e,o as a,c as r,O as t}from"./chunks/framework.a8fb2c59.js";const u=JSON.parse('{"title":"Interface: ProcessParams<S, T, E, C>","description":"","frontmatter":{},"headers":[],"relativePath":"api/middleware/interfaces/module.ProcessParams.md","filePath":"api/middleware/interfaces/module.ProcessParams.md"}'),o={name:"api/middleware/interfaces/module.ProcessParams.md"},i=t('<h1 id="interface-processparams-s-t-e-c" tabindex="-1">Interface: ProcessParams&lt;S, T, E, C&gt; <a class="header-anchor" href="#interface-processparams-s-t-e-c" aria-label="Permalink to &quot;Interface: ProcessParams&lt;S, T, E, C\\&gt;&quot;">​</a></h1><p><a href="./../modules/module.html">module</a>.ProcessParams</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>object</code></td></tr><tr><td style="text-align:left;"><code>E</code></td><td style="text-align:left;">extends <a href="./../classes/engine.EngineSupport.html"><code>EngineSupport</code></a></td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../classes/module.Compiler.html"><code>Compiler</code></a>&lt;<code>any</code>, <code>any</code>&gt;</td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./../modules/module.html#compilenotice"><code>CompileNotice</code></a></p><p>↳ <strong><code>ProcessParams</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="compiler" tabindex="-1">compiler <a class="header-anchor" href="#compiler" aria-label="Permalink to &quot;compiler&quot;">​</a></h3><p>• <strong>compiler</strong>: <code>C</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:21</p><hr><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><p>• <strong>config</strong>: <code>S</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:19</p><hr><h3 id="engine" tabindex="-1">engine <a class="header-anchor" href="#engine" aria-label="Permalink to &quot;engine&quot;">​</a></h3><p>• <strong>engine</strong>: <code>E</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:22</p><hr><h3 id="key" tabindex="-1">key <a class="header-anchor" href="#key" aria-label="Permalink to &quot;key&quot;">​</a></h3><p>• <strong>key</strong>: <code>string</code></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>CompileNotice.key</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/dataContainer/index.ts#L11" target="_blank" rel="noreferrer">packages/middleware/module/dataContainer/index.ts:11</a></p><hr><h3 id="operate" tabindex="-1">operate <a class="header-anchor" href="#operate" aria-label="Permalink to &quot;operate&quot;">​</a></h3><p>• <strong>operate</strong>: <code>&quot;set&quot;</code> | <code>&quot;add&quot;</code> | <code>&quot;delete&quot;</code></p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>CompileNotice.operate</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/dataContainer/index.ts#L9" target="_blank" rel="noreferrer">packages/middleware/module/dataContainer/index.ts:9</a></p><hr><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>• <strong>path</strong>: <code>string</code>[]</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>CompileNotice.path</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/compiler/index.ts#L14" target="_blank" rel="noreferrer">packages/middleware/module/compiler/index.ts:14</a></p><hr><h3 id="processor" tabindex="-1">processor <a class="header-anchor" href="#processor" aria-label="Permalink to &quot;processor&quot;">​</a></h3><p>• <strong>processor</strong>: <a href="./../classes/module.Processor.html"><code>Processor</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:23</p><hr><h3 id="target" tabindex="-1">target <a class="header-anchor" href="#target" aria-label="Permalink to &quot;target&quot;">​</a></h3><p>• <strong>target</strong>: <code>T</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:20</p><hr><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><p>• <strong>value</strong>: <code>any</code></p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>CompileNotice.value</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/middleware/module/dataContainer/index.ts#L12" target="_blank" rel="noreferrer">packages/middleware/module/dataContainer/index.ts:12</a></p>',59),d=[i];function n(l,s,h,c,p,m){return a(),r("div",null,d)}const g=e(o,[["render",n]]);export{u as __pageData,g as default};
