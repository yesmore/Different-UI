import { App } from 'vue'
import Magnifier from './src/Magnifier.vue'
import './style/index.scss'

Magnifier.install = (app: App): void => {
  app.component(Magnifier.name, Magnifier)
}

export default Magnifier
