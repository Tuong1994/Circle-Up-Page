<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { Typography } from '@/components/UI'

const { Paragraph } = Typography

interface FriendGridProps {
  title?: string
}

withDefaults(defineProps<FriendGridProps>(), {
  title: 'Title'
})
</script>

<template>
  <div class="friend-grid">
    <Paragraph :weight="600" :size="18" rootClassName="pb-5">{{ title }}</Paragraph>
    <div class="grid-wrap">
      <slot></slot>
    </div>
  </div>
</template>
