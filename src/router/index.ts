import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

export const routePaths = {
  HOME: '/',
  USER: '/user',
  FRIENDS: '/friends',
  FRIENDS_SUGGESTIONS: '/suggestions',
  FRIENDS_REQUESTS: '/requests'
}

export const routeNames = {
  HOME: 'home',
  USER: 'user',
  FRIENDS: 'friends'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routePaths.HOME,
      name: routeNames.HOME,
      component: HomeView
    },
    {
      path: routePaths.FRIENDS,
      name: routeNames.FRIENDS,
      component: () => import('@/views/friends/Friends.vue'),
      children: [
        {
          path: '',
          name: routeNames.FRIENDS,
          component: () => import('@/views/friends/FriendsList.vue')
        },
        {
          path: routePaths.FRIENDS_SUGGESTIONS,
          name: routeNames.FRIENDS,
          component: () => import('@/views/friends/FriendsSuggestions.vue')
        },
        {
          path: routePaths.FRIENDS_REQUESTS,
          name: routeNames.FRIENDS,
          component: () => import('@/views/friends/FriendsRequests.vue')
        }
      ]
    },
    {
      path: routePaths.USER,
      name: routeNames.USER,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/user/User.vue')
    }
  ]
})

export default router
