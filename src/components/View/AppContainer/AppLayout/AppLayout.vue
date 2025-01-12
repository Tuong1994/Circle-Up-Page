<script setup lang="ts">
import { computed } from 'vue'
import { Layout } from '@/components/UI'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import Header from '@/components/View/Header/Header.vue'
import HomeMenu from './Side/Home/HomeMenu.vue'
import FriendsMenu from './Side/Friends/FriendsMenu.vue'
import AlbumSide from './Side/Media/AlbumSide.vue'
import CommentModal from '@/components/View/Comment/CommentModal.vue'
import PostModal from '@/components/View/PostModal/PostModal.vue'
import SavedSide from './Side/Saved/SavedSide.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCommentStore from '@/components/View/Comment/CommentStore'
import useRenderSide from './hooks/useRenderSide'
import useRenderHeader from './hooks/useRenderHeader'
import usePostStore from '@/stores/PostStore'

const { Container, Head, Body, Side, Content } = Layout

const { MD_TABLET } = breakpoint

const { currentRoute } = useRouter()

const { screenWidth } = useViewPoint()

const layout = useLayoutStore()

const comment = useCommentStore()

const post = usePostStore()

const renderHeader = useRenderHeader()

const responsive = computed<boolean>(() => screenWidth.value < MD_TABLET)

const renderSide = useRenderSide(responsive)

const colorClassName = computed<string>(() => `container-${layout.color}`)

const contentClassName = computed<string>(() => (!renderSide.value ? 'content-full' : ''))

const handleCloseCommentModal = () => comment.setOpenModal(false)

const handleClosePostModal = () => post.setOpenModal(false)
</script>

<template>
  <Container theme="dark" :rootClassName="colorClassName">
    <Head v-if="renderHeader">
      <Header />
    </Head>
    <Body>
      <Side v-if="renderSide" :hasCollapseButton="false">
        <HomeMenu v-if="currentRoute.name === routeNames.HOME" />
        <FriendsMenu v-if="currentRoute.fullPath.includes(routeNames.FRIENDS)" />
        <AlbumSide v-if="currentRoute.name === routeNames.MEDIA_ALBUM" />
        <SavedSide v-if="currentRoute.fullPath.includes(routeNames.SAVED)" />
      </Side>
      <Content :rootClassName="contentClassName">
        <slot></slot>
      </Content>
    </Body>
  </Container>
  <CommentModal :open="comment.openModal" @onClose="handleCloseCommentModal" />
  <PostModal :open="post.openModal" @onClose="handleClosePostModal" />
</template>
