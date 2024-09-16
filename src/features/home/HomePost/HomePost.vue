<script setup lang="ts">
import { ref } from 'vue'
import { Card, Divider } from '@/components/UI'
import PostHead from './PostHead.vue'
import PostBody from './PostBody.vue'
import PostSummary from './PostSummary.vue'
import PostActions from './PostActions.vue'
import CommentModal from '../Modals/CommentModal/CommentModal.vue'

const openCommentModal = ref<boolean>(false)

const handleOpenCommentModal = () => (openCommentModal.value = true)

const handleCloseCommentModal = () => (openCommentModal.value = false)
</script>

<template>
  <Card rootClassName="home-post">
    <template #body>
      <PostHead />
      <PostBody />
      <PostSummary />
      <Divider />
      <PostActions @onComment="handleOpenCommentModal" />
    </template>
  </Card>
  <CommentModal :open="openCommentModal" @onClose="handleCloseCommentModal" />
</template>
