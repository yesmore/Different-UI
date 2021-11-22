module.exports = {
  // 网站标题
  title: 'nandit-vue',
  // 网站描述
  description: '基于vue3+vant的前端组件库',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // 这是部署到github相关的配置
  base: '/nandit-vue-vant/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.png',  // 左上角导航logo
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上，默认为1（只会显示h2标题），若 sidebar 下也配置该属性，则以 sidebar 的为准
    lastUpdated: '最后更新时间', // 显示在文档右下角：每个文件git最后提交的时间 （一定是要基于 git 才会生效）
    activeHeaderLinks: true, // 当用户通过滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新, 默认为 true
    nextLinks: true, // 显示下一篇链接, 默认为 true
    prevLinks: true, // 显示上一篇链接, 默认为 true
    nav:[
      { text: '指南', link: '/guide/' }, // 内部链接
      { text: '帮助', link: '/help/' },
      { text: '博客', link: 'https://blog.csdn.net/tglsaturn', target:'_blank' }, // 外部链接
      {
        text: 'Git',
        items: [  // 使用 items 则展示为下拉列表
          { text: 'Gitee', link: 'https://gitee.com/jiuage' },
          { text: 'Github', link: 'https://github.com' }
        ]
      }
    ],
    sidebar: {  // 设置多个侧边栏, guide 和 config 两个目录
      '/guide/':[  // 设置侧边栏分组, 通过设置 children 将页面划分到分组里
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
      '/help/': 'auto'  // 配置 auto 适合单文件 README.md 的场景, 自动生成侧边栏
    }
  }
}
