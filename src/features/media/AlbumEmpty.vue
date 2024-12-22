<script setup lang="ts">
import { defineProps } from 'vue'
import { Icon, Space, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()
</script>

<template>
  <div class="album-empty">
    <div class="empty-content">
      <Space justify="center" rootClassName="mb-5">
        <Icon :size="50" :iconName="iconName.IMAGE" :color="layout.color" />
      </Space>
      <Paragraph :size="18" :weight="600" aligns="center">
        {{ t.lang.media.album.empty }}
      </Paragraph>
    </div>
  </div>
</template>
