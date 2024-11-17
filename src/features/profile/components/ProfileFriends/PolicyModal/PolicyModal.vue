<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import Slider from '@/components/View/Slider/Slider.vue'
import PolicyList from './PolicyList.vue'
import AudienceList from './AudienceList.vue'

interface PolicyModalProps {
  open?: boolean
}

defineProps<PolicyModalProps>()

const emits = defineEmits(['onClose'])

const slided = ref<boolean>(false)

const handleSlided = () => (slided.value = true)

const handleBack = () => (slided.value = false)

const handleClose = () => {
  handleBack()
  emits('onClose')
}
</script>

<template>
  <ModalLayout rootClassName="policy-modal" :open="open" @onClose="handleClose">
    <Slider :slided="slided">
      <template #main>
        <PolicyList @onEditAudience="handleSlided" @onClose="handleClose" />
      </template>
      <template #sub>
        <AudienceList @onBack="handleBack" />
      </template>
    </Slider>
  </ModalLayout>
</template>
