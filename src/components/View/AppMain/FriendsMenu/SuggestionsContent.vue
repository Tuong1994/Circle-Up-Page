<script setup lang="ts">
import { Typography } from '@/components/UI'
import ContentHead from '../Components/ContentHead.vue'
import ContentBody from '../Components/ContentBody.vue'
import FriendsItem from './FriendsItem.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <ContentHead>
    {{ t.lang.friends.sideMenu.suggestions.title }}
  </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16" rootClassName="py-5">
      {{ t.lang.friends.subTitle }}
    </Paragraph>
    <FriendsItem v-for="item in 10"> </FriendsItem>
  </ContentBody>
</template>
