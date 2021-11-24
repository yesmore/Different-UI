import { App } from 'vue'
import Magnifier from './src/Magnifier.vue'
import '../../theme/src/components/Magnifier.scss'

Magnifier.install = (app: App): void => {
  app.component(Magnifier.name, Magnifier)
}

export default Magnifier
