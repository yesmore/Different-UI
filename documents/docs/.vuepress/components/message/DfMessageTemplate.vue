<template>
  <df-button :color="type === 'info' ? '' : type" @click="showMsg">{{
    message
  }}</df-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Message from './Message'
import { Itype, IAnimation } from './Message.types'

export default defineComponent({
  name: 'df-modal-template',
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
    const showMsg = () => {
      Message({
        // center: true,
        type: props.type,
        message: props.message,
        duration: props.duration,
        animation: props.animation,
        onClose: props.onClose,
      })
    }
    const onClose = () => {
      console.log('我关闭了message')
    }

    return {
      showMsg,
      onClose,
    }
  },
})
</script>
