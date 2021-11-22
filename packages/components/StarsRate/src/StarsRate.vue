<template>
  <div id="df-starsrate">
    <i
      v-for="num in totalStars"
      :key="num"
      class="iconfont icon-star df-stars-iconfont"
      :class="[num <= starNum ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(num)"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStarsRate } from '~/hooks'

export default defineComponent({
  name: 'df-starsrate',
  props: {
    rate: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 24,
    },
    totalStars: {
      type: Number,
      default: 5,
    },
  },
  setup(props, ctx) {
    interface starApi extends CallableFunction {
      value: number
    }

    const [starNum, setStarNum] = useStarsRate(props.rate, () => {
      ctx.emit('getStarsNum', (starNum as starApi).value)
    })

    return {
      starNum,
      setStarNum,
    }
  },
})
</script>
