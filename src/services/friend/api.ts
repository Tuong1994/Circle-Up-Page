import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Friend, FriendRequestData } from './type'
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

export const createFriend = async (data: FriendRequestData) => {
  const response = await Fetch.Post<FriendRequestData, Friend>(friendApiPaths.create, data)
  return response
}

export const updateFriend = async (query: ApiQuery, data: FriendRequestData) => {
  const response = await Fetch.Put<FriendRequestData, any>(friendApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeFriends = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(friendApiPaths.remove + getApiQuery(query))
  return response
}
