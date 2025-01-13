import { watch } from 'vue'
import { useRouter } from 'vue-router'
import localStorageKey from '@/common/constant/localStorage'
import useAuthStore from '@/stores/AuthStore'

const { PATH } = localStorageKey

const useCacheRoute = () => {
  const { currentRoute } = useRouter()

  const auth = useAuthStore()

  watch(currentRoute, (newRoute) => {
    if (!auth.isAuth) return localStorage.removeItem(PATH)
    localStorage.setItem(PATH, JSON.stringify(newRoute.fullPath))
  })
}

export default useCacheRoute
