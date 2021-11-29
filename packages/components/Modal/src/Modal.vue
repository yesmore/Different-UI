<template>
  <transition :name="animate">
    <div :class="[mask === true ? 'df-modal-mask' : '']">
      <transition :name="animate">
        <div
          v-show="modalShow"
          id="df-modal"
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
            <h2 :style="{ color: headerStyle.color }">{{ headText }}</h2>
            <a
              href="javascript:;"
              :style="{ color: headerStyle.color || 'grey' }"
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
                  backgroundColor: headerStyle.backgroundColor,
                  color: headerStyle.color,
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
} from 'vue'
import { modalProps } from './Modal'

export default defineComponent({
  name: 'df-modal',
  props: modalProps,
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
