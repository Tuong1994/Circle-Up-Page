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
