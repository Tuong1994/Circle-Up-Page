export type Attendees = {
  id?: string
  userId: string
  eventId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type Event = {
  id?: string
  title: string
  description?: string
  date: Date | string
  creatorId: string
  attendees: Attendees[]
  createdAt?: Date | string
  updatedAt?: Date | string
}
