<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface ItemProps {
  rootClassName?: string
}

withDefaults(defineProps<ItemProps>(), {
  rootClassName: ''
})

const emits = defineEmits(['onSelect'])

const handleMouseEnter = () => emits('onSelect', true)

const handleMouseLeave = () => emits('onSelect', false)
</script>

<template>
  <div :class="['item', rootClassName]" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <slot></slot>
  </div>
</template>
