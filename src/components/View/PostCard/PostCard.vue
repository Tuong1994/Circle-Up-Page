<script setup lang="ts">
import { defineEmits } from 'vue'
import { Card, Divider } from '@/components/UI'
import PostHead from './PostHead.vue'
import PostBody from './PostBody.vue'
import PostSummary from './PostSummary.vue'
import PostActions from './PostActions.vue'

const emits = defineEmits(['onLike', 'onComment', 'onShare'])

const handleLike = () => emits('onLike')

const handleComment = () => emits('onComment')

const handleShare = () => emits('onShare')
</script>

<template>
  <Card rootClassName="post-card">
    <template #body>
      <PostHead />
      <PostBody />
      <PostSummary />
      <Divider />
      <PostActions @onLike="handleLike" @onComment="handleComment" @onShare="handleShare" />
    </template>
  </Card>
</template>
