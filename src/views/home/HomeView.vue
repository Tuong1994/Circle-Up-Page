<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/features/useViewPoint'
import type { ApiQuery } from '@/services/type'
import type { Post } from '@/services/post/type'
import HomeActions from '@/features/home/components/HomeActions.vue'
import HomeSide from '@/features/home/components/HomeSide/HomeSide.vue'
import HomeEmpty from '@/features/home/components/HomeEmpty.vue'
import HomeLoading from '@/features/home/components/HomeLoading.vue'
import InfiniteScroll from '@/components/View/InfiniteScroll/InfiniteScroll.vue'
import PostCard from '@/components/View/PostCard/PostCard.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCommentStore from '@/components/View/Comment/CommentStore'
import usePostStore from '@/stores/PostStore'
import useGetPostsPaging from '@/features/home/hooks/useGetPosts'

const { MD_PHONE, LG_TABLET } = breakpoint

const { isPhone, screenWidth } = useViewPoint()

const layout = useLayoutStore()

const comment = useCommentStore()

const post = usePostStore()

const apiQuery = ref<ApiQuery>({
  page: 1,
  limit: 10
})

const { data: response, isLoading } = useGetPostsPaging(apiQuery)

const posts = ref<Post[]>([])

const isNoMorePosts = computed<boolean>(() => {
  if (!posts.value) return true
  return !posts.value.length || posts.value.length === response.value?.data.totalItems
})

const isTablet = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= LG_TABLET)

const isMobile = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))

const themeClassName = computed<string>(() => `home-${layout.theme}`)

const colorClassName = computed<string>(() => `home-${layout.color}`)

const handleOpenPostModal = () => post.setOpenModal(true)

const handleOpenCommentModal = (postId: string) => {
  comment.setOpenModal(true)
  setTimeout(() => post.setId(postId), 500)
}

const handleUpdateApiQuery = () => {
  if (isNoMorePosts.value) return
  apiQuery.value = { ...apiQuery.value, page: Number(apiQuery.value.page) + 1 }
}

watch(
  response,
  (newResponse) => {
    if (!newResponse) return
    const newItems = newResponse.data.items
    if (!posts.value.length) return (posts.value = newItems)
    posts.value = [...posts.value, ...newItems]
  },
  { immediate: true }
)
</script>

<template>
  <div :class="['home', themeClassName, colorClassName]">
    <div class="home-wrap">
      <HomeActions @onClick="handleOpenPostModal" />
      <InfiniteScroll :isReach="isNoMorePosts" @onReach="handleUpdateApiQuery">
        <PostCard
          v-for="post in posts"
          :post="post"
          @onComment="() => handleOpenCommentModal(String(post.id))"
        />
        <HomeLoading v-if="isLoading" />
        <HomeEmpty v-if="isNoMorePosts" />
      </InfiniteScroll>
    </div>
    <HomeSide v-if="!isMobile" />
  </div>
</template>
