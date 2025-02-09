import { computed, onUnmounted, ref, watch } from 'vue'
import { refresh } from '@/services/auth/api'
import type { ApiQuery } from '@/services/type'
import useAuthStore from '@/stores/AuthStore'

const useRefreshToken = () => {
  let interval: number

  const openModal = ref<boolean>(false)

  const authStore = useAuthStore()

  const apiQuery = computed<ApiQuery>(() => ({ userId: authStore.auth.payload.id }))

  const isAuth = computed<boolean>(() => authStore.auth.isAuth)

  const expiredTime = computed<number>(() => authStore.auth.exp)

  const onRefreshToken = async (apiQuery: ApiQuery) => {
    openModal.value = false
    const response = await refresh(apiQuery)
    if (!response.success) openModal.value = true
  }

  const handleCloseModal = () => openModal.value = false

  watch(
    isAuth,
    (newIsAuth) => {
      if (!newIsAuth) return
      onRefreshToken(apiQuery.value)
    },
    { immediate: true }
  )

  watch([isAuth, expiredTime], ([newIsAuth, newExpTime]) => {
    if (!newExpTime) return
    if (newExpTime < Date.now()) return
    const time = newExpTime - Date.now() - 500
    interval = setInterval(() => {
      if (newIsAuth) onRefreshToken(apiQuery.value)
    }, time)
  })

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })

  return { openModal, handleCloseModal }
}

export default useRefreshToken
