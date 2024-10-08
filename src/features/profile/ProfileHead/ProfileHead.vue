<script setup lang="ts">
import AvatarUpload from './AvatarUpload.vue'
import BannerUpload from './BannerUpload.vue'
import HeadInfo from './HeadInfo.vue'
</script>

<template>
  <div class="profile-head">
    <div class="head-banner">
      <BannerUpload />
      <AvatarUpload />
    </div>
    <div class="head-content">
      <HeadInfo />
    </div>
  </div>
</template>
