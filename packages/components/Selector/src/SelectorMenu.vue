<template>
  <div class="df-selector-menu">
    <template v-if="searchData.length > 0">
      <div
        class="df-selector-menu-item"
        v-for="(item, index) of searchData"
        :key="index"
        @click="setItemValue(item)"
      >
        {{ item.text }}
      </div>
    </template>
    <NoDataTip v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted, ref } from 'vue'
import NoDataTip from './NoDataTip.vue'

export default defineComponent({
  name: 'df-selector-menu',
  components: {
    NoDataTip,
  },
  props: {
    searchValue: {
      type: String,
      default: () => {
        ;('')
      },
    },
    data: {
      type: Array,
      default: () => [
        {
          id: 1,
          value: '1',
          text: '选项1',
        },
        {
          id: 2,
          value: '2',
          text: '选项2',
        },
        {
          id: 3,
          value: '3',
          text: '选项3',
        },
      ],
    },
  },
  setup(props, ctx) {
    const searchData = ref([] as any[]) // ts默认初始化空数组为 never[] 类型

    const setItemValue = (item: Record<string, unknown>): void => {
      ctx.emit('setItemValue', item)
    }
    onMounted(() => {
      searchData.value = props.data
    })

    // 过滤
    const filterData = (_value: string | undefined) => {
      searchData.value = props.data.filter((item: any) => {
        return item.text.toLowerCase().includes(props.searchValue.toLowerCase())
      })
    }

    // 监听输入变化
    watch(
      () => {
        return props.searchValue
      },
      (value) => {
        filterData(value)
      },
    )

    return {
      setItemValue,
      searchData,
    }
  },
})
</script>
