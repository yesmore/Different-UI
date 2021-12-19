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
import DfCard from './components/Card'
import DfLoginbar from './components/LoginBar'
import DfSwitch from './components/Switch'
import DfMessage from './components/Message'

// import './theme/index.css'
// import './theme/components.css'
// import './theme/src/Icon/iconfont.css'

// 插件列表
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
  DfCard,
  DfLoginbar,
  DfSwitch,
  DfMessage,
]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 注册所有插件
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
  DfCard,
  DfSwitch,
  DfMessage,
}
// 全局注册
export default {
  install,
}
