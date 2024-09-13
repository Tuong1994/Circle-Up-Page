<script setup lang="ts">
import CommentList from './CommentList.vue'

export type Comment = {
  id: string
  content: string
  authorId: string
  parentId: string | null
}

const comments: Comment[] = [
  { id: '1', content: 'This is root comment', authorId: 'author-1', parentId: null },
  { id: '2', content: 'This is root comment', authorId: 'author-2', parentId: null },
  { id: '3', content: 'This is root comment', authorId: 'author-3', parentId: null },
  { id: '4', content: 'This is child comment', authorId: 'author-4', parentId: '1' },
  { id: '5', content: 'This is child comment', authorId: 'author-5', parentId: '1' },
  { id: '6', content: 'This is child comment', authorId: 'author-6', parentId: '3' },
  { id: '7', content: 'This is child comment', authorId: 'author-7', parentId: '6' },
  { id: '8', content: 'This is child comment', authorId: 'author-8', parentId: '5' },
  { id: '9', content: 'This is child comment', authorId: 'author-9', parentId: '3' },
  { id: '10', content: 'This is child comment', authorId: 'author-10', parentId: '2' }
]

const rootComments = comments.filter((comment) => !comment.parentId)
</script>

<template>
  <CommentList :rootComments="rootComments" :listComments="comments" />
</template>
