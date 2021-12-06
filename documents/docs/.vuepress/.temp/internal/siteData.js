export const siteData = {
  "base": "/Different-UI/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo-s.png"
      }
    ],
    [
      "script",
      {
        "src": "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
      }
    ],
    [
      "script",
      {
        "src": "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      }
    ],
    [
      "script",
      {
        "src": "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"
      }
    ],
    [
      "script",
      {
        "src": "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "eh-US",
      "title": "Different",
      "description": "A Vue.js 3 UI library"
    },
    "/zh/": {
      "lang": "zh-CN",
      "title": "Different",
      "description": "一个基于 Vuejs 3.x 的UI组件库"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
