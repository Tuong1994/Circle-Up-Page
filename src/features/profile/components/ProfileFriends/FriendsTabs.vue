<script setup lang="ts">
import { computed } from 'vue'
import { EProfileTabType } from '../../enum'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/features/useViewPoint'
import type { ProfileTabs as FriendsTabs } from '../../type'
import ProfileTabs from '../ProfileTabs/ProfileTabs.vue'
import FriendsList from './FriendsList.vue'
import FriendsFollowing from './FriendsFollowing.vue'
import FriendsFollowers from './FriendsFollowers.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const { screenWidth } = useViewPoint()

const { SM_PHONE, SM_TABLET } = breakpoint

const responsive = computed<boolean>(() =>
  Boolean(screenWidth.value >= SM_PHONE && screenWidth.value <= SM_TABLET)
)

const items = computed<FriendsTabs>(() => [
  { id: EProfileTabType.ALL_FRIENDS, title: t.lang.profile.friends.tabs.allFriends },
  { id: EProfileTabType.FOLLOWING, title: t.lang.profile.friends.tabs.following },
  { id: EProfileTabType.FOLLOWERS, title: t.lang.profile.friends.tabs.followers }
])
</script>

<template>
  <ProfileTabs :items="items">
    <template #content="tab">
      <FriendsList v-if="tab.id === EProfileTabType.ALL_FRIENDS" :responsive="responsive" />
      <FriendsFollowing v-if="tab.id === EProfileTabType.FOLLOWING" :responsive="responsive" />
      <FriendsFollowers v-if="tab.id === EProfileTabType.FOLLOWERS" :responsive="responsive" />
    </template>
  </ProfileTabs>
</template>
