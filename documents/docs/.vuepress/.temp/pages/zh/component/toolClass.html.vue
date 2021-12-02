<template><h1 id="toolclass-工具类" tabindex="-1"><a class="header-anchor" href="#toolclass-工具类" aria-hidden="true">#</a> ToolClass 工具类</h1>
<p><code>Different</code> 在 <RouterLink to="/zh/component/layout.html">layout</RouterLink>（栅格布局）基础上，添加了一些工具类，它们提供了<strong>细节</strong>上布局所需的样式。</p>
<p>所有工具类通过在你的任意 <code>HTML</code> 标签的 <code>class</code> 属性中使用。</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p>你不需要额外引入资源，内部加载的 index.css 文件中已经依赖了 ToolClass，直接在 <code>HTML</code> 标签中使用即可。</p>
<h3 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h3>
<p>ToolClass 提供了默认颜色类来定义你的文本颜色已及背景颜色。</p>
<ul>
<li><code>class='df-text-primary'</code></li>
<li><code>class='df-bg-primary'</code></li>
</ul>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="container">
    <ul>
      <li class='df-text-primary'>primary</li>
      <li class='df-text-success'>success</li>
      <li class='df-text-warning'>warning</li>
      <li class='df-text-danger'>danger</li>
      <li class='df-text-error'>error</li>
      <li class='df-text-info'>info</li>
      <li class='df-text-black'>black</li>
      <li class='df-text-white'>white</li>
    </ul>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-black<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>black<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>white<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
</template>
</df-template>
<df-template>
<template #demo>
  <div class="container df-text-center">
    <ul style='list-style:none;padding:0'>
      <li class='df-bg-primary df-text-white'>primary</li>
      <li class='df-bg-success df-text-white'>success</li>
      <li class='df-bg-warning df-text-white'>warning</li>
      <li class='df-bg-danger df-text-white'>danger</li>
      <li class='df-bg-error df-text-white'>error</li>
      <li class='df-bg-info df-text-white'>info</li>
      <li class='df-bg-black df-text-white'>black</li>
      <li class='df-bg-white df-text-white'>white</li>
    </ul>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-primary df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-success df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-warning df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-danger df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-error df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-info df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-black df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>black<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-bg-white df-text-white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>white<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
</template>
</df-template>
<h3 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h3>
<p>ToolClass 提供了 <code>font-size</code> 类来定义你的字体大小。</p>
<ul>
<li><code>class='df-fs-xl'</code></li>
</ul>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="container">
    <ul>
      <li class='df-fs-xs'>xs - 12px</li>
      <li class='df-fs-sm'>sm - 13px</li>
      <li class='df-fs-base'>base - 14px</li>
      <li class='df-fs-md'>md - 16px</li>
      <li class='df-fs-lg'>lg - 18px</li>
      <li class='df-fs-xl'>xl - 20px</li>
    </ul>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-xs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xs - 12px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sm - 13px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-base<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>base - 14px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>md - 16px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lg - 18px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xl - 20px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
</template>
</df-template>
<h3 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h3>
<p>ToolClass 提供了 <code>text-align</code> 类来布局元素中的文本的水平对齐方式。</p>
<ul>
<li><code>class='df-text-left'</code></li>
</ul>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="container">
    <ul style='list-style:none;padding:0'>
      <li class='df-text-left'>left</li>
      <li class='df-text-center'>center</li>
      <li class='df-text-right'>right</li>
    </ul>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-xs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xs - 12px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sm - 13px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-base<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>base - 14px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>md - 16px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lg - 18px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-fs-xl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>xl - 20px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
</template>
</df-template>
<h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3>
<p>ToolClass 提供了 <code>margin</code>/<code>padding</code> 类来布局块级元素和行内元素。</p>
<ul>
<li><code>class='df-m-0'</code>，其源码如下：</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.df-m-0</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li><code>class='df-mx-1'</code>，表示上下边距为 0.25rem 单位距离</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.df-mx-1</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>ToolClass 所有布局类如下：</p>
<table>
<thead>
<tr>
<th>类名</th>
<th>CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td>df-m-[x]</td>
<td>margin: x;</td>
</tr>
<tr>
<td>df-mx-[x]</td>
<td>margin-left: x; margin-right: x;</td>
</tr>
<tr>
<td>df-my-[x]</td>
<td>margin-top: x; margin-bottom: x;</td>
</tr>
<tr>
<td>df-mt-[x]</td>
<td>margin-top: x;</td>
</tr>
<tr>
<td>df-mb-[x]</td>
<td>margin-bottom: x;</td>
</tr>
<tr>
<td>df-ml-[x]</td>
<td>margin-left: x;</td>
</tr>
<tr>
<td>df-mr-[x]</td>
<td>margin-right: x;</td>
</tr>
<tr>
<td>df-p-[x]</td>
<td>padding: x;</td>
</tr>
<tr>
<td>df-px-[x]</td>
<td>padding-left: x; padding-right: x;</td>
</tr>
<tr>
<td>df-py-[x]</td>
<td>padding-top: x; padding-bottom: x;</td>
</tr>
<tr>
<td>df-pt-[x]</td>
<td>padding-top: x;</td>
</tr>
<tr>
<td>df-pb-[x]</td>
<td>padding-bottom: x;</td>
</tr>
<tr>
<td>df-pl-[x]</td>
<td>padding-left: x;</td>
</tr>
<tr>
<td>df-pr-[x]</td>
<td>padding-right: x;</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>ToolClass 中的每个类型均提供了 <strong>6</strong> 个等级的距离（上表中的<code>[x]</code>），例如 <code>.df-m-0</code> <code>.df-m-1</code> <code>.df-m-2</code> <code>.df-m-3</code> <code>.df-m-4</code> <code>.df-m-5</code>，其边距值对应如下：</p>
<ul>
<li>0 - 0</li>
<li>1 - 0.25rem</li>
<li>2 - 0.5rem</li>
<li>3 - 1rem</li>
<li>4 - 1.5rem</li>
<li>5 - 3rem</li>
</ul>
</div>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="container">
    <div>
      <div class='df-m-0 df-bg-primary'>margin-0</div>
      <div class='df-m-1 df-bg-primary'>margin-1</div>
      <div class='df-m-2 df-bg-primary'>margin-2</div>
      <div class='df-m-3 df-bg-primary'>margin-3</div>
      <div class='df-m-4 df-bg-primary'>margin-4</div>
    </div>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-m-0 df-bg-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-m-1 df-bg-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-m-2 df-bg-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-m-3 df-bg-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-m-4 df-bg-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details>
</template>
</df-template>
<df-template>
<template #demo>
  <div class="container">
    <div>
      <div class="df-mt-0 df-bg-success">margin-top-0</div>
      <div class="df-mt-1 df-bg-success">margin-top-1</div>
      <div class="df-mt-2 df-bg-success">margin-top-2</div>
      <div class="df-mt-3 df-bg-success">margin-top-3</div>
      <div class="df-mt-4 df-bg-success">margin-top-4</div>
    </div>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-0 df-bg-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-top-0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-1 df-bg-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-top-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-2 df-bg-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-top-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-3 df-bg-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-top-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-4 df-bg-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>margin-top-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details>
</template>
</df-template>
<df-template>
<template #demo>
  <div class="container">
    <div>
      <div class="df-mt-0 df-p-0 df-bg-error">padding-0</div>
      <div class="df-mt-1 df-p-1 df-bg-error">padding-1</div>
      <div class="df-mt-2 df-p-2 df-bg-error">padding-2</div>
      <div class="df-mt-3 df-p-3 df-bg-error">padding-3</div>
      <div class="df-mt-4 df-p-4 df-bg-error">padding-4</div>
    </div>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-0 df-p-0 df-bg-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>padding-0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-1 df-p-1 df-bg-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>padding-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-2 df-p-2 df-bg-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>padding-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-3 df-p-3 df-bg-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>padding-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-mt-4 df-p-4 df-bg-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>padding-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details>
</template>
</df-template>
<h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h3>
<p>ToolClass 提供了 <code>.df-radius-[size]</code> 类来设置边框圆角；<code>.df-shadow-[size]</code>来设置边框阴影。</p>
<ul>
<li><code>class='df-radius-base'</code></li>
<li><code>class='df-shadow-base'</code></li>
</ul>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="container">
    <div class='df-radius-base df-bg-primary '>radius-base</div>
    <div class='df-radius-small df-bg-primary df-mt-2'>radius-small</div>
    <div class='df-radius-round df-bg-primary df-mt-2'>radius-round</div>
    <div class='df-radius-circle df-bg-primary df-mt-2' style='width:40px;height:40px'>circle</div>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-radius-base df-bg-primary <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>radius-base<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-radius-small df-bg-primary df-mt-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>radius-small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-radius-round df-bg-primary df-mt-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>radius-round<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-radius-circle df-bg-primary df-mt-2<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>40px</span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    circle
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
</template>
</df-template>
<df-template>
<template #demo>
  <div class="container">
    <div class='df-shadow-base df-bg-primary '>radius-base</div>
    <div class='df-shadow-light df-bg-primary df-mt-5'>radius-small</div>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-shadow-base df-bg-primary <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>shadow-base<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-shadow-light df-bg-primary df-mt-5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>shadow-small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details>
</template>
</df-template>
</template>
