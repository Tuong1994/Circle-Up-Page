<script setup lang="ts">
import { RouterView } from 'vue-router'
import GridProvider from './components/UI/Grid/GridProvider.vue'
import ProtectedRoute from './components/View/ProtectedRoute/ProtectedRoute.vue'
import AppContainer from './components/View/AppContainer/AppContainer.vue'
import '../node_modules/vue3-emoji-picker/dist/style.css'
</script>

<template>
  <GridProvider>
    <ProtectedRoute>
      <AppContainer>
        <RouterView />
      </AppContainer>
    </ProtectedRoute>
  </GridProvider>
</template>
