import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuItems } from '@/components/UI/Layout/Menu/type'

const useHeaderStore = defineStore('menu', () => {
  const items = ref<MenuItems>([])
  const openSearch = ref<boolean>(false)
  const setItems = (newItems: MenuItems) => (items.value = newItems)
  const setOpenSearch = (open: boolean) => (openSearch.value = open)

  return { items, openSearch, setItems, setOpenSearch }
})

export default useHeaderStore
