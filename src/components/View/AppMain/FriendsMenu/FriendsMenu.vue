<script setup lang="ts">
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import DefaultContent from './DefaultContent.vue'
import RequestsContent from './RequestsContent.vue'
import SuggestionsContent from './SuggestionsContent.vue'
import ListContent from './ListContent.vue'

const { currentRoute } = useRouter()
</script>

<template>
  <DefaultContent v-if="currentRoute.fullPath === routePaths.FRIENDS" />
  <RequestsContent v-if="currentRoute.fullPath === routePaths.FRIENDS_REQUESTS" />
  <SuggestionsContent v-if="currentRoute.fullPath === routePaths.FRIENDS_SUGGESTIONS" />
  <ListContent v-if="currentRoute.fullPath === routePaths.FRIENDS_LIST" />
</template>
