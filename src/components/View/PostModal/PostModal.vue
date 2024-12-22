<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from 'vue'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import type { PostActionType } from '@/services/post/type'
import { EPostActionType } from '@/services/post/enums'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import Slider from '@/components/View/Slider/Slider.vue'
import CreatePost from './CreatePost.vue'
import PostAudience from './PostAudience.vue'
import TagPeople from './TagPeople.vue'
import Feeling from './Feeling.vue'
import Checkin from './Checkin.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface PostModalProps {
  open?: boolean
}

defineProps<PostModalProps>()

const emits = defineEmits(['onClose'])

const layout = useLayoutStore()

const slided = ref<boolean>(false)

const actionType = ref<PostActionType>(EPostActionType.PHOTO)

const buttonProps = computed<ButtonProps>(() => ({
  sizes: 'lg',
  rootClassName: 'w-full',
  shape: layout.shape,
  color: layout.color
}))

const handleClose = () => emits('onClose')

const handleSlided = (type?: PostActionType) => {
  slided.value = true
  if (type) actionType.value = type
}

const handleBack = () => {
  slided.value = false
  actionType.value = EPostActionType.PHOTO
}
</script>

<template>
  <ModalLayout :open="open" @onClose="handleClose">
    <Slider :slided="slided">
      <template #main>
        <CreatePost
          v-if="actionType === EPostActionType.PHOTO"
          :actionType="actionType"
          :buttonProps="buttonProps"
          @onClose="handleClose"
          @onAction="handleSlided"
        />
      </template>
      <template #sub>
        <PostAudience
          v-if="actionType === EPostActionType.AUDIENCE"
          :buttonProps="buttonProps"
          @onBack="handleBack"
        />
        <TagPeople v-if="actionType === EPostActionType.TAG" :buttonProps="buttonProps" @onBack="handleBack" />
        <Feeling v-if="actionType === EPostActionType.FEELING" :buttonProps="buttonProps" @onBack="handleBack" />
        <Checkin v-if="actionType === EPostActionType.CHECK_IN" :buttonProps="buttonProps" @onBack="handleBack" />
      </template>
    </Slider>
  </ModalLayout>
</template>
