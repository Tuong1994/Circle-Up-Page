<script setup lang="ts">
import AppLayout from './AppLayout/AppLayout.vue'
import AuthLayout from './AuthLayout/AuthLayout.vue'
import useAuthStore from '@/stores/AuthStore'

const auth = useAuthStore()
</script>

<template>
  <AppLayout v-if="auth.isAuth">
    <slot></slot>
  </AppLayout>
  <AuthLayout v-else>
    <slot></slot>
  </AuthLayout>
</template>
