<script setup lang="ts">
import { defineProps } from 'vue'
import { Icon, Space, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface FriendEmptyProps {
  content?: string
}

defineProps<FriendEmptyProps>()

const layout = useLayoutStore()
</script>

<template>
  <div class="friends-empty">
    <div class="empty-content">
      <Space justify="center" rootClassName="mb-5">
        <Icon :size="50" :iconName="iconName.USER_GROUP" :color="layout.color" />
      </Space>
      <Paragraph :size="18" :weight="600" aligns="center">
        {{ content }}
      </Paragraph>
    </div>
  </div>
</template>
