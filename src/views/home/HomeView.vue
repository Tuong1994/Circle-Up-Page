<script setup lang="ts">
import { computed, ref } from 'vue'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import HomeActions from '@/features/home/HomeActions.vue'
import HomeSide from '@/features/home/HomeSide/HomeSide.vue'
import PostModal from '@/features/home/Modals/PostModal/PostModal.vue'
import PostCard from '@/components/View/PostCard/PostCard.vue'
import CommentModal from '@/features/home/Modals/CommentModal/CommentModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const { isPhone, screenWidth } = useViewPoint()

const { MD_PHONE, LG_TABLET } = breakpoint

const openPostModal = ref<boolean>(false)

const openCommentModal = ref<boolean>(false)

const isTablet = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= LG_TABLET)

const isMobile = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))

const colorClassName = computed<string>(() => `home-${layout.color}`)

const handleOpenPostModal = () => (openPostModal.value = true)

const handleClosePostModal = () => (openPostModal.value = false)

const handleOpenCommentModal = () => (openCommentModal.value = true)

const handleCloseCommentModal = () => (openCommentModal.value = false)
</script>

<template>
  <div :class="['home', colorClassName]">
    <div class="home-wrap">
      <HomeActions @onClick="handleOpenPostModal" />
      <PostCard v-for="item in 100" @onComment="handleOpenCommentModal" />
    </div>
    <HomeSide v-if="!isMobile" />
  </div>
  <PostModal :open="openPostModal" @onClose="handleClosePostModal" />
  <CommentModal :open="openCommentModal" @onClose="handleCloseCommentModal" />
</template>
