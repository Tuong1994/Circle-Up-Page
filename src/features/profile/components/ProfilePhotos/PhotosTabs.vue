<script setup lang="ts">
import { computed } from 'vue'
import { EProfileTabType } from '../../enum'
import type { ProfileTabs as PhotosTabs } from '../../type'
import ProfileTabs from '../ProfileTabs/ProfileTabs.vue'
import PhotosList from './PhotosList.vue'
import PhotosAlbums from './PhotosAlbums.vue'

const items = computed<PhotosTabs>(() => [
  { id: EProfileTabType.ALBUMS, title: 'Albums' },
  { id: EProfileTabType.PHOTOS, title: 'Photos' }
])
</script>

<template>
  <ProfileTabs :defaultTab="EProfileTabType.PHOTOS" :items="items">
    <template #content="tab">
      <PhotosList v-if="tab.id === EProfileTabType.PHOTOS" />
      <PhotosAlbums v-if="tab.id === EProfileTabType.ALBUMS" />
    </template>
  </ProfileTabs>
</template>
