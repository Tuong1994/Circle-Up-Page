<script setup lang="ts">
import { ref, withDefaults, computed, type StyleValue } from 'vue'
import { iconName } from '@/components/UI/Icon/constant.ts'
import type { ImageLazyType } from './Image.vue'
import Icon from '@/components/UI/Icon/Icon.vue'
import CheckBox from '@/components/Control/CheckBox/CheckBox.vue'
import ImageViewer from './ImageViewer.vue'
import vLazyload from './directive.ts'
import defaultImg from "/default.jpg"

type OpenViewer = {
  active: boolean
  imgUrl: string
}

interface ImageViewProps {
  imageSize: StyleValue
  lazyType: ImageLazyType
  src: string
  loading: boolean
  hasView: boolean
  hasRemove: boolean
  hasCheck: boolean
  isChecked: boolean
}

const props = withDefaults(defineProps<ImageViewProps>(), {
  src: defaultImg
})

const emits = defineEmits(['onLoad', 'onRemove', 'onCheck'])

const openViewer = ref<OpenViewer>({ active: false, imgUrl: '' })

const loadedClassName = computed<string>(() => (!props.loading ? 'image-view-loaded' : ''))

const viewCheckedClassName = computed<string>(() => (props.isChecked ? 'view-area-checked' : ''))

const checkedClassName = computed<string>(() => (props.isChecked ? 'view-check-checked' : ''))

const handleLoad = () => emits('onLoad')

const handleOpenViewer = () => (openViewer.value = { active: true, imgUrl: props.src })

const handleCloseViewer = () => (openViewer.value = { ...openViewer.value, active: false })

const handleRemove = () => emits('onRemove')

const handleCheck = (checked: boolean) => emits('onCheck', checked)
</script>

<template>
  <div :style="imageSize" :class="['image-view', loadedClassName]">
    <img
      v-if="lazyType === 'lazy'"
      v-lazyload="lazyType"
      :style="imageSize"
      :data-src="src"
      :class="['view-area', viewCheckedClassName]"
      @load="handleLoad()"
    />
    <img
      v-if="lazyType === 'immediate'"
      :style="imageSize"
      :src="src"
      :class="['view-area', viewCheckedClassName]"
    />

    <div v-if="hasView" class="view-actions">
      <Icon :iconName="iconName.EYE" class="actions-icon" @click="handleOpenViewer" />
      <Icon v-if="hasRemove" :iconName="iconName.TRASH" class="actions-icon" @click="handleRemove" />
    </div>

    <CheckBox v-if="hasCheck" :rootClassName="`view-check ${checkedClassName}`" @onCheck="handleCheck" />
  </div>

  <ImageViewer :open="openViewer.active" :imgUrl="openViewer.imgUrl" @onClose="handleCloseViewer" />
</template>
