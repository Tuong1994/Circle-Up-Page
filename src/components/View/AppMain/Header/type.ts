export type NavbarMenuItem = {
  id: string
  name: string
  path: string
  iconName?: string
}

export type NavbarMenuItems = NavbarMenuItem[]

export type FeatureType = 'notification' | 'profile'

export type FeatureActivate = {
  open: boolean
  type: FeatureType
}
