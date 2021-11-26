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
- 🌈 With Colorful Style

<div align='right' style='margin-bottom:20px;'><strong>阅读文档</strong>：<a href='https://github.com/yesmore/different-ui'>中文版</a> | English</div>

## 💻 Status: Beta

> This framework is not recommended at this time

This project is still under heavy development. Feel free to join us and make your first pull request.

**Next**：

- Improve existing component styles
- Use `jest` to test existing components
- Use `vuepress` to generate development documents and go online
- Publish ` npm`
- Writing case templates

## 📖 Documentation

更详细的 Api、组件信息请查看 [https://yesmore.cc/Different-UI](https://yesmore.cc/Different-UI)

## 📘 Change Logs

重大更新日志请查看: [Breaking Change List](https://github.com/yesmore/different-ui/issues/1).

---

## 🖖 Install

```shell
$ npm install different-ui -S
```

## 👋 Quick start

**Global load**

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

or **Load on demand**

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

Local debugging

```shell
$ npm run dev
```

## 🌱 Different Zen

- Beauty is better than ugliness, and so is CSS
- Sometimes ‘CV’ may be really better than you, except boss
- From 0 to 1

## 🐾 Contributors

<img width='50px' style='border-radius: 50%' src='https://avatars.githubusercontent.com/u/89140804?v=4' alt='wx'/> 

## 🎨 Treat me to spicy strips

<p align="center">
  <table border="0">
    <tr>
        <th  align="center"><img width='200px' src='https://cdn.jsdelivr.net/gh/yesmore/img/img/81E3D2890C073A52E045D9E49457C3ED.jpg' alt='wx'/> <p>微信</p> </th>
        <th align="center"><img width='200px' src='https://cdn.jsdelivr.net/gh/yesmore/img/img/849E2934286ACA620B988C523AEBC92B.jpg' alt='zfb'/> <p>支付宝</p> </th>
    </tr>    
  </table>
</p>


## Licence

Different UI is open source software licensed as [MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE).

