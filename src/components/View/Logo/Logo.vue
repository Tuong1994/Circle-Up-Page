<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { routePaths } from '@/router'
import { Image } from '@/components/UI'
import { RouterLink } from 'vue-router'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useAuthStore from '@/stores/AuthStore'

interface LogoProps {
  responsive?: boolean
  size?: number
}

const props = withDefaults(defineProps<LogoProps>(), {
  size: 80
})

const layout = useLayoutStore()

const auth = useAuthStore()

const routeUrl = computed<string>(() => (auth.isAuth ? routePaths.HOME : routePaths.LOGIN))

const size = computed<number>(() => (props.responsive ? 60 : props.size))
</script>

<template>
  <RouterLink :to="routeUrl">
    <Image
      v-if="layout.theme === 'light'"
      :imgWidth="size"
      :imgHeight="size"
      src="/logo/logo-light-mode.svg"
    />
    <Image v-if="layout.theme === 'dark'" :imgWidth="size" :imgHeight="size" src="/logo/logo-dark-mode.svg" />
  </RouterLink>
</template>
