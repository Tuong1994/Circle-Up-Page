import type { EFriendItemType, EFriendMenuType } from './enum'

export type FriendMenuType =
  | EFriendMenuType.DEFAULT
  | EFriendMenuType.LIST
  | EFriendMenuType.REQUESTS
  | EFriendMenuType.SUGGESTIONS

export type FriendItemType = EFriendItemType.FRIEND | EFriendItemType.REQUEST
