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
  <ContentHead hasSearch :placeholder="t.lang.friends.sideMenu.list.placeholder">
    {{ t.lang.friends.sideMenu.list.title }}
  </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16" rootClassName="py-5">
      {{ t.lang.friends.sideMenu.friends }}
    </Paragraph>
    <FriendsItem v-for="item in 100"></FriendsItem>
  </ContentBody>
</template>
