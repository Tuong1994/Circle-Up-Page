import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

export const routePaths = {
  HOME: '/',
  PROFILE: '/profile',
  FRIENDS: '/friends',
  FRIENDS_LIST: '/friends/list',
  FRIENDS_SUGGESTIONS: '/friends/suggestions',
  FRIENDS_REQUESTS: '/friends/requests',
  FRIENDS_PROFILE: '/friends/profile'
}

export const routeNames = {
  HOME: 'home',
  PROFILE: 'profile',
  FRIENDS: 'friends',
  FRIENDS_MAY_KNOW: 'friends-may-know',
  FRIENDS_LIST: 'friends-list',
  FRIENDS_SUGGESTIONS: 'friends-suggestions',
  FRIENDS_REQUESTS: 'friends-requests',
  FRIENDS_PROFILE: 'friends-profile'
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
      component: () => import('@/views/friends/FriendsView.vue'),
      children: [
        {
          path: '',
          name: routeNames.FRIENDS_MAY_KNOW,
          component: () => import('@/views/friends/FriendsList.vue')
        },
        {
          path: routePaths.FRIENDS_LIST,
          name: routeNames.FRIENDS_LIST,
          component: () => import('@/views/friends/FriendsProfile.vue')
        },
        {
          path: routePaths.FRIENDS_SUGGESTIONS,
          name: routeNames.FRIENDS_SUGGESTIONS,
          component: () => import('@/views/friends/FriendsProfile.vue')
        },
        {
          path: routePaths.FRIENDS_REQUESTS,
          name: routeNames.FRIENDS_REQUESTS,
          component: () => import('@/views/friends/FriendsProfile.vue')
        },
        {
          path: routePaths.FRIENDS_PROFILE,
          name: routeNames.FRIENDS_PROFILE,
          component: () => import('@/views/profile/ProfileView.vue')
        }
      ]
    },
    {
      path: routePaths.PROFILE,
      name: routeNames.PROFILE,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/profile/ProfileView.vue')
    }
  ]
})

export default router
