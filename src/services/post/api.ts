import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Post } from './type'
import postApiPaths from './path'
import Fetch from '..'

export const getPosts = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Post>>(postApiPaths.list + getApiQuery(query))
  return response
}

export const getPost = async (query: ApiQuery) => {
  const response = await Fetch.Get<Post>(postApiPaths.detail + getApiQuery(query))
  return response
}

export const createPost = async (query: ApiQuery, data: FormData) => {
  const response = await Fetch.Post<FormData, Post>(postApiPaths.create + getApiQuery(query), data)
  return response
}

export const updatePost = async (query: ApiQuery, data: FormData) => {
  const response = await Fetch.Put<FormData, any>(postApiPaths.update + getApiQuery(query), data)
  return response
}

export const removePosts = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(postApiPaths.remove + getApiQuery(query))
  return response
}
