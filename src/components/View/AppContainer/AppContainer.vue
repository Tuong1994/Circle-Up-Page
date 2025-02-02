<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { connection } from '@/services/global/api'
import ConnectionError from '../Error/ConnectionError.vue'
import AppLayout from './AppLayout/AppLayout.vue'
import AuthLayout from './AuthLayout/AuthLayout.vue'
import useAuthStore from '@/stores/AuthStore'

const auth = useAuthStore()

const isError = ref<boolean>(false)

const handleConnection = async () => {
  const response = await connection()
  if (!response.success) isError.value = true
}

const handleCloseError = () => (isError.value = false)

onMounted(() => handleConnection())
</script>

<template>
  <ConnectionError :isError="isError" @onClose="handleCloseError" />
  <AppLayout v-if="auth.isAuth">
    <slot></slot>
  </AppLayout>
  <AuthLayout v-else>
    <slot></slot>
  </AuthLayout>
</template>
