<script setup lang="ts">
import { computed } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import type { RouterItems } from '@/router/type'
import MenuItem from '../Components/MenuItem.vue'
import ContentBody from '../Components/ContentBody.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const items = computed<RouterItems>(() => [
  { id: 'profile', name: 'User name', path: routePaths.PROFILE, iconName: iconName.USER },
  {
    id: 'friends',
    name: t.lang.common.routes.friends,
    path: routePaths.FRIENDS,
    iconName: iconName.USER_GROUP
  },
  { id: 'saved', name: t.lang.common.routes.saved, path: '/', iconName: iconName.BOOKMARK },
  { id: 'events', name: t.lang.common.routes.events, path: '/', iconName: iconName.CALENDAR }
])
</script>

<template>
  <ContentBody>
    <MenuItem v-for="item in items" :key="item.id" :path="item.path" :icon="item.iconName">
      {{ item.name }}
    </MenuItem>
  </ContentBody>
</template>
