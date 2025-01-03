import { ELang, ESort } from '@/common/enum'
import { EGender, ERole } from './user/enum'
import type { AxiosRequestConfig } from 'axios'
import type { EMediaType } from './media/enum'

export type Paging<T> = {
  totalItems: number
  page: number
  limit: number
  items: T[]
}

export type List<T> = {
  totalItems: number
  items: T[]
}

export type ApiQuery = {
  page?: number
  limit?: number
  keywords?: string
  langCode?: ELang
  sortBy?: ESort

  ids?: string;
  userId?: string;
  userInfoId?: string;
  userWorkId?: string;
  userEducationId?: string;
  userLivedId?: string;
  postId?: string;
  friendId?: string;
  eventId?: string;
  followId?: string;
  followedId?: string;
  followerId?: string;
  mediaId?: string;
  albumId?: string;
  savedId?: string;
  collectionId?: string;
  commentId?: string;
  likeId?: string;
  cityId?: string;
  districtId?: string;
  wardId?: string;
  cityCode?: number;
  districtCode?: number;
  hasLike?: boolean
  convertLang?: boolean

  role?: ERole
  gender?: EGender
  fileType?: EMediaType;
}

export type ApiConfig<T> = {
  method: string
  apiPath: string
  body?: T
  config?: AxiosRequestConfig<T>
}

export type ApiFetchState = {
  loading: boolean
  error: boolean
}

export type ResponseError = {
  status: number
  message: string
}

export type ResponseResult = {
  error?: ResponseError
  success?: boolean
}

export interface ApiResponse<T> extends ResponseResult {
  data: T
}
