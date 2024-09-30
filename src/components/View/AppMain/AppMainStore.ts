import { ref } from 'vue'
import { defineStore } from 'pinia'

const useAppMainStore = defineStore('app', () => {
  const hasContentMenuHead = ref<boolean>(false)
  const contentMenuHeadHeight = ref<number>(0)
  const setHasContentMenuHead = (value: boolean) => (hasContentMenuHead.value = value)
  const setContentMenuHeadHeight = (height: number) => (contentMenuHeadHeight.value = height)

  return { hasContentMenuHead, contentMenuHeadHeight, setHasContentMenuHead, setContentMenuHeadHeight }
})

export default useAppMainStore
