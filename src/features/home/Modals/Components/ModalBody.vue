<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface ModalBodyProps {
  rootClassName?: string
}

withDefaults(defineProps<ModalBodyProps>(), {
  rootClassName: ''
})
</script>

<template>
  <div :class="['post-modal-body', rootClassName]">
    <slot></slot>
  </div>
</template>
