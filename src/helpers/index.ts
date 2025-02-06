import { EAudienceType } from '@/components/View/Audiences/enum'
import { ERole } from '@/services/user/enum'
import type { Post } from '@/services/post/type'
import type { User } from '@/services/user/type'
import type { Auth } from '@/services/auth/type'

const helpers = {
  getUserInitialData: (): User => {
    return {
      id: '',
      firstName: '',
      lastName: '',
      role: ERole.USER
    }
  },

  getAuthInitialData: (): Auth => {
    return {
      accessToken: '',
      expired: 0,
      isAuth: false,
      payload: {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        fullName: '',
        role: ERole.USER
      }
    }
  },

  getPostInitialData: (): Post => {
    return {
      id: '',
      content: '',
      audience: EAudienceType.PUBLIC,
      userId: '',
      comments: [],
      likes: [],
      medias: [],
      followers: [],
      tags: [],
      user: helpers.getUserInitialData(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
}

export default helpers
