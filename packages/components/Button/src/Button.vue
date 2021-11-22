<template>
  <button class="nd-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>

  <div class="frame">
    <button class="custom-btn btn-1">Read More</button>
    <button class="custom-btn btn-2">Read More</button>
    <button class="custom-btn btn-3"><span>Read More</span></button>
    <button class="custom-btn btn-4"><span>Read More</span></button>
    <button class="custom-btn btn-5"><span>Read More</span></button>
    <button class="custom-btn btn-6"><span>Read More</span></button>
    <button class="custom-btn btn-7"><span>Read More</span></button>
    <button class="custom-btn btn-8"><span>Read More</span></button>
    <button class="custom-btn btn-9">Read More</button>
    <button class="custom-btn btn-10">Read More</button>
    <button class="custom-btn btn-11">
      Read More
      <div class="dot"></div>
    </button>
    <button class="custom-btn btn-12">
      <span>Click!</span><span>Read More</span>
    </button>
    <button class="custom-btn btn-13">Read More</button>
    <button class="custom-btn btn-14">Read More</button>
    <button class="custom-btn btn-15">Read More</button>
    <button class="custom-btn btn-16">Read More</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'df-button',
})
</script>
