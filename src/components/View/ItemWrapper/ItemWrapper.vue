<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface ItemProps {
  rootClassName?: string
}

withDefaults(defineProps<ItemProps>(), {
  rootClassName: ''
})

const emits = defineEmits(['onSelect'])

const layout = useLayoutStore()

const shapeClassName = computed<string>(() => `item-wrapper-${layout.shape}`)

const handleMouseEnter = () => emits('onSelect', true)

const handleMouseLeave = () => emits('onSelect', false)
</script>

<template>
  <div
    :class="['item-wrapper', shapeClassName, rootClassName]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot></slot>
  </div>
</template>
