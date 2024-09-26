<script setup lang="ts">
import { computed } from 'vue'
import { Divider, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import type { RouterItems } from '@/router/type'
import MenuItem from '../MenuItem.vue'

const { Paragraph } = Typography

const items = computed<RouterItems>(() => [
  { id: 'request', name: 'Friend requests', path: routePaths.FRIENDS_REQUESTS, iconName: iconName.USER },
  { id: 'suggestions', name: 'Suggestions', path: routePaths.FRIENDS_SUGGESTIONS, iconName: iconName.USER },
  { id: 'all', name: 'All friends', path: routePaths.FRIENDS_LIST, iconName: iconName.USER }
])
</script>

<template>
  <Paragraph :weight="600" :size="22">Friends</Paragraph>
  <Divider />
  <MenuItem v-for="item in items" :key="item.id" :path="item.path" :icon="item.iconName">
    {{ item.name }}
  </MenuItem>
</template>
