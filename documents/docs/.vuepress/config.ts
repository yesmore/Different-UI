const { path } = require('@vuepress/utils')

module.exports = {
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo-s.png',
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js',
      },
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' },
    ],
  ],
  // 这是部署到github相关的配置
  base: '/Different-UI/',
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'eh-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Different',
      description: 'A Vue.js 3 UI library',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Different',
      description: '一个基于 Vuejs 3.x 的UI组件库',
    },
  },
  themeConfig: {
    // sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上，默认为1（只会显示h2标题），若 sidebar 下也配置该属性，则以 sidebar 的为准
    activeHeaderLinks: true, // 当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新, 默认为 true
    nextLinks: true, // 显示下一篇链接, 默认为 true
    prevLinks: true, // 显示上一篇链接, 默认为 true
    search: true,
    searchMaxSuggestions: 10,

    locales: {
      '/': {
        selectLanguageText: 'Languages',
        // 多语言下拉菜单的标题
        selectLanguageName: 'English',
        lastUpdatedText: 'Last Updated',
        contributors: true,
        contributorsText: '贡献者列表',
        // 该语言在下拉菜单中的标签
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        navbar: [
          {
            text: 'Version',
            children: [
              {
                text: 'v0.1.1-beta.1',
                link: 'https://github.com/yesmore/different-ui',
              },
            ],
          },

          {
            text: 'Guide',
            link: '/guide/',
          }, // 内部链接
          {
            text: 'Component',
            link: '/component/',
          },
          {
            text: 'Help',
            link: '/help/',
          },
          {
            text: 'Blog',
            link: 'https://yesmore.cc',
            target: '_blank',
          }, // 外部链接
          {
            text: 'Github',
            link: 'https://github.com/yesmore/different-ui',
          },
        ],
        sidebar: {
          // 设置多个侧边栏, guide 和 config 两个目录
          '/guide/': [
            // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
            {
              text: 'Guide',
              // collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: ['/guide/README.md', '/guide/start.md'],
            },
            {
              text: 'Deep',

              children: ['link.md'],
            },
          ],
          '/component/': [
            // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
            {
              text: 'Basic',
              // sidebarDepth: 4,

              children: ['/component/', '/component/button.md'],
            },
            {
              text: 'API',

              // sidebarDepth: 4,
              children: ['/component/more.md'],
            },
          ],
          '/help/': [
            {
              text: '帮助',
              children: ['/zh/component/'],
            },
          ], // 配置 auto 适合单文件 README.md 的场景, 自动生成侧边栏
        },
      },
      '/zh/': {
        selectLanguageText: '多语言',
        selectLanguageName: '简体中文',
        // ariaLabel: '',
        lastUpdated: '上次更新',
        editLinkText: '在Github上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: '有新的内容被推送',
            buttonText: '刷新',
          },
        },
        navbar: [
          {
            text: '版本',
            children: [
              {
                text: 'v0.1.1-beta.1',
                link: 'https://github.com/yesmore/different-ui',
              },
            ],
          },

          {
            text: '指南',
            link: '/zh/guide/',
          }, // 内部链接
          {
            text: '组件',
            link: '/zh/Component/',
          },
          {
            text: '帮助',
            link: '/zh/help/',
          },
          {
            text: '快乐码原',
            link: 'https://yesmore.cc',
            target: '_blank',
          }, // 外部链接
          {
            text: 'Github',
            link: 'https://github.com/yesmore/different-ui',
          },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '指南',
              // collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: ['/zh/guide/README.md', '/zh/guide/start.md'],
            },
            {
              text: '深入',
              // collapsable: false,
              // sidebarDepth: 3,
              children: ['/zh/guide/link.md'],
            },
          ],
          '/zh/component/': [
            // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
            {
              text: '基础',
              // sidebarDepth: 4,
              // collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: ['/zh/component/', '/zh/component/button.md'],
            },
            {
              text: 'API',
              // collapsable: false,
              // sidebarDepth: 4,
              children: ['/zh/component/more.md'],
            },
          ],
          '/zh/help/': [
            {
              text: '帮助',
              children: ['/zh/component/'],
            },
          ], // 配置 auto 适合单文件 README.md 的场景, 自动生成侧边栏
        },
      },
    },
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
    [
      '@vuepress/register-components',
      {
        components: {
          DfButton: path.resolve(__dirname, './components/button/DfButton.vue'),
          DfTemplate: path.resolve(__dirname, './components/DfTemplate.vue'),
        },
      },
    ],
    [
      '@vuepress/container',
      {
        type: 'tip',
        locales: {
          '/': {
            defaultInfo: 'TIP',
          },
          '/zh/': {
            defaultInfo: '提示',
          },
        },
      },
    ],
  ],
}