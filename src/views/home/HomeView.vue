<script setup lang="ts">
import HomeActions from '@/features/home/HomeActions.vue'
import HomePost from '@/features/home/HomePost/HomePost.vue'
import HomeSide from '@/features/home/HomeSide/HomeSide.vue'
</script>

<template>
  <div class="home">
    <div class="home-wrap">
      <HomeActions />
      <HomePost />
      <HomePost />
      <HomePost />
      <HomePost />
      <HomePost />
    </div>
    <HomeSide />
  </div>
</template>
