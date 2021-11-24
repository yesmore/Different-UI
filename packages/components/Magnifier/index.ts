import { App } from 'vue'
import Magnifier from './src/Magnifier.vue'
import './style/Magnifier.scss'

Magnifier.install = (app: App): void => {
  app.component(Magnifier.name, Magnifier)
}

export default Magnifier
