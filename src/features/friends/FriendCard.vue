<script setup lang="ts">
import { Card, Button, Image, Typography } from '@/components/UI'
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <Card rootClassName="friend-card">
    <template #body>
      <Image rootClassName="card-image" imgWidth="100%" imgHeight="100%" objectFit="cover" />
      <Paragraph :weight="600" :size="16" rootClassName="pt-3">Friend name</Paragraph>
      <Paragraph variant="secondary">Followed by 1k</Paragraph>
      <Button rootClassName="w-full my-5" :color="layout.color">Add friend</Button>
      <Button rootClassName="w-full">Remove</Button>
    </template>
  </Card>
</template>
