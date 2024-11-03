<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { Typography, Card } from '@/components/UI'

const { Paragraph } = Typography

interface FriendGridProps {
  title?: string
}

withDefaults(defineProps<FriendGridProps>(), {
  title: 'Title'
})
</script>

<template>
  <div class="friends-grid">
    <Card rootClassName="mb-5 grid-title">
      <template #body>
        <Paragraph :weight="600" :size="18">{{ title }}</Paragraph>
      </template>
    </Card>
    <div class="grid-wrap">
      <slot></slot>
    </div>
  </div>
</template>
