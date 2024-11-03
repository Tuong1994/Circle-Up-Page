<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Space, Button } from '@/components/UI'
import ModalLayout from '../ModalLayout/ModalLayout.vue'
import ModalLayoutBody from '../ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '../ModalLayout/ModalLayoutFoot.vue'
import ModalLayoutHead from '../ModalLayout/ModalLayoutHead.vue'
import Audiences from '../Audiences/Audiences.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface AudiencesModalProps {
  open?: boolean
}

defineProps<AudiencesModalProps>()

const emits = defineEmits(['onDone', 'onClose'])

const layout = useLayoutStore()

const handleDone = () => emits('onDone')

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayout :open="open" @onClose="handleClose">
    <ModalLayoutHead title="Select audience" @onClose="handleClose" />
    <ModalLayoutBody>
      <Audiences />
    </ModalLayoutBody>
    <ModalLayoutFoot>
      <Space justify="end">
        <Button :color="layout.color" :shape="layout.shape" ghost @click="handleClose">Cancel</Button>
        <Button :color="layout.color" :shape="layout.shape" @click="handleDone">Done</Button>
      </Space>
    </ModalLayoutFoot>
  </ModalLayout>
</template>
