<script setup lang="ts">
import { computed } from 'vue'
import { routePaths } from '@/router'
import { RouterView, useRouter } from 'vue-router'
import ProfileHead from '@/features/profile/components/ProfileHead/ProfileHead.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const { currentRoute } = useRouter()

const screenSizeClassName = computed<string>(() =>
  currentRoute.value.fullPath === routePaths.FRIENDS_DETAIL ? 'profile-full' : ''
)

const colorClassName = computed<string>(() => `profile-${layout.color}`)

const shapeClassName = computed<string>(() => `profile-${layout.shape}`)
</script>

<template>
  <div :class="['profile', screenSizeClassName, colorClassName, shapeClassName]">
    <ProfileHead />
    <div class="profile-content">
      <RouterView />
    </div>
  </div>
</template>
