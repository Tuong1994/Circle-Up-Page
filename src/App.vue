<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from '@/components/View/AppLayout/AppLayout.vue'
import AuthLayout from "@/components/View/AuthLayout/AuthLayout.vue"
import ProtectedRoute from './components/View/ProtectedRoute/ProtectedRoute.vue'
import GridProvider from './components/UI/Grid/GridProvider.vue'
import useAuthStore from './stores/AuthStore'
import '../node_modules/vue3-emoji-picker/dist/style.css'

const auth = useAuthStore()
</script>

<template>
  <GridProvider>
    <ProtectedRoute>
      <AppLayout v-if="auth.isAuth">
        <RouterView />
      </AppLayout>
     <AuthLayout v-else>
      <RouterView />
     </AuthLayout>
    </ProtectedRoute>
  </GridProvider>
</template>
