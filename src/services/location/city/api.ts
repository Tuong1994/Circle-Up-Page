import { getApiQuery } from '@/services/helper'
import type { ApiQuery, Paging } from '@/services/type'
import type { City, CityRequestData } from './type'
import cityApiPaths from './path'
import Fetch from '@/services'

export const getCities = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<City>>(cityApiPaths.list + getApiQuery(query))
  return response
}

export const getCity = async (query: ApiQuery) => {
  const response = await Fetch.Get<City>(cityApiPaths.detail + getApiQuery(query))
  return response
}

export const createCity = async (data: CityRequestData) => {
  const response = await Fetch.Post<CityRequestData, City>(cityApiPaths.create, data)
  return response
}

export const updateCity = async (query: ApiQuery, data: CityRequestData) => {
  const response = await Fetch.Put<CityRequestData, any>(cityApiPaths.update + getApiQuery(query), data)
  return response
}

export const removeCities = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(cityApiPaths.remove + getApiQuery(query))
  return response
}
