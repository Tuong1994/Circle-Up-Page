export type Like = {
  id?: string
  userId: string
  postId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type LikeRequestData = Omit<Like, 'id' | 'createdAt' | 'updatedAt'>
