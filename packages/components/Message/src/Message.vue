<template>
  <transition
    :name="animation"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div class="df-message" :class="classes" :style="styles" v-show="visible">
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
} from 'vue'
import { Itype, IAnimation } from './Message.types'

export default defineComponent({
  name: 'df-message',
  props: {
    id: { type: String, default: '' },
    message: { type: String, default: '' },
    type: { type: String as PropType<Itype>, default: 'info' },
    animation: { type: String as PropType<IAnimation>, default: 'df-fade-in' },
    duration: { type: Number, default: 2000 },
    center: { type: Boolean, default: false },
    onClose: { type: Function as PropType<() => void> },
    offset: { type: Number, default: 20 },
  },
  setup(props) {
    const visible = ref(false)

    const classes = computed(() => [
      'df-message--' + props.type,
      props.center ? 'is-center' : '',
    ])

    const styles = computed(() => ({
      top: `${props.offset}px`,
    }))

    let timer: number | undefined = undefined
    const duration = () => {
      timer = setTimeout(() => {
        visible.value = false
      }, props.duration)
    }

    onMounted(() => {
      visible.value = true
      duration()
    })

    onUnmounted(() => {
      clearTimeout(timer)
    })

    return {
      classes,
      styles,
      visible,
    }
  },
})
</script>
