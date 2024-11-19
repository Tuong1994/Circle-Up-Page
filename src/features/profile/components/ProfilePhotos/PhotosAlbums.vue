<script setup lang="ts">
import { routePaths } from '@/router'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import PhotosControl from './PhotosControl.vue'
import PhotosItem from './PhotosItem.vue'
</script>

<template>
  <ListGrid :span="6">
    <PhotosControl label="Create album" :path="routePaths.MEDIA_ALBUM" />
    <PhotosItem
      v-for="item in 10"
      hasDesc
      descTitle="Album name"
      descSub="20 items"
      :path="routePaths.PROFILE_ALBUM"
    />
  </ListGrid>
</template>
