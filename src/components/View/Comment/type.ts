export type CommentActionType = 'reply' | 'like'

export type ActiveComment = {
  id: string
  type: CommentActionType | null
}
