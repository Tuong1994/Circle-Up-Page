import useMessage from '@/components/UI/ToastMessage/useMessage'
import { signUp } from '@/services/auth/api'
import { useMutation } from '@tanstack/vue-query'
import type { AuthRegister } from '@/services/auth/type'
import useLangStore from '@/stores/LangStore'

const useRegister = () => {
  const messageApi = useMessage()

  const t = useLangStore()

  const onRegister = async (formData: AuthRegister) => {
    const response = await signUp(formData)
    return response
  }

  const mutation = useMutation({
    mutationFn: onRegister,
    onError: () => messageApi.error(t.lang.common.message.error.signUp)
  })

  return mutation
}

export default useRegister
