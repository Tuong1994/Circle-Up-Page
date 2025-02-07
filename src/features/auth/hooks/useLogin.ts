import { useMutation } from '@tanstack/vue-query'
import { signIn } from '@/services/auth/api'
import { HttpStatus } from '@/services/axios'
import type { AuthLogin } from '@/services/auth/type'
import useMessage from '@/components/UI/ToastMessage/useMessage'
import useAuthStore from '@/stores/AuthStore'
import useLangStore from '@/stores/LangStore'

const useLogin = () => {
  const messageApi = useMessage()

  const authStore = useAuthStore()

  const t = useLangStore()

  const onLogin = async (formData: AuthLogin) => {
    const response = await signIn(formData)
    return response
  }

  const mutation = useMutation({
    mutationFn: onLogin,
    onSuccess: (response) => {
      if (!response.success) {
        const status = response.error?.status
        let message = t.lang.common.message.error.api
        if (status === HttpStatus.NOT_FOUND) message = t.lang.common.message.error.authEmail
        if (status === HttpStatus.FORBIDDEN) message = t.lang.common.message.error.authPassword
        if (status === HttpStatus.BAD_REQUEST) message = t.lang.common.message.error.alreadyAuth
        return messageApi.error(message)
      }
      messageApi.success(t.lang.common.message.success.signIn)
      authStore.setAuth(response.data)
    },
    onError: () => messageApi.error(t.lang.common.message.error.signIn)
  })

  return mutation
}

export default useLogin
