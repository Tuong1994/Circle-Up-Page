<script setup lang="ts">
import { computed, ref, defineEmits, defineProps } from 'vue'
import { Grid, Icon, Typography, Button, DynamicGrid, Image, Space } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import usePostUpload from '../../hooks/usePostUpload'
import type { UploadItem } from '@/components/Control/type'

const { Paragraph } = Typography

const { Row, Col } = Grid

interface PostUploadProps {}

defineProps<PostUploadProps>()

const emits = defineEmits(['onClose'])

const t = useLangStore()

const layout = useLayoutStore()

const inputRef = ref<HTMLInputElement | null>(null)

const { images, viewImages, dragged, handleChange, handleDrag, handleDrop, handleRemove } =
  usePostUpload(inputRef)

const gridItems = computed<DynamicGridItems<UploadItem>>(() =>
  [...viewImages.value].map((item) => ({
    id: item.id,
    comName: `item-${item.id}`,
    data: item
  }))
)

const isRenderGrid = computed<boolean>(() => gridItems.value.length > 0)

const colorClassName = computed<string>(() => `post-upload-${layout.color}`)

const dragClassName = computed<string>(() => (dragged.value ? `upload-box-dragged` : ''))

const handleClose = () => emits('onClose')

const handleAdd = () => {
  console.log(inputRef.value)
  if (!inputRef.value) return
  inputRef.value.click()
}

const handleRemoveImage = (data?: UploadItem) => {
  if (!data) return
  handleRemove(data)
}
</script>

<template>
  <div :class="['post-upload', colorClassName]">
    <Row rootClassName="upload-actions" aligns="middle" justify="between">
      <Col>
        <Button v-if="isRenderGrid" :color="layout.color" :shape="layout.shape" @click="handleAdd">
          <Space aligns="middle">
            <Icon :iconName="iconName.PLUS" />
            <span>{{ t.lang.home.modal.createPost.upload.add }}</span>
          </Space>
        </Button>
      </Col>
      <Col>
        <Button :color="layout.color" :shape="layout.shape" @click="handleClose">
          <Icon :iconName="iconName.X_MARK" />
        </Button>
      </Col>
    </Row>
    <div
      v-if="!isRenderGrid"
      :class="['upload-box', dragClassName]"
      @dragenter="handleDrag"
      @dragover="handleDrag"
      @dragleave="handleDrag"
      @drop="handleDrop"
    >
      <label class="box-content">
        <input ref="inputRef" type="file" multiple class="content-control" @input="handleChange" />
        <Icon :size="24" :iconName="iconName.CLOUD_UPLOAD" class="mb-5" />
        <Paragraph>{{ t.lang.common.form.placeholder.imagesUpload }}</Paragraph>
      </label>
    </div>

    <DynamicGrid v-if="isRenderGrid" :items="gridItems">
      <template #content="content">
        <div v-for="item in gridItems" class="upload-item">
          <Button text rootClassName="item-remove" @click="() => handleRemoveImage(item.data)">
            <Icon :iconName="iconName.X_MARK" :size="18" />
          </Button>
          <Image
            v-if="content.comName === item.comName"
            :src="item.data?.url"
            rootClassName="item-media"
            imgWidth="100%"
            imgHeight="100%"
          />
        </div>
      </template>
    </DynamicGrid>
  </div>
</template>
