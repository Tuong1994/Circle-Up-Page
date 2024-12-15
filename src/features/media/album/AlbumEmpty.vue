<script setup lang="ts">
import { defineProps } from 'vue'
import { Icon, Space, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface AlbumEmptyProps {}

defineProps<AlbumEmptyProps>()

const layout = useLayoutStore()
</script>

<template>
  <div class="album-empty">
    <div class="empty-content">
      <Space justify="center" rootClassName="mb-5">
        <Icon :size="50" :iconName="iconName.IMAGE" :color="layout.color" />
      </Space>
      <Paragraph :size="18" :weight="600" aligns="center"> Add photos to album </Paragraph>
    </div>
  </div>
</template>
