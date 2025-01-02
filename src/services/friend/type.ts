import type { EFriendStatus } from './enum'

export type Friend = {
  id?: string
  status: EFriendStatus
  createdAt?: Date | string
  updatedAt?: Date | string
  requesterId: string
  receiverId: string
}
