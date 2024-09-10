import { ref } from 'vue'
import { defineStore } from 'pinia'

const useCommentStore = defineStore('comment', () => {
  const uploaded = ref<boolean>(false)
  const setUploaded = (value: boolean) => (uploaded.value = value)

  return { uploaded, setUploaded }
})

export default useCommentStore
