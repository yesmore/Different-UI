<template>
  <div id="df-starsrate">
    <i
      v-for="num in totalRate"
      :key="num"
      class="iconfont df-stars-iconfont"
      :class="[icon || 'df-icon-collection']"
      :style="{
        fontSize: size + 'px',
        color: num <= starNum ? activeColor || '#fba906c7' : '',
      }"
      @click="setStarNum(num)"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStarsRate } from '../../hooks'

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
    totalRate: {
      type: Number,
      default: 5,
    },
    icon: {
      type: String,
    },
    activeColor: {
      type: String,
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

<style lang="scss" scoped>
@import '../../theme/components/StarsRate.css';
@import '../../theme/src/Icon/iconfont.css';
</style>
