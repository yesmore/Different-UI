# Card 卡片

`<df-card>` 组件为行内组件是带遮罩的图文展示卡片。

## 基础使用

必填参数：

- `coverUrl`：封面图片。

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-card coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/02.jpg">
  </df-card>
</template>
```

:::
</template>

</df-template>

## 卡片样式

可选参数：

- `bodyStyle`：可传入 CSS 对象来调整卡片样式。
- `fill`: 图片缩放方式，可选值：`fit`/`contain`/`width`/`height`

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div
    class="card-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-card
      :bodyStyle="{ borderRadius: '10px', width: '200px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/09.jpg"
      fill="fit"
    >
    </df-card>
    <df-card
      class="df-ml-4"
      :bodyStyle="{ borderRadius: '20px', width: '200px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/03.jpg"
    >
    </df-card>
  </div>
</template>
```

:::
</template>

</df-template>

## 卡片内容

`<df-card>` 提供了 `标题`、`内容`、`动作` 插槽来自定义卡片组件内容。

**示例**：

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

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <div
    class="card-container"
    style="display:flex;justify-content:center;flex-wrap:wrap;"
  >
    <df-card
      :bodyStyle="{ borderRadius: '10px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/1/99.jpg"
      fill="fit"
    >
      <template #title> 自定义标题 </template>
      <p>这里填入卡片内容</p>
    </df-card>
    <df-card
      class="df-ml-4"
      :bodyStyle="{ borderRadius: '20px' }"
      coverUrl="https://cdn.jsdelivr.net/gh/yesmore/img/v2/6/44.jpg"
    >
      <template #title> 自定义标题 </template>
      <p>这里填入卡片内容</p>
      <template #action>
        <df-button color="primary" type="trans-error"> 按钮 </df-button>
      </template>
    </df-card>
  </div>
</template>
```

:::
</template>

</df-template>

## API

...
