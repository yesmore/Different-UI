import type { App } from 'vue'
import Message from './src/Message'
;(Message as any).install = (app: App): void => {
  // 兼容vue2，在this上使用
  app.config.globalProperties.$message = Message
}

// use
export { Message }

export default Message
