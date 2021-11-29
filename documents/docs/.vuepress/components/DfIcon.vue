<template>
  <div class="df-vuepress-icon-card">
    <div class="demo-bar">
      <i class="iconfont df-icon-QRcode"></i>
      <i class="iconfont df-icon-rising"></i>
      <i class="iconfont df-icon-play"></i>
      <i class="iconfont df-icon-Notvisible"></i>
      <i class="iconfont df-icon-pic"></i>
      <i class="iconfont df-icon-nav-list"></i>
      <i class="iconfont df-icon-integral"></i>
      <i class="iconfont df-icon-gift"></i>
      <i class="iconfont df-icon-data"></i>
      <i class="iconfont df-icon-editor"></i>
      <i class="iconfont df-icon-history"></i>
      <i class="iconfont df-icon-dollar"></i>
      <i class="iconfont df-icon-copy"></i>
      <i class="iconfont df-icon-code"></i>
      <i class="iconfont df-icon-component"></i>
      <i class="iconfont df-icon-bussiness-man"></i>
      <i class="iconfont df-icon-all"></i>
      <i class="iconfont df-icon-auto"></i>
    </div>
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
.df-vuepress-icon-card {
  padding: 15px 15px 0;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    1px 1px 10px 0px rgba(134, 134, 134, 0.1),
    1px 1px 3px 0px rgba(75, 75, 75, 0.1);
  position: relative;

  .demo-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .iconfont {
      display: inline-block;
      width: 10%;
      padding: 15px;
      font-size: 30px;

      &:hover {
        background-color: rgba(218, 218, 218, 0.3);
      }
    }
  }
}
</style>
