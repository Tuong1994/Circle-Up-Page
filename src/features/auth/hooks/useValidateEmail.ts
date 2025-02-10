import { ref } from 'vue'
import { validateEmail } from '@/services/auth/api'
import { useMutation } from '@tanstack/vue-query'
import type { AuthEmail } from '@/services/auth/type'

const useValidateEmail = () => {
  const isInValid = ref<boolean>(false)

  const onValidateEmail = async (data: AuthEmail) => {
    const response = await validateEmail(data)
    return response
  }

  const mutation = useMutation({
    mutationFn: onValidateEmail,
    onSuccess: (response) => {
      isInValid.value = false
      if (!response.success) isInValid.value = true
    }
  })

  return { isInValid, ...mutation }
}

export default useValidateEmail
