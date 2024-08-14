<script setup lang="ts">
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import { Layout } from '@/components/UI'
import Header from '../Header/Header.vue'
import HomeMenu from './HomeMenu.vue'

const { Container, Head, Body, Side, Content } = Layout

const { currentRoute } = useRouter()
</script>

<template>
  <Container>
    <Head>
      <Header />
    </Head>
    <Body>
      <Side :hasCollapseButton="false">
        <div class="side-menu">
          <HomeMenu v-if="currentRoute.fullPath === routePaths.HOME" />
        </div>
      </Side>
      <Content>
        <slot></slot>
      </Content>
    </Body>
  </Container>
</template>
