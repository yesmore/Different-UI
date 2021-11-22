<template>
  <div class="df-tree-sub-menu" @mouseenter="showSub" @mouseleave="hideSub">
    <div class="df-tree-sub-menu-title">
      <slot name="sub-menu-title"></slot>
      <span class="df-tree-sub-menu-icon df-hover">
        <i class="iconfont icon-jiantou3"></i>
      </span>
    </div>
    <div class="df-tree-sub-menu-item" v-show="subShow">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'df-tree-sub-menu',
  setup() {
    const subShow = ref(false)

    const showSub = () => {
      subShow.value = true
    }

    const hideSub = () => {
      subShow.value = false
    }

    return {
      showSub,
      hideSub,
      subShow,
    }
  },
})
</script>
