import { App } from 'vue'
import TreeSubMenu from './src/TreeSubMenu.vue'

TreeSubMenu.install = (app: App): void => {
  app.component(TreeSubMenu.name, TreeSubMenu)
}

export default TreeSubMenu
