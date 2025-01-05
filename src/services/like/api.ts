import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Like, LikeRequestData } from './type'
import likeApiPaths from './path'
import Fetch from '..'

export const getLikes = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Like>>(likeApiPaths.list + getApiQuery(query))
  return response
}

export const getLike = async (query: ApiQuery) => {
  const response = await Fetch.Get<Like>(likeApiPaths.detail + getApiQuery(query))
  return response
}

export const createLike = async (data: LikeRequestData) => {
  const response = await Fetch.Post<LikeRequestData, Like>(likeApiPaths.create, data)
  return response
}

export const updateLike = async (query: ApiQuery, data: LikeRequestData) => {
  const response = await Fetch.Put<LikeRequestData, any>(likeApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeLikes = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(likeApiPaths.remove + getApiQuery(query))
  return response
}
