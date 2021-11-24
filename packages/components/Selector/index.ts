import { App } from 'vue'
import Selector from './src/Selector.vue'
import '../../theme/src/components/Selector.scss'

Selector.install = (app: App): void => {
  app.component(Selector.name, Selector)
}

export default Selector
