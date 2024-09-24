<script setup lang="ts">
import { computed } from 'vue'
import { Divider, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import type { RouterItems } from '@/router/type'
import MenuItem from './MenuItem.vue'

const { Paragraph } = Typography

const items = computed<RouterItems>(() => [
  { id: 'request', name: 'Friend requests', path: routePaths.FRIENDS, iconName: iconName.USER },
  { id: 'suggestions', name: 'Suggestions', path: routePaths.FRIENDS, iconName: iconName.USER },
  { id: 'all', name: 'All friends', path: routePaths.FRIENDS, iconName: iconName.USER }
])
</script>

<template>
  <Paragraph :weight="600" :size="18">Friends</Paragraph>
  <Divider />
  <MenuItem v-for="item in items" :key="item.id" :path="item.path" :icon="item.iconName">
    {{ item.name }}
  </MenuItem>
</template>
