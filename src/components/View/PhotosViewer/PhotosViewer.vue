<script setup lang="ts">
import { computed } from 'vue'
import { Carousel } from '@/components/UI'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import usePhotosViewerStore from './PhotosViewerStore'

const { Gallery } = Carousel

const viewer = usePhotosViewerStore()

const items = computed<CarouselItems>(() => [...viewer.viewerItems].map((item) => ({ ...item })))

const handleClose = () => {
  viewer.setOpenViewer(false)
  viewer.setViewerItems([])
}
</script>

<template>
  <Gallery :open="viewer.openViewer" :items="items" @onClose="handleClose" />
</template>
