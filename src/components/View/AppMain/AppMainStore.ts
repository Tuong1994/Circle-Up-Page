import { ref } from 'vue'
import { defineStore } from 'pinia'

const useAppMainStore = defineStore('app', () => {
  const hasContentMenuHead = ref<boolean>(false)
  const setHasContentMenuHead = (value: boolean) => (hasContentMenuHead.value = value)

  return { hasContentMenuHead, setHasContentMenuHead }
})

export default useAppMainStore
