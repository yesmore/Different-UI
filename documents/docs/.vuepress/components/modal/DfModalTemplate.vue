<template>
  <div class="df-vuepress-modal-demo-card">
    <!-- <df-button @click="show">显示{{ showMod }}</df-button> -->
    <a class="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
    <div class="modal-container">
      <!-- <df-modal
        animate="fade"
        :mask="false"
        :modalStyle="{
          // width: '300px',
          borderRadius: '5px',
        }"
        :contentStyle="{
          // color: '#fff',
          height: '100px',
        }"
        headText="模态框标题"
        contentText="模态框内容"
        position="center"
        :showHead="true"
        :actionBtn="false"
        confirmText="确定哈哈"
        cancelText="取消按钮"
        @confirm="modalConfirm"
        @cancel="modalClose"
      /> -->
    </div>

    <slot name="src"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
// import DfModal from './DfModal'
export default defineComponent({
  name: 'df-modal-template',
  components: {
    // DfModal,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })
    const show = () => {
      state.showMod = !state.showMod
    }
    const modalConfirm = (data: { msg: string; show: boolean }) => {
      console.log(data.msg, data.show)
      state.showMod = data.show
    }
    const modalClose = (data: { msg: string; show: boolean }) => {
      console.log(data.msg, data.show)
      state.showMod = data.show
    }
    const handleCall = () => {
      console.log('111')
    }
    return {
      handleCall,
      show,
      modalConfirm,
      modalClose,
      ...toRefs(state),
    }
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
