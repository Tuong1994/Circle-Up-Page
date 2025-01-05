import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Follow, FollowRequestData } from './type'
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

export const createFollow = async (data: FollowRequestData) => {
  const response = await Fetch.Post<FollowRequestData, Follow>(followApiPaths.create, data)
  return response
}

export const updateFollow = async (query: ApiQuery, data: FollowRequestData) => {
  const response = await Fetch.Put<FollowRequestData, any>(followApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeFollows = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(followApiPaths.remove + getApiQuery(query))
  return response
}
