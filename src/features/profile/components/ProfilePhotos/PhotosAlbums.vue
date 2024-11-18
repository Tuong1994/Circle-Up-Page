<script setup lang="ts">
import { routePaths } from '@/router'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import PhotosControl from './PhotosControl.vue'
</script>

<template>
  <ListGrid>
    <PhotosControl label="Create album" :path="routePaths.MEDIA_ALBUM" />
  </ListGrid>
</template>
