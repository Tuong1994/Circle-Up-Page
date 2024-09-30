<script setup lang="ts">
import { computed, ref, withDefaults, defineProps, defineEmits } from 'vue'
import { Avatar, Space, Grid, Icon, Tooltip, Button, Image, Dropdown } from '@/components/UI'
import { InputMention as CommentBox } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { EFeatureType } from '../enum'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { MentionItems } from '@/components/Control/InputMention/type'
import EmojiPicker from 'vue3-emoji-picker'
import InputSticker from './InputSticker.vue'
import InputPhoto from './InputPhoto.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import useCommentStore from '../CommentStore'

const { Row, Col } = Grid

interface CommentInputProps {
  hasCancel?: boolean
}

withDefaults(defineProps<CommentInputProps>(), {
  hasCancel: false
})

const emits = defineEmits(['onCancel'])

const layout = useLayoutStore()

const comment = useCommentStore()

const t = useLangStore()

const image = ref<File | null>(null)

const content = ref<string>('Comment')

const mentions: MentionItems = [
  { label: 'User name 1', value: '1', imgUrl: '' },
  { label: 'User name 2', value: '2', imgUrl: '' },
  { label: 'User name 3', value: '3', imgUrl: '' },
  { label: 'User name 4', value: '4', imgUrl: '' }
]

const actions = computed(() => [
  { type: EFeatureType.EMOJI, iconName: iconName.LAUGH, desc: t.lang.common.comment.emoji },
  { type: EFeatureType.PHOTO, iconName: iconName.IMAGE, desc: t.lang.common.comment.photo },
  { type: EFeatureType.STICKER, iconName: iconName.BOOKMARK, desc: t.lang.common.comment.sticker }
])

const handleCancel = () => emits('onCancel')

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
  comment.setUploaded(false)
}
</script>

<template>
  <Row>
    <Col :xs="4" :md="2" :lg="2" :span="2">
      <Avatar :size="40" />
    </Col>
    <Col :xs="20" :md="22" :lg="22" :span="22">
      <CommentBox
        placement="top"
        rootClassName="mb-3"
        :rows="1"
        :mentions="mentions"
        :color="(layout.color as ControlColor)"
        :shape="(layout.shape as ControlShape)"
        :placeholder="t.lang.common.form.placeholder.comment"
      />
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
          <Space aligns="middle">
            <Tooltip placement="top">
              <template #title>
                <Button sizes="sm" shape="round">
                  <Icon :iconName="iconName.PAPER_PLANE" :sizes="16" color="gray" />
                </Button>
              </template>
              <template #content>
                {{ t.lang.common.comment.comment }}
              </template>
            </Tooltip>
            <Tooltip placement="top">
              <template #title>
                <Button v-if="hasCancel" sizes="sm" shape="round" @click="handleCancel">
                  <Icon :iconName="iconName.X_MARK" :sizes="16" color="gray" />
                </Button>
              </template>
              <template #content>
                {{ t.lang.common.actions.cancel }}
              </template>
            </Tooltip>
          </Space>
        </Col>
      </Row>
      <div v-if="comment.uploaded" class="comment-photo">
        <Button sizes="sm" shape="round" rootClassName="photo-close" @click="handleRemoveImage">
          <Icon :iconName="iconName.X_MARK" />
        </Button>
        <Image :imgWidth="50" :imgHeight="50" />
      </div>
    </Col>
  </Row>
</template>
