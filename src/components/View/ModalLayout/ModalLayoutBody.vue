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
  <div :class="['modal-layout-body', rootClassName]">
    <slot></slot>
  </div>
</template>
