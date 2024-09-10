<script setup lang="ts">
import { computed, ref } from 'vue'
import { Avatar, Space, Grid, Icon, Tooltip, Button, Image, Dropdown } from '@/components/UI'
import { Input as CommentBox } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { EFeatureType } from '../enum'
import type { ControlColor } from '@/components/Control/type'
import EmojiPicker from 'vue3-emoji-picker'
import InputSticker from './InputSticker.vue'
import InputPhoto from './InputPhoto.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const layout = useLayoutStore()

const t = useLangStore()

const image = ref<File | null>(null)

const actions = computed(() => [
  { type: EFeatureType.EMOJI, iconName: iconName.LAUGH, desc: 'Insert an emoji' },
  { type: EFeatureType.PHOTO, iconName: iconName.IMAGE, desc: 'Attach a photo' },
  { type: EFeatureType.STICKER, iconName: iconName.BOOKMARK, desc: 'Comment with a sticker' }
])

const handleRemoveImage = () => {
  const inputEl = document.getElementById('inputPhoto') as HTMLInputElement
  if (image.value && inputEl && inputEl.files) {
    const fileTransfer = new DataTransfer()
    const uploadedImages = Array.from(inputEl.files)
    const filterImages = uploadedImages.filter((img) => img.name !== image.value?.name)
    filterImages.forEach((file) => {
      const remainImage = new File([file.name], file.name)
      fileTransfer.items.add(remainImage)
    })
    inputEl.files = fileTransfer.files
  }
  image.value = null
}
</script>

<template>
  <Row>
    <Col :span="2">
      <Avatar :size="40" @click="handleRemoveImage" />
    </Col>
    <Col :span="22">
      <div class="w-full">
        <CommentBox shape="round" :color="(layout.color as ControlColor)" />
        <!-- <Image rootClassName="mt-3" :imgWidth="50" :imgHeight="50" /> -->
      </div>
      <Row justify="between" aligns="middle">
        <Col>
          <Space :size="14">
            <Dropdown v-for="action in actions" :key="action.type" isBottom>
              <template #label>
                <Tooltip placement="top">
                  <template #title>
                    <Icon
                      v-if="action.type !== EFeatureType.PHOTO"
                      color="gray"
                      :size="16"
                      :iconName="action.iconName"
                    />
                    <InputPhoto v-if="action.type === EFeatureType.PHOTO">
                      <Icon color="gray" :size="16" :iconName="action.iconName" />
                    </InputPhoto>
                  </template>
                  <template #content>
                    {{ action.desc }}
                  </template>
                </Tooltip>
              </template>
              <template #dropdown>
                <EmojiPicker v-if="action.type === EFeatureType.EMOJI" />
                <InputSticker v-if="action.type === EFeatureType.STICKER" />
              </template>
            </Dropdown>
          </Space>
        </Col>
        <Col>
          <Button sizes="sm" shape="round">
            <Icon :iconName="iconName.PAPER_PLANE" :sizes="16" color="gray" />
          </Button>
        </Col>
      </Row>
    </Col>
  </Row>
</template>
