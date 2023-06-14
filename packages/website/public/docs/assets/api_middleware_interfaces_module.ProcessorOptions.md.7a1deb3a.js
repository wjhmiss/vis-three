import{_ as e,o as t,c as a,O as o}from"./chunks/framework.a8fb2c59.js";const u=JSON.parse('{"title":"Interface: ProcessorOptions<S, T, E, C>","description":"","frontmatter":{},"headers":[],"relativePath":"api/middleware/interfaces/module.ProcessorOptions.md","filePath":"api/middleware/interfaces/module.ProcessorOptions.md"}'),d={name:"api/middleware/interfaces/module.ProcessorOptions.md"},r=o('<h1 id="interface-processoroptions-s-t-e-c" tabindex="-1">Interface: ProcessorOptions&lt;S, T, E, C&gt; <a class="header-anchor" href="#interface-processoroptions-s-t-e-c" aria-label="Permalink to &quot;Interface: ProcessorOptions&lt;S, T, E, C\\&gt;&quot;">​</a></h1><p><a href="./../modules/module.html">module</a>.ProcessorOptions</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./module.SymbolConfig.html"><code>SymbolConfig</code></a></td></tr><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>object</code></td></tr><tr><td style="text-align:left;"><code>E</code></td><td style="text-align:left;">extends <a href="./../classes/engine.EngineSupport.html"><code>EngineSupport</code></a></td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <a href="./../classes/module.Compiler.html"><code>Compiler</code></a>&lt;<code>S</code>, <code>T</code>&gt;</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;commands&quot;">​</a></h3><p>• <code>Optional</code> <strong>commands</strong>: <a href="./module.ProcessorCommands.html"><code>ProcessorCommands</code></a>&lt;<code>S</code>, <code>T</code>, <code>E</code>, <code>C</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:74</p><hr><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><p>• <strong>config</strong>: () =&gt; <code>S</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (): <code>S</code></p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>S</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:73</p><hr><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h3><p>• <strong>create</strong>: (<code>config</code>: <code>S</code>, <code>engine</code>: <code>E</code>, <code>compiler</code>: <code>C</code>) =&gt; <code>T</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>config</code>, <code>engine</code>, <code>compiler</code>): <code>T</code></p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>S</code></td></tr><tr><td style="text-align:left;"><code>engine</code></td><td style="text-align:left;"><code>E</code></td></tr><tr><td style="text-align:left;"><code>compiler</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>T</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:75</p><hr><h3 id="dispose" tabindex="-1">dispose <a class="header-anchor" href="#dispose" aria-label="Permalink to &quot;dispose&quot;">​</a></h3><p>• <strong>dispose</strong>: (<code>target</code>: <code>T</code>, <code>engine</code>: <code>E</code>, <code>compiler</code>: <code>C</code>) =&gt; <code>void</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>target</code>, <code>engine</code>, <code>compiler</code>): <code>void</code></p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>engine</code></td><td style="text-align:left;"><code>E</code></td></tr><tr><td style="text-align:left;"><code>compiler</code></td><td style="text-align:left;"><code>C</code></td></tr></tbody></table><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:76</p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>• <strong>type</strong>: <code>string</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>packages/middleware/module/Processor/index.ts:72</p>',45),i=[r];function n(c,l,s,h,p,f){return t(),a("div",null,i)}const g=e(d,[["render",n]]);export{u as __pageData,g as default};
