<script setup lang="ts">
import { computed, ref } from 'vue'
import { Space } from '@/components/UI'
import { EProfileTabType } from '../../enum'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import type { ProfileTab } from '../../type'
import FriendsList from './FriendsList.vue'
import FriendsFollowing from './FriendsFollowing.vue'

const { screenWidth } = useViewPoint()

const { SM_PHONE, SM_TABLET } = breakpoint

const tabSelected = ref<EProfileTabType>(EProfileTabType.ALL_FRIENDS)

const responsive = computed<boolean>(() =>
  Boolean(screenWidth.value >= SM_PHONE && screenWidth.value <= SM_TABLET)
)

const items = computed<ProfileTab[]>(() => [
  { id: EProfileTabType.ALL_FRIENDS, title: 'All friends' },
  { id: EProfileTabType.FOLLOWING, title: 'Following' }
])

const handleSelectTab = (id: EProfileTabType) => (tabSelected.value = id)
</script>

<template>
  <div class="friends-tabs">
    <Space rootClassName="tabs-titles">
      <div
        v-for="item in items"
        :key="item.id"
        :class="['titles-item', { 'titles-item-selected': tabSelected === item.id }]"
        @click="handleSelectTab(item.id)"
      >
        {{ item.title }}
      </div>
    </Space>
    <div class="tabs-content">
      <FriendsList v-if="tabSelected === EProfileTabType.ALL_FRIENDS" :responsive="responsive" />
      <FriendsFollowing v-if="tabSelected === EProfileTabType.FOLLOWING" />
    </div>
  </div>
</template>
