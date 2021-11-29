import { App } from 'vue'
import StarsRate from './src/StarsRate.vue'
import '../../theme/components/StarsRate.css'

StarsRate.install = (app: App): void => {
  app.component(StarsRate.name, StarsRate)
}

export default StarsRate
