<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Image } from '@/components/UI'
import { RouterLink } from 'vue-router'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface LogoProps {
  responsive?: boolean
  size?: number
}

const props = withDefaults(defineProps<LogoProps>(), {
  size: 80
})

const layout = useLayoutStore()

const size = computed<number>(() => (props.responsive ? 60 : props.size))
</script>

<template>
  <RouterLink to="/">
    <Image
      v-if="layout.theme === 'light'"
      :imgWidth="size"
      :imgHeight="size"
      src="/logo/logo-light-mode.svg"
    />
    <Image v-if="layout.theme === 'dark'" :imgWidth="size" :imgHeight="size" src="/logo/logo-dark-mode.svg" />
  </RouterLink>
</template>
