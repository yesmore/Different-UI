import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("DfTemplate", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/DfTemplate.vue"))),
  app.component("DfIcon", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/DfIcon.vue"))),
  app.component("DfButton", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/button/DfButton.vue"))),
  app.component("DfMagnifier", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/magnifier/DfMagnifier.vue")))
}
