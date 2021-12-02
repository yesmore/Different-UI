<template>
  <div
    class="df-card"
    :style="{
      ...bodyStyle,
      background: `url(${coverUrl}) no-repeat`,
      backgroundSize: scale,
    }"
  >
    <div class="df-card-body">
      <div class="df-card-title">
        <slot name="title">Card Title</slot>
      </div>
      <div class="df-card-content">
        <slot>
          The program should be written for others to read. Let the machine run
          it. It's just an incidental function.
        </slot>
      </div>
      <div class="df-card-action">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
// import { cardProps } from './Card'

export default defineComponent({
  name: 'df-card',
  props: {
    bodyStyle: {
      type: Object,
      default() {
        return {}
      },
    },
    coverUrl: {
      type: String,
    },
    fill: {
      type: String,
    },
  },
  setup(props) {
    const state = reactive({
      scale: props.fill,
    })

    switch (state.scale) {
      case 'fit':
        state.scale = 'cover'
        break
      case 'contain':
        state.scale = 'contain'
        break
      case 'width':
        state.scale = '100% auto'
        break
      case 'height':
        state.scale = 'auto 100%'
        break
      default:
        state.scale = 'cover'
        break
    }

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../theme/components/Card.css';
@import '../../theme/src/Icon/iconfont.css';
</style>
