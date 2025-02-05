import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Auth } from '@/services/auth/type'
import helpers from '@/helpers'

const useAuthStore = defineStore('auth', () => {
  const auth = ref<Auth>(helpers.getAuthInitialData())
  const setAuth = (data: Auth) => (auth.value = data)
  return { auth, setAuth }
})

export default useAuthStore
