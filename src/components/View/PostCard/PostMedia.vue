<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { RouterLink } from 'vue-router'
import { Image } from '@/components/UI'
import { routePaths } from '@/router'

interface PostMediaProps {
  url: string
}

withDefaults(defineProps<PostMediaProps>(), {
  url: '/default.jpg'
})
</script>

<template>
  <RouterLink :to="routePaths.POST_DETAIL">
    <Image :src="url" objectFit="cover" rootClassName="post-image" imgWidth="100%" imgHeight="100%" />
  </RouterLink>
</template>
