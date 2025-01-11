import { ref } from 'vue'
import { defineStore } from 'pinia'
import { EFriendMenuType } from './enum'
import type { FriendMenuType } from './type'

const useAppLayoutStore = defineStore('app', () => {
  const hasContentMenuHead = ref<boolean>(false)
  const contentMenuHeadHeight = ref<number>(0)
  const friendMenuType = ref<FriendMenuType>(EFriendMenuType.DEFAULT)
  const setHasContentMenuHead = (value: boolean) => (hasContentMenuHead.value = value)
  const setContentMenuHeadHeight = (height: number) => (contentMenuHeadHeight.value = height)
  const setFriendMenuType = (type: FriendMenuType) => (friendMenuType.value = type)

  return {
    hasContentMenuHead,
    contentMenuHeadHeight,
    friendMenuType,
    setHasContentMenuHead,
    setContentMenuHeadHeight,
    setFriendMenuType
  }
})

export default useAppLayoutStore
