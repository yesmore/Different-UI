// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.ts', // 示例入口
      template: 'public/index.html', // 模板
      filename: 'index.html', // 输出文件
    },
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // ~ 指向 packages 目录
    // console.log(path.resolve('packages'))
    config.resolve.alias.set('~', path.resolve('packages'))
  },
}