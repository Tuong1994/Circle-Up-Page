import { computed, watchEffect } from 'vue'
import useViewPoint, { breakpoint } from '@/hooks/useViewPoint'

const useScrollSticky = () => {
  const { screenWidth } = useViewPoint()

  const { SM_PHONE, SM_TABLET, MD_TABLET } = breakpoint

  const responsive = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value <= SM_TABLET)

  const isSmTablet = computed<boolean>(() => screenWidth.value === MD_TABLET)

  watchEffect((onStop) => {
    const handleScroll = () => {
      if (responsive.value) return
      if (isSmTablet.value) return

      const leftSide = document.getElementById('leftSide')
      const rightSide = document.getElementById('rightSide')
      const head = document.querySelector('.profile-head')

      if (!leftSide || !rightSide || !head) return

      const windowTop = window.scrollY
      const windowBottom = windowTop + window.innerHeight - head.clientHeight
      const leftSideTop = leftSide.offsetTop
      const leftSideHeight = leftSide.clientHeight
      const leftSideWidth = leftSide.clientWidth
      const leftSideBottom = leftSideTop + leftSideHeight

      if (windowBottom >= leftSideBottom) {
        leftSide.style.position = 'fixed'
        leftSide.style.bottom = '0px'
        rightSide.style.marginLeft = leftSideWidth + 10 + 'px'
      } else {
        leftSide.style.position = 'relative'
        leftSide.style.bottom = ''
        rightSide.style.marginLeft = '10px'
      }
    }

    window.addEventListener('scroll', handleScroll)
    onStop(() => window.removeEventListener('scroll', handleScroll))
  })

  return responsive
}

export default useScrollSticky