# Message 消息框

通过函数式方法调用的组件：`Message('默认消息弹框')`

## 基础使用

**示例**：

默认弹框，传入需要显示的消息

<df-template>

<template #demo>
<df-message-template message='默认消息弹框'></df-message-template>
</template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

```vue
<template>
  <df-button @click="showMsg">默认消息弹框</df-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'df-demo',
  setup(props) {
    const showMsg = () => {
      Message('默认消息弹框')
    }
    return {
      showMsg,
    }
  },
})
</script>
```

:::

</template>

</df-template>

## 消息类型

传入 `options` 可定制消息弹框属性，`options` 为对象类型。

消息类型有四种：`'success' | 'warning' | 'info' | 'error'`，通过 `type` 属性设置；默认值为 `info`。

<df-template>

<template #demo>
<df-message-template type='info' message='info'></df-message-template>
<df-message-template type='success' message='success'></df-message-template>
<df-message-template type='warning' message='warning'></df-message-template>
<df-message-template type='error' message='error'></df-message-template>
</template>

<template #src>

::: details <i class="iconfont df-icon-script"></i>

<!-- 源码示例 -->

```vue
<template>
  <df-button @click="showMsg1">success</df-button>
  <df-button @click="showMsg2">warning</df-button>
  <df-button @click="showMsg3">error</df-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'df-demo',
  setup(props) {
    const showMsg1 = () => {
      Message({
        type: 'success',
      })
    }
    const showMsg2 = () => {
      Message({
        type: 'warning',
      })
    }
    const showMsg3 = () => {
      Message({
        type: 'error',
      })
    }
    return {
      showMsg1,
      showMsg2,
      showMsg3,
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
