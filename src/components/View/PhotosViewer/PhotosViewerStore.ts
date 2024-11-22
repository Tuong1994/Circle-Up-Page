import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ViewerActivate } from './type'

const usePhotosViewerStore = defineStore('photos-viewer', () => {
  const openViewer = ref<ViewerActivate>({ activate: false, items: [] })
  const setOpenViewer = (activate: ViewerActivate) => (openViewer.value = { ...activate })

  return { openViewer, setOpenViewer }
})

export default usePhotosViewerStore
