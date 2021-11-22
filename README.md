<p align="center">
  <img width='300px' src='https://cdn.jsdelivr.net/gh/yesmore/img/img/logo (2).png' alt='different-ui'/>
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/different-ui">
    <img src="https://img.shields.io/npm/v/different-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/different-ui?minimal=true">
    <img src="http://img.shields.io/npm/dm/different-ui.svg">
  </a>
    <img src="https://img.shields.io/github/license/yesmore/different-ui" alt="mit"/>  <br>
  <img src="https://img.shields.io/github/stars/yesmore/different-ui.svg" alt="star"/>
        <img src="https://img.shields.io/github/forks/yesmore/different-ui" alt="fork"/>
    <img src="https://img.shields.io/github/issues/yesmore/different-ui" alt="issues"/><br>
  <br>
</p>


<p align="center">Different UI - A Vue.js 3 UI library</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

<div style='float:right;margin-bottom:20px;'><br><strong>阅读文档</strong>：中文版 | <a href='https://github.com/yesmore/OSAPI'>English</a></div><br>

## ⚡️ 状态: Beta

这个项目仍在持续开发中。欢迎加入开发，并提出您的第一次Pull Request 。

- 基本架构已完成
- 未测试

## 📖 开发文档

更详细的 Api、组件信息请查看 [https://yesmore/different-ui](https://github.com/yesmore/Different-UI)

## 🎡 重要更新

重大更新日志请查看: [Breaking Change List](https://github.com/yesmore/different-ui/issues/1).

---

## 🖖 安装

```shell
$ npm install different-ui -S
```

## 👋 快速开始

**全局加载**

```ts
// vue3/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import DifferentUi from '@different-ui'

const app = createApp(App)
app.use(DifferentUi)
app.mount('#app')
```

或 **按需加载**

```vue
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

开发者启动

```shell
$ npm run dev
```

## 🌱 禅





## Licence

Different UI is open source software licensed as [MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE).

