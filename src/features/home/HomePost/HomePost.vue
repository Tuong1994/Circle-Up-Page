<script setup lang="ts">
import { Card, Divider } from '@/components/UI'
import PostHead from './PostHead.vue'
import PostBody from './PostBody.vue'
import PostSummary from './PostSummary.vue'
import PostActions from './PostActions.vue'
</script>

<template>
  <Card rootClassName="home-post">
    <template #body>
      <PostHead />
      <PostBody />
      <PostSummary />
      <Divider />
      <PostActions />
    </template>
  </Card>
</template>
