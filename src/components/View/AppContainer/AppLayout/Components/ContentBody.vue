<script setup lang="ts">
import { defineProps, withDefaults, computed, type StyleValue } from 'vue'
import useAppLayoutStore from '../AppLayoutStore'

interface ContentBodyProps {
  rootClassName?: string
  rootStyle?: StyleValue
}

const props = withDefaults(defineProps<ContentBodyProps>(), {
  rootClassName: ''
})

const app = useAppLayoutStore()

const style = computed<StyleValue>(() => {
  if (props.rootStyle) return props.rootStyle
  if (!app.hasContentMenuHead) return {}
  return { height: `calc(100vh - (10rem + ${app.contentMenuHeadHeight}px))` }
})
</script>

<template>
  <div :style="style" :class="['side-content-body', rootClassName]">
    <div class="body-inner">
      <slot></slot>
    </div>
  </div>
</template>
../AppLayoutStore