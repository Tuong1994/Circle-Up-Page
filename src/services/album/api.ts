import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Album } from './type'
import albumApiPaths from './path'
import Fetch from '..'

export const getAlbums = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Album>>(albumApiPaths.list + getApiQuery(query))
  return response
}

export const getAlbum = async (query: ApiQuery) => {
  const response = await Fetch.Get<Album>(albumApiPaths.detail + getApiQuery(query))
  return response
}

export const createAlbum = async (query: ApiQuery, data: FormData) => {
  const response = await Fetch.Post<FormData, Album>(albumApiPaths.create + getApiQuery(query), data)
  return response
}

export const updateAlbum = async (query: ApiQuery, data: FormData) => {
  const response = await Fetch.Put<FormData, any>(albumApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeAlbums = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(albumApiPaths.remove + getApiQuery(query))
  return response
}
