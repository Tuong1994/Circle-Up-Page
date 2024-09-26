<script setup lang="ts">
import { computed } from 'vue'
import { Layout } from '@/components/UI'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import { useViewPoint } from '@/hooks'
import Header from '../Header/Header.vue'
import HomeMenu from './HomeMenu.vue'
import FriendsMenu from './FriendsMenu/FriendsMenu.vue'

const { Container, Head, Body, Side, Content } = Layout

const { currentRoute } = useRouter()

const { isPhone, isTablet } = useViewPoint()

const isMobile = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))
</script>

<template>
  <Container>
    <Head>
      <Header />
    </Head>
    <Body>
      <Side v-if="!isMobile" :hasCollapseButton="false">
        <div class="side-menu">
          <HomeMenu v-if="currentRoute.name === routeNames.HOME" />
          <FriendsMenu v-if="currentRoute.fullPath.includes(routeNames.FRIENDS)" />
        </div>
      </Side>
      <Content>
        <slot></slot>
      </Content>
    </Body>
  </Container>
</template>
