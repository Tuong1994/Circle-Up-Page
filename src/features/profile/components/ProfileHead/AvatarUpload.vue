<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button, Icon, Loading } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { ACCEPT_IMAGE_FILE_TYPE } from '@/components/Control/Upload/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useUpload from '../../hooks/useUpload'

const { Spinner } = Loading

const layout = useLayoutStore()

const { image, viewURL, loading, dragged, handleChange, handleDrag, handleDrop } = useUpload()

const inputRef = ref<HTMLInputElement>()

const dragClassName = computed<string>(() => (dragged.value ? 'image-avatar-dragged' : ''))

const hasUploaded = computed<boolean>(() => !loading.value && Boolean(viewURL))

const fileAccepted = computed<string>(() => ACCEPT_IMAGE_FILE_TYPE.join(','))

const handleTriggerInput = () => {
  if (!inputRef.value) return
  inputRef.value.click()
}
</script>

<template>
  <div :class="['image-avatar', dragClassName]">
    <div class="avatar-wrap">
      <div
        class="wrap-image"
        @dragenter="handleDrag"
        @dragover="handleDrag"
        @dragleave="handleDrag"
        @drop="handleDrop"
      >
        <Spinner v-if="loading" :size="18" color="black" />
        <img v-if="hasUploaded" :src="viewURL" />
      </div>
      <input ref="inputRef" type="file" class="hidden" :accept="fileAccepted" @input="handleChange" />
      <Button
        rootClassName="wrap-action"
        :color="layout.color"
        :shape="layout.shape"
        @click="handleTriggerInput"
      >
        <Icon :iconName="iconName.IMAGE" />
      </Button>
    </div>
  </div>
</template>
