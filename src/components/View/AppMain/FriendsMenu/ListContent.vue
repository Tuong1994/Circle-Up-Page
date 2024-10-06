<script setup lang="ts">
import { Typography } from '@/components/UI'
import ContentHead from '../Components/ContentHead.vue'
import ContentBody from '../Components/ContentBody.vue'
import FriendsItem from '@/features/friends/FriendsItem.vue';

const { Paragraph } = Typography
</script>

<template>
  <ContentHead hasSearch> All friends </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16" rootClassName="py-5">Friends</Paragraph>
    <FriendsItem v-for="item in 100"></FriendsItem>
  </ContentBody>
</template>
