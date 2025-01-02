export type Permission = {
  id?: string
  create: boolean
  update: boolean
  remove: boolean
  userId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
