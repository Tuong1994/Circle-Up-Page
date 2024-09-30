<script setup lang="ts">
import { Typography, Button } from '@/components/UI'
import ContentBody from '../Components/ContentBody.vue'
import ContentHead from '../Components/ContentHead.vue'
import FriendItem from './FriendItem.vue'

const { Paragraph } = Typography
</script>

<template>
  <ContentHead> Friends requests </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16"> 0 Friends requests </Paragraph>
    <Button text sizes="sm" rootClassName="mb-5">View sent requests</Button>
    <FriendItem v-for="item in 100">
      <template #confirm>Confirm</template>
      <template #cancel>Delete</template>
    </FriendItem>
  </ContentBody>
</template>
