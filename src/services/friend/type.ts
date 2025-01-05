import type { EFriendStatus } from './enum'

export type Friend = {
  id?: string
  status: EFriendStatus
  requesterId: string
  receiverId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FriendFormData = Omit<Friend, 'id' | 'createdAt' | 'updatedAt'>
