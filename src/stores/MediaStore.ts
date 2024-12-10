import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UploadItems } from '@/components/Control/type'

const useMediaStore = defineStore('media', () => {
  const images = ref<UploadItems>([])
  const viewImages = ref<UploadItems>([])
  const setImages = (files: UploadItems) => (images.value = [...images.value, ...files])
  const setFilterImages = (files: UploadItems) => (images.value = files)
  const setViewImages = (files: UploadItems) => (viewImages.value = files)
  return { images, viewImages, setImages, setFilterImages, setViewImages }
})

export default useMediaStore
