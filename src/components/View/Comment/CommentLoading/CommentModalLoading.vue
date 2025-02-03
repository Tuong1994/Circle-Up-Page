<script setup lang="ts">
import { Divider } from '@/components/UI'
import PostCardLoading from '../../PostCard/PostCardLoading.vue'
import CommentItemLoading from './CommentItemLoading.vue'
</script>

<template>
  <PostCardLoading />
  <Divider />
  <CommentItemLoading />
</template>
