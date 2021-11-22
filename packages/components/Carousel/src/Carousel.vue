<template>
  <div id="df-carousel">
    <div
      class="df-carousel-inner"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <CarouselDot
        :showDot="showDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      />
      <CarouselDirector dir="prev" @dirClick="dirClick" />
      <CarouselDirector dir="next" @dirClick="dirClick" />
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from 'vue'
import CarouselDot from './CarouselDot.vue'
import CarouselDirector from './CarouselDirector.vue'

export default defineComponent({
  name: 'df-carousel',
  components: { CarouselDot, CarouselDirector },
  props: {
    autoplay: { type: Boolean, default: true },
    duration: { type: Number, default: 3000 },
    initialIndex: {
      // 初始索引
      type: Number,
      default: 0,
    },
    showDot: {
      // 导航点
      type: Boolean,
      default: true,
    },
    showDirector: {
      // 指示器
      type: Boolean,
      default: true,
    },
    animation: {
      type: String,
      default: 'fade',
    },
    dotBgColor: {
      type: String,
    },
  },
  setup(props) {
    const instance = getCurrentInstance()
    const state = reactive({
      currentIndex: props.initialIndex,
      itemLen: 0,
      animation: props.animation,
    })

    let timer: number | undefined
    const autoPlay = () => {
      if (props.autoplay) {
        timer = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }
    const setIndex = (direction: string) => {
      switch (direction) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev':
          state.currentIndex -= 1
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }

    const dotClick = (index: number) => {
      state.currentIndex = index
    }

    const dirClick = (dir: string) => {
      setIndex(dir)
    }

    const mouseEnter = () => {
      _clearIntervalFn(timer)
    }

    const mouseLeave = () => {
      autoPlay()
    }

    const _clearIntervalFn = (t: number | undefined) => {
      clearInterval(t)
      t = undefined
    }

    onMounted(() => {
      state.itemLen = (instance as any).slots.default()[0].children.length
      autoPlay()
    })
    onBeforeUnmount(() => {
      _clearIntervalFn(timer)
    })
    return {
      ...toRefs(state), // 平铺
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick,
    }
  },
})
</script>
