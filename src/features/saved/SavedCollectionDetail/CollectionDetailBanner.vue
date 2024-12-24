<script setup lang="ts">
import { Card, Image } from '@/components/UI'
import defaultImage from '/default.jpg'
</script>

<template>
  <Card rootClassName="detail-banner">
    <template #body>
      <Image
        :src="defaultImage"
        rootClassName="image-full-size"
        imgWidth="100%"
        imgHeight="100%"
        objectFit="cover"
      />
    </template>
  </Card>
</template>
