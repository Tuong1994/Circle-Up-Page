<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Image } from '@/components/UI'
import { RouterLink } from 'vue-router'

interface LogoProps {
  responsive?: boolean
}

const props = defineProps<LogoProps>()

const size = computed<number>(() => (props.responsive ? 60 : 80))
</script>

<template>
  <RouterLink to="/">
    <Image :imgWidth="size" :imgHeight="size" src="/logo/logo-light-mode.svg" />
  </RouterLink>
</template>
