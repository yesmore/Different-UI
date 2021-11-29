import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-1fdc817c","/component/button.html","Button",["/component/button","/component/button.md"]],
  ["v-35e09821","/component/color.html","",["/component/color","/component/color.md"]],
  ["v-4ee9c1d5","/component/icon.html","Iconfont",["/component/icon","/component/icon.md"]],
  ["v-00a16884","/component/layout.html","",["/component/layout","/component/layout.md"]],
  ["v-0de0ac79","/component/more.html","开发中",["/component/more","/component/more.md"]],
  ["v-952a5aea","/component/","Component Introduction",["/component/index.html","/component/README.md"]],
  ["v-43288db3","/guide/link.html","Link",["/guide/link","/guide/link.md"]],
  ["v-fffb8e28","/guide/","Information",["/guide/index.html","/guide/README.md"]],
  ["v-621628ba","/guide/start.html","Quick start",["/guide/start","/guide/start.md"]],
  ["v-14ac19b5","/help/","帮助",["/help/index.html","/help/README.md"]],
  ["v-2d0ad528","/zh/","",["/zh/index.html","/zh/README.md"]],
  ["v-42a9baa6","/zh/component/button.html","Button 按钮",["/zh/component/button","/zh/component/button.md"]],
  ["v-1ea0fb46","/zh/component/icon.html","Iconfont 图标字体",["/zh/component/icon","/zh/component/icon.md"]],
  ["v-44d0342c","/zh/component/more.html","",["/zh/component/more","/zh/component/more.md"]],
  ["v-5a5505fa","/zh/component/","组件说明",["/zh/component/index.html","/zh/component/README.md"]],
  ["v-35dfb0b8","/zh/guide/link.html","链接",["/zh/guide/link","/zh/guide/link.md"]],
  ["v-47357bdb","/zh/guide/","介绍",["/zh/guide/index.html","/zh/guide/README.md"]],
  ["v-6a008fd2","/zh/guide/start.html","快速上手",["/zh/guide/start","/zh/guide/start.md"]],
  ["v-2b9d3ce6","/zh/help/","帮助",["/zh/help/index.html","/zh/help/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
