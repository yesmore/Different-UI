export const data = {
  "key": "v-2b9d3ce6",
  "path": "/zh/help/",
  "title": "帮助",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "zh/help/README.md",
  "git": {
    "updatedTime": 1638030834000,
    "contributors": [
      {
        "name": "song",
        "email": "3224266014@qq.com",
        "commits": 1
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
