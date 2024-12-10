<script setup lang="ts">
import { computed, ref, defineEmits, defineProps, watchEffect } from 'vue'
import { Icon, Typography, DynamicGrid } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'
import type { UploadItem } from '@/components/Control/type'
import UploadedItem from './UploadedItem.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import usePostUpload from '../../../hooks/usePostUpload'
import UploadActions from './UploadActions.vue'
import useMediaStore from '@/stores/MediaStore'

const { Paragraph } = Typography

interface PostUploadProps {}

defineProps<PostUploadProps>()

const emits = defineEmits(['onClose'])

const t = useLangStore()

const layout = useLayoutStore()

const media = useMediaStore()

const inputRef = ref<HTMLInputElement | null>(null)

const { dragged, handleChange, handleDrag, handleDrop, handleRemove } = usePostUpload(inputRef)

const gridItems = computed<DynamicGridItems<UploadItem>>(() =>
  [...media.viewImages].map((item) => ({
    id: item.id,
    comName: `item-${item.id}`,
    data: item
  }))
)

const isRenderGrid = computed<boolean>(() => gridItems.value.length > 0)

const colorClassName = computed<string>(() => `post-upload-${layout.color}`)

const dragClassName = computed<string>(() => (dragged.value ? `upload-box-dragged` : ''))

const uploadItemHasRemove = (idx: number) => {}

const handleClose = () => emits('onClose')

const handleTriggerInput = () => {
  if (!inputRef.value) return
  inputRef.value.click()
}

const handleRemoveImage = (data?: UploadItem) => {
  if (!data) return
  handleRemove(data)
}

// watchEffect(() => {
//   console.log(media.viewImages)
// })
</script>

<template>
  <div :class="['post-upload', colorClassName]">
    <UploadActions :isRenderGrid="isRenderGrid" @onAdd="handleTriggerInput" @onClose="handleClose" />
    <input multiple ref="inputRef" type="file" class="upload-control" @input="handleChange" />
    <div
      v-if="!isRenderGrid"
      :class="['upload-box', dragClassName]"
      @dragenter="handleDrag"
      @dragover="handleDrag"
      @dragleave="handleDrag"
      @drop="handleDrop"
    >
      <div class="box-content" @click="handleTriggerInput">
        <Icon :size="24" :iconName="iconName.CLOUD_UPLOAD" class="mb-5" />
        <Paragraph>{{ t.lang.common.form.placeholder.imagesUpload }}</Paragraph>
      </div>
    </div>

    <DynamicGrid v-if="isRenderGrid" :items="gridItems">
      <template #content="content">
        <template v-for="item in gridItems" :key="item.id">
          <UploadedItem
            v-if="content.comName === item.comName"
            :item="item"
            @onRemove="() => handleRemoveImage(item.data)"
          />
        </template>
      </template>

      <template #contentLeft="content">
        <template v-for="item in content.items" :key="item.id">
          <UploadedItem
            v-if="content.comName === item.comName"
            :item="item"
            @onRemove="() => handleRemoveImage(item.data)"
          />
        </template>
      </template>

      <template #contentRight="content">
        <template v-for="(item, idx) in content.items" :key="item.id">
          <UploadedItem
            v-if="content.comName === item.comName"
            :item="item"
            :hasRemove="uploadItemHasRemove(idx)"
            @onRemove="() => handleRemoveImage(item.data)"
          />
        </template>
      </template>
    </DynamicGrid>
  </div>
</template>
