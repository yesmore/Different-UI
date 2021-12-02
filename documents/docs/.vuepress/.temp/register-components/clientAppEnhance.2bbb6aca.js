import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("DfTemplate", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/DfTemplate.vue"))),
  app.component("DfIcon", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/DfIcon.vue"))),
  app.component("DfButton", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/button/DfButton.vue"))),
  app.component("DfMagnifier", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/magnifier/DfMagnifier.vue"))),
  app.component("DfModal", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/modal/DfModal.vue"))),
  app.component("DfModalTemplate", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/modal/DfModalTemplate.vue"))),
  app.component("DfStarsRate", defineAsyncComponent(() => import("C:/Users/86136/Desktop/repository/different-ui/different-ui/documents/docs/.vuepress/components/starsRate/DfStarsrate.vue")))
}
