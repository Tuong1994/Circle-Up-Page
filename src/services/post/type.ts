import type { ComponentColor } from '@/common/type'
import type { EPostActionType } from './enums'
import type { Comment } from '../comment/type'
import type { Like } from '../like/type'
import type { Media } from '../media/type'
import type { Follow } from '../follow/type'
import type { EAudienceType } from '@/components/View/Audiences/enum'
import type { User } from '../user/type'

export type PostActionType =
  | EPostActionType.PHOTO
  | EPostActionType.TAG
  | EPostActionType.FEELING
  | EPostActionType.CHECK_IN
  | EPostActionType.AUDIENCE

export type PostAction = {
  type: PostActionType
  name: string
  icon: string
  iconColor?: Exclude<ComponentColor, 'white' | 'gray'>
}

export type PostTag = {
  id?: string
  userId?: string
  postId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type Post = {
  id?: string
  content: string
  cityCode?: number
  feeling?: number
  audience: EAudienceType
  userId: string
  collectionId?: string
  user?: User;
  comments: Comment[]
  likes: Like[]
  medias: Media[]
  followers: Follow[]
  tags: PostTag[]
  createdAt?: Date | string
  updatedAt?: Date | string
}