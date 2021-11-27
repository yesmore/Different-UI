<template>
  <button
    :class="[
      'df-btn',
      color ? 'df-btn-' + color : 'df-btn-default',
      type ? 'df-btn-type-' + type : 'df-btn-type-default',
      size ? 'df-btn-size-' + size : 'df-btn-size-default',
      radius ? 'df-btn-radius-' + radius : 'df-btn-radius-default',
      round === true ? 'df-btn-round-' + size : '',
    ]"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'df-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'default',
    },
    radius: {
      type: String,
      default: 'default',
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // console.log(props)

    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '../../theme/src/components/Button.scss';
@import '../../theme/src/Icon/iconfont.css';
</style>
