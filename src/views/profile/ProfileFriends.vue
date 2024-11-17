<script setup lang="ts">
import { computed } from 'vue'
import { Card } from '@/components/UI'
import FriendsHead from '@/features/profile/components/ProfileFriends/FriendsHead.vue'
import FriendsTabs from '@/features/profile/components/ProfileFriends/FriendsTabs.vue'
import FriendsNote from '@/features/profile/components/ProfileFriends/FriendsNote.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const colorClassName = computed<string>(() => `profile-friends-${layout.color}`)

const shapeClassName = computed<string>(() => `profile-friends-${layout.shape}`)

const rootClassName = computed<string>(
  () => `profile-friends ${colorClassName.value} ${shapeClassName.value}`
)
</script>

<template>
  <Card :rootClassName="rootClassName">
    <template #body>
      <FriendsHead />
      <FriendsTabs />
      <!-- <FriendsNote message="No friend to show" /> -->
    </template>
  </Card>
</template>
