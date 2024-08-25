<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
import { Modal } from '@/components/UI'
import Slider from '@/components/View/Slider/Slider.vue'
import CreatePost from './CreatePost.vue'

interface PostModalProps {
  open?: boolean
}

defineProps<PostModalProps>()

const emits = defineEmits(['onOk', 'onClose'])

const slided = ref<boolean>(false)

const handleOk = () => emits('onOk')

const handleClose = () => emits('onClose')

const handleSlided = () => (slided.value = !slided.value)
</script>

<template>
  <Modal
    :open="open"
    :hasHead="false"
    :hasCancelButton="false"
    :okButtonProps="{ rootClassName: 'w-full' }"
    color="orange"
    rootClassName="post-modal"
    okButtonTitle="Post"
    @onOk="handleOk"
    @onClose="handleClose"
  >
    <template #body>
      <Slider :slided="slided">
        <template #main>
          <CreatePost @onClose="handleClose" @onChooseAudience="handleSlided" />
        </template>
        <template #sub>Sub</template>
      </Slider>
    </template>
  </Modal>
</template>
