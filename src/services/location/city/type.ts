export type City = {
  id?: string
  name: string
  code: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type CityRequestData = Pick<City, 'code'> & {
  nameEn: string
  nameVn: string
}
