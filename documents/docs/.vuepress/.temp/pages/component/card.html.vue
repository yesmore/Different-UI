<template><h1 id="card-卡片" tabindex="-1"><a class="header-anchor" href="#card-卡片" aria-hidden="true">#</a> Card 卡片</h1>
<p><code>&lt;df-card&gt;</code> 组件为行内组件是带遮罩的图文展示卡片。</p>
<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2>
<p>必填参数：</p>
<ul>
<li><code>coverUrl</code>：封面图片。</li>
</ul>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="card-container">
    <df-card
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/02.jpg"
    >
    </df-card>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-card</span> <span class="token attr-name">coverUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/02.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-card</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details>
</template>
</df-template>
<h2 id="卡片样式" tabindex="-1"><a class="header-anchor" href="#卡片样式" aria-hidden="true">#</a> 卡片样式</h2>
<p>可选参数：</p>
<ul>
<li><code>bodyStyle</code>：可传入 CSS 对象来调整卡片样式。</li>
<li><code>fill</code>: 图片缩放方式，可选值：<code>fit</code>/<code>contain</code>/<code>width</code>/<code>height</code></li>
</ul>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="card-container" style="display:flex;justify-content:center;flex-wrap:wrap;">
    <df-card
      :bodyStyle="{ borderRadius: '10px', width: '200px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg"
      fill='fit'
    >
    </df-card>
    <df-card
      class='df-ml-4'
      :bodyStyle="{ borderRadius: '20px', width: '200px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/03.jpg"
    >
    </df-card>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-card</span>
      <span class="token attr-name">:bodyStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ borderRadius: <span class="token punctuation">'</span>10px<span class="token punctuation">'</span>, width: <span class="token punctuation">'</span>200px<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span>
      <span class="token attr-name">coverUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fit<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-card</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-ml-4<span class="token punctuation">"</span></span>
      <span class="token attr-name">:bodyStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ borderRadius: <span class="token punctuation">'</span>20px<span class="token punctuation">'</span>, width: <span class="token punctuation">'</span>200px<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span>
      <span class="token attr-name">coverUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/03.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-card</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details>
</template>
</df-template>
<h2 id="卡片内容" tabindex="-1"><a class="header-anchor" href="#卡片内容" aria-hidden="true">#</a> 卡片内容</h2>
<p><code>&lt;df-card&gt;</code> 提供了 <code>标题</code>、<code>内容</code>、<code>动作</code> 插槽来自定义卡片组件内容。</p>
<p><strong>示例</strong>：</p>
<df-template>
<template #demo>
  <div class="card-container" style="display:flex;justify-content:center;flex-wrap:wrap;">
    <df-card
      :bodyStyle="{ borderRadius: '10px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/99.jpg"
      fill='fit'
    >
      <template #title> 自定义标题 </template>
      <p>这里填入卡片内容</p>
    </df-card>
    <df-card
      class='df-ml-4'
      :bodyStyle="{ borderRadius: '20px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/44.jpg"
    >
      <template #title> 自定义标题 </template>
      <p>这里填入卡片内容</p>
      <template #action>
        <df-button color="primary" type="trans-error">
          按钮
        </df-button> 
      </template>
    </df-card>
  </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-container<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-card</span>
      <span class="token attr-name">:bodyStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ borderRadius: <span class="token punctuation">'</span>10px<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span>
      <span class="token attr-name">coverUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/99.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fit<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span> 自定义标题 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这里填入卡片内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-card</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-card</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>df-ml-4<span class="token punctuation">"</span></span>
      <span class="token attr-name">:bodyStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ borderRadius: <span class="token punctuation">'</span>20px<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span>
      <span class="token attr-name">coverUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/44.jpg<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span> 自定义标题 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这里填入卡片内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#action</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>trans-error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 按钮 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>df-card</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></details>
</template>
</df-template>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>...</p>
</template>
