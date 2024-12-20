<script setup lang="ts">
import { routePaths } from '@/router'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import PhotosControl from './PhotosControl.vue'
import PhotosItem from './PhotosItem.vue'
import usePostStore from '@/stores/PostStore'

const post = usePostStore()

const handleOpenPostModal = () => post.setOpenModal(true)
</script>

<template>
  <ListGrid :xs="2" :md="3" :lg="5" :span="6">
    <PhotosControl label="Add photo" :path="routePaths.PROFILE_PHOTOS" @click="handleOpenPostModal" />
    <PhotosItem v-for="item in 10" />
  </ListGrid>
</template>
