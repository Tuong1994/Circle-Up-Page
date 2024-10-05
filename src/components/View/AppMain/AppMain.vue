<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { Layout } from '@/components/UI'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import { useViewPoint } from '@/hooks'
import { screen } from '@/hooks/useViewPoint'
import Header from '../Header/Header.vue'
import HomeMenu from './HomeMenu.vue'
import FriendsMenu from './FriendsMenu/FriendsMenu.vue'
import useAppMainStore from './AppMainStore'

const { Container, Head, Body, Side, Content } = Layout

const { currentRoute } = useRouter()

const { screenWidth } = useViewPoint()

const app = useAppMainStore()

const responsive = computed<boolean>(() => screenWidth.value < screen.MD_TABLET)

watchEffect(() => {
  if (currentRoute.value.name === routeNames.HOME) app.setHasContentMenuHead(false)
})
</script>

<template>
  <Container>
    <Head>
      <Header />
    </Head>
    <Body>
      <Side v-if="!responsive" :hasCollapseButton="false">
        <HomeMenu v-if="currentRoute.name === routeNames.HOME" />
        <FriendsMenu v-if="currentRoute.fullPath.includes(routeNames.FRIENDS)" />
      </Side>
      <Content>
        <slot></slot>
      </Content>
    </Body>
  </Container>
</template>
