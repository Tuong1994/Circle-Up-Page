import type { ComponentColor } from '@/common/type'
import type { EPostActionType } from './enums'

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
