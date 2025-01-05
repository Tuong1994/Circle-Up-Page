import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Follow, FollowFormData } from './type'
import followApiPaths from './path'
import Fetch from '..'

export const getFollows = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Follow>>(followApiPaths.list + getApiQuery(query))
  return response
}

export const getFollow = async (query: ApiQuery) => {
  const response = await Fetch.Get<Follow>(followApiPaths.detail + getApiQuery(query))
  return response
}

export const createFollow = async (data: FollowFormData) => {
  const response = await Fetch.Post<FollowFormData, Follow>(followApiPaths.create, data)
  return response
}

export const updateFollow = async (query: ApiQuery, data: FollowFormData) => {
  const response = await Fetch.Put<FollowFormData, any>(followApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeFollows = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(followApiPaths.remove + getApiQuery(query))
  return response
}
