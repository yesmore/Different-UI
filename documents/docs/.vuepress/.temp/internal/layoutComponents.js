import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/repository/different-ui/different-ui/documents/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
