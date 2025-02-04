import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Auth } from '@/services/auth/type'
import helpers from '@/helpers'

const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(false)
  const auth = ref<Auth>(helpers.getAuthInitialData())
  const setIsAuth = (data: boolean) => (isAuth.value = data)
  const setAuth = (data: Auth) => (auth.value = data)
  return { isAuth, auth, setIsAuth, setAuth }
})

export default useAuthStore
