import { ref } from 'vue'
import { defineStore } from 'pinia'

const usePostStore = defineStore('post', () => {
  const id = ref<string>('')
  const openModal = ref<boolean>(false)
  const setOpenModal = (open: boolean) => (openModal.value = open)
  const setId = (postId: string) => (id.value = postId)
  return { openModal, id, setOpenModal, setId }
})

export default usePostStore
