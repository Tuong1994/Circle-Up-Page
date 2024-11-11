import { ref } from 'vue'
import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(true)

  return { isAuth }
})

export default useAuthStore;
