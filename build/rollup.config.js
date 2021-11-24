import {
  nodeResolve
} from '@rollup/plugin-node-resolve'
import path from 'path'
// import commonjs from '@rollup/plugin-commonjs'
import {
  terser
} from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import sass from 'node-sass'
import scss from 'rollup-plugin-scss'
const {
  babel
} = require('@rollup/plugin-babel');
import pkg from '../package.json'
import vue from 'rollup-plugin-vue'

const deps = Object.keys(pkg.dependencies)
const babelOptions = {
  "presets": ['@babel/preset-env'],
}

const processSass = function (context, payload) {
  return new Promise((resolve, reject) => {
    sass.render({
      file: context
    }, function (err, result) {
      console.log(result);
      if (!err) {
        resolve(result);
      } else {
        console.log(err);
        reject(err)
      }
    });
  })
};

export default [{
  input: path.resolve(__dirname, '../packages/index.ts'), // 入口文件
  output: [{
    format: 'es', // 输出格式 amd es6 iife umd cjs
    file: pkg.module, // 打包后的存放文件
  }, ],
  plugins: [
    nodeResolve(),
    babel(babelOptions),
    vue({
      target: 'browser',
      css: false,
      exposeFilename: false,

    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
        include: ['packages/**/*', 'packages/**/**/*', 'typings/shims-vue.d.ts'],
        exclude: ['node_modules', 'packages/**/__tests__/*'],
      },
      abortOnError: false,
    }),
    scss({
      sass: require('node-sass'),
    }),
    postcss({
      extract: true, // true：分离出css文件，false：会在style里插入css
      extensions: ['css', 'scss'],
      process: processSass,
      minimize: false
    }),
    terser(),
  ],
  external(id) {
    return /^vue/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
  },
}, ]