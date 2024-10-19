<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { Layout } from '@/components/UI'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import Header from '../Header/Header.vue'
import HomeMenu from './HomeMenu.vue'
import FriendsMenu from './FriendsMenu/FriendsMenu.vue'
import useAppMainStore from './AppMainStore'

const { Container, Head, Body, Side, Content } = Layout

const { MD_TABLET } = breakpoint

const { currentRoute } = useRouter()

const { screenWidth } = useViewPoint()

const app = useAppMainStore()

const isHide = ref<boolean>(false)

const responsive = computed<boolean>(() => screenWidth.value < MD_TABLET)

const contentClassName = computed<string>(() => (isHide.value ? 'content-full' : ''))

watchEffect(() => {
  const pathName = currentRoute.value.name
  const path = currentRoute.value.fullPath
  if (responsive.value) return (isHide.value = true)
  if (pathName === routeNames.HOME) app.setHasContentMenuHead(false)
  if (pathName === routeNames.FRIENDS_PROFILE || pathName === routeNames.FRIENDS_PROFILE_POST)
    return (isHide.value = false)
  if (!path.includes(routeNames.PROFILE)) isHide.value = false
  else isHide.value = true
})
</script>

<template>
  <Container>
    <Head>
      <Header />
    </Head>
    <Body>
      <Side v-if="!isHide" :hasCollapseButton="false">
        <HomeMenu v-if="currentRoute.name === routeNames.HOME" />
        <FriendsMenu v-if="currentRoute.fullPath.includes(routeNames.FRIENDS)" />
      </Side>
      <Content :rootClassName="contentClassName">
        <slot></slot>
      </Content>
    </Body>
  </Container>
</template>
