import useAuthStore from '@/stores/AuthStore'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const useCacheRoute = () => {
  const { currentRoute } = useRouter()

  const auth = useAuthStore()

  watch(currentRoute, (newRoute) => {
    
  })
}
