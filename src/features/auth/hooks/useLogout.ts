import { logout } from '@/services/auth/api'
import { useMutation } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { routePaths } from '@/router'
import type { ApiQuery } from '@/services/type'
import useMessage from '@/components/UI/ToastMessage/useMessage'
import useAuthStore from '@/stores/AuthStore'
import useLangStore from '@/stores/LangStore'

const useLogout = () => {
  const { push: routerPush } = useRouter()

  const messageApi = useMessage()

  const t = useLangStore()

  const authStore = useAuthStore()

  const onLogout = async (apiQuery: ApiQuery) => {
    const response = await logout(apiQuery)
    return response
  }

  const mutation = useMutation({
    mutationFn: onLogout,
    onSuccess: () => {
      messageApi.success(t.lang.common.message.success.logout)
      authStore.resetAuth()
      routerPush(routePaths.LOGIN)
    },
    onError: () => messageApi.error(t.lang.common.message.error.logout)
  })

  return mutation
}

export default useLogout
