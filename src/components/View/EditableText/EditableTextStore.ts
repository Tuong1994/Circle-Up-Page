import { ref } from 'vue'
import { defineStore } from 'pinia'

const useEditableTextStore = defineStore('editable-text', () => {
  const editText = ref<boolean>(false)
  const setEditText = (value: boolean) => (editText.value = value)
  return { editText, setEditText }
})

export default useEditableTextStore
