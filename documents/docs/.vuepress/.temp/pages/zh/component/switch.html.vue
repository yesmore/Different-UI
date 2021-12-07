<template><h1 id="switch-开关" tabindex="-1"><a class="header-anchor" href="#switch-开关" aria-hidden="true">#</a> Switch 开关</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
</div>
<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2>
<p><strong>示例</strong>（移入鼠标即可预览）：</p>
<df-template>
  <template #demo>
    <div class="magnifier-container" >
      <!-- <df-switch
        activeColor="success"
        :showLabel="false"
        labelText="卧槽"
        @handleChangeStatus="handleChangeStatus"
      ></df-switch>
      <br> -->
      <df-switch class='df-p-3'>
        <template #label> Label </template>
      </df-switch>
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
</template>
