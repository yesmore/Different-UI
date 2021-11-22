<template>
  <div id="df-no-data-tip">
    <i class="iconfont icon-archivedangan"></i><br />
    <slot><span>无数据</span></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoDataTip',
})
</script>
