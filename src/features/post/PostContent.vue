<script setup lang="ts">
import { defineEmits } from 'vue'
import { Divider } from '@/components/UI'
import PostHead from '@/components/View/PostCard/PostHead.vue'
import PostBody from '@/components/View/PostCard/PostBody.vue'
import PostSummary from '@/components/View/PostCard/PostSummary.vue'
import PostActions from '@/components/View/PostCard/PostActions.vue'
import Comment from '@/components/View/Comment/Comment.vue'
import ContentHeader from './ContentHeader.vue'

const emits = defineEmits(['onBack'])

const handleBack = () => emits('onBack')
</script>

<template>
  <div class="detail-content">
    <ContentHeader @onBack="handleBack" />
    <div class="content-main">
      <PostHead :hasRemove="false" />
      <PostBody :hasMediaContent="false" />
      <PostSummary />
      <PostActions />
      <Divider />
      <Comment />
    </div>
  </div>
</template>
