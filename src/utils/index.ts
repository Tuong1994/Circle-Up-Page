import type { Ref } from 'vue'
import type { DateFilter } from '@/common/type'

const utils = {
  uuid: () => {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x100000)
        .toString(16)
        .substring(1)
    return `${s4()}-${s4()}-${s4()}/${s4()}-${s4()}-${s4()}`
  },

  collapse: (ref: Ref<HTMLDivElement | undefined>) => {
    if (!ref.value) return
    if (ref.value === null) return

    const node = ref.value
    if (node.style.maxHeight) node.style.maxHeight = ''
    else node.style.maxHeight = `${node.scrollHeight}px`
  },

  getDateFilter: (start: DateFilter, end: DateFilter) => {
    const startDate = new Date(start.year, start.month, start.date)
    const endDate = new Date(end.year, end.month, end.date)
    return { startDate, endDate }
  }
}

export default utils
