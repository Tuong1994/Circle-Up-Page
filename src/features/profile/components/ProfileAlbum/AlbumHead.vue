<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { Typography, Card } from '@/components/UI'

const { Paragraph } = Typography

interface AlbumHeadProps {}

withDefaults(defineProps<AlbumHeadProps>(), {})
</script>

<template>
  <Card rootClassName="mb-5">
    <template #body>
      <Paragraph :weight="600" :size="18">Album name</Paragraph>
      <Paragraph :size="13" variant="secondary">20 items</Paragraph>
    </template>
  </Card>
</template>
