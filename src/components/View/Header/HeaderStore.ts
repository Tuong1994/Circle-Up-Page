import { ref } from 'vue'
import { defineStore } from 'pinia'

const useHeaderStore = defineStore('header', () => {
  const openSearch = ref<boolean>(false)
  const setOpenSearch = (open: boolean) => (openSearch.value = open)

  return { openSearch, setOpenSearch }
})

export default useHeaderStore
