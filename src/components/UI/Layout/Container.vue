<script setup lang="ts">
import { withDefaults, watchEffect, type StyleValue } from 'vue'
import useLayoutStore, { type LayoutTheme, type LayoutColor, type LayoutShape } from './LayoutStore.ts'

export interface LayoutContainerProps {
  rootClassName?: string
  rootStyle?: StyleValue
  theme?: LayoutTheme
  color?: LayoutColor
  shape?: LayoutShape,
}

const props = withDefaults(defineProps<LayoutContainerProps>(), {
  rootClassName: '',
  theme: 'light',
  color: 'purple',
  shape: 'round'
})

const layout = useLayoutStore()

watchEffect(() => {
  layout.onLayout()
  layout.switchTheme(props.theme)
  layout.switchColor(props.color)
  layout.switchShape(props.shape)
})
</script>

<template>
  <main :style="rootStyle" :class="rootClassName">
    <slot></slot>
  </main>
</template>
