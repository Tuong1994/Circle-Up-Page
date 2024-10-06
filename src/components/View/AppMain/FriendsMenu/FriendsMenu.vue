<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import { EFriendMenuType } from '../enum'
import DefaultContent from './DefaultContent.vue'
import RequestsContent from './RequestsContent.vue'
import SuggestionsContent from './SuggestionsContent.vue'
import ListContent from './ListContent.vue'
import useAppMainStore from '../AppMainStore'

const { currentRoute } = useRouter()

const app = useAppMainStore()

watchEffect(() => {
  if (currentRoute.value.fullPath === routePaths.FRIENDS) app.setFriendMenuType(EFriendMenuType.DEFAULT)
  if (currentRoute.value.fullPath === routePaths.FRIENDS_LIST) app.setFriendMenuType(EFriendMenuType.LIST)
  if (currentRoute.value.fullPath === routePaths.FRIENDS_REQUESTS)
    app.setFriendMenuType(EFriendMenuType.REQUESTS)
  if (currentRoute.value.fullPath === routePaths.FRIENDS_SUGGESTIONS)
    app.setFriendMenuType(EFriendMenuType.SUGGESTIONS)
})
</script>

<template>
  <DefaultContent v-if="app.friendMenuType === EFriendMenuType.DEFAULT" />
  <RequestsContent v-if="app.friendMenuType === EFriendMenuType.REQUESTS" />
  <SuggestionsContent v-if="app.friendMenuType === EFriendMenuType.SUGGESTIONS" />
  <ListContent v-if="app.friendMenuType === EFriendMenuType.LIST" />
</template>
