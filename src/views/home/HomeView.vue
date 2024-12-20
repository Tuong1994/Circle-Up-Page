<script setup lang="ts">
import { computed } from 'vue'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import HomeActions from '@/features/home/HomeActions.vue'
import HomeSide from '@/features/home/HomeSide/HomeSide.vue'
import HomeEmpty from '@/features/home/HomeEmpty.vue'
import PostCard from '@/components/View/PostCard/PostCard.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCommentStore from '@/components/View/Comment/CommentStore'
import usePostStore from '@/stores/PostStore'

const layout = useLayoutStore()

const { isPhone, screenWidth } = useViewPoint()

const { MD_PHONE, LG_TABLET } = breakpoint

const comment = useCommentStore()

const post = usePostStore()

const isTablet = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= LG_TABLET)

const isMobile = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))

const colorClassName = computed<string>(() => `home-${layout.color}`)

const handleOpenPostModal = () => post.setOpenModal(true)

const handleOpenCommentModal = () => comment.setOpenModal(true)
</script>

<template>
  <div :class="['home', colorClassName]">
    <div class="home-wrap">
      <HomeActions @onClick="handleOpenPostModal" />
      <PostCard v-for="item in 10" @onComment="handleOpenCommentModal" />
      <HomeEmpty />
    </div>
    <HomeSide v-if="!isMobile" />
  </div>
</template>
