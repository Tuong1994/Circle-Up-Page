<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface ModalFootProps {
  rootClassName?: string
}

withDefaults(defineProps<ModalFootProps>(), {
  rootClassName: ''
})
</script>

<template>
  <div :class="['modal-layout-foot', rootClassName]">
    <slot></slot>
  </div>
</template>
