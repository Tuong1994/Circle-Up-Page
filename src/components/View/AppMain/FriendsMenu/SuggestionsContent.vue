<script setup lang="ts">
import { Typography, Space, Avatar, Button } from '@/components/UI'
import ContentHead from './ContentHead.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <ContentHead> Suggestions </ContentHead>
  <div>
    <Paragraph :weight="600" :size="16" rootClassName="py-5">People you may know</Paragraph>
    <Space v-for="item in 100">
      <Avatar :size="50" />
      <div>
        <Paragraph :weight="600">People</Paragraph>
        <Space>
          <Button :color="layout.color">Add friend</Button>
          <Button>Remove</Button>
        </Space>
      </div>
    </Space>
  </div>
</template>
