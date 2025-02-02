<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from 'vue'
import { Card, Divider } from '@/components/UI'
import type { Post } from '@/services/post/type'
import PostHead from './PostHead.vue'
import PostBody from './PostBody.vue'
import PostSummary from './PostSummary.vue'
import PostActions from './PostActions.vue'

interface PostCardProps {
  post?: Post
  hasRemove?: boolean
}

const props = withDefaults(defineProps<PostCardProps>(), {
  hasRemove: true
})

const emits = defineEmits(['onLike', 'onComment', 'onShare', 'onRemove'])

const handleLike = () => emits('onLike')

const handleComment = () => emits('onComment')

const handleShare = () => emits('onShare')

const handleRemove = () => emits('onRemove')
</script>

<template>
  <Card rootClassName="post-card">
    <template #body>
      <PostHead :post="post as Post" :hasRemove="hasRemove" @onRemove="handleRemove" />
      <PostBody :post="post as Post" />
      <PostSummary />
      <Divider />
      <PostActions @onLike="handleLike" @onComment="handleComment" @onShare="handleShare" />
    </template>
  </Card>
</template>
