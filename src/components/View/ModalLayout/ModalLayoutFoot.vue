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
  <div :class="['post-modal-foot', rootClassName]">
    <slot></slot>
  </div>
</template>
