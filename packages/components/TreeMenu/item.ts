import { App } from 'vue'
import TreeMenuItem from './src/TreeMenuItem.vue'

TreeMenuItem.install = (app: App): void => {
  app.component(TreeMenuItem.name, TreeMenuItem)
}

export default TreeMenuItem
