import { ref, watch, type ComputedRef, type Ref } from 'vue'

const useTypingDebounce = (value: Ref<string> | ComputedRef<string>, delay = 1500) => {
  let timeout: number = 0

  const typingDebounce = ref<string>('')

  watch(value, (newValue) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => (typingDebounce.value = newValue), delay)
  })

  return typingDebounce
}

export default useTypingDebounce
