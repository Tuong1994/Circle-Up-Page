<script setup lang="ts">
import { Carousel } from '@/components/UI'
import usePhotosViewerStore from './PhotosViewerStore'

const { Gallery } = Carousel

const viewer = usePhotosViewerStore()

const handleClose = () => viewer.setOpenViewer({ activate: false, items: [] })
</script>

<template>
  <Gallery :open="viewer.openViewer.activate" :items="viewer.openViewer.items" @onClose="handleClose" />
</template>
