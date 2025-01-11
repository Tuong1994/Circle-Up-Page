import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

export const routePaths = {
  HOME: '/',
  POST_DETAIL: '/post/detail',
  FRIENDS: '/friends',
  FRIENDS_LIST: '/friends/list',
  FRIENDS_SUGGESTIONS: '/friends/suggestions',
  FRIENDS_REQUESTS: '/friends/requests',
  FRIENDS_DETAIL: '/friends/detail',
  FRIENDS_DETAIL_POST: '/friends/detail/post',
  PROFILE: '/profile',
  PROFILE_PHOTOS: '/profile/photos',
  PROFILE_ALBUM: '/profile/album',
  PROFILE_FRIENDS: '/profile/friends',
  PROFILE_ABOUT: '/profile/about',
  MEDIA_ALBUM: '/media/album',
  SAVED: '/saved',
  SAVED_ITEMS: '/saved/items',
  SAVED_COLLECTION: '/saved/collection',
  SAVED_COLLECTION_DETAIL: '/saved/collection/detail',
  LOGIN: '/login',
  REGISTER: '/register'
} as const

export const routeNames = {
  HOME: 'home',
  POST_DETAIL: 'post-detail',
  FRIENDS: 'friends',
  FRIENDS_MAY_KNOW: 'friends-may-know',
  FRIENDS_LIST: 'friends-list',
  FRIENDS_SUGGESTIONS: 'friends-suggestions',
  FRIENDS_REQUESTS: 'friends-requests',
  FRIENDS_DETAIL: 'friends-detail',
  FRIENDS_DETAIL_POST: 'friends-detail-post',
  PROFILE: 'profile',
  PROFILE_POST: 'profile-post',
  PROFILE_PHOTOS: 'profile-photos',
  PROFILE_ALBUM: 'profile-album',
  PROFILE_FRIENDS: 'profile-friends',
  PROFILE_ABOUT: 'profile-about',
  MEDIA_ALBUM: 'media-album',
  SAVED: 'saved',
  SAVED_ITEMS: 'saved-items',
  SAVED_COLLECTION: 'saved-collection',
  SAVED_COLLECTION_DETAIL: 'saved-collection-detail',
  LOGIN: 'login',
  REGISTER: 'register'
} as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routePaths.LOGIN,
      name: routeNames.LOGIN,
      component: LoginView
    },
    {
      path: routePaths.REGISTER,
      name: routeNames.REGISTER,
      component: RegisterView
    },
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
          path: routePaths.FRIENDS_DETAIL,
          name: routeNames.FRIENDS_DETAIL,
          component: () => import('@/views/profile/ProfileView.vue'),
          children: [
            {
              path: '',
              name: routeNames.FRIENDS_DETAIL_POST,
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
    },
    {
      path: routePaths.MEDIA_ALBUM,
      name: routeNames.MEDIA_ALBUM,
      component: () => import('@/views/media/MediaAlbumView.vue')
    },
    {
      path: routePaths.POST_DETAIL,
      name: routeNames.POST_DETAIL,
      component: () => import('@/views/post/PostView.vue')
    },
    {
      path: routePaths.SAVED,
      name: routeNames.SAVED,
      component: () => import('@/views/saved/SavedView.vue'),
      children: [
        {
          path: '',
          name: routeNames.SAVED_ITEMS,
          component: () => import('@/views/saved/SavedItems.vue')
        },
        {
          path: routePaths.SAVED_COLLECTION,
          name: routeNames.SAVED_COLLECTION,
          component: () => import('@/views/saved/SavedCollection.vue')
        },
        {
          path: routePaths.SAVED_COLLECTION_DETAIL,
          name: routePaths.SAVED_COLLECTION_DETAIL,
          component: () => import('@/views/saved/SavedCollectionDetail.vue')
        }
      ]
    }
  ]
})

export default router
