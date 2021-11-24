import { App } from 'vue'
import StarsRate from './src/StarsRate.vue'
import '../../theme/src/components/StarsRate.scss'

StarsRate.install = (app: App): void => {
  app.component(StarsRate.name, StarsRate)
}

export default StarsRate
