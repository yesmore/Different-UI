import { App } from 'vue'
import Carousel from './src/Carousel.vue'
import '../../theme/src/components/Carousel.scss'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
}

export default Carousel
