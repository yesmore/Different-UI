<template>
  <div id="df-magnifier">
    <div
      v-magnifier
      class="df-mag-img-wrapper"
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
          cursor: cursor || 'crosshair',
          transform: `scale(${scale || 1.7})`,
        }"
      >
        <!-- 被放大的图片 -->
        <img
          class="df-mag-img"
          :src="imgUrl"
          :alt="imgAlt"
          :style="{
            minWidth: imgWidth + 'px',
            maxHeight: imgHeight + 'px',
          }"
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
// import { magnifierProps } from './Magnifier'

export default defineComponent({
  name: 'df-magnifier',
  props: {
    imgWidth: {
      type: Number || String,
      default: 375,
    },
    imgHeight: {
      type: Number || String,
      default: 600,
    },
    magWidth: {
      type: Number || String,
      default: 100,
    },
    magHeight: {
      type: Number || String,
      default: 100,
    },
    magRadius: {
      type: String,
      default: '50%',
    },
    blank: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
    },
    imgAlt: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    cursor: {
      type: String,
    },
    scale: {
      type: Number,
    },
  },
  directives: {
    magnifier,
  },
})
</script>
