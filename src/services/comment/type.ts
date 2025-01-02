export type CommentActionType = 'reply' | 'like'

export type ActiveComment = {
  id: string
  type: CommentActionType | null
}

export type Comment = {
  id?: string
  content: string
  parentId: string | null
  userId: string
  postId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
