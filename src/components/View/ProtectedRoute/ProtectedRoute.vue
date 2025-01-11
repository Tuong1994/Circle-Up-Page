<script setup lang="ts">
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import useAuthStore from '@/stores/AuthStore'

const auth = useAuthStore()

const { push } = useRouter()

if (!auth.isAuth) push(routePaths.LOGIN)
</script>

<template>
  <slot></slot>
</template>
