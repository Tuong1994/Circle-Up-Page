import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Collection, CollectionRequestData } from './type'
import collectionApiPaths from './path'
import Fetch from '..'

export const getCollections = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<Collection>>(collectionApiPaths.list + getApiQuery(query))
  return response
}

export const getCollection = async (query: ApiQuery) => {
  const response = await Fetch.Get<Collection>(collectionApiPaths.detail + getApiQuery(query))
  return response
}

export const createCollection = async (data: CollectionRequestData) => {
  const response = await Fetch.Post<CollectionRequestData, Collection>(collectionApiPaths.create, data)
  return response
}

export const updateCollection = async (query: ApiQuery, data: CollectionRequestData) => {
  const response = await Fetch.Put<CollectionRequestData, any>(
    collectionApiPaths.update + getApiQuery(query),
    data
  )
  return response
}

export const removeCollections = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(collectionApiPaths.remove + getApiQuery(query))
  return response
}
