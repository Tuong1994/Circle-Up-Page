<script setup lang="ts">
import { Image } from '@/components/UI'
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/">
    <Image :imgWidth="80" :imgHeight="80" src="/logo/logo-light-mode.svg" />
  </RouterLink>
</template>
