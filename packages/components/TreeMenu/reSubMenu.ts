import { App } from 'vue'
import TreeReSubMenu from './src/TreeReSubMeun.vue'

TreeReSubMenu.install = (app: App): void => {
  app.component(TreeReSubMenu.name, TreeReSubMenu)
}

export default TreeReSubMenu
