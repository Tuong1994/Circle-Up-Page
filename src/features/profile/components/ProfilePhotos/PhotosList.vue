<script setup lang="ts">
import { routePaths } from '@/router'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import PhotosControl from './PhotosControl.vue'
import PhotosItem from './PhotosItem.vue'
</script>

<template>
  <ListGrid :span="6">
    <PhotosControl label="Add photo" :path="routePaths.MEDIA_PHOTO" />
    <PhotosItem v-for="item in 10" />
  </ListGrid>
</template>
