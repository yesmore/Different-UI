# 快速上手

## 安装依赖

<CodeGroup>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
$ yarn add different-ui -S
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
$ npm install different-ui -S
```

  </CodeGroupItem>
</CodeGroup>

## 全局加载

```ts
// vue3/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import DifferentUi from 'different-ui'
import 'different-ui/lib/packages/theme/index.css'

const app = createApp(App)
app.use(DifferentUi)
app.mount('#app')
```

## 按需加载

```vue
<!-- vue3/App.vue -->
<template>
  <div>
    <df-button>按钮1</df-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DfButton } from 'different-ui'

export default defineComponent({
  name: 'App',
  components: { DfButton },
  setup() {},
})
</script>
```

## 启动项目

<CodeGroup>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
$ yarn serve
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
$ npm run serve
```

  </CodeGroupItem>
</CodeGroup>
