<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from 'vue'
import { Card, Divider } from '@/components/UI'
import PostHead from './PostHead.vue'
import PostBody from './PostBody.vue'
import PostSummary from './PostSummary.vue'
import PostActions from './PostActions.vue'

interface PostCardProps {
  hasRemove?: boolean
}

withDefaults(defineProps<PostCardProps>(), {
  hasRemove: true,
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
      <PostHead :hasRemove="hasRemove" @onRemove="handleRemove" />
      <PostBody />
      <PostSummary />
      <Divider />
      <PostActions @onLike="handleLike" @onComment="handleComment" @onShare="handleShare" />
    </template>
  </Card>
</template>
