import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/Button.vue")))
}
