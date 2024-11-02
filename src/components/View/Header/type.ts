import type { ELang } from "@/common/enum"
import type { EHeaderFeatureType } from "./enum"

export type FeatureType = EHeaderFeatureType.NOTIFICATION | EHeaderFeatureType.PROFILE

export type FeatureActivate = {
  open: boolean
  type: FeatureType
}

export type FeatureLangItem = {
  id: string;
  title: string;
  type: ELang
}

export type FeatureLangItems = FeatureLangItem[]