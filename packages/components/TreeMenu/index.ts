import { App } from 'vue'
import TreeMenu from './src/TreeMenu.vue'
import '../../theme/components/TreeMenu.css'

TreeMenu.install = (app: App): void => {
  app.component(TreeMenu.name, TreeMenu)
}

export default TreeMenu
