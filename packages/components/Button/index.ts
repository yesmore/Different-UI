/**
 * 按需加载
 *  import { DfButton } from 'different-ui'
 */

import { App } from 'vue'
import Button from './src/Button.vue'
import '../../theme/src/components/Button.scss'

// 定义 install 方法， App 作为参数
Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button
