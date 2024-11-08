import type { EAboutTabFormType } from './enum'

export type AboutTabFormType =
  | EAboutTabFormType.COMMON
  | EAboutTabFormType.PHONE
  | EAboutTabFormType.GENDER
  | EAboutTabFormType.BIRTHDAY
  | EAboutTabFormType.WORK

export type DateRange = {
  start: number
  end: number
}
