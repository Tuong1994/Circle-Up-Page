<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Grid, Space, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

const { Row, Col } = Grid

const { Paragraph } = Typography

const emits = defineEmits(['onLike', 'onComment', 'onShare'])

const t = useLangStore()

const layout = useLayoutStore()

const actionClassName = computed<string>(() => `post-action post-action-${layout.color}`)

const handleLike = () => emits('onLike')

const handleComment = () => emits('onComment')

const handleShare = () => emits('onShare')
</script>

<template>
  <Row justify="evenly" aligns="middle">
    <Col>
      <Space aligns="middle" :rootClassName="actionClassName" @click="handleLike">
        <Icon :iconName="iconName.THUMBS_UP" />
        <Paragraph>{{ t.lang.home.post.like }}</Paragraph>
      </Space>
    </Col>
    <Col>
      <Space aligns="middle" :rootClassName="actionClassName" @click="handleComment">
        <Icon :iconName="iconName.MESSAGE" />
        <Paragraph>{{ t.lang.home.post.comment }}</Paragraph>
      </Space>
    </Col>
    <Col>
      <Space aligns="middle" :rootClassName="actionClassName" @click="handleShare">
        <Icon :iconName="iconName.SHARE" />
        <Paragraph>{{ t.lang.home.post.share }}</Paragraph>
      </Space>
    </Col>
  </Row>
</template>
