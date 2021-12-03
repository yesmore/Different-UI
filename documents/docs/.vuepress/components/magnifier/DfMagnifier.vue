<template>
  <div id="df-magnifier">
    <!-- <ClientOnly></ClientOnly> -->
    <div
      class="df-mag-img-wrapper"
      :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px',
      }"
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
            maxWidth: imgWidth + 'px',
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
import { defineComponent, onMounted } from 'vue'
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
  setup() {
    function getDomStyle(el: any, prop: any) {
      return parseInt(window.getComputedStyle(el, null)[prop])
    }
    onMounted(() => {
      const oImgWrap = document.querySelector('.df-mag-img-wrapper')
      const oMagWrap = oImgWrap.querySelector('.df-mag-point-wrapper') // 放大镜
      const oMagImg = oMagWrap.querySelector('.df-mag-img') // 放大镜里的图片

      const imgWidth = getDomStyle(oImgWrap, 'width')
      const imgHeight = getDomStyle(oImgWrap, 'height')

      const magWidth = getDomStyle(oMagWrap, 'width')
      const magHeight = getDomStyle(oMagWrap, 'height')

      // 图片容器到浏览器左上距离
      const imgX = oImgWrap.offsetParent.offsetLeft + oImgWrap.offsetLeft
      const imgY = oImgWrap.offsetParent.offsetTop + oImgWrap.offsetTop + 2
      // const imgX = oImgWrap.offsetLeft
      // const imgY = oImgWrap.offsetTop

      const init = () => {
        bindEvent()
      }

      function bindEvent() {
        oImgWrap.addEventListener(
          'mouseover',
          function (e: MouseEvent) {
            oMagWrap.className += ' df-mag-show'
            showMag(getXY(e).x, getXY(e).y)

            document.addEventListener('mousemove', handleMouseMove, false)
          },
          false,
        )

        oImgWrap.addEventListener('mouseout', handleMouseOut, false)
      }

      function handleMouseMove(e: MouseEvent) {
        const { x, y, mouseX, mouseY } = getXY(e)
        showMag(x, y, mouseX, mouseY)
        // console.log('监听鼠标移动：', getXY(e))
        // console.log('监听鼠标移动(imgX,imgY)：', imgX, imgY)
      }

      function handleMouseOut() {
        oMagWrap.className = 'df-mag-point-wrapper df-shadow-light'
        document.removeEventListener('mousemove', handleMouseMove, false)
        // console.log(oMagWrap.classList)
      }

      function showMag(x: number, y: number, mouseX?: number, mouseY?: number) {
        oMagWrap.style.left = x + 'px'
        oMagWrap.style.top = y + 'px'

        oMagImg.style.left = -x + 'px'
        oMagImg.style.top = -y + 'px'

        if (
          mouseX &&
          mouseY &&
          (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight)
        ) {
          oMagWrap.className = 'df-mag-point-wrapper df-shadow-light'
          document.removeEventListener('mousemove', handleMouseMove, false)
        }
      }

      function getXY(e: MouseEvent) {
        return {
          x: e.pageX - imgX - magWidth / 2, // 当前鼠标位置（以原图左上角为原点）
          y: e.pageY - imgY - magHeight / 2,
          mouseX: e.pageX - imgX, // 鼠标距原图边框位置
          mouseY: e.pageY - imgY,
        }
      }

      init()
    }),
      function getDomStyle(el: any, prop: any) {
        return parseInt(window.getComputedStyle(el, null)[prop])
      }
  },
})
</script>

<style lang="scss" scoped>
@import '../../theme/components/Magnifier.css';
@import '../../theme/src/Icon/iconfont.css';
</style>
