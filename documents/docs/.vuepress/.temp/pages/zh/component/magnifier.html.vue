<template><h1 id="magnifier-图片放大镜" tabindex="-1"><a class="header-anchor" href="#magnifier-图片放大镜" aria-hidden="true">#</a> Magnifier 图片放大镜</h1>
<p><code>&lt;df-magnifier&gt;</code> 组件是使用纯 Dom 操作实现的放大镜，它可以放大你传入的图片的任意部位，仅需要把鼠标放入指定位置；并且你可以定制放大倍数，这满足了例如放大商品局部内容的业务需求。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>此组件暂未适配移动端，可能体验较差，请谨慎使用。</p>
</div>
<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2>
<p>必填参数：<code>imgUrl</code>，即被放大的图片路径；可选参数 <code>imgAlt</code>、<code>blank</code> （分别对应<code>&lt;img&gt;</code> 标签的<code>alt</code>、<code>target:_blank</code>属性）</p>
<p><code>&lt;df-magnifier&gt;</code> 整体默认宽高为 <code>375 X 600</code>（像素），你可以传入 <code>imgWidth</code> 和 <code>imgHeight</code> 参数来调整图片大小。</p>
<p><strong>示例</strong>（移入鼠标即可预览）：</p>
<df-template>
  <template #demo>
    <div 
      class="magnifier-container" 
      align='center' 
    >
      <df-magnifier
        :blank="true"
        imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg"
        imgAlt="放大镜"
        cursor='crosshair'
        :scale='1.7'
      />
    </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>magnifier-container<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-magnifier</span>
      <span class="token attr-name">:blank</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">imgUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">imgAlt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>放大镜<span class="token punctuation">"</span></span>
      <span class="token attr-name">cursor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>crosshair<span class="token punctuation">"</span></span>
      <span class="token attr-name">:scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.7<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
</template>
</df-template>
<h2 id="放大镜选项" tabindex="-1"><a class="header-anchor" href="#放大镜选项" aria-hidden="true">#</a> 放大镜选项</h2>
<p><code>&lt;df-magnifier&gt;</code> 提供了以下可选值来自定义你的放大镜：</p>
<ul>
<li><code>magWidth</code> 和 <code>magHeight</code> 参数来调整放大镜的大小；</li>
<li><code>magRadius</code> 参数以改变放大镜圆角弧度；</li>
<li><code>cursor</code> 参数以改变放大时鼠标指针式</li>
<li><code>scale</code> 调整放大倍数</li>
<li><code>link</code> ：图片跳转地址</li>
</ul>
<p>放大镜默认大小为 <code>100 X 100</code>（像素）。</p>
<p><strong>示例</strong>（移入鼠标即可预览）：</p>
<df-template>
  <template #demo>
    <div 
      class="magnifier-container" 
      align='center' 
    >
      <!-- <df-magnifier
        link="https://github.com/yesmore/different-ui"
        :blank="true"
        imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg"
        imgAlt="可放大的图片"
        magRadius="10%"
        cursor="point"
        :scale="1.7"
      /> -->
    </div>
  </template>
<template #src>
<details class="custom-container details"><summary><i class="iconfont df-icon-script"></i></summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>magnifier-container<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>df-magnifier</span>
      <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://github.com/yesmore<span class="token punctuation">"</span></span>
      <span class="token attr-name">:blank</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">imgUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/gh/yesmore/img/v2/2/09.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">imgAlt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>可放大的图片<span class="token punctuation">"</span></span>
      <span class="token attr-name">:imgWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>375<span class="token punctuation">"</span></span>
      <span class="token attr-name">:imgHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span>
      <span class="token attr-name">:magWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
      <span class="token attr-name">:magHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>
      <span class="token attr-name">magRadius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10%<span class="token punctuation">"</span></span>
      <span class="token attr-name">cursor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>crosshair<span class="token punctuation">"</span></span>
      <span class="token attr-name">:scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.7<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details>
</template>
</df-template>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>...</p>
</template>
