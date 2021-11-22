import { App } from 'vue'
import TreeMenu from './src/TreeMenu.vue'
import './style/index.scss'

TreeMenu.install = (app: App): void => {
  app.component(TreeMenu.name, TreeMenu)
}

export default TreeMenu
