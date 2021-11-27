<template>
  <div class="df-vuepress-demo-card">
    <slot name="demo"></slot>
    <slot name="src"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.df-vuepress-demo-card {
  padding: 15px 15px 0;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    1px 1px 10px 0px rgba(134, 134, 134, 0.1),
    1px 1px 3px 0px rgba(75, 75, 75, 0.1);
  position: relative;
}
</style>
