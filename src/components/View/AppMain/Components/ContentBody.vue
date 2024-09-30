<script setup lang="ts">
import { computed, type StyleValue } from 'vue'
import useAppMainStore from '../AppMainStore'

const app = useAppMainStore()

const style = computed<StyleValue>(() => {
  if (!app.hasContentMenuHead) return {}
  return { height: `calc(100vh - (10rem + ${app.contentMenuHeadHeight}px))` }
})
</script>

<template>
  <div :style="style" class="side-content-body">
    <div class="body-inner">
      <slot></slot>
    </div>
  </div>
</template>
