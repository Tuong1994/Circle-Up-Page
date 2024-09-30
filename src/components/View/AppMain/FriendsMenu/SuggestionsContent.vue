<script setup lang="ts">
import { Typography, Grid, Space, Avatar, Button } from '@/components/UI'
import ContentHead from '../Components/ContentHead.vue'
import ContentBody from '../Components/ContentBody.vue'
import FriendItem from './FriendItem.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const { Row, Col } = Grid

const layout = useLayoutStore()
</script>

<template>
  <ContentHead> Suggestions </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16" rootClassName="py-5">People you may know</Paragraph>
    <FriendItem v-for="item in 100"> </FriendItem>
  </ContentBody>
</template>
