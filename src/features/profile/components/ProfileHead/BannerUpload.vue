<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button, Icon, Space, Typography, Loading } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { useViewPoint } from '@/hooks'
import { ACCEPT_IMAGE_FILE_TYPE } from '@/components/Control/Upload/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useUpload from '../../hooks/useUpload'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const { Spinner } = Loading

const { isPhone } = useViewPoint()

const { image, viewURL, loading, dragged, handleChange, handleDrag, handleDrop } = useUpload()

const t = useLangStore()

const layout = useLayoutStore()

const inputRef = ref<HTMLDivElement>()

const dragClassName = computed<string>(() => (dragged.value ? 'image-banner-dragged' : ''))

const hasUploaded = computed<boolean>(() => !loading.value && Boolean(viewURL))

const fileAccepted = computed<string>(() => ACCEPT_IMAGE_FILE_TYPE.join(','))

const handleTriggerInput = () => {
  if (!inputRef.value) return
  inputRef.value.click()
}
</script>

<template>
  <div :class="['image-banner', dragClassName]">
    <div
      class="banner-image"
      @dragenter="handleDrag"
      @dragover="handleDrag"
      @dragleave="handleDrag"
      @drop="handleDrop"
    >
      <Spinner v-if="loading" :size="20" color="black" />
      <img v-if="hasUploaded" :src="viewURL" />
    </div>
    <input ref="inputRef" type="file" class="hidden" :accept="fileAccepted" @input="handleChange" />
    <Button
      rootClassName="banner-action"
      :color="layout.color"
      :shape="layout.shape"
      @click="handleTriggerInput"
    >
      <Space aligns="middle">
        <Icon :iconName="iconName.IMAGE" />
        <Paragraph v-if="!isPhone">{{ t.lang.profile.actions.banner }}</Paragraph>
      </Space>
    </Button>
  </div>
</template>
