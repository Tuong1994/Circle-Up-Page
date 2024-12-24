import { computed } from 'vue'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import type { RouterItems } from '@/router/type'
import useLangStore from '@/stores/LangStore'

const useMenuItems = () => {
  const t = useLangStore()

  const homeMenuItems = computed<RouterItems>(() => [
    {
      id: 'friends',
      name: t.lang.common.routes.friends,
      path: routePaths.FRIENDS,
      iconName: iconName.USER_GROUP
    },
    { id: 'saved', name: t.lang.common.routes.saved, path: routePaths.SAVED, iconName: iconName.BOOKMARK },
    { id: 'events', name: t.lang.common.routes.events, path: '/', iconName: iconName.CALENDAR }
  ])

  const friendsMenuItems = computed<RouterItems>(() => [
    {
      id: 'request',
      name: t.lang.common.routes.friendRequests,
      path: routePaths.FRIENDS_REQUESTS,
      iconName: iconName.USER
    },
    {
      id: 'suggestions',
      name: t.lang.common.routes.friendSuggestions,
      path: routePaths.FRIENDS_SUGGESTIONS,
      iconName: iconName.USER
    },
    {
      id: 'all',
      name: t.lang.common.routes.friendList,
      path: routePaths.FRIENDS_LIST,
      iconName: iconName.USER
    }
  ])

  return { homeMenuItems, friendsMenuItems }
}

export default useMenuItems
