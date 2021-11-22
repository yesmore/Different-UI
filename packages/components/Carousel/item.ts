import { App } from 'vue'
import CarouselItem from './src/CarouselItem.vue'

// 定义 install 方法， App 作为参数
CarouselItem.install = (app: App): void => {
  app.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem
