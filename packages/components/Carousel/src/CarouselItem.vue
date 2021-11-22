<template>
  <transition :name="animation">
    <div id="df-carousel-item" v-show="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  watch,
} from 'vue'

export default defineComponent({
  name: 'df-carousel-item',

  setup: function () {
    // 获取当前实例
    const instance = getCurrentInstance()

    const state = reactive({
      selfIndex: (instance as ComponentInternalInstance).vnode.key, // 获取当前响应式数据
      currentIndex: (instance as any).parent.ctx.currentIndex, // 获取父级元素数据
      animation: (instance as any).parent.ctx.animation,
    })

    // 监听动态属性改变
    watch(
      () => {
        return (instance as any).parent.ctx.currentIndex
      },
      (value) => {
        state.currentIndex = value
      },
    )

    return {
      ...toRefs(state),
    }
  },
})
</script>
