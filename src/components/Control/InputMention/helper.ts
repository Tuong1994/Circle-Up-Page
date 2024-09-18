import type { Ref } from 'vue'
import type { MentionPosition } from './type'

export const addNewLine = () => {
  const range = document.getSelection()?.getRangeAt(0)
  if (!range) return
  const br = document.createElement('br')
  range.insertNode(br)
  range.setStartAfter(br)
  range.setEndAfter(br)
  document.getSelection()?.removeAllRanges()
  document.getSelection()?.addRange(range)
}

export const updateMentionPosition = (pos: Ref<MentionPosition>, parent: Ref<HTMLDivElement | null>) => {
  if (parent.value === null) return
  const selection = window.getSelection()
  if (!selection || !selection.rangeCount) return
  const range = selection.getRangeAt(0).cloneRange()
  range.collapse(false) // Collapse to the end of the range (caret position)
  const rect = range.getBoundingClientRect()
  const parentRect = parent.value.getBoundingClientRect()
  pos.value = {
    top: rect.bottom - parentRect.top,
    bottom: rect.bottom - parentRect.top,
    left: rect.left - parentRect.left
  }
}
