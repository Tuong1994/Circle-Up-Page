<script setup lang="ts">
import { ref } from 'vue'
import { Typography, Button } from '@/components/UI'
import ContentBody from '../Components/ContentBody.vue'
import ContentHead from '../Components/ContentHead.vue'
import FriendsItem from './FriendsItem.vue'
import RequestsModal from './RequestsModal.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const openModal = ref<boolean>(false)

const handleOpenModal = () => (openModal.value = !openModal.value)
</script>

<template>
  <ContentHead>
    {{ t.lang.friends.sideMenu.requests.title }}
  </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16"> 0 {{ t.lang.friends.sideMenu.requests.title }} </Paragraph>
    <Button text sizes="sm" rootClassName="mb-5" @click="handleOpenModal">
      {{ t.lang.friends.sideMenu.requests.view }}
    </Button>
    <FriendsItem v-for="item in 10">
      <template #confirm>{{ t.lang.common.actions.confirm }}</template>
      <template #cancel>{{ t.lang.common.actions.delete }}</template>
    </FriendsItem>
  </ContentBody>
  <RequestsModal :open="openModal" @onClose="handleOpenModal" />
</template>
