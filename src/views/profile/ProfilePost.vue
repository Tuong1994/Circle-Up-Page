<script setup lang="ts">
import PostCard from '@/components/View/PostCard/PostCard.vue'
import PostFilter from '@/features/profile/components/ProfilePost/PostFilter.vue'
import PostIntro from '@/features/profile/components/ProfilePost/PostIntro.vue'
import PostPhotos from '@/features/profile/components/ProfilePost/PostPhotos.vue'
import useScrollSticky from '@/features/profile/hooks/useScrollSticky'

const responsive = useScrollSticky()
</script>

<template>
  <div class="profile-post">
    <div id="leftSide" class="post-left-side">
      <PostIntro />
      <PostPhotos v-if="!responsive" />
    </div>
    <div id="rightSide" class="post-right-side">
      <PostFilter />
      <PostCard v-for="item in 10" />
    </div>
  </div>
</template>
