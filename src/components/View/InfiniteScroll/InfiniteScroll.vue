<script setup lang="ts">
import { defineProps, defineEmits, watchEffect } from 'vue'

interface InfiniteScrollProps {
  isReach?: boolean
}

const props = defineProps<InfiniteScrollProps>()

const emits = defineEmits(['onReach'])

watchEffect((onStop) => {
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (props.isReach) return
      emits('onReach')
    }
  }
  window.addEventListener('scroll', handleScroll)
  onStop(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <slot></slot>
</template>
