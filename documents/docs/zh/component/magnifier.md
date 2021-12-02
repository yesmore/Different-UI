# Magnifier 图片放大镜

`<df-magnifier>` 组件是使用纯 Dom 操作实现的放大镜，它可以放大你传入的图片的任意部位，仅需要把鼠标放入指定位置；并且你可以定制放大倍数，这满足了例如放大商品局部内容的业务需求。

::: warning
此组件暂未适配移动端，可能体验较差，请谨慎使用。
:::

## 基础使用

必填参数：`imgUrl`，即被放大的图片路径；可选参数 `imgAlt`、`blank` （分别对应`<img>` 标签的`alt`、`target:_blank`属性）

`<df-magnifier>` 整体默认宽高为 `375 x 600`（像素），你可以传入 `imgWidth` 和 `imgHeight` 参数来调整图片大小。

**示例**（移入鼠标即可预览）：

<ClientOnly>
<df-template>
  <template #demo>
    <div 
      class="magnifier-container" 
      align='center' 
    >
      <!-- <df-magnifier
        :blank="true"
        imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg"
        imgAlt="可放大的图片"
        cursor='crosshair'
        :scale='1.7'
      /> -->
    </div>
  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div class="magnifier-container" align="center">
    <df-magnifier
      :blank="true"
      imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg"
      imgAlt="可放大的图片"
      cursor="crosshair"
      :scale="1.7"
    />
  </div>
</template>
```

:::
</template>

</df-template>
 </ClientOnly>

## 放大镜选项

`<df-magnifier>` 提供了以下可选值来自定义你的放大镜：

- 修改 `magWidth` 和 `magHeight` 参数来调整放大镜的大小；
- 修改 `magRadius` 参数以改变放大镜圆角弧度；
- 修改 `cursor` 参数以改变放大时鼠标指针式
- 修改 `scale` 调整放大倍数
- 传入 `link` 值：图片跳转地址

**示例**（移入鼠标即可预览）：

<ClientOnly>
<df-template>
  <template #demo>
    <div 
      class="magnifier-container" 
      align='center' 
    >
      <!-- <df-magnifier
        link="https://github.com/yesmore/different-ui"
        :blank="true"
        imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/8/59.jpg"
        imgAlt="可放大的图片"
        :imgWidth="475"
        :magWidth="100"
        :magHeight="100"
        magRadius="10%"
        cursor="crosshair"
        :scale="1.7"
      /> -->
    </div>
  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div class="magnifier-container" align="center">
    <df-magnifier
      link="https://github.com/yesmore"
      :blank="true"
      imgUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/2/09.jpg"
      imgAlt="可放大的图片"
      :imgWidth="375"
      :imgHeight="600"
      :magWidth="100"
      :magHeight="100"
      magRadius="10%"
      cursor="crosshair"
      :scale="1.7"
    />
  </div>
</template>
```

:::
</template>

</df-template>
</ClientOnly>

## API

...
