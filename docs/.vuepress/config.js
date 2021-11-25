module.exports = {
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo-s.png'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // 这是部署到github相关的配置
  base: '/Different-UI/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Different',
      description: '基于 Vuejs 3.x 的UI组件库'
    },
    '/en/': {
      lang: 'eh-US',
      title: 'Different',
      description: 'A Vue.js 3 UI library'
    }
  },
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上，默认为1（只会显示h2标题），若 sidebar 下也配置该属性，则以 sidebar 的为准
    activeHeaderLinks: true, // 当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新, 默认为 true
    nextLinks: true, // 显示下一篇链接, 默认为 true
    prevLinks: true, // 显示上一篇链接, 默认为 true
    search: true,
    searchMaxSuggestions: 10,

    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '多语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新时间', // 显示在文档右下角：
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [{
            text: '版本',
            items: [{
              text: 'v0.1.1-beta.1',
              link: 'https://github.com/yesmore/different-ui'
            }, ]
          },

          {
            text: '指南',
            link: '/guide/'
          }, // 内部链接
          {
            text: '帮助',
            link: '/help/'
          },
          {
            text: '快乐码原',
            link: 'https://yesmore.cc',
            target: '_blank'
          }, // 外部链接
          {
            text: 'Github',
            link: 'https://github.com/yesmore/different-ui'
          },
        ],
        sidebar: { // 设置多个侧边栏, guide 和 config 两个目录
          '/guide/': [ // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
            {
              title: '指南',
              collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: [
                ['', '介绍'],
                ['start.md', '快速上手']
              ]
            },
            {
              title: '深入',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                ['link.md', '链接']
              ]
            }
          ],
          '/help/': 'auto' // 配置 auto 适合单文件 README.md 的场景, 自动生成侧边栏
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [{
            text: 'Version',
            items: [{
              text: 'v0.1.1-beta.1',
              link: 'https://github.com/yesmore/different-ui'
            }, ]
          },

          {
            text: 'Guide',
            link: '/guide/'
          }, // 内部链接
          {
            text: 'Help',
            link: '/help/'
          },
          {
            text: 'Blog',
            link: 'https://yesmore.cc',
            target: '_blank'
          }, // 外部链接
          {
            text: 'Github',
            link: 'https://github.com/yesmore/different-ui'
          },
        ],
        sidebar: { // 设置多个侧边栏, guide 和 config 两个目录
          '/guide/': [ // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
            {
              title: 'Guide',
              collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: [
                ['', 'production'],
                ['start.md', 'Quick Start']
              ]
            },
            {
              title: '深入',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                ['link.md', '链接']
              ]
            }
          ],
          '/help/': 'auto' // 配置 auto 适合单文件 README.md 的场景, 自动生成侧边栏
        }
      },

    },

  }
}