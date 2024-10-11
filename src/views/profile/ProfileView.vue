<script setup lang="ts">
import { computed } from 'vue'
import { routePaths } from '@/router'
import { RouterView, useRouter } from 'vue-router'
import ProfileHead from '@/features/profile/ProfileHead/ProfileHead.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const { currentRoute } = useRouter()

const screenSizeClassName = computed<string>(() =>
  currentRoute.value.fullPath === routePaths.FRIENDS_PROFILE ? 'profile-full' : ''
)

const colorClassName = computed<string>(() => `profile-${layout.color}`)
</script>

<template>
  <div :class="['profile', screenSizeClassName, colorClassName]">
    <ProfileHead />
    <RouterView />
  </div>
</template>
