# Animation 动画

`Different` 扩展了 Vue 内置过渡动画组件 [`<transition>`](https://v3.cn.vuejs.org/api/built-in-components.html#transition) ，在其基础上封装了常用的元素动画，它们在 `v-if`, `v-show` 情况下生效，下面是所有动画及其代码示例。

::: warning
Vuejs 3.x 的 `<transition>` Class 相较于 Vuejs 2.x 部分有所不同，具体请查看官方文档：[过渡的 class 名更改
](https://v3.cn.vuejs.org/guide/migration/transition.html#%E6%A6%82%E8%A7%88)
:::

## 基本使用

使用 `<transition></transition>` 标签包裹需要动画过渡的元素，填入对应属性值（如：`name='df-fade-in'`）即可。

**示例**：

## Fade in & out

- 渐入、渐出

<df-animation animation='fade'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">fade-in</df-button>
  <transition name="df-fade-in">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## List in & out

- 渐变：上渐上出

<df-animation animation='list'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">list-in-out</df-button>
  <transition name="df-list">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## zoom in top

- 缩放：上如上出

<df-animation animation='zoom-in-top'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">zoom-in-top</df-button>
  <transition name="df-zoom-in-top">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## zoom in center

- 缩放：中入中出

<df-animation animation='zoom-in-center'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">zoom-in-center</df-button>
  <transition name="df-zoom-in-center">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## zoom in bottom

- 缩放：下入下出

<df-animation animation='zoom-in-bottom'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">zoom-in-bottom</df-button>
  <transition name="df-zoom-in-bottom">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## zoom in left

- 缩放：左入左出

<df-animation animation='zoom-in-left'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">zoom-in-left</df-button>
  <transition name="df-zoom-in-left">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## Slide in & out

- 滑动：右入左出

<df-animation animation='slide'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">Slide in & out</df-button>
  <transition name="df-slide">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## Slide left in & out

- 滑动：左入左出

<df-animation animation='slide-left'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">Slide left in & out</df-button>
  <transition name="df-left">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>

## Scale in & out

- 缩放

<df-animation animation='scale'>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="show">Scale in & out</df-button>
  <transition name="df-scale">
    <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
  </transition>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>
```

:::
</template>

</df-animation>
