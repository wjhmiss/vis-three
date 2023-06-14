import{_ as e,o as a,c as t,O as r}from"./chunks/framework.a8fb2c59.js";const b=JSON.parse('{"title":"Class: CanvasGenerator","description":"","frontmatter":{},"headers":[],"relativePath":"api/convenient/classes/canvasGenerator.CanvasGenerator.md","filePath":"api/convenient/classes/canvasGenerator.CanvasGenerator.md"}'),n={name:"api/convenient/classes/canvasGenerator.CanvasGenerator.md"},o=r('<h1 id="class-canvasgenerator" tabindex="-1">Class: CanvasGenerator <a class="header-anchor" href="#class-canvasgenerator" aria-label="Permalink to &quot;Class: CanvasGenerator&quot;">​</a></h1><p><a href="./../modules/canvasGenerator.html">canvasGenerator</a>.CanvasGenerator</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new CanvasGenerator</strong>(<code>parameters?</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parameters?</code></td><td style="text-align:left;"><a href="./../interfaces/canvasGenerator.CanvasGeneratorParameters.html"><code>CanvasGeneratorParameters</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/canvasGenerator/index.ts#L18" target="_blank" rel="noreferrer">canvasGenerator/index.ts:18</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="canvas" tabindex="-1">canvas <a class="header-anchor" href="#canvas" aria-label="Permalink to &quot;canvas&quot;">​</a></h3><p>• <strong>canvas</strong>: <code>HTMLCanvasElement</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/canvasGenerator/index.ts#L16" target="_blank" rel="noreferrer">canvasGenerator/index.ts:16</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><p>▸ <strong>clear</strong>(<code>x?</code>, <code>y?</code>, <code>width?</code>, <code>height?</code>): <a href="./canvasGenerator.CanvasGenerator.html"><code>CanvasGenerator</code></a></p><p>清空画布</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>x</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">position x px</td></tr><tr><td style="text-align:left;"><code>y</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">position z px</td></tr><tr><td style="text-align:left;"><code>width?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">width px</td></tr><tr><td style="text-align:left;"><code>height?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">height px</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./canvasGenerator.CanvasGenerator.html"><code>CanvasGenerator</code></a></p><p>this</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/canvasGenerator/index.ts#L53" target="_blank" rel="noreferrer">canvasGenerator/index.ts:53</a></p><hr><h3 id="draw" tabindex="-1">draw <a class="header-anchor" href="#draw" aria-label="Permalink to &quot;draw&quot;">​</a></h3><p>▸ <strong>draw</strong>(<code>fun</code>): <a href="./canvasGenerator.CanvasGenerator.html"><code>CanvasGenerator</code></a></p><p>canvas绘制</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fun</code></td><td style="text-align:left;">(<code>ctx</code>: <code>CanvasRenderingContext2D</code>) =&gt; <code>void</code></td><td style="text-align:left;">callback(ctx)</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./canvasGenerator.CanvasGenerator.html"><code>CanvasGenerator</code></a></p><p>this</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/canvasGenerator/index.ts#L72" target="_blank" rel="noreferrer">canvasGenerator/index.ts:72</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><p>▸ <strong>get</strong>(): <code>HTMLCanvasElement</code></p><p><strong><code>Deprecated</code></strong></p><p>use getDom</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>HTMLCanvasElement</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/canvasGenerator/index.ts#L33" target="_blank" rel="noreferrer">canvasGenerator/index.ts:33</a></p><hr><h3 id="getdom" tabindex="-1">getDom <a class="header-anchor" href="#getdom" aria-label="Permalink to &quot;getDom&quot;">​</a></h3><p>▸ <strong>getDom</strong>(): <code>HTMLCanvasElement</code></p><p>获取canvas dom</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>HTMLCanvasElement</code></p><p>HTMLCanvasElement</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/canvasGenerator/index.ts#L41" target="_blank" rel="noreferrer">canvasGenerator/index.ts:41</a></p><hr><h3 id="preview" tabindex="-1">preview <a class="header-anchor" href="#preview" aria-label="Permalink to &quot;preview&quot;">​</a></h3><p>▸ <strong>preview</strong>(<code>parameters?</code>): <a href="./canvasGenerator.CanvasGenerator.html"><code>CanvasGenerator</code></a></p><p>canvas预览</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parameters?</code></td><td style="text-align:left;"><code>PreviewParameters</code></td><td style="text-align:left;">style position</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./canvasGenerator.CanvasGenerator.html"><code>CanvasGenerator</code></a></p><p>this</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/canvasGenerator/index.ts#L89" target="_blank" rel="noreferrer">canvasGenerator/index.ts:89</a></p>',65),s=[o];function d(i,l,c,h,f,p){return a(),t("div",null,s)}const m=e(n,[["render",d]]);export{b as __pageData,m as default};
