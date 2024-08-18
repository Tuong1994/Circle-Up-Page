<script setup lang="ts">
import { computed } from 'vue'
import { useViewPoint } from '@/hooks'
import { screen } from '@/hooks/useViewPoint'
import HomeActions from '@/features/home/HomeActions.vue'
import HomePost from '@/features/home/HomePost/HomePost.vue'
import HomeSide from '@/features/home/HomeSide/HomeSide.vue'

const { isPhone, screenWidth } = useViewPoint()

const { MD_PHONE, LG_TABLET } = screen

const isTablet = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= LG_TABLET)

const isMobile = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))
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
    <HomeSide v-if="!isMobile" />
  </div>
</template>
