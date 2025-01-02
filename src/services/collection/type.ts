import type { Post } from '../post/type'

export type Collection = {
  id?: string
  name: string
  userId: string
  posts?: Post[]
  createdAt?: Date | string
  updatedAt?: Date | string
}
