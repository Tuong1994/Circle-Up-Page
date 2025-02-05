<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import useAuthStore from '@/stores/AuthStore'
import localStorageKey from '@/common/constant/localStorage'

const { PATH } = localStorageKey

const authStore = useAuthStore()

const { push } = useRouter()

const isAuth = computed<boolean>(() => authStore.auth.isAuth)

onMounted(() => {
  if (!isAuth.value) push(routePaths.LOGIN)
  else {
    if (localStorage.getItem(PATH)) {
      const cacheRoute = JSON.parse(localStorage.getItem(PATH) ?? '')
      return push(cacheRoute)
    }
    push(routePaths.HOME)
  }
})

watch(isAuth, (newIsAuth) => {
  if (newIsAuth) push(routePaths.HOME)
})
</script>

<template>
  <slot></slot>
</template>
