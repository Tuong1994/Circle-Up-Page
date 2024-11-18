<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import PhotosTabs from '@/features/profile/components/ProfilePhotos/PhotosTabs.vue'

const { Paragraph } = Typography
</script>

<template>
  <Card>
    <template #body>
      <Paragraph :weight="600" :size="18">Photos</Paragraph>
      <PhotosTabs />
    </template>
  </Card>
</template>
