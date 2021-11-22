<template>
  <div class="df-modal-mask" v-show="mask">
    <div
      v-show="modalShow"
      id="df-modal"
      class="shadow-custom"
      ref="dfModal"
      :style="{
        ...modalStyle,
        marginLeft:
          -parseInt(modalStyle.width.replace(/[^0-9]/gi, '')) / 2 + 'px',
        top: position === 'center' ? '50%' : '50px',
        marginTop: position === 'center' ? -dfModalHeight / 2 + 'px' : '',
      }"
    >
      <header class="df-modal-header" :style="headerStyle">
        <h2>{{ headText }}</h2>
        <a
          href="javascript:;"
          :style="{ color: headerStyle.color || 'grey' }"
          @click="cancel"
        >
          <i class="iconfont icon-quxiao1"></i>
        </a>
      </header>

      <article class="df-modal-content" :style="contentStyle">
        <p>{{ contentText }}</p>
      </article>

      <footer class="df-modal-footer" :style="footerStyle" v-show="actionBtn">
        <div class="df-modal-action">
          <button
            class="df-modal-confirm df-custom-btn"
            :style="{
              backgroundColor: headerStyle.backgroundColor || '#fff',
              color: headerStyle.color || 'white',
            }"
            @click="confirm"
          >
            {{ confirmText }}
          </button>
          <button class="df-modal-cancel df-custom-btn" @click="cancel">
            {{ cancelText }}
          </button>
        </div>
      </footer>
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
} from 'vue'

export default defineComponent({
  name: 'df-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    modalStyle: {
      type: Object,
      default: () => {
        return {}
      },
    },
    headerStyle: {
      type: Object,
      default: () => {
        return {
          color: 'red',
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
      default: '#000',
    },
    headText: {
      type: String,
      default: '',
    },
    headTextColor: {
      type: String,
      default: '#fff',
    },
    contentText: {
      type: String,
      default: '',
    },
    contentTextColor: {
      type: String,
      default: '#000',
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
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()

    const state = reactive({
      dfModalHeight: 0,
      modalShow: props.show,
      mask: props.mask,
    })

    const confirm = () => {
      state.modalShow = false
      state.mask = false
      ctx.emit('confirm', {
        msg: 'modal-confirm',
      })
    }
    const cancel = () => {
      state.modalShow = false
      state.mask = false
      ctx.emit('cancel', {
        msg: 'modal-cancel',
      })
    }

    onMounted(() => {
      state.dfModalHeight = (instance?.refs.dfModal as any).offsetHeight
    })

    return {
      confirm,
      cancel,
      ...toRefs(state),
    }
  },
})
</script>
