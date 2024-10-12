<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { routeNames, routePaths } from '@/router'
import { Typography } from '@/components/UI'
import { useViewPoint } from '@/hooks'
import type { RouterItems } from '@/router/type'

const { Paragraph } = Typography

const { isPhone } = useViewPoint()

const activeId = ref<string>(routeNames.PROFILE_POST)

const textSize = computed<number>(() => (isPhone.value ? 14 : 16))

const items = computed<RouterItems>(() => [
  { id: routeNames.PROFILE_POST, name: 'Post', path: routePaths.PROFILE },
  { id: routeNames.PROFILE_ABOUT, name: 'About', path: routePaths.PROFILE_ABOUT },
  { id: routeNames.PROFILE_FRIENDS, name: 'Friends', path: routePaths.PROFILE_FRIENDS },
  { id: routeNames.PROFILE_PHOTOS, name: 'Photos', path: routePaths.PROFILE_PHOTOS }
])

const getActiveClass = (id: string) => (activeId.value === id ? 'navbar-item-active' : '')

const handleSelect = (id: string) => (activeId.value = id)
</script>

<template>
  <div class="content-navbar">
    <RouterLink
      v-for="item in items"
      :key="item.id"
      :to="item.path"
      :class="['navbar-item', getActiveClass(item.id)]"
      @click="() => handleSelect(item.id)"
    >
      <Paragraph :weight="600" :size="textSize" variant="secondary">{{ item.name }}</Paragraph>
    </RouterLink>
  </div>
</template>
