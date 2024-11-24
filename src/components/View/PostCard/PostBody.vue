<script setup lang="ts">
import { computed } from 'vue'
import { Typography } from '@/components/UI'
import DynamicGrid from '../DynamicGrid/DynamicGrid.vue'
import usePhotosViewerStore from '../PhotosViewer/PhotosViewerStore'

const { Paragraph } = Typography

const viewer = usePhotosViewerStore()

const items = computed(() => [
  { id: '1', url: '/default.jpg' },
  { id: '2', url: '/default.jpg' },
  { id: '3', url: '/default.jpg' },
  { id: '4', url: '/default.jpg' },
  { id: '5', url: '/default.jpg' },
  { id: '6', url: '/default.jpg' },
  { id: '7', url: '/default.jpg' }
])

const handleOpenViewer = () => {
  viewer.setOpenViewer(true)
  viewer.setViewerItems([...items.value].map((item) => ({ ...item, comName: '' })))
}
</script>

<template>
  <Paragraph>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati consectetur eaque veritatis,
    accusantium libero doloribus neque ducimus ab unde quam delectus assumenda aperiam deleniti sapiente, fuga
    recusandae laborum blanditiis nihil.
  </Paragraph>
  <div class="mt-5 mb-5" @click="handleOpenViewer">
    <DynamicGrid :items="items" />
  </div>
</template>
