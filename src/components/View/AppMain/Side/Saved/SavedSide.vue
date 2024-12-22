<script setup lang="ts">
import { computed } from 'vue'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import type { RouterItems } from '@/router/type'
import ContentBody from '../../Components/ContentBody.vue'
import ContentHead from '../../Components/ContentHead.vue'
import MenuItem from '../../Components/MenuItem.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const items = computed<RouterItems>(() => [
  {
    id: 'items',
    name: t.lang.common.routes.savedItems,
    path: routePaths.SAVED,
    iconName: iconName.HARD_DRIVE
  },
  {
    id: 'collection',
    name: t.lang.common.routes.collection,
    path: routePaths.SAVED_COLLECTION,
    iconName: iconName.LAYER_GROUP
  }
])
</script>

<template>
  <ContentHead :hasSubLink="false" :backPath="routePaths.HOME">Saved</ContentHead>
  <ContentBody>
    <MenuItem v-for="item in items" :key="item.id" :path="item.path" :icon="item.iconName">
      {{ item.name }}
    </MenuItem>
  </ContentBody>
</template>
