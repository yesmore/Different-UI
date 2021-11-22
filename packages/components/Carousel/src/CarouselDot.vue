<template>
  <div id="df-carousel-dot-wrapper" v-show="showDot">
    <div
      class="df-carousel-dot-item"
      v-for="item in itemLen"
      :key="item"
      @click="dotClick(item - 1)"
    >
      <a
        href="javascript:;"
        class="df-carousel-dot-item-link"
        :style="{
          backgroundColor:
            item - 1 === currentIndex ? dotBgColor : 'rgba(0, 0, 0, 0.2)',
        }"
      >
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'df-carousel-dot',
  props: {
    itemLen: Number,
    currentIndex: Number,
    showDot: {
      type: Boolean,
      default: true,
    },
    dotBgColor: {
      type: String,
      default: '#ff5000',
    },
  },

  setup(props, ctx) {
    const dotClick = (index: number) => {
      ctx.emit('dotClick', index)
    }

    return {
      dotClick,
    }
  },
})
</script>
