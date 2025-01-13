<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import useAuthStore from '@/stores/AuthStore'
import localStorageKey from '@/common/constant/localStorage'

const { PATH } = localStorageKey

const auth = useAuthStore()

const { push } = useRouter()

onMounted(() => {
  if (!auth.isAuth) push(routePaths.LOGIN)
  else {
    if (localStorage.getItem(PATH)) {
      const cacheRoute = JSON.parse(localStorage.getItem(PATH) ?? '')
      return push(cacheRoute)
    }
    push(routePaths.HOME)
  }
})
</script>

<template>
  <slot></slot>
</template>
