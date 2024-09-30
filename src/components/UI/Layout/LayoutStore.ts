import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ComponentColor, ComponentShape } from '@/common/type'

export type LayoutTheme = 'dark' | 'light'

export type LayoutColor = Exclude<ComponentColor, 'white' | 'gray'>

export type LayoutShape = Exclude<ComponentShape, 'circle'>

const useLayoutStore = defineStore('layout', () => {
  const shrinked = ref<boolean>(false)
  const isLayout = ref<boolean>(false)
  const showSide = ref<boolean>(false)
  const resizeContent = ref<boolean>(false)
  const theme = ref<LayoutTheme>('light')
  const color = ref<LayoutColor>('blue')
  const shape = ref<LayoutShape>('square')

  const switchTheme = (type: LayoutTheme) => (theme.value = type)
  const switchColor = (type: LayoutColor) => (color.value = type)
  const switchShape = (type: LayoutShape) => (shape.value = type)
  const onLayout = () => (isLayout.value = true)
  const onShrinked = () => (shrinked.value = !shrinked.value)
  const onResizeContent = () => (resizeContent.value = true)
  const onShowSide = () => (showSide.value = true)
  const onHideSide = () => (showSide.value = false)

  return {
    shrinked,
    isLayout,
    showSide,
    resizeContent,
    theme,
    color,
    shape,
    switchTheme,
    switchColor,
    switchShape,
    onLayout,
    onShrinked,
    onResizeContent,
    onShowSide,
    onHideSide
  }
})

export default useLayoutStore
