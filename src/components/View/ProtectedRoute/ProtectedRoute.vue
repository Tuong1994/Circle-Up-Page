<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import useAuthStore from '@/stores/AuthStore'
import localStorageKey from '@/common/constant/localStorage'

const { PATH } = localStorageKey

const authStore = useAuthStore()

const { push: routerPush } = useRouter()

const isAuth = computed<boolean>(() => authStore.auth.isAuth)

onMounted(() => {
  if (!isAuth.value) routerPush(routePaths.LOGIN)
  else {
    if (localStorage.getItem(PATH)) {
      const cacheRoute = JSON.parse(localStorage.getItem(PATH) ?? '')
      return routerPush(cacheRoute)
    }
    routerPush(routePaths.HOME)
  }
})

watch(isAuth, (newIsAuth) => {
  if (newIsAuth) routerPush(routePaths.HOME)
})
</script>

<template>
  <slot></slot>
</template>
