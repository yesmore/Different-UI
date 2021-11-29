import { App } from 'vue'
import Modal from './src/Modal.vue'
import '../../theme/components/Modal.css'

Modal.install = (app: App): void => {
  app.component(Modal.name, Modal)
}

export default Modal
