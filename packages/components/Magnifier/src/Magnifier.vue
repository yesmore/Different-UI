<template>
  <div id="df-magnifier">
    <div
      v-magnifier
      class="df-mag-img-wrapper df-shadow-base"
      :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
    >
      <!-- 放大镜 -->
      <a
        class="df-mag-point-wrapper df-shadow-light"
        :href="link"
        :target="blank ? '_blank' : ''"
        :style="{
          width: magWidth + 'px',
          height: magHeight + 'px',
          borderRadius: magRadius,
        }"
      >
        <!-- 被放大的图片 -->
        <img
          class="df-mag-img"
          :src="imgUrl"
          :alt="imgAlt"
          :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
        />
      </a>

      <!-- 显示的图片，原图 -->
      <a :href="link">
        <img class="df-mag-img-static" :src="imgUrl" :alt="imgAlt" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import magnifier from './directives/magnifier'
import { magnifierProps } from './Magnifier'

export default defineComponent({
  name: 'df-magnifier',
  props: magnifierProps,
  directives: {
    magnifier,
  },
})
</script>
