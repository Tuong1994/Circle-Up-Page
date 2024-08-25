<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
import { Modal } from '@/components/UI'
import Slider from '@/components/View/Slider/Slider.vue'
import CreatePost from './CreatePost.vue'
import PostAudience from './PostAudience.vue'

export type ActionType = 'photo' | 'tag' | 'feeling' | 'checkin' | 'audience'

interface PostModalProps {
  open?: boolean
}

defineProps<PostModalProps>()

const emits = defineEmits(['onOk', 'onClose'])

const slided = ref<boolean>(false)

const actionType = ref<ActionType>('photo')

const handleClose = () => emits('onClose')

const handleSlided = (type?: ActionType) => {
  slided.value = true
  if (type) actionType.value = type
}

const handleBack = () => {
  slided.value = false
  actionType.value = 'photo'
}
</script>

<template>
  <Modal
    :open="open"
    :hasHead="false"
    :hasFoot="false"
    :hasCancelButton="false"
    color="orange"
    rootClassName="post-modal"
    @onClose="handleClose"
  >
    <template #body>
      <Slider :slided="slided">
        <template #main>
          <CreatePost :actionType="actionType" @onClose="handleClose" @onAction="handleSlided" />
        </template>
        <template #sub>
          <PostAudience v-if="actionType === 'audience'" @onBack="handleBack" />
        </template>
      </Slider>
    </template>
  </Modal>
</template>
