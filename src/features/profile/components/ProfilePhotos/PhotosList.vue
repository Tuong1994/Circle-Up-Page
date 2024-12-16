<script setup lang="ts">
import { routePaths } from '@/router'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import PhotosControl from './PhotosControl.vue'
import PhotosItem from './PhotosItem.vue'
</script>

<template>
  <ListGrid :xs="2" :md="3" :lg="5" :span="6">
    <PhotosControl label="Add photo" :path="routePaths.MEDIA_PHOTO" />
    <PhotosItem v-for="item in 10" />
  </ListGrid>
</template>
