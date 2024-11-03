<script setup lang="ts">
import { computed } from 'vue'
import { Layout } from '@/components/UI'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import Header from '../Header/Header.vue'
import HomeMenu from './Menus/HomeMenu.vue'
import FriendsMenu from './Menus/FriendsMenu/FriendsMenu.vue'
import CommentModal from '../Comment/CommentModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useCommentStore from '../Comment/CommentStore'
import useRenderSide from './hooks/useRenderSide'

const { Container, Head, Body, Side, Content } = Layout

const { MD_TABLET } = breakpoint

const { currentRoute } = useRouter()

const { screenWidth } = useViewPoint()

const layout = useLayoutStore()

const comment = useCommentStore()

const responsive = computed<boolean>(() => screenWidth.value < MD_TABLET)

const renderSide = useRenderSide(responsive.value)

const colorClassName = computed<string>(() => `container-${layout.color}`)

const contentClassName = computed<string>(() => (renderSide.value ? 'content-full' : ''))

const handleCloseCommentModal = () => comment.setOpenModal(false)
</script>

<template>
  <Container :rootClassName="colorClassName">
    <Head>
      <Header />
    </Head>
    <Body>
      <Side v-if="!renderSide" :hasCollapseButton="false">
        <HomeMenu v-if="currentRoute.name === routeNames.HOME" />
        <FriendsMenu v-if="currentRoute.fullPath.includes(routeNames.FRIENDS)" />
      </Side>
      <Content :rootClassName="contentClassName">
        <slot></slot>
      </Content>
    </Body>
  </Container>
  <CommentModal :open="comment.openModal" @onClose="handleCloseCommentModal" />
</template>
