import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

export const routePaths = {
  HOME: '/',
  FRIENDS: '/friends',
  FRIENDS_LIST: '/friends/list',
  FRIENDS_SUGGESTIONS: '/friends/suggestions',
  FRIENDS_REQUESTS: '/friends/requests',
  FRIENDS_PROFILE: '/friends/profile',
  FRIENDS_PROFILE_POST: '/friends/profile/post',
  PROFILE: '/profile',
  PROFILE_PHOTOS: '/profile/photos',
  PROFILE_ALBUM: '/profile/album',
  PROFILE_FRIENDS: '/profile/friends',
  PROFILE_ABOUT: '/profile/about',
  MEDIA_PHOTO: '/media/photo',
  MEDIA_ALBUM: '/media/album'
}

export const routeNames = {
  HOME: 'home',
  FRIENDS: 'friends',
  FRIENDS_MAY_KNOW: 'friends-may-know',
  FRIENDS_LIST: 'friends-list',
  FRIENDS_SUGGESTIONS: 'friends-suggestions',
  FRIENDS_REQUESTS: 'friends-requests',
  FRIENDS_PROFILE: 'friends-profile',
  FRIENDS_PROFILE_POST: 'friends-profile-post',
  PROFILE: 'profile',
  PROFILE_POST: 'profile-post',
  PROFILE_PHOTOS: 'profile-photos',
  PROFILE_ALBUM: 'profile-album',
  PROFILE_FRIENDS: 'profile-friends',
  PROFILE_ABOUT: 'profile-about',
  MEDIA_PHOTO: 'media-photo',
  MEDIA_ALBUM: 'media-album'
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
          component: () => import('@/views/profile/ProfileView.vue'),
          children: [
            {
              path: '',
              name: routeNames.FRIENDS_PROFILE_POST,
              component: () => import('@/views/profile/ProfilePost.vue')
            }
          ]
        }
      ]
    },
    {
      path: routePaths.PROFILE,
      name: routeNames.PROFILE,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/profile/ProfileView.vue'),
      children: [
        {
          path: '',
          name: routeNames.PROFILE_POST,
          component: () => import('@/views/profile/ProfilePost.vue')
        },
        {
          path: routePaths.PROFILE_ABOUT,
          name: routeNames.PROFILE_ABOUT,
          component: () => import('@/views/profile/ProfileAbout.vue')
        },
        {
          path: routePaths.PROFILE_FRIENDS,
          name: routeNames.PROFILE_FRIENDS,
          component: () => import('@/views/profile/ProfileFriends.vue')
        },
        {
          path: routePaths.PROFILE_PHOTOS,
          name: routeNames.PROFILE_PHOTOS,
          component: () => import('@/views/profile/ProfilePhotos.vue')
        },
        {
          path: routePaths.PROFILE_ALBUM,
          name: routeNames.PROFILE_ALBUM,
          component: () => import('@/views/profile/ProfileAlbum.vue')
        }
      ]
    }
  ]
})

export default router
