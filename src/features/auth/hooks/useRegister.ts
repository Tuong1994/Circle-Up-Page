import useMessage from '@/components/UI/ToastMessage/useMessage'
import { signUp } from '@/services/auth/api'
import { useMutation } from '@tanstack/vue-query'
import type { AuthLogin, AuthRegister } from '@/services/auth/type'
import useLangStore from '@/stores/LangStore'
import useLogin from './useLogin'

const useRegister = (formData: AuthRegister) => {
  const messageApi = useMessage()

  const t = useLangStore()

  const { mutate: onLogin } = useLogin()

  const onRegister = async () => {
    const response = await signUp(formData)
    return response
  }

  const mutation = useMutation({
    mutationFn: onRegister,
    onSuccess: () => {
      const authLogin: AuthLogin = {
        email: formData.email,
        password: formData.password
      }
      onLogin(authLogin)
    },
    onError: () => messageApi.error(t.lang.common.message.error.signUp)
  })

  return mutation
}

export default useRegister
