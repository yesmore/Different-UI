import { App } from 'vue'

import DfButton from './components/Button'
import DfCarousel from './components/Carousel'
import DfCarouselItem from './components/Carousel/item'
import DfTreeMenu from './components/TreeMenu'
import DfTreeMenuItem from './components/TreeMenu/item'
import DfTreeSubMenu from './components/TreeMenu/subMenu'
import DfTreeReSubMenu from './components/TreeMenu/reSubMenu'
import DfSelector from './components/Selector'
import DfMagnifier from './components/Magnifier'
import DfStarsRate from './components/StarsRate'
import DfModal from './components/Modal'

// import './theme/src/index.scss'
import './theme/src/Icon/iconfont.css'

// 所有插件列表
const components = [
  DfButton,
  DfCarousel,
  DfCarouselItem,
  DfTreeMenu,
  DfTreeMenuItem,
  DfTreeSubMenu,
  DfTreeReSubMenu,
  DfSelector,
  DfMagnifier,
  DfStarsRate,
  DfModal,
]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有插件
  components.map((component) => app.component(component.name, component))
}

// 按需注册
export {
  DfButton,
  DfCarousel,
  DfCarouselItem,
  DfTreeMenu,
  DfTreeMenuItem,
  DfTreeSubMenu,
  DfTreeReSubMenu,
  DfSelector,
  DfMagnifier,
  DfStarsRate,
  DfModal,
}
// 全局注册
export default {
  install,
}
