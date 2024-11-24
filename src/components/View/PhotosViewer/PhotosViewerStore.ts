import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CarouselItems } from '@/components/UI/Carousel/type'

const usePhotosViewerStore = defineStore('photos-viewer', () => {
  const openViewer = ref<boolean>(false)
  const viewerItems = ref<CarouselItems>([])
  const setOpenViewer = (open: boolean) => (openViewer.value = open)
  const setViewerItems = (items: CarouselItems) => (viewerItems.value = [...items])

  return { openViewer, viewerItems, setOpenViewer, setViewerItems }
})

export default usePhotosViewerStore
