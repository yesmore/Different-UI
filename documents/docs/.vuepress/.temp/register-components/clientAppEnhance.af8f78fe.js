import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("DfTemplate", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/DfTemplate.vue"))),
  app.component("DfIcon", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/DfIcon.vue"))),
  app.component("DfAnimation", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/DfAnimation.vue"))),
  app.component("DfButton", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/button/DfButton.vue"))),
  app.component("DfMagnifier", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/magnifier/DfMagnifier.vue"))),
  app.component("DfMessage", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/message/DfMessage.vue"))),
  app.component("DfMessageTemplate", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/message/DfMessageTemplate.vue"))),
  app.component("DfModal", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/modal/DfModal.vue"))),
  app.component("DfModalTemplate", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/modal/DfModalTemplate.vue"))),
  app.component("DfStarsrate", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/starsRate/DfStarsrate.vue"))),
  app.component("DfCard", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/card/DfCard.vue"))),
  app.component("DfSwitch", defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/docs/.vuepress/components/switch/DfSwitch.vue")))
}
