import { App } from 'vue'
import LoginBar from './src/LoginBar.vue'
import '../../theme/components/LoginBar.css'

// 定义 install 方法， App 作为参数
LoginBar.install = (app: App): void => {
  app.component(LoginBar.name, LoginBar)
}

export default LoginBar
