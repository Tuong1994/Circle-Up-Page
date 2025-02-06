import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Auth } from '@/services/auth/type'
import helpers from '@/helpers'

const useAuthStore = defineStore('auth', () => {
  const auth = ref<Auth>(helpers.getAuthInitialData())
  const setAuth = (data: Auth) => (auth.value = data)
  const resetAuth = () => auth.value = helpers.getAuthInitialData();
  return { auth, setAuth, resetAuth }
})

export default useAuthStore
