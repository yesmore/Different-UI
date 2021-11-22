<template>
  <div id="df-selector" v-focus>
    <df-selector-input
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <df-selector-menu
      :data="data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import DfSelectorInput from './SelectorInput.vue'
import DfSelectorMenu from './SelectorMenu.vue'
import focus from './directives/focus'

export default defineComponent({
  name: 'df-selector',
  components: { DfSelectorInput, DfSelectorMenu },
  props: {
    data: Array,
    placeholder: String,
  },
  directives: {
    focus,
  },
  setup(props, ctx) {
    const state = reactive({
      inputValue: '',
      searchValue: '',
    })

    const setItemValue = (item: { text: string; value: any }): void => {
      state.inputValue = item.text
      ctx.emit('setItemValue', item.value)
    }

    const searchOptions = (value: string): void => {
      state.searchValue = value
    }

    return {
      setItemValue,
      searchOptions,
      ...toRefs(state),
    }
  },
})
</script>
