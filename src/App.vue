<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppMain from '@/components/View/AppMain/AppMain.vue'
import GridProvider from './components/UI/Grid/GridProvider.vue'
</script>

<template>
  <GridProvider>
    <AppMain>
      <RouterView />
    </AppMain>
  </GridProvider>
</template>
