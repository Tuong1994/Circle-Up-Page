<script setup lang="ts">
import { computed, ref } from 'vue'
import { useViewPoint } from '@/hooks'
import { screen } from '@/hooks/useViewPoint'
import HomeActions from '@/features/home/components/HomeActions.vue'
import HomePost from '@/features/home/components/HomePost/HomePost.vue'
import HomeSide from '@/features/home/components/HomeSide/HomeSide.vue'
import PostModal from '@/features/home/components/PostModal/PostModal.vue'

const { isPhone, screenWidth } = useViewPoint()

const { MD_PHONE, LG_TABLET } = screen

const openPostModal = ref<boolean>(false)

const isTablet = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= LG_TABLET)

const isMobile = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))

const handleOpenPostModal = () => (openPostModal.value = true)

const handleClosePostModal = () => (openPostModal.value = false)
</script>

<template>
  <div class="home">
    <div class="home-wrap">
      <HomeActions @onClick="handleOpenPostModal" />
      <HomePost />
      <HomePost />
      <HomePost />
      <HomePost />
      <HomePost />
    </div>
    <HomeSide v-if="!isMobile" />
  </div>
  <PostModal :open="openPostModal" @onClose="handleClosePostModal" />
</template>
