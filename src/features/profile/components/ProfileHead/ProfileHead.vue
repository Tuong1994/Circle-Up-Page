<script setup lang="ts">
import { Divider } from '@/components/UI'
import AvatarUpload from './AvatarUpload.vue'
import BannerUpload from './BannerUpload.vue'
import HeadInfo from './HeadInfo.vue'
import HeadNavBar from './HeadNavBar.vue'
</script>

<template>
  <div class="profile-head">
    <div class="head-wrap">
      <div class="wrap-image">
        <BannerUpload />
        <AvatarUpload />
      </div>
      <div class="wrap-content">
        <HeadInfo />
        <Divider />
        <HeadNavBar />
      </div>
    </div>
  </div>
</template>
