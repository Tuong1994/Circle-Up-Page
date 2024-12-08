export type DynamicGridItem<M = unknown> = {
  id: string
  comName: string
  data?: M
}

export type DynamicGridItems<M = unknown> = DynamicGridItem<M>[]
