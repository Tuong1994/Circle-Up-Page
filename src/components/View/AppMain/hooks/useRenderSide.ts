import { routeNames } from '@/router'
import { ref, watchEffect, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import useAppMainStore from '../AppMainStore'

const useRenderSide = (responsive: boolean) => {
  const { currentRoute } = useRouter()

  const app = useAppMainStore()

  const renderSide = ref<boolean>(false)

  watchEffect(() => {
    const pathName = currentRoute.value.name
    const path = currentRoute.value.fullPath

    if (responsive) return (renderSide.value = true)
    if (pathName === routeNames.HOME) app.setHasContentMenuHead(false)
    if (pathName === routeNames.FRIENDS_PROFILE || pathName === routeNames.FRIENDS_PROFILE_POST)
      return (renderSide.value = false)
    if (!path.includes(routeNames.PROFILE)) renderSide.value = false
    else renderSide.value = true
  })

  return renderSide
}

export default useRenderSide
