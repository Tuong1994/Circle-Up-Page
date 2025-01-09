<script setup lang="ts">
import { computed } from 'vue'
import { Divider } from '@/components/UI'
import AvatarUpload from './AvatarUpload.vue'
import BannerUpload from './BannerUpload.vue'
import HeadInfo from './HeadInfo.vue'
import HeadNavBar from './HeadNavBar.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const themeClassName = computed<string>(() => `profile-head-${layout.theme}`)
</script>

<template>
  <div :class="['profile-head', themeClassName]">
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
