<script setup lang="ts">
import { onMounted } from 'vue'
import type { Auth } from '@/services/auth/type'
import useAuthStore from '@/stores/AuthStore'
import localStorageKey from '@/common/constant/localStorage'
import useRefreshToken from './hooks/useRefreshToken'

const { AUTH } = localStorageKey

const authStore = useAuthStore()

useRefreshToken()

onMounted(() => {
  const authStorage = localStorage.getItem(AUTH)
  if (!authStorage) return
  const authJson = JSON.parse(authStorage ?? '') as Auth
  authStore.setAuth(authJson)
})
</script>

<template>
  <slot></slot>
</template>
