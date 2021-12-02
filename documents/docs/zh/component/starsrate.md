# StarsRate 评分

::: warning
`<df-starsrate>` 组件为行内组件
:::

## 基础使用

必填参数：

- `rate`：当前分数
- `totalRate`：总分数

**示例**：

<df-template>

<template #demo>

  <div class="star-container">
    <df-starsrate
      :rate="3"
      :totalRate="5"
    />
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-starsrate :rate="3" :totalRate="5" />
</template>
```

:::
</template>

</df-template>

## 图标和样式

可选参数：

- `size`：单个图标大小（单位/像素）
- `icon`: 图标（例：'df-icon-star' 或 'icon-xxx'（你自己的 iconfont 图标库），仅支持 `iconfont`）
- `activeColor`：点亮的图标颜色

**示例**：

<df-template>

<template #demo>

  <div class="star-container">
    <df-starsrate
      :rate="3"
      :size="20"
      :totalRate="6"
      icon='df-icon-collection-fill'
      activeColor='red'
    />
    <df-starsrate
      class='df-pt-2'
      :rate="3"
      :size="24"
      :totalRate="8"
      icon='df-icon-Daytimemode'
    />
    <df-starsrate
      class='df-pt-2'
      :rate="3"
      :size="24"
      :totalRate="10"
      icon='df-icon-bingjiling-copy'
    />
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-starsrate
    :rate="3"
    :size="20"
    :totalRate="6"
    icon="df-icon-collection-fill"
    activeColor="red"
  />
  <df-starsrate
    class="df-pt-2"
    :rate="3"
    :size="24"
    :totalRate="8"
    icon="df-icon-Daytimemode"
  />
  <df-starsrate
    class="df-pt-2"
    :rate="3"
    :size="24"
    :totalRate="10"
    icon="df-icon-bingjiling-copy"
  />
</template>
```

:::
</template>

</df-template>

## 回调函数

`<df-starsrate>`可以绑定 `getStarsNum` 事件回调获取当前分数。

**示例**：

<df-template>

<template #demo>

  <div class="star-container">
    <df-starsrate
      :rate="3"
      :totalRate="5"
      @getStarsNum="getStarsNum"
    />
  </div>

  </template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-starsrate :rate="3" :totalRate="5" @getStarsNum="getStarsNum" />
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const getStarsNum = (num: number) => {
      console.log(num)
    }
    return {
      getStarsNum,
    }
  },
})
</script>
```

:::
</template>

</df-template>

## API

...
