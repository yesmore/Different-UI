<template>
  <transition :name="animate || 'fade'">
    <div :class="[mask === true ? 'df-modal-mask' : '']">
      <transition :name="animate || 'fade'">
        <div
          id="df-modal"
          ref="dfModal"
          :style="{
            ...modalStyle,
            marginLeft:
              -parseInt(
                modalStyle?.width
                  ? modalStyle?.width.replace(/[^0-9]/gi, '')
                  : 0,
              ) /
                2 +
              'px',
            // top: position === 'center' ? '30%' : '50px',
            marginTop: position === 'center' ? dfModalHeight / 5 + 'px' : '',
          }"
        >
          <header class="df-modal-header" :style="headerStyle">
            <h2 :style="{ color: headerStyle?.color }">{{ headText }}</h2>
            <a
              href="javascript:;"
              :style="{ color: headerStyle?.color || 'grey' }"
              @click="cancel"
            >
              <i class="iconfont df-icon-close"></i>
            </a>
          </header>

          <article class="df-modal-content" :style="contentStyle">
            <p>{{ contentText }}</p>
          </article>

          <footer
            class="df-modal-footer"
            :style="footerStyle"
            v-show="actionBtn"
          >
            <div class="df-modal-action">
              <button
                class="df-modal-confirm df-modal-btn"
                :style="{
                  backgroundColor: headerStyle?.backgroundColor,
                  color: headerStyle?.color,
                }"
                @click="confirm"
              >
                {{ confirmText }}
              </button>
              <button class="df-modal-cancel df-modal-btn" @click="cancel">
                {{ cancelText }}
              </button>
            </div>
          </footer>
        </div>
      </transition>
    </div>
  </transition>
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
