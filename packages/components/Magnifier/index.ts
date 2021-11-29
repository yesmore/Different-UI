import { App } from 'vue'
import Magnifier from './src/Magnifier.vue'
import '../../theme/components/Magnifier.css'

Magnifier.install = (app: App): void => {
  app.component(Magnifier.name, Magnifier)
}

export default Magnifier
