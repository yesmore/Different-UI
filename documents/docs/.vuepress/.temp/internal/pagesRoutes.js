import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-623cbb20","/component/animation.html","Animation 动画",["/component/animation","/component/animation.md"]],
  ["v-1fdc817c","/component/button.html","Button 按钮",["/component/button","/component/button.md"]],
  ["v-d9a1ecc4","/component/card.html","Card 卡片",["/component/card","/component/card.md"]],
  ["v-4ee9c1d5","/component/icon.html","Iconfont 图标字体",["/component/icon","/component/icon.md"]],
  ["v-44426a34","/component/magnifier.html","Magnifier 图片放大镜",["/component/magnifier","/component/magnifier.md"]],
  ["v-d8f6f186","/component/message.html","Message 消息框",["/component/message","/component/message.md"]],
  ["v-da3d69d2","/component/modal.html","Modal 模态框",["/component/modal","/component/modal.md"]],
  ["v-0de0ac79","/component/more.html","More 更多",["/component/more","/component/more.md"]],
  ["v-952a5aea","/component/","Introduction 组件说明",["/component/index.html","/component/README.md"]],
  ["v-448c9c03","/component/starsrate.html","StarsRate 评分",["/component/starsrate","/component/starsrate.md"]],
  ["v-07a6a2ba","/component/switch.html","Switch 开关",["/component/switch","/component/switch.md"]],
  ["v-07d3ed64","/component/toolClass.html","ToolClass 工具类",["/component/toolClass","/component/toolClass.md"]],
  ["v-2d0a870d","/en/","",["/en/index.html","/en/README.md"]],
  ["v-43288db3","/guide/link.html","链接",["/guide/link","/guide/link.md"]],
  ["v-fffb8e28","/guide/","介绍",["/guide/index.html","/guide/README.md"]],
  ["v-621628ba","/guide/start.html","快速上手",["/guide/start","/guide/start.md"]],
  ["v-14ac19b5","/help/","帮助",["/help/index.html","/help/README.md"]],
  ["v-29665334","/en/component/animation.html","Animation 动画",["/en/component/animation","/en/component/animation.md"]],
  ["v-2097fc30","/en/component/button.html","Button",["/en/component/button","/en/component/button.md"]],
  ["v-b4f895ec","/en/component/card.html","Card 卡片",["/en/component/card","/en/component/card.md"]],
  ["v-6e215a35","/en/component/color.html","",["/en/component/color","/en/component/color.md"]],
  ["v-613e6d41","/en/component/icon.html","Iconfont",["/en/component/icon","/en/component/icon.md"]],
  ["v-5f0e2e20","/en/component/layout.html","",["/en/component/layout","/en/component/layout.md"]],
  ["v-b5ef3a0c","/en/component/magnifier.html","Magnifier",["/en/component/magnifier","/en/component/magnifier.md"]],
  ["v-69bbe5aa","/en/component/modal.html","Modal 模态框",["/en/component/modal","/en/component/modal.md"]],
  ["v-203557e5","/en/component/more.html","开发中",["/en/component/more","/en/component/more.md"]],
  ["v-108144c2","/en/component/","Component Introduction",["/en/component/index.html","/en/component/README.md"]],
  ["v-0bb63417","/en/component/starsrate.html","StarsRate 评分",["/en/component/starsrate","/en/component/starsrate.md"]],
  ["v-5103b9b4","/en/component/switch.html","Switch 开关",["/en/component/switch","/en/component/switch.md"]],
  ["v-6204f510","/en/component/toolClass.html","ToolClass 工具类",["/en/component/toolClass","/en/component/toolClass.md"]],
  ["v-add861c2","/en/guide/link.html","Link",["/en/guide/link","/en/guide/link.md"]],
  ["v-e6412400","/en/guide/","Information",["/en/guide/index.html","/en/guide/README.md"]],
  ["v-2671d7b7","/en/guide/start.html","Quick start",["/en/guide/start","/en/guide/start.md"]],
  ["v-38ec1bbe","/en/help/","帮助",["/en/help/index.html","/en/help/README.md"]],
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
