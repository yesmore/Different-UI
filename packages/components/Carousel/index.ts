import { App } from 'vue'
import Carousel from './src/Carousel.vue'
import '../../theme/components/Carousel.css'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
}

export default Carousel
