export const data = {
  "key": "v-6a008fd2",
  "path": "/zh/guide/start.html",
  "title": "快速上手",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装依赖",
      "slug": "安装依赖",
      "children": []
    },
    {
      "level": 2,
      "title": "全局加载",
      "slug": "全局加载",
      "children": []
    },
    {
      "level": 2,
      "title": "按需加载",
      "slug": "按需加载",
      "children": []
    },
    {
      "level": 2,
      "title": "启动项目",
      "slug": "启动项目",
      "children": []
    }
  ],
  "filePathRelative": "zh/guide/start.md",
  "git": {
    "updatedTime": 1638067839000,
    "contributors": [
      {
        "name": "song",
        "email": "3224266014@qq.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
