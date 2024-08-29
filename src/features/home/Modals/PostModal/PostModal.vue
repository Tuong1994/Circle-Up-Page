<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
import { Modal } from '@/components/UI'
import { EActionType } from './enum'
import Slider from '@/components/View/Slider/Slider.vue'
import CreatePost from './CreatePost.vue'
import PostAudience from './PostAudience.vue'
import TagPeople from './TagPeople.vue'

export type ActionType =
  | EActionType.PHOTO
  | EActionType.TAG
  | EActionType.FEELING
  | EActionType.CHECK_IN
  | EActionType.AUDIENCE

interface PostModalProps {
  open?: boolean
}

defineProps<PostModalProps>()

const emits = defineEmits(['onOk', 'onClose'])

const slided = ref<boolean>(false)

const actionType = ref<ActionType>(EActionType.PHOTO)

const handleClose = () => emits('onClose')

const handleSlided = (type?: ActionType) => {
  slided.value = true
  if (type) actionType.value = type
}

const handleBack = () => {
  slided.value = false
  actionType.value = EActionType.PHOTO
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
          <CreatePost
            v-if="actionType === EActionType.PHOTO"
            :actionType="actionType"
            @onClose="handleClose"
            @onAction="handleSlided"
          />
        </template>
        <template #sub>
          <PostAudience v-if="actionType === EActionType.AUDIENCE" @onBack="handleBack" />
          <TagPeople v-if="actionType === EActionType.TAG" @onBack="handleBack" />
        </template>
      </Slider>
    </template>
  </Modal>
</template>
