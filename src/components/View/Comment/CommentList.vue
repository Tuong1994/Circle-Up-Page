<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { Comment, ActiveComment } from '@/services/comment/type'
import CommentItem from './CommentItem.vue'

interface CommentListProps {
  rootComments: Comment[]
  listComments: Comment[]
}

defineProps<CommentListProps>()

const activeComment = ref<ActiveComment>({
  id: '',
  type: null
})

const handleReply = (id: string) => (activeComment.value = { ...activeComment.value, id, type: 'reply' })

const handleCancelReply = () => (activeComment.value = { ...activeComment.value, id: '', type: null })
</script>

<template>
  <CommentItem
    v-for="comment in rootComments"
    :key="comment.id"
    :comment="comment"
    :comments="listComments"
    :activeComment="activeComment"
    @onReply="handleReply"
    @onCancelReply="handleCancelReply"
  />
</template>
