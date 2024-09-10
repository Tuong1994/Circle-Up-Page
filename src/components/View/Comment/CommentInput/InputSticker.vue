<script setup lang="ts">
import { computed } from 'vue'
import { Grid, Typography, Space, Icon, Divider } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import type { ControlColor } from '@/components/Control/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

const stickers = computed(() => [
  { type: '', title: 'Happy', icon: '😊', color: 'yellow' },
  { type: '', title: 'In love', icon: '😍', color: 'pink' },
  { type: '', title: 'Sad', icon: '😢', color: 'black' },
  { type: '', title: 'Eating', icon: '😋', color: 'orange' },
  { type: '', title: 'Celebrating', icon: '🥳', color: 'light-green' },
  { type: '', title: 'Active', icon: '😎', color: 'blue' },
  { type: '', title: 'Working', icon: '🤓', color: 'green' },
  { type: '', title: 'Sleepy', icon: '😴', color: 'purple' },
  { type: '', title: 'Angry', icon: '😠', color: 'red' },
  { type: '', title: 'Confused', icon: '😕', color: 'brown' }
])
</script>

<template>
  <div class="comment-sticker">
    <Input
      shape="round"
      :color="(layout.color as ControlColor)"
      :placeholder="t.lang.common.form.placeholder.search"
    >
      <template #addonBefore>
        <Icon :iconName="iconName.SEARCH" />
      </template>
    </Input>
    <Divider />
    <Row justify="between" aligns="middle">
      <Col v-for="sticker in stickers" :key="sticker.type" :span="12">
        <Space :rootClassName="`sticker-item sticker-item-${sticker.color}`" aligns="middle">
          <span>{{ sticker.icon }}</span>
          <Paragraph :weight="600" rootClassName="item-title">{{ sticker.title }}</Paragraph>
        </Space>
      </Col>
    </Row>
  </div>
</template>
