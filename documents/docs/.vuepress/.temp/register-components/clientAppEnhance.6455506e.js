import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("DfButton", defineAsyncComponent(() => import("C:/Users/86136/Desktop/packages/components/Button/index.ts")))
}
