<script setup lang="ts">
import { computed } from 'vue'
import useAppMainStore from '../AppMainStore'

const app = useAppMainStore()

const hasHeadClassName = computed<string>(() => (app.hasContentMenuHead ? 'side-content-body-height' : ''))
</script>

<template>
  <div :class="['side-content-body', hasHeadClassName]">
    <div class="body-inner">
      <slot></slot>
    </div>
  </div>
</template>
