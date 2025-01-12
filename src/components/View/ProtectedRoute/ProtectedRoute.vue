<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import useAuthStore from '@/stores/AuthStore'

const auth = useAuthStore()

const { push } = useRouter()

onMounted(() => {
  if (!auth.isAuth) push(routePaths.LOGIN)
  else push(routePaths.HOME)
})
</script>

<template>
  <slot></slot>
</template>
