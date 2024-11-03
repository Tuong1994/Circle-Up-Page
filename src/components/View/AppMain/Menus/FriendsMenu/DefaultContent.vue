<script setup lang="ts">
import { computed } from 'vue'
import { Divider, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import type { RouterItems } from '@/router/type'
import MenuItem from '../../Components/MenuItem.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const items = computed<RouterItems>(() => [
  {
    id: 'request',
    name: t.lang.common.routes.friendRequests,
    path: routePaths.FRIENDS_REQUESTS,
    iconName: iconName.USER
  },
  {
    id: 'suggestions',
    name: t.lang.common.routes.friendSuggestions,
    path: routePaths.FRIENDS_SUGGESTIONS,
    iconName: iconName.USER
  },
  { id: 'all', name: t.lang.common.routes.friendList, path: routePaths.FRIENDS_LIST, iconName: iconName.USER }
])
</script>

<template>
  <div class="p-3">
    <Paragraph :weight="600" :size="22">
      {{ t.lang.friends.sideMenu.friends }}
    </Paragraph>
    <Divider />
    <MenuItem v-for="item in items" :key="item.id" :path="item.path" :icon="item.iconName">
      {{ item.name }}
    </MenuItem>
  </div>
</template>
