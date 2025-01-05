export type Follow = {
  id?: string
  followerId: string
  followedId: string
  postId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type FollowFormData = Omit<Follow, 'id' | 'createdAt' | 'updatedAt'>
