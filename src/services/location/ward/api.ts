import { getApiQuery } from '@/services/helper'
import type { ApiQuery, Paging } from '@/services/type'
import type { Ward, WardRequestData } from './type'
import wardApiPaths from './path'
import Fetch from '@/services'

export const getWards = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Ward>>(wardApiPaths.list + getApiQuery(query))
  return response
}

export const getWard = async (query: ApiQuery) => {
  const response = await Fetch.Get<Ward>(wardApiPaths.detail + getApiQuery(query))
  return response
}

export const createWard = async (data: WardRequestData) => {
  const response = await Fetch.Post<WardRequestData, Ward>(wardApiPaths.create, data)
  return response
}

export const updateWard = async (query: ApiQuery, data: WardRequestData) => {
  const response = await Fetch.Put<WardRequestData, any>(wardApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeWards = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(wardApiPaths.remove + getApiQuery(query))
  return response
}
