import { ref, watch, type Ref } from 'vue'
import type { UploadItem, UploadItems } from '@/components/Control/type'
import utils from '@/utils'

const usePostUpload = (inputRef: Ref<HTMLInputElement | null>) => {
  const images = ref<UploadItems>([])

  const viewImages = ref<UploadItems>([])

  const dragged = ref<boolean>(false)

  const handleUpload = (imageFiles: File[]) => {
    const files: UploadItems = imageFiles.map((image) => ({ id: utils.uuid(), file: image }))
    if (!imageFiles.length) images.value = files
    else images.value = [...images.value, ...files]
  }

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (!target.files) return
    const imageFiles: File[] = Array.from(target.files)
    handleUpload(imageFiles)
  }

  const handleDrag = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') dragged.value = true
    else if (e.type === 'dragleave') dragged.value = false
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragged.value = false
    if (e.dataTransfer && e.dataTransfer.files) {
      const imageFiles: File[] = Array.from(e.dataTransfer.files)
      handleUpload(imageFiles)
    }
  }

  const handleRemove = (image: UploadItem) => {
    const inputEl = inputRef.value
    if (images.value.length && inputEl && inputEl.files) {
      const fileTransfer = new DataTransfer()
      const UploadItems: File[] = Array.from(inputEl.files)
      const filterImages: File[] = UploadItems.filter((img) => img.name !== image.file?.name)

      filterImages.forEach((file) => {
        const remainFile = new File([file.name], file.name)
        fileTransfer.items.add(remainFile)
      })
      inputEl.files = fileTransfer.files
    }
    viewImages.value = [...viewImages.value].filter((img) => img.id !== image.id)
    images.value = [...images.value].filter((img) => img.id !== image.id)
  }

  // Generate view images
  watch(images, (newImages) => {
    const views: UploadItems = [...newImages].map((image) => ({
      id: image?.id,
      url: URL.createObjectURL(image?.file as File)
    }))
    viewImages.value = views
  })

  return { images, viewImages, dragged, handleChange, handleDrag, handleDrop, handleRemove }
}

export default usePostUpload
