<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue'
import useLayoutStore, { type LayoutShape } from '@/components/UI/Layout/LayoutStore'

interface ItemProps {
  rootClassName?: string
  shape?: LayoutShape
}

const props = withDefaults(defineProps<ItemProps>(), {
  rootClassName: ''
})

const emits = defineEmits(['onSelect'])

const layout = useLayoutStore()

const themeClassName = computed<string>(() => `item-wrapper-${layout.theme}`)

const shapeClassName = computed<string>(() => `item-wrapper-${props.shape ? props.shape : layout.shape}`)

const handleMouseEnter = () => emits('onSelect', true)

const handleMouseLeave = () => emits('onSelect', false)
</script>

<template>
  <div
    :class="['item-wrapper', shapeClassName, themeClassName, rootClassName]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot></slot>
  </div>
</template>
