import { ref } from 'vue'
import { defineStore } from 'pinia'

const useCommentStore = defineStore('comment', () => {
  const uploaded = ref<boolean>(false)
  const openModal = ref<boolean>(false)
  const setUploaded = (value: boolean) => (uploaded.value = value)
  const setOpenModal = (value: boolean) => (openModal.value = value)

  return { uploaded, openModal, setUploaded, setOpenModal }
})

export default useCommentStore
