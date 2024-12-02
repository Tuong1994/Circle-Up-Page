import { routeNames } from '@/router'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const useRenderHeader = () => {
  const { currentRoute } = useRouter()

  const renderHeader = ref<boolean>(true)

  watch(
    currentRoute,
    (newRoute) => {
      const pathName = newRoute.name
      renderHeader.value = true
      if (pathName === routeNames.POST_DETAIL) renderHeader.value = false
    },
    { immediate: true }
  )

  return renderHeader
}

export default useRenderHeader
