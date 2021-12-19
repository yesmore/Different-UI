<template>
  <button
    :class="[
      'df-btn',
      color !== 'default' ? 'df-btn-' + color : 'df-btn-primary',
      plain === true && color ? 'df-btn-plain-' + color : '',
      type !== '' ? 'df-btn-type-' + type : '',
      size !== 'default' ? 'df-btn-size-' + size : '',
      radius === '' ? 'df-btn-radius-' + radius : '',
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
// import { ButtonPropsType } from './Button'

export default defineComponent({
  name: 'df-button',
  props: {
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'default',
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
    plain: {
      type: Boolean,
      default: false,
    },
  } as const,
  setup(props) {
    props.color
    let el = document.querySelector('button')
  },
})
</script>
