import { App } from 'vue'
import Modal from './src/Modal.vue'
import '../../theme/src/components/Modal.scss'

Modal.install = (app: App): void => {
  app.component(Modal.name, Modal)
}

export default Modal
