import { ref, watch } from 'vue'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import useAppMainStore from '../AppMainStore'

const useRenderSide = (responsive: boolean) => {
  const { currentRoute } = useRouter()

  const app = useAppMainStore()

  const isReponsive = ref<boolean>(responsive)

  const renderSide = ref<boolean>(true)

  watch(
    [currentRoute, isReponsive],
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
