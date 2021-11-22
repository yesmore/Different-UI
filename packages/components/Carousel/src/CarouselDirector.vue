<template>
  <div id="df-carousel-director">
    <div
      class="df-carousel-director df-carousel-dir-next"
      v-if="dir === 'next'"
    >
      <a href="javascript:;" @click="dirClick(dir)">
        <i class="iconfont icon-jiantou1"></i>
      </a>
    </div>
    <div
      class="df-carousel-director df-carousel-dir-prev"
      v-else-if="dir === 'prev'"
    >
      <a href="javascript:;" @click="dirClick(dir)">
        <i class="iconfont icon-jiantou1"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'df-carousel-director',
  props: {
    dir: String,
  },

  setup(props, ctx) {
    const dirClick = (dir: string | undefined) => {
      ctx.emit('dirClick', dir)
    }

    return {
      dirClick,
    }
  },
})
</script>
