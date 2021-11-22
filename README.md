<p align="center">
  <div style='text-align:center;font-size:30px'><h3>Different UI</h1></div>
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/different-ui">
    <img src="https://img.shields.io/npm/v/different-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/different-ui?minimal=true">
    <img src="http://img.shields.io/npm/dm/different-ui.svg">
  </a>
  <br>
</p>

<p align="center">Different UI - A Vue.js 3 UI library</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript



## Status: Beta

This project is still under heavy development. Feel free to join us and make your first pull request.

- 基本架构已完成
- 未测试

## Documentation

You can find for more details, API, and other docs on [https://yesmore/different-ui]()

## Breaking change list

You can find the breaking change list here: [Breaking Change List](https://github.com/yesmore/different-ui/issues/162).

---

## Install

```shell
$ npm install different-ui -S
```

## Quick Start

**全局加载**

```ts
// vue3/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import DifferentUi from '~/index'

const app = createApp(App)
app.use(DifferentUi)
app.mount('#app')
```

或 **按需加载**

```tsx
// vue3/App.vue
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
  setup() {
      
  }
})    
</script>
```

With command

```shell
$ npm run dev
```

will start the local development environment

## Different's dhyana

借鉴了Element-Plus的theme主题



## Licence

Element Plus is open source software licensed as
[MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE).

