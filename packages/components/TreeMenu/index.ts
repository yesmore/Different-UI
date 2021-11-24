import { App } from 'vue'
import TreeMenu from './src/TreeMenu.vue'
import '../../theme/src/components/TreeMenu.scss'

TreeMenu.install = (app: App): void => {
  app.component(TreeMenu.name, TreeMenu)
}

export default TreeMenu
