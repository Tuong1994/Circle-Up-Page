import { getApiQuery } from '../helper'
import type { ApiQuery } from '../type'
import type { Media } from './type'
import mediaApiPaths from './path'
import Fetch from '..'

export const userUpload = async (query: ApiQuery, data: FormData) => {
  const response = await Fetch.Post<FormData, Media>(mediaApiPaths.userUpload + getApiQuery(query), data)
  return response
}

export const postUpload = async (query: ApiQuery, data: FormData) => {
  const response = await Fetch.Post<FormData, Media>(mediaApiPaths.postUpload + getApiQuery(query), data)
  return response
}
