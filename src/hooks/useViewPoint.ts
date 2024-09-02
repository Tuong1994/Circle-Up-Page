import { computed, ref, watchEffect } from 'vue'

export const screen = {
  SM_PHONE: 320,
  MD_PHONE: 480,
  LG_PHONE: 576,
  SM_TABLET: 667,
  MD_TABLET: 768,
  LG_TABLET: 992,
  LAPTOP: 1200
}

const useViewPoint = () => {
  const { SM_PHONE, MD_PHONE, MD_TABLET } = screen

  const screenWidth = ref<number>(window.innerWidth)

  watchEffect((onStop) => {
    if (typeof window === 'undefined') return
    const handleResize = () => (screenWidth.value = window.innerWidth)
    window.addEventListener('resize', handleResize)
    onStop(() => window.removeEventListener('resize', handleResize))
  })

  const isSmPhone = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value < MD_PHONE)

  const isPhone = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value <= MD_PHONE)

  const isTablet = computed<boolean>(() => screenWidth.value > MD_PHONE && screenWidth.value <= MD_TABLET)

  const isLaptop = computed<boolean>(() => screenWidth.value > MD_TABLET && screenWidth.value <= 1100)

  const isDesktop = computed<boolean>(() => screenWidth.value > 1100)

  return { screenWidth, isSmPhone, isPhone, isTablet, isLaptop, isDesktop }
}

export default useViewPoint
