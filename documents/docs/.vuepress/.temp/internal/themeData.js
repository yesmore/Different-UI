export const themeData = {
  "activeHeaderLinks": true,
  "nextLinks": true,
  "prevLinks": true,
  "search": true,
  "searchMaxSuggestions": 10,
  "locales": {
    "/": {
      "selectLanguageText": "Languages",
      "selectLanguageName": "English",
      "lastUpdatedText": "Last Updated",
      "lastUpdated": "Last Updated",
      "editLinkText": "Edit this page on GitHub",
      "contributors": true,
      "contributorsText": "Contributors",
      "serviceWorker": {
        "updatePopup": {
          "message": "New content is available.",
          "buttonText": "Refresh"
        }
      },
      "navbar": [
        {
          "text": "Version",
          "children": [
            {
              "text": "v0.1.1-beta.3",
              "link": "https://github.com/yesmore/different-ui"
            }
          ]
        },
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "Component",
          "link": "/component/"
        },
        {
          "text": "Help",
          "link": "/help/"
        },
        {
          "text": "Blog",
          "link": "https://yesmore.cc",
          "target": "_blank"
        },
        {
          "text": "Github",
          "link": "https://github.com/yesmore/different-ui"
        }
      ],
      "sidebar": {
        "/guide/": [
          {
            "text": "Guide",
            "children": [
              "/guide/README.md",
              "/guide/start.md"
            ]
          },
          {
            "text": "Deep",
            "children": [
              "link.md"
            ]
          }
        ],
        "/component/": [
          {
            "text": "Basic",
            "children": [
              "/component/",
              "/component/button.md",
              "/component/icon.md"
            ]
          },
          {
            "text": "Form",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Data",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Navigation",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Feedback",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Others",
            "children": [
              "/component/more.md"
            ]
          }
        ],
        "/help/": [
          {
            "text": "帮助",
            "children": [
              "/zh/component/"
            ]
          }
        ]
      }
    },
    "/zh/": {
      "selectLanguageText": "多语言",
      "selectLanguageName": "简体中文",
      "lastUpdated": "上次更新",
      "editLinkText": "在Github上编辑此页",
      "contributors": true,
      "contributorsText": "贡献者列表",
      "serviceWorker": {
        "updatePopup": {
          "message": "有新的内容被推送",
          "buttonText": "刷新"
        }
      },
      "navbar": [
        {
          "text": "版本",
          "children": [
            {
              "text": "v0.1.1-beta.3",
              "link": "https://github.com/yesmore/different-ui"
            }
          ]
        },
        {
          "text": "指南",
          "link": "/zh/guide/"
        },
        {
          "text": "组件",
          "link": "/zh/Component/"
        },
        {
          "text": "帮助",
          "link": "/zh/help/"
        },
        {
          "text": "快乐码原",
          "link": "https://yesmore.cc",
          "target": "_blank"
        },
        {
          "text": "Github",
          "link": "https://github.com/yesmore/different-ui"
        }
      ],
      "sidebar": {
        "/zh/guide/": [
          {
            "text": "指南",
            "children": [
              "/zh/guide/README.md",
              "/zh/guide/start.md"
            ]
          },
          {
            "text": "深入",
            "children": [
              "/zh/guide/link.md"
            ]
          }
        ],
        "/zh/component/": [
          {
            "text": "Basic 基础组件",
            "children": [
              "/zh/component/",
              "/zh/component/button.md",
              "/zh/component/icon.md"
            ]
          },
          {
            "text": "Form 表单组件",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Data 数据展示",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Navigation 导航",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Feedback 反馈组件",
            "children": [
              "/component/more.md"
            ]
          },
          {
            "text": "Others 其他",
            "children": [
              "/component/more.md"
            ]
          }
        ],
        "/zh/help/": [
          {
            "text": "帮助",
            "children": [
              "/zh/component/"
            ]
          }
        ]
      }
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
