<script setup lang="ts">
import { defineEmits } from 'vue'
import { Grid, Space, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const emits = defineEmits(['onLike', 'onComment', 'onShare'])

const t = useLangStore()

const handleLike = () => emits('onLike')

const handleComment = () => emits('onComment')

const handleShare = () => emits('onShare')
</script>

<template>
  <Row justify="evenly" aligns="middle">
    <Col>
      <Space aligns="middle" rootClassName="post-action" @click="handleLike">
        <Icon :iconName="iconName.THUMBS_UP" />
        <Paragraph>{{ t.lang.home.post.like }}</Paragraph>
      </Space>
    </Col>
    <Col>
      <Space aligns="middle" rootClassName="post-action" @click="handleComment">
        <Icon :iconName="iconName.MESSAGE" />
        <Paragraph>{{ t.lang.home.post.comment }}</Paragraph>
      </Space>
    </Col>
    <Col>
      <Space aligns="middle" rootClassName="post-action" @click="handleShare">
        <Icon :iconName="iconName.SHARE" />
        <Paragraph>{{ t.lang.home.post.share }}</Paragraph>
      </Space>
    </Col>
  </Row>
</template>
