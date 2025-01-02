import type { EAudienceType } from '@/components/View/Audiences/enum'
import type { EFeeling } from '../post/enums'
import type { Media } from '../media/type'

export type AlbumTag = {
  id?: string
  userId: string
  albumId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type Album = {
  id: string
  name: string
  description: string
  audience: EAudienceType
  feeling?: EFeeling
  cityCode?: number
  authorId: string
  medias?: Media[]
  tags?: AlbumTag[]
  createdAt?: Date | string
  updatedAt?: Date | string
}
