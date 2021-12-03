import { App } from 'vue'
import Switch from './src/Switch.vue'
import '../../theme/components/Switch.css'

Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}

export default Switch
