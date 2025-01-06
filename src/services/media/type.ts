export type Media = {
  id?: string
  path: string
  size: number
  publicId: string
  type: string
  hash: string
  userId?: string
  postId?: string
  albumId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}