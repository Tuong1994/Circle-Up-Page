<script setup lang="ts">
import { computed } from 'vue'
import AlbumList from '@/features/media/album/AlbumList.vue'
import AlbumEmpty from '@/features/media/album/AlbumEmpty.vue'
import useMediaStore from '@/stores/MediaStore'

const media = useMediaStore()

const isEmpty = computed<boolean>(() => !media.viewImages.length)
</script>

<template>
  <div class="album">
    <AlbumEmpty v-if="isEmpty" />
    <AlbumList v-else />
  </div>
</template>
