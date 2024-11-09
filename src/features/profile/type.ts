import type { EAboutTabFormType } from './enum'

export type AboutTabFormType =
  | EAboutTabFormType.COMMON
  | EAboutTabFormType.PHONE
  | EAboutTabFormType.GENDER
  | EAboutTabFormType.BIRTHDAY
  | EAboutTabFormType.WORK
  | EAboutTabFormType.EDUCATION
  | EAboutTabFormType.LIVED
  | EAboutTabFormType.RELATIONSHIP

export type DateRange = {
  start: number
  end: number
}

export type DateFilter = {
  year: number
  month: number
  date: number
}

export type ProfileWork = {
  id: string
  company: string
  position: string
  city: string
  desc: string
  isCurrentJob: boolean
  startDate: DateFilter
  endDate: DateFilter
}
