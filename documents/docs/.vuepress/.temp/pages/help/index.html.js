export const data = {
  "key": "v-14ac19b5",
  "path": "/help/",
  "title": "帮助",
  "lang": "eh-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "help/README.md",
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
