<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { EFriendMenuType } from '@/components/View/AppMain/enum'
import FriendsEmpty from '@/features/friends/FriendsEmpty.vue'
import useAppMainStore from '@/components/View/AppMain/AppMainStore'

const app = useAppMainStore()

const content = ref<string>('')

watchEffect(() => {
  if (app.friendMenuType === EFriendMenuType.LIST)
    content.value = "When you become friends with people on Circle Up, they'll appear here."
  if (app.friendMenuType === EFriendMenuType.REQUESTS)
    content.value = "When you have friend requests or suggestions, you'll see them here."
  if (app.friendMenuType === EFriendMenuType.SUGGESTIONS)
    content.value = "Select people's names to preview their profile."
})
</script>

<template>
  <FriendsEmpty :content="content" />
</template>
