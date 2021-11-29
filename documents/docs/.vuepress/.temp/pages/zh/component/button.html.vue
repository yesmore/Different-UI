<template><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<p>按钮组件</p>
<h2 id="基础按钮" tabindex="-1"><a class="header-anchor" href="#基础按钮" aria-hidden="true">#</a> 基础按钮</h2>
<p>可以通过 <code>color</code>、<code>size</code>、<code>radius</code>、<code>round</code>、<code>plain</code>、<code>disabled</code> 来控制 <code>&lt;df-button&gt;</code> 基本样式。下面是所有属性及其可选值。</p>
<h3 id="color-颜色" tabindex="-1"><a class="header-anchor" href="#color-颜色" aria-hidden="true">#</a> color 颜色</h3>
<p>通过 <code>color</code> 属性来设置按钮大小，默认值为 <code>default</code>/<code>primary</code></p>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary'>primary</df-button>
    <df-button color='success'>success</df-button>
    <df-button color='warning'>warning</df-button>
    <df-button color='danger'>danger</df-button>
    <df-button color='error'>error</df-button>
    <df-button color='info'>info</df-button>
    <df-button color='black'>black</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>black<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details>
</template>
</df-template>
<h3 id="size-尺寸" tabindex="-1"><a class="header-anchor" href="#size-尺寸" aria-hidden="true">#</a> size 尺寸</h3>
<p>通过 <code>size</code> 属性来设置按钮大小，默认值为 <code>default</code>/<code>middle</code></p>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' size="mini">mini</df-button>
    <df-button color='success' size="small">small</df-button>
    <df-button color='warning' size="middle">middle</df-button>
    <df-button color='danger' size='large'>large</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mini<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>middle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
</template>
</df-template>
<h3 id="radius-圆角" tabindex="-1"><a class="header-anchor" href="#radius-圆角" aria-hidden="true">#</a> radius 圆角</h3>
<p>通过 <code>radius</code> 属性来设置按钮圆角半径，默认值为 <code>default</code>/<code>middle</code></p>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' radius="mini">mini</df-button>
    <df-button color='success' radius="small">small</df-button>
    <df-button color='warning' radius="middle">middle</df-button>
    <df-button color='danger' radius='large'>large</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mini<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>middle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
</template>
</df-template>
<h3 id="round-圆形" tabindex="-1"><a class="header-anchor" href="#round-圆形" aria-hidden="true">#</a> round 圆形</h3>
<p>通过 <code>round</code> 属性来设置按钮是否为圆形，默认值为 <code>false</code>.</p>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' size='mini' :round="true">i</df-button>
    <df-button color='success' size='small' :round="true">i</df-button>
    <df-button color='warning' size='middle' :round="true">i</df-button>
    <df-button color='danger' size='large' :round="true">i</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">:round</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>i<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">:round</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>i<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span> <span class="token attr-name">:round</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>i<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">:round</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>i<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
</template>
</df-template>
<h3 id="plain-扁平" tabindex="-1"><a class="header-anchor" href="#plain-扁平" aria-hidden="true">#</a> plain 扁平</h3>
<p>通过 <code>plain</code> 属性来设置按钮是扁平效果，默认值为 <code>false</code>.</p>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' :plain="true">plain</df-button>
    <df-button color='success' :plain="true">plain</df-button>
    <df-button color='warning' :plain="true">plain</df-button>
    <df-button color='danger' :plain="true">plain</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>plain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>plain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>plain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">:plain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>plain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
</template>
</df-template>
<h3 id="disabled-禁用" tabindex="-1"><a class="header-anchor" href="#disabled-禁用" aria-hidden="true">#</a> disabled 禁用</h3>
<p>通过 <code>disabled</code> 属性来设置按钮是否禁用.</p>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' disabled>primary</df-button>
    <df-button color='success' disabled>success</df-button>
    <df-button color='warning' disabled>warning</df-button>
    <df-button color='danger' disabled>danger</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
</template>
</df-template>
<h2 id="进阶按钮" tabindex="-1"><a class="header-anchor" href="#进阶按钮" aria-hidden="true">#</a> 进阶按钮</h2>
<p>df-button 提供了 <code>type</code> 属性来设置按钮不同样式类型，其中，默认样式为 <code>default</code>/<code>simple</code>。下面是 <code>type</code> 的可选值示例。</p>
<h3 id="concave-凹陷" tabindex="-1"><a class="header-anchor" href="#concave-凹陷" aria-hidden="true">#</a> concave 凹陷</h3>
<ul>
<li><code>type='concave'</code></li>
<li>当你鼠标点击时，会产生凹陷效果。</li>
</ul>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='concave'>primary</df-button>
    <df-button color='success' type='concave'>success</df-button>
    <df-button color="warning" type='concave'>warning</df-button>
    <df-button color="danger" type='concave'>danger</df-button>
    <df-button color="error" type='concave'>error</df-button>
    <df-button color="info" type='concave'>info</df-button>
    <df-button color="black" type='concave'>black</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>concave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>concave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>concave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>concave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>concave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>concave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>concave<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>black<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details>
</template>
</df-template>
<h3 id="bling-闪烁" tabindex="-1"><a class="header-anchor" href="#bling-闪烁" aria-hidden="true">#</a> bling 闪烁</h3>
<ul>
<li><code>type='bling'</code></li>
<li>闪动效果。</li>
</ul>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='bling'>primary</df-button>
    <df-button color='success' type='bling'>success</df-button>
    <df-button color="warning" type='bling'>warning</df-button>
    <df-button color="danger" type='bling'>danger</df-button>
    <df-button color="error" type='bling'>error</df-button>
    <df-button color="info" type='bling'>info</df-button>
    <df-button color="black" type='bling'>black</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bling<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bling<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bling<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bling<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bling<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bling<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bling<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>black<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details>
</template>
</df-template>
<h3 id="transx-边框绘制-x" tabindex="-1"><a class="header-anchor" href="#transx-边框绘制-x" aria-hidden="true">#</a> transx 边框绘制 x</h3>
<ul>
<li><code>type='transx-[color]'</code></li>
<li>边框动态绘制效果。</li>
</ul>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='transx-primary'>primary</df-button>
    <df-button color='success' type='transx-success'>success</df-button>
    <df-button color="warning" type='transx-warning'>warning</df-button>
    <df-button color="danger" type='transx-danger'>danger</df-button>
    <df-button color="error" type='transx-error'>error</df-button>
    <df-button color="info" type='transx-info'>info</df-button>
    <df-button color="black" type='transx-black'>black</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transx-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transx-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transx-warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transx-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transx-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transx-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transx-black<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>black<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details>
</template>
</df-template>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>type='transx-[color]'</code>中的 [color] 为边框颜色，可与 <code>color</code> 属性同时使用。</p>
</div>
<h3 id="transy-边框绘制-y" tabindex="-1"><a class="header-anchor" href="#transy-边框绘制-y" aria-hidden="true">#</a> transy 边框绘制 y</h3>
<ul>
<li><code>type='transy-[color]'</code></li>
<li>边框动态绘制(一半)效果。</li>
</ul>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button color='primary' type='transy-primary'>primary</df-button>
    <df-button color='success' type='transy-success'>success</df-button>
    <df-button color="warning" type='transy-warning'>warning</df-button>
    <df-button color="danger" type='transy-danger'>danger</df-button>
    <df-button color="error" type='transy-error'>error</df-button>
    <df-button color="info" type='transy-info'>info</df-button>
    <df-button color="black" type='transy-black'>black</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transy-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transy-success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transy-warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transy-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transy-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transy-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transy-black<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>black<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details>
</template>
</df-template>
<h3 id="curtain-幕布" tabindex="-1"><a class="header-anchor" href="#curtain-幕布" aria-hidden="true">#</a> curtain 幕布</h3>
<ul>
<li><code>type='curtain-[dirction]-[color]'</code></li>
<li>幕布效果。</li>
</ul>
<blockquote>
<p>[color] 为幕布颜色，若<code>color</code>属性与[color]相同，幕布应为透明效果，两者可随意搭配不同颜色组合。</p>
</blockquote>
<p><strong>示例如下</strong>：</p>
<df-template>
<template #demo>
  <div
    class="btn-container"
    style='display:flex;justify-content:center;flex-wrap:wrap;'
  >
    <df-button type='curtain-up-primary'>curtain-up-primary</df-button>
    <df-button color="success" type='curtain-down-success'>curtain-down-success</df-button>
    <df-button color="warning" type='curtain-left-warning'>curtain-left-warning</df-button>
    <df-button color="info" type='curtain-right-danger'>curtain-right-danger</df-button>
    <df-button color="primary" type='curtain-down-success'>curtain-down-success</df-button>
    <df-button color="error" type='curtain-up-primary'>curtain-up-primary</df-button>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>curtain-up-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>curtain-up-primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>curtain-down-success<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>curtain-down-success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>curtain-left-warning<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>curtain-left-warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>curtain-right-danger<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>curtain-right-danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>curtain-down-success<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>curtain-down-success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>curtain-up-primary<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>curtain-up-primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span>
    <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details>
</template>
</df-template>
</template>
