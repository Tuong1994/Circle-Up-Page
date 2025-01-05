import { getApiQuery } from '../helper'
import type { Comment, CommentFormData } from './type'
import type { ApiQuery, Paging } from '../type'
import commentApiPaths from './path'
import Fetch from '..'

export const getComments = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Comment>>(commentApiPaths.list + getApiQuery(query))
  return response
}

export const getComment = async (query: ApiQuery) => {
  const response = await Fetch.Get<Comment>(commentApiPaths.detail + getApiQuery(query))
  return response
}

export const createComment = async (data: CommentFormData) => {
  const response = await Fetch.Post<CommentFormData, Comment>(commentApiPaths.create, data)
  return response
}

export const updateComment = async (query: ApiQuery, data: CommentFormData) => {
  const response = await Fetch.Put<CommentFormData, any>(commentApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeComments = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(commentApiPaths.remove + getApiQuery(query))
  return response
}
