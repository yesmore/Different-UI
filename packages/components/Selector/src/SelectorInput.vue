<template>
  <div class="df-selector-input-bar">
    <label class="df-selector-placeholder">{{ placeholder }}</label>
    <input
      type="text"
      class="df-selector-input"
      ref="inputValue"
      :value="value"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
      @blur="setValue(value)"
    />
    <i class="iconfont icon-arrowdownxiajiantou"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'df-selector-input',
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    },
    value: String,
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()

    const searchOptions = (e: any): void => {
      ctx.emit('searchOptions', e.target.value)
    }

    // 失焦后，记忆上一次选择内容
    const setValue = (value: string | undefined): void => {
      const _input: any = instance!.refs.inputValue

      if (_input.value.length > 0) {
        _input.value = value
      }
    }

    return {
      searchOptions,
      setValue,
    }
  },
})
</script>
