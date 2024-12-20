import { ref } from 'vue'
import { defineStore } from 'pinia'

const usePostStore = defineStore('post', () => {
  const openModal = ref<boolean>(false)
  const setOpenModal = (open: boolean) => (openModal.value = open)
  return { openModal, setOpenModal }
})

export default usePostStore
