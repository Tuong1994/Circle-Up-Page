<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from 'vue'
import { EActionType } from './enum'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import Slider from '@/components/View/Slider/Slider.vue'
import CreatePost from './CreatePost.vue'
import PostAudience from './PostAudience.vue'
import TagPeople from './TagPeople.vue'
import Feeling from './Feeling.vue'
import Checkin from './Checkin.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

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

const emits = defineEmits(['onClose'])

const layout = useLayoutStore()

const slided = ref<boolean>(false)

const actionType = ref<ActionType>(EActionType.PHOTO)

const buttonProps = computed<ButtonProps>(() => ({
  shape: 'round',
  sizes: 'lg',
  rootClassName: 'w-full',
  color: layout.color
}))

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
  <ModalLayout rootClassName="post-modal" :open="open" @onClose="handleClose">
    <Slider :slided="slided">
      <template #main>
        <CreatePost
          v-if="actionType === EActionType.PHOTO"
          :actionType="actionType"
          :buttonProps="buttonProps"
          @onClose="handleClose"
          @onAction="handleSlided"
        />
      </template>
      <template #sub>
        <PostAudience
          v-if="actionType === EActionType.AUDIENCE"
          :buttonProps="buttonProps"
          @onBack="handleBack"
        />
        <TagPeople v-if="actionType === EActionType.TAG" :buttonProps="buttonProps" @onBack="handleBack" />
        <Feeling v-if="actionType === EActionType.FEELING" :buttonProps="buttonProps" @onBack="handleBack" />
        <Checkin v-if="actionType === EActionType.CHECK_IN" :buttonProps="buttonProps" @onBack="handleBack" />
      </template>
    </Slider>
  </ModalLayout>
</template>
