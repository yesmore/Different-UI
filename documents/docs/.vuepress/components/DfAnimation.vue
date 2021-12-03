<template>
  <div class="df-vuepress-animation">
    <div v-if="animation === 'fade'" class="demo">
      <df-button @click="show">fade-in</df-button>
      <transition name="df-fade-in">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'list'" class="demo">
      <df-button @click="show">list-in-out</df-button>
      <transition name="df-list">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'zoom-in-top'" class="demo">
      <df-button @click="show">zoom-in-top</df-button>
      <transition name="df-zoom-in-top">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'zoom-in-center'" class="demo">
      <df-button @click="show">zoom-in-center</df-button>
      <transition name="df-zoom-in-center">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'zoom-in-bottom'" class="demo">
      <df-button @click="show">zoom-in-bottom</df-button>
      <transition name="df-zoom-in-bottom">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'zoom-in-left'" class="demo">
      <df-button @click="show">zoom-in-left</df-button>
      <transition name="df-zoom-in-left">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'slide'" class="demo">
      <df-button @click="show">Slide in & out</df-button>
      <transition name="df-slide">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'slide-left'" class="demo">
      <df-button @click="show">Slide left in & out</df-button>
      <transition name="df-left">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <div v-if="animation === 'scale'" class="demo">
      <df-button @click="show">Scale in & out</df-button>
      <transition name="df-scale">
        <df-button v-if="showMod" color="error">表哥~我粗来咯~</df-button>
      </transition>
    </div>

    <slot name="src"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'df-animation-demo',
  props: {
    animation: String,
  },
  setup() {
    const state = reactive({
      showMod: false,
    })

    const show = () => {
      state.showMod = !state.showMod
    }

    return {
      show,
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.df-vuepress-animation {
  padding: 15px 15px 0;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    1px 1px 10px 0px rgba(134, 134, 134, 0.1),
    1px 1px 3px 0px rgba(75, 75, 75, 0.1);
  position: relative;
}
.demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
