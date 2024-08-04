<script setup lang="ts">
import { Layout } from '@/components/UI'
import Header from './Header/Header.vue'
import useHeaderStore from './HeaderStore'

const { Container, Head, Body, Side, Menu, Content } = Layout

const menu = useHeaderStore()
</script>

<template>
  <Container>
    <Head>
      <Header />
    </Head>
    <Body>
      <Side :hasCollapseButton="false">
        <Menu type="vertical" :items="menu.items" />
      </Side>
      <Content>
        <slot></slot>
      </Content>
    </Body>
  </Container>
</template>