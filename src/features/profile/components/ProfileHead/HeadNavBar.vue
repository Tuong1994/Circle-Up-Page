<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { routeNames, routePaths } from '@/router'
import { Typography } from '@/components/UI'
import { useViewPoint } from '@/hooks'
import type { RouterItems } from '@/router/type'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const { isPhone } = useViewPoint()

const t = useLangStore()

const activeId = ref<string>(routeNames.PROFILE_POST)

const textSize = computed<number>(() => (isPhone.value ? 13 : 15))

const items = computed<RouterItems>(() => [
  { id: routeNames.PROFILE_POST, name: t.lang.common.routes.profilePost, path: routePaths.PROFILE },
  { id: routeNames.PROFILE_ABOUT, name: t.lang.common.routes.profileAbout, path: routePaths.PROFILE_ABOUT },
  {
    id: routeNames.PROFILE_FRIENDS,
    name: t.lang.common.routes.profileFriends,
    path: routePaths.PROFILE_FRIENDS
  },
  { id: routeNames.PROFILE_PHOTOS, name: t.lang.common.routes.profilePhotos, path: routePaths.PROFILE_PHOTOS }
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
