import{_ as s,c as n,o as a,d as l}from"./app.5e0e61e4.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置化开发","slug":"配置化开发","link":"#配置化开发","children":[{"level":3,"title":"更好的 UI 框架结合","slug":"更好的-ui-框架结合","link":"#更好的-ui-框架结合","children":[]},{"level":3,"title":"更轻松高效的开发过程","slug":"更轻松高效的开发过程","link":"#更轻松高效的开发过程","children":[]},{"level":3,"title":"“坑”已经填了","slug":"坑-已经填了","link":"#坑-已经填了","children":[]},{"level":3,"title":"安装配置化开发","slug":"安装配置化开发","link":"#安装配置化开发","children":[]},{"level":3,"title":"生成配置","slug":"生成配置","link":"#生成配置","children":[]},{"level":3,"title":"编辑配置","slug":"编辑配置","link":"#编辑配置","children":[]},{"level":3,"title":"保存配置","slug":"保存配置","link":"#保存配置","children":[]},{"level":3,"title":"应用配置","slug":"应用配置","link":"#应用配置","children":[]}]}],"relativePath":"start/middleware.md"}'),o={name:"start/middleware.md"},p=l(`<h2 id="配置化开发" tabindex="-1">配置化开发 <a class="header-anchor" href="#配置化开发" aria-hidden="true">#</a></h2><p><code>vis-three</code>为了降低开发复杂度，将<code>three.js</code>的种种功能和相关动作等转化为配置，通过提供一系列工具和能力，更便利的操作配置单，通过配置单去映射整个 3D 场景与 3D 场景功能交互，降低开发门槛，提高开发效率。</p><h3 id="更好的-ui-框架结合" tabindex="-1">更好的 UI 框架结合 <a class="header-anchor" href="#更好的-ui-框架结合" aria-hidden="true">#</a></h3><p>我们前端常用的框架，比如：<code>vue</code>， <code>react</code>， <code>angular</code>这类的 MVVM 框架，或者说是<code>jquery</code>，<code>layui</code>等等偏向于原生的框架，大家在使用的时候，大部分情况下其实都是作为前端 UI 框架进行使用。</p><p>而且大部分情况下，大部分开发的大部分时间，都是在为业务功能进行思考，对于 3D 实时渲染的特性了解较少。作者认为，3D 实时渲染和 UI 框架应该是两个平等的部分，特别是对于 3D 实时渲染为主的 web3D 项目，更应该将 UI 框架和 3D 渲染框架做很好的解耦，不然很容易造成性能问题，特别是对于 MVVM 类型的框架来讲，如果按照原本的 UI 开发模式去结合 3D 实时渲染功能，性能问题会十分堪忧。</p><p>但是这里就会遇到一个问题，高效的 UI 开发离不开当下热门的 MVVM 前端框架，但是要很好的保证 3D 实时渲染性能，或者说是网页运行的性能，这种情况下，开发 web3D 类型的项目，对于开发的能力要求会十分的高，而且在开发期对于开发的心智负担也会加重。</p><p><code>vis-three</code>通过场景配置化的特性，其中很重要的一部分，是将需要的 UI 逻辑和 3D 渲染层进行解耦，对于 UI 框架来说，3D 实时渲染的部分不再是 3D 框架所需要的东西，取而代之的是类似于<code>json</code>的配置单，UI 的所有操作都是在对一个简单的<code>json</code>配置单进行操作，也就是说大部分情况下，UI 框架将不再会操作 3D 实时渲染所需要用到的对象和属性，这样子就将 3D 部分和 UI 部分进行了很好的解耦，既保证了 UI 开发效率，又保证了 3D 实时渲染的性能，进而降低了开发难度，保证整个 web3D 项目的运行效率。</p><h3 id="更轻松高效的开发过程" tabindex="-1">更轻松高效的开发过程 <a class="header-anchor" href="#更轻松高效的开发过程" aria-hidden="true">#</a></h3><p>3D 场景配置化后，对于大部分 UI 交互开发为主的项目来说，开发者将不用再关注 3D 实时渲染原生的对象功能，只用关注配置的变化，配置单的变化就行。配置单对于开发者来讲，就是各种最简单的数据结构的数据组合，对配置的操作也就是最常见的<code>CRUD</code>，配置单就是 3D 场景的映射，对配置单的操作也就是对 3D 场景的操作，通过最简单的数据操作，影响改变整个 3D 渲染场景。</p><h3 id="坑-已经填了" tabindex="-1">“坑”已经填了 <a class="header-anchor" href="#坑-已经填了" aria-hidden="true">#</a></h3><p>如果大家经常开发<code>three.js</code>3D 项目，应该会发现<code>three.js</code>本身会遇到非常多的坑，包括但不限于各类功能控件的结合使用，运行期场景与场景重现的种种冲突和复现难度，这每一部分所遇到的问题，都需要花费大量的时间去做填补和兼容处理，<code>vis-three</code>的配置化过程中，已经将遇到的“坑”填好了，保证配置和配置对应的 3D 场景功能能够稳定运行。</p><h3 id="安装配置化开发" tabindex="-1">安装配置化开发 <a class="header-anchor" href="#安装配置化开发" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i @vis-three/middleware</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>配置化开发的核心部分在<code>@vis-three/middleware</code>这个包中。</p></div><h3 id="生成配置" tabindex="-1">生成配置 <a class="header-anchor" href="#生成配置" aria-hidden="true">#</a></h3><p>配置化开发的首要部分就是各种配置单的生成和配置单对应的对象功能。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DisplayEngineSupport</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/display-engine-support</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">generateConfig</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CONFIGTYPE</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/middleware</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> engine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DisplayEngineSupport</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDom</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> material </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MESHSTANDARDMATERIAL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(255, 0, 0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> geometry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BOXGEOMETRY</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mesh </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MESH</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vid</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">material</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> material</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vid</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SCENE</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [mesh</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vid]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">engine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyConfig</span><span style="color:#A6ACCD;">(material</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> geometry</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mesh</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> scene)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>配置化开发需要使用支持配置化的引擎，也就是继承<code>EngineSupport</code>的引擎。</li><li><code>generateConfig</code>是生成配置的统一 api。</li><li><code>CONFIGTYPE</code>中枚举了当下支持的所有物体配置单。</li></ul></div><h3 id="编辑配置" tabindex="-1">编辑配置 <a class="header-anchor" href="#编辑配置" aria-hidden="true">#</a></h3><p>通过<code>generateConfig</code>生成的配置，其实就是一个很简单的对象，我们只用操作这个对象的相关属性，就能够影响 3D 场景中对象做出相关的变化。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">mesh</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mesh</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="保存配置" tabindex="-1">保存配置 <a class="header-anchor" href="#保存配置" aria-hidden="true">#</a></h3><p>配置化开发的一大特点就是，只要有相关的配置的，在哪里都能够复现当前的场景，那么首要的部分就是配置单的保存。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> json </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> engine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toJSON</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 直接导出json配置单</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> jsObject </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> engine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exportConfig</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 导出干净的js对象</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>有很多的需求是在保存之前需要对配置单进行统一的操作，可以直接操作<code>jsObject</code>对象，<code>exportConfig</code>导出的 js 对象是深拷贝对象，不会影响运行期的配置。</p></div><h3 id="应用配置" tabindex="-1">应用配置 <a class="header-anchor" href="#应用配置" aria-hidden="true">#</a></h3><p>如何通过配置单还原整个场景？我们只用调用一个<code>api</code>就能搞定！</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> jsonConfig </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jsonConfig.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSONHanlder</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/middleware</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSONHanlder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clone</span><span style="color:#A6ACCD;">(jsonConfig)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">engine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadConfig</span><span style="color:#A6ACCD;">(config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">engine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadConfigAsync</span><span style="color:#A6ACCD;">(config)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在应用配置单之前，我们需要通过<code>JSONHanlder</code>处理一次，因为比如<code>Infinity</code>, <code>-Infinity</code>等的数字对象在普通的<code>json</code>化过程中会丢失，所以需要特殊处理。</p></div>`,29),e=[p];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
