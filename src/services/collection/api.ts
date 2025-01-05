import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type { Collection, CollectionFormData } from './type'
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

export const createCollection = async (data: CollectionFormData) => {
  const response = await Fetch.Post<CollectionFormData, Collection>(collectionApiPaths.create, data)
  return response
}

export const updateCollection = async (query: ApiQuery, data: CollectionFormData) => {
  const response = await Fetch.Put<CollectionFormData, any>(
    collectionApiPaths.update + getApiQuery(query),
    data
  )
  return response
}

export const removeCollections = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(collectionApiPaths.remove + getApiQuery(query))
  return response
}
