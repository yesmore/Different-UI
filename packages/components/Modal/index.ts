import { App } from 'vue'
import Modal from './src/Modal.vue'
import './style/index.scss'

Modal.install = (app: App): void => {
  app.component(Modal.name, Modal)
}

export default Modal
