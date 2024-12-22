<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import Slider from '@/components/View/Slider/Slider.vue'
import AddCollectionModalList from './AddCollectionModalList.vue'
import AddCollectionModalForm from './AddCollectionModalForm.vue'

interface SavedItemsAddCollectionModalProps {
  open?: boolean
}

defineProps<SavedItemsAddCollectionModalProps>()

const emits = defineEmits(['onClose'])

const slided = ref<boolean>(false)

const handleClose = () => emits('onClose')

const handleSlided = () => (slided.value = !slided.value)
</script>

<template>
  <ModalLayout :open="open" @onClose="handleClose">
    <Slider :slided="slided">
      <template #main>
        <AddCollectionModalList @onAdd="handleSlided" @onClose="handleClose" />
      </template>
      <template #sub>
        <AddCollectionModalForm @onBack="handleSlided" />
      </template>
    </Slider>
  </ModalLayout>
</template>
