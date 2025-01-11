import { ref, watch, type ComputedRef } from 'vue'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import useAppMainStore from '../AppLayoutStore'

const useRenderSide = (responsive: ComputedRef<boolean>) => {
  const { currentRoute } = useRouter()

  const app = useAppMainStore()

  const renderSide = ref<boolean>(true)

  watch(
    [currentRoute, responsive],
    ([newRoute, newResponsive]) => {
      const pathName = newRoute.name
      const path = newRoute.fullPath
      renderSide.value = true
      if (pathName === routeNames.HOME) app.setHasContentMenuHead(false)
      if (path.includes(routeNames.PROFILE) || pathName === routeNames.POST_DETAIL) renderSide.value = false
      if (newResponsive) renderSide.value = false
    },
    { immediate: true }
  )

  return renderSide
}

export default useRenderSide
