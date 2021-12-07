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
  // directiveTransforms: {
  //   // v-magnifier -> magnifier
  //   magnifier: () => ({
  //     props: [],
  //     needRuntime: true, // <- remember this
  //   }),
  // },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Different',
      description: '一个基于 Vuejs 3.x 的UI组件库',
    },
    '/en/': {
      lang: 'eh-US',
      title: 'Different',
      description: 'A Vue.js 3 UI library',
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
        selectLanguageText: '多语言',
        selectLanguageName: '简体中文',
        // ariaLabel: '',
        lastUpdated: '上次更新',
        editLinkText: '在Github上编辑此页',
        contributors: true,
        contributorsText: '贡献者列表',
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
                text: 'v0.1.1-beta.3',
                link: 'https://github.com/yesmore/different-ui',
              },
            ],
          },

          {
            text: '指南',
            link: '/guide/',
          }, // 内部链接
          {
            text: '组件',
            link: '/component/',
          },
          {
            text: '帮助',
            link: '/help/',
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
          '/guide/': [
            {
              text: '指南',
              // collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: ['/guide/README.md', '/guide/start.md'],
            },
            {
              text: '深入',
              // collapsable: false,
              // sidebarDepth: 3,
              children: ['/guide/link.md'],
            },
          ],
          '/component/': [
            // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
            {
              text: 'Basic 基础组件',
              // sidebarDepth: 4,
              // collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: [
                '/component/',
                '/component/button.md',
                '/component/magnifier.md',
                '/component/icon.md',
                '/component/toolClass.md',
              ],
            },
            {
              text: 'Form 表单组件',
              children: ['/component/starsrate.md', '/component/switch.md'],
            },
            {
              text: 'Data 数据展示',
              children: ['/component/card.md'],
            },
            {
              text: 'Navigation 导航',
              children: ['/component/more.md'],
            },
            {
              text: 'Feedback 反馈组件',
              children: ['/component/modal.md'],
            },
            {
              text: 'Business 业务',
              children: ['/component/more.md'],
            },
            {
              text: 'Others 其他',
              children: ['/component/animation.md'],
            },
          ],
          '/help/': [
            {
              text: '帮助',
              children: ['/component/'],
            },
          ], // 配置 auto 适合单文件 README.md 的场景, 自动生成侧边栏
        },
      },
      '/en/': {
        selectLanguageText: 'Languages',
        // 多语言下拉菜单的标题
        selectLanguageName: 'English',
        lastUpdatedText: 'Last Updated',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        contributors: true,
        contributorsText: 'Contributors',
        // 该语言在下拉菜单中的标签
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        navbar: [
          {
            text: 'Version',
            children: [
              {
                text: 'v0.1.1-beta.3',
                link: 'https://github.com/yesmore/different-ui',
              },
            ],
          },

          {
            text: 'Guide',
            link: '/en/guide/',
          }, // 内部链接
          {
            text: 'Component',
            link: '/en/component/',
          },
          {
            text: 'Help',
            link: '/en/help/',
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
          '/en/guide/': [
            {
              text: 'Guide',
              // collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: ['/en/guide/README.md', '/en/guide/start.md'],
            },
            {
              text: 'More',
              // collapsable: false,
              // sidebarDepth: 3,
              children: ['/en/guide/link.md'],
            },
          ],
          '/en/component/': [
            // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
            {
              text: 'Basic',
              // sidebarDepth: 4,
              // collapsable: false, // 是否侧边菜单折叠，默认值是 true
              children: [
                '/en/component/',
                '/en/component/button.md',
                '/en/component/magnifier.md',
                '/en/component/icon.md',
                '/en/component/toolClass.md',
              ],
            },
            {
              text: 'Form',
              children: [
                '/en/component/starsrate.md',
                '/en/component/switch.md',
              ],
            },
            {
              text: 'Data',
              children: ['/en/component/card.md'],
            },
            {
              text: 'Navigation',
              children: ['/component/more.md'],
            },
            {
              text: 'Feedback',
              children: ['/en/component/modal.md'],
            },
            {
              text: 'Business',
              children: ['/en/component/more.md'],
            },
            {
              text: 'Others',
              children: ['/en/component/animation.md'],
            },
          ],
          '/en/help/': [
            {
              text: 'Help',
              children: ['/en/component/'],
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
            placeholder: '搜索',
          },
          '/en/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    [
      '@vuepress/register-components',
      {
        components: {
          DfTemplate: path.resolve(__dirname, './components/DfTemplate.vue'),
          DfIcon: path.resolve(__dirname, './components/DfIcon.vue'),
          DfAnimation: path.resolve(__dirname, './components/DfAnimation.vue'),
          DfButton: path.resolve(__dirname, './components/button/DfButton.vue'),
          DfMagnifier: path.resolve(
            __dirname,
            './components/magnifier/DfMagnifier.vue',
          ),
          DfModal: path.resolve(__dirname, './components/modal/DfModal.vue'),
          DfModalTemplate: path.resolve(
            __dirname,
            './components/modal/DfModalTemplate.vue',
          ),
          DfStarsrate: path.resolve(
            __dirname,
            './components/starsRate/DfStarsrate.vue',
          ),
          DfCard: path.resolve(__dirname, './components/card/DfCard.vue'),
          DfSwitch: path.resolve(__dirname, './components/switch/DfSwitch.vue'),
        },
      },
    ],
    [
      '@vuepress/container',
      {
        type: 'tip',
        locales: {
          '/': {
            defaultInfo: '提示',
          },
          '/en/': {
            defaultInfo: 'TIP',
          },
        },
      },
      {
        type: 'warning',
        locales: {
          '/': {
            defaultInfo: '警告',
          },
          '/en/': {
            defaultInfo: 'Warning',
          },
        },
      },
    ],
  ],
}
