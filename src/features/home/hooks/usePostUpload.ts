import { storeToRefs } from 'pinia'
import { ref, watch, type Ref } from 'vue'
import type { UploadItem, UploadItems } from '@/components/Control/type'
import useMediaStore from '@/stores/MediaStore'
import utils from '@/utils'

const usePostUpload = (inputRef: Ref<HTMLInputElement | null>) => {
  const media = useMediaStore()

  const { images } = storeToRefs(media)

  const dragged = ref<boolean>(false)

  const onUpload = (imageFiles: File[]) => {
    const files: UploadItems = imageFiles.map((image) => ({ id: utils.uuid(), file: image }))
    media.setImages(files)
  }

  const onRemoveInputFile = (image: UploadItem) => {
    const inputEl = inputRef.value
    if (media.images.length && inputEl && inputEl.files) {
      const fileTransfer = new DataTransfer()
      const UploadItems: File[] = Array.from(inputEl.files)
      const filterImages: File[] = UploadItems.filter((img) => img.name !== image.file?.name)

      filterImages.forEach((file) => {
        const remainFile = new File([file.name], file.name)
        fileTransfer.items.add(remainFile)
      })
      inputEl.files = fileTransfer.files
    }
  }

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (!target.files) return
    const imageFiles: File[] = Array.from(target.files)
    onUpload(imageFiles)
    target.value = ''
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
      onUpload(imageFiles)
    }
  }

  const handleRemove = (image: UploadItem) => {
    onRemoveInputFile(image)
    const filterImages = [...media.images].filter((img) => img.id !== image.id)
    media.setFilterImages(filterImages)
  }

  // Generate view images
  watch(
    images,
    (newImages) => {
      const views: UploadItems = [...newImages].map((image) => ({
        id: image?.id,
        url: URL.createObjectURL(image?.file as File)
      }))
      media.setViewImages(views)
    },
    { deep: true }
  )

  return { dragged, handleChange, handleDrag, handleDrop, handleRemove }
}

export default usePostUpload
