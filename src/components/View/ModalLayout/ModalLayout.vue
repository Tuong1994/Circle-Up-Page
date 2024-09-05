<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from 'vue'
import { Modal } from '@/components/UI'
import type { ModalProps } from '@/components/UI/Modal/Modal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface ModalLayoutProps {
  open?: boolean
  rootClassName?: string
  sizes?: ModalProps['sizes']
}

withDefaults(defineProps<ModalLayoutProps>(), {
  rootClassName: '',
  sizes: 'md'
})

const emits = defineEmits(['onClose'])

const layout = useLayoutStore()

const handleClose = () => emits('onClose')
</script>

<template>
  <Modal
    :open="open"
    :hasHead="false"
    :hasFoot="false"
    :hasCancelButton="false"
    :color="layout.color"
    :sizes="sizes"
    :rootClassName="`modal-layout ${rootClassName}`"
    @onClose="handleClose"
  >
    <template #body>
      <slot></slot>
    </template>
  </Modal>
</template>
