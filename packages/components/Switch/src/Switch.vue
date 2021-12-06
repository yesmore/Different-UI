<template>
  <span id="df-switch" @click="handleChange">
    <input
      :style="{}"
      v-model="switch_on"
      class="df-switch-input"
      :class="['df-switch-input-' + activeColor || 'primary']"
      type="checkbox"
    />
    <label
      class="df-switch-slider"
      :class="['df-switch-slider-' + activeColor || 'primary']"
    ></label>
    <label v-if="showLabel" class="df-switch-label">
      <slot name="label">
        {{ labelText || 'Label' }}
      </slot>
    </label>
  </span>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-switch',
  props: {
    activeColor: {
      type: String,
      default: 'primary',
    },
    labelText: {
      type: String,
      default: 'Label',
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const state = reactive({
      switch_on: true,
    })

    const handleChange = () => {
      state.switch_on = !state.switch_on
      ctx.emit('handleChangeStatus', state.switch_on)
    }

    return {
      handleChange,
      ...toRefs(state),
    }
  },
})
</script>
