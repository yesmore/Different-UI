<template>
  <div id="open-modal" class="modal-window">
    <div>
      <a href="#" title="Close" class="modal-close">Close</a>
      <h1>Voilà!</h1>
      <div>
        A CSS-only modal based on the :target pseudo-class. Hope you find it
        helpful.
      </div>
      <div><small>Check out</small></div>
      <a href="javascript:;" target="_blank"
        >👉 Amino: Live CSS Editor for Chrome</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  getCurrentInstance,
  ref,
} from 'vue'
import { modalProps } from './Modal'
export default defineComponent({
  name: 'df-modal',
  props: {
    mask: {
      type: Boolean,
      default: false,
    },
    showModal: {
      type: Boolean,
      default: false,
    },
    modalStyle: {
      type: Object,
      default: () => {
        return {
          width: '300',
        }
      },
    },
    headerStyle: {
      type: Object,
      default: () => {
        return {
          color: '',
        }
      },
    },
    contentStyle: {
      type: Object,
      default: () => {
        return {}
      },
    },
    footerStyle: {
      type: Object,
      default: () => {
        return {}
      },
    },
    headColor: {
      type: String,
      default: '',
    },
    headText: {
      type: String,
      default: '',
    },
    headTextColor: {
      type: String,
      default: '',
    },
    contentText: {
      type: String,
      default: '',
    },
    contentTextColor: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'top',
    },
    actionBtn: {
      type: Boolean,
      default: false,
    },
    showHead: {
      type: Boolean,
      default: false,
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    animate: {
      type: String,
      default: 'fade',
    },
  },
  setup(props, ctx) {
    const instance = getCurrentInstance() as any
    const dfModal = ref(null as any)
    const state = reactive({
      dfModalHeight: 0,
      mask: props.mask,
      showModal: false,
    })
    const confirm = () => {
      state.mask = false
      ctx.emit('confirm', {
        msg: 'confirm',
        show: false,
      })
    }
    const cancel = () => {
      state.mask = false
      ctx.emit('cancel', {
        msg: 'cancel',
        show: false,
      })
    }
    onMounted(() => {
      // state.dfModalHeight = dfModal.value.offsetHeight
      state.dfModalHeight = window.innerHeight
      console.log('窗口高度', window.innerHeight)
    })
    return {
      confirm,
      cancel,
      dfModal,
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../theme/components/Modal.css';
@import '../../theme/src/Icon/iconfont.css';
</style>
