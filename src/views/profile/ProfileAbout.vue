<script setup lang="ts">
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import AboutTabs from '@/features/profile/components/ProfileAbout/AboutTabs.vue'
import { computed } from 'vue'

const layout = useLayoutStore()

const colorClassName = computed<string>(() => `profile-about-${layout.color}`)

const shapeClassName = computed<string>(() => `profile-about-${layout.shape}`)
</script>

<template>
  <div :class="['profile-about', colorClassName, shapeClassName]">
    <AboutTabs />
  </div>
</template>
