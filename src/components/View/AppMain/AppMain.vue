<script setup lang="ts">
import { computed } from 'vue'
import { Layout } from '@/components/UI'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import Header from '../Header/Header.vue'
import HomeMenu from './Side/HomeMenu.vue'
import FriendsMenu from './Side/FriendsMenu/FriendsMenu.vue'
import CommentModal from '../Comment/CommentModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCommentStore from '../Comment/CommentStore'
import useRenderSide from './hooks/useRenderSide'
import useRenderHeader from './hooks/useRenderHeader'
import AlbumSide from './Side/Media/AlbumSide.vue'

const { Container, Head, Body, Side, Content } = Layout

const { MD_TABLET } = breakpoint

const { currentRoute } = useRouter()

const { screenWidth } = useViewPoint()

const layout = useLayoutStore()

const comment = useCommentStore()

const renderHeader = useRenderHeader()

const responsive = computed<boolean>(() => screenWidth.value < MD_TABLET)

const renderSide = useRenderSide(responsive.value)

const colorClassName = computed<string>(() => `container-${layout.color}`)

const contentClassName = computed<string>(() => (!renderSide.value ? 'content-full' : ''))

const handleCloseCommentModal = () => comment.setOpenModal(false)
</script>

<template>
  <Container :rootClassName="colorClassName">
    <Head v-if="renderHeader">
      <Header />
    </Head>
    <Body>
      <Side v-if="renderSide" :hasCollapseButton="false">
        <HomeMenu v-if="currentRoute.name === routeNames.HOME" />
        <FriendsMenu v-if="currentRoute.fullPath.includes(routeNames.FRIENDS)" />
        <AlbumSide v-if="currentRoute.name === routeNames.MEDIA_ALBUM" />
      </Side>
      <Content :rootClassName="contentClassName">
        <slot></slot>
      </Content>
    </Body>
  </Container>
  <CommentModal :open="comment.openModal" @onClose="handleCloseCommentModal" />
</template>
