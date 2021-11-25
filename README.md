<p align="center">
    <img width='300px' src='https://cdn.jsdelivr.net/gh/yesmore/img/img/logo.png' alt='different-ui'/>
</p>
<p align="center">
  <a href="javascript:;">
    <img src="https://img.shields.io/github/workflow/status/yesmore/different-ui/dev-release">
  </a>
  <a href="javascript:;">
    <img src="https://img.shields.io/codecov/c/github/yesmore/different-ui?logo=codecov">
  </a>
  <a href="https://www.npmjs.org/package/different-ui">
    <img src="https://img.shields.io/npm/v/different-ui">
  </a>
  <a href="https://npmcharts.com/compare/different-ui?minimal=true">
    <img src="https://img.shields.io/npm/dt/different-ui.svg">
  </a><br>
  <a href="https://npmcharts.com/compare/different-ui?minimal=true">
    <img src="https://img.shields.io/github/size/yesmore/different-ui/lib/index.umd.js">
  </a>
  <img src="https://img.shields.io/github/stars/yesmore/different-ui.svg?logo=github" alt="star"/>
  <img src="https://img.shields.io/github/forks/yesmore/different-ui" alt="fork"/>
  <img src="https://img.shields.io/github/issues/yesmore/different-ui" alt="issues"/><br>
  <a href="https://gitter.im/yesmore/yesmoreforchat">
    <img src="https://img.shields.io/gitter/room/yesmore/yesmoreforchat" alt="chat"/>
  </a>
  <img src="https://img.shields.io/github/license/yesmore/different-ui" alt="mit"/>  
  <br>
</p>



<p align="center">Different UI - A Vue.js 3 UI library made by <a href='https://github.com/yesmore'>@yesmore</a></p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript
- ✨ With Colorful Style

<div align='right' style='margin-bottom:20px;'><strong>阅读文档</strong>：中文版 | <a href='https://github.com/yesmore/different-ui'>English</a></div>

## ⚡️ 状态: Beta

这个项目仍在持续开发中。欢迎加入开发，并提出您的第一次 Pull Request 。

**下一步计划**：

- 完善已有组件样式
- 使用`jest`测试已有组件
- 使用`vuepress`生成开发文档并上线
- 发布`npm`
- 编写案例模板

## 📖 开发文档

更详细的 Api、组件信息请查看 [https://yesmore.cc/Different-UI](https://yesmore.cc/Different-UI)

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
import DifferentUi from 'different-ui'
import 'different-ui/lib/packages/theme/index.css'

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
  setup() {},
})
</script>
```

开发者启动

```shell
$ npm run dev
```

## 🌱 Different Zen

- Beauty is better than ugliness, and so is CSS
- Sometimes ‘CV’ may be really better than you, except boss
- From 0 to 1

## Licence

Different UI is open source software licensed as [MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE).
