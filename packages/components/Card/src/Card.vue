<template>
  <div
    class="df-card"
    :style="{
      ...bodyStyle,
      background: `url(${coverUrl}) no-repeat center`,
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
import { defineComponent, PropType } from 'vue'
// import { ICardOptions } from './Card.types'

export default defineComponent({
  name: 'df-card',
  props: {
    bodyStyle: {
      type: Object as PropType<StyleSheet>,
      default() {
        return {}
      },
    },
    coverUrl: {
      type: String,
    },
  },
})
</script>
