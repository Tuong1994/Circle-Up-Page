<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Image } from '@/components/UI'
import { RouterLink } from 'vue-router'

interface LogoProps {
  responsive?: boolean
  size?: number
}

const props = withDefaults(defineProps<LogoProps>(), {
  size: 80
})

const size = computed<number>(() => (props.responsive ? 60 : props.size))
</script>

<template>
  <RouterLink to="/">
    <Image :imgWidth="size" :imgHeight="size" src="/logo/logo-light-mode.svg" />
  </RouterLink>
</template>
