<template>
  <df-tree-sub-menu>
    <template #sub-menu-title>{{ data?.title }}</template>
    <template v-for="c of data?.children">
      <df-tree-menu-item :key="c.id" v-if="!c.children">
        {{ c.title }}
      </df-tree-menu-item>
      <df-tree-resub-menu v-else :key="c" :data="c"></df-tree-resub-menu>
    </template>
  </df-tree-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'df-tree-resub-menu',
  props: {
    data: Object, // children所在的item
  },
})
</script>
