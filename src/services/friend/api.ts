import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Friend, FriendFormData } from './type'
import friendApiPaths from './path'
import Fetch from '..'

export const getFriends = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Friend>>(friendApiPaths.list + getApiQuery(query))
  return response
}

export const getFriend = async (query: ApiQuery) => {
  const response = await Fetch.Get<Friend>(friendApiPaths.detail + getApiQuery(query))
  return response
}

export const createFriend = async (data: FriendFormData) => {
  const response = await Fetch.Post<FriendFormData, Friend>(friendApiPaths.create, data)
  return response
}

export const updateFriend = async (query: ApiQuery, data: FriendFormData) => {
  const response = await Fetch.Put<FriendFormData, any>(friendApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeFriends = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(friendApiPaths.remove + getApiQuery(query))
  return response
}
