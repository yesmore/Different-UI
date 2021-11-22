<template>
  <div id="df-magnifier">
    <div
      v-magnifier
      class="df-mag-img-wrapper df-custom-shadow"
      :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
    >
      <!-- 放大镜 -->
      <a
        class="df-mag-point-wrapper df-custom-shadow"
        :href="link"
        :target="blank ? '_blank' : ''"
        :style="{ width: magWidth + 'px', height: magHeight + 'px' }"
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

export default defineComponent({
  name: 'df-magnifier',
  props: {
    imgWidth: {
      type: Number,
      default: 375,
    },
    imgHeight: {
      type: Number,
      default: 400,
    },
    magWidth: {
      type: Number,
      default: 150,
    },
    magHeight: {
      type: Number,
      default: 150,
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
  },
  directives: {
    magnifier,
  },
  setup(props) {
    return {}
  },
})
</script>
