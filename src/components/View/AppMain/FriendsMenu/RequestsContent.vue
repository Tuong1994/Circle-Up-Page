<script setup lang="ts">
import { Typography, Button } from '@/components/UI'
import ContentBody from '../Components/ContentBody.vue'
import ContentHead from '../Components/ContentHead.vue'
import FriendsItem from '@/features/friends/FriendsItem.vue'

const { Paragraph } = Typography
</script>

<template>
  <ContentHead> Friends requests </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16"> 0 Friends requests </Paragraph>
    <Button text sizes="sm" rootClassName="mb-5">View sent requests</Button>
    <FriendsItem v-for="item in 100">
      <template #confirm>Confirm</template>
      <template #cancel>Delete</template>
    </FriendsItem>
  </ContentBody>
</template>
