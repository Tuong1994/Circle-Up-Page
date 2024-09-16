<script setup lang="ts">
import { ref } from 'vue'
import { Card, Divider } from '@/components/UI'
import PostHead from './PostHead.vue'
import PostBody from './PostBody.vue'
import PostSummary from './PostSummary.vue'
import PostActions from './PostActions.vue'
import CommentModal from '../Modals/CommentModal/CommentModal.vue'
import InputMention from "@/components/Control/InputMention/InputMention.vue"
import type { MentionItems } from '@/components/Control/InputMention/type'

const openCommentModal = ref<boolean>(false)

const mentions: MentionItems = [
  { label: 'User name 1', value: '1', imgUrl: '' },
  { label: 'User name 2', value: '2', imgUrl: '' },
  { label: 'User name 3', value: '3', imgUrl: '' },
  { label: 'User name 4', value: '4', imgUrl: '' }
]


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
      <InputMention :mentions="mentions" />
    </template>
  </Card>
  <CommentModal :open="openCommentModal" @onClose="handleCloseCommentModal" />
</template>
