import { ref, watchEffect } from 'vue'

const useUpload = () => {
  const image = ref<File | null>(null)

  const viewURL = ref<string>('')

  const loading = ref<boolean>(false)

  const dragged = ref<boolean>(false)

  const handleUpload = (file: File | null) => {
    if (!file) return
    image.value = file
  }

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const imageFile = target.files ? target.files[0] : null
    handleUpload(imageFile)
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
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      handleUpload(file)
    }
  }

  watchEffect(() => {
    if (!image.value) return
    const reader = new FileReader()
    reader.onloadstart = () => (loading.value = true)
    reader.onloadend = () => {
      viewURL.value = reader.result as string
      loading.value = false
    }
    reader.readAsDataURL(image.value)
  })

  return { image, viewURL, loading, dragged, handleChange, handleDrag, handleDrop }
}

export default useUpload
