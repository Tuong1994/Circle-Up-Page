<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { EFriendMenuType } from '@/components/View/AppContainer/AppLayout/enum'
import FriendsEmpty from '@/features/friends/FriendsEmpty.vue'
import useAppLayoutStore from '@/components/View/AppContainer/AppLayout/AppLayoutStore'
import useLangStore from '@/stores/LangStore'

const app = useAppLayoutStore()

const t = useLangStore()

const content = ref<string>('')

watchEffect(() => {
  if (app.friendMenuType === EFriendMenuType.LIST) content.value = t.lang.friends.empty.list
  if (app.friendMenuType === EFriendMenuType.REQUESTS) content.value = t.lang.friends.empty.requests
  if (app.friendMenuType === EFriendMenuType.SUGGESTIONS) content.value = t.lang.friends.empty.suggestions
})
</script>

<template>
  <FriendsEmpty :content="content" />
</template>
