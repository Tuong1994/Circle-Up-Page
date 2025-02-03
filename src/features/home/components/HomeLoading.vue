<script setup lang="ts">
import PostCardLoading from '@/components/View/PostCard/PostCardLoading.vue'
</script>

<template>
  <PostCardLoading v-for="item in 2" rootClassName="mb-5" />
</template>
