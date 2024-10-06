<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import FriendsMobile from '@/features/friends/FriendsMobile.vue'

const { screenWidth } = useViewPoint()

const { SM_PHONE, SM_TABLET } = breakpoint

const responsive = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value <= SM_TABLET)
</script>

<template>
  <RouterView v-if="!responsive" />
  <FriendsMobile v-if="responsive" />
</template>
