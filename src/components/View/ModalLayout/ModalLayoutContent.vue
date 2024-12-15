<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface ModalContentProps {
  rootClassName?: string
}

withDefaults(defineProps<ModalContentProps>(), {
  rootClassName: ''
})
</script>

<template>
  <div :class="['modal-layout-content', rootClassName]">
    <slot></slot>
  </div>
</template>
