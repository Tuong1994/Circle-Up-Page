import { ref } from 'vue'
import { defineStore } from 'pinia'

const useProfileStore = defineStore('profile', () => {
  const openAudienceModal = ref<boolean>(false)
  const setOpenAudienceModal = (value: boolean) => (openAudienceModal.value = value)
  return { openAudienceModal, setOpenAudienceModal }
})

export default useProfileStore
