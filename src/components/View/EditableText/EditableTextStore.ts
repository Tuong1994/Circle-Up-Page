import { ref } from 'vue'
import { defineStore } from 'pinia'

const useEditableTextStore = defineStore('editable-text', () => {
  const addText = ref<boolean>(false)
  const editText = ref<boolean>(false)
  const setAddText = (value: boolean) => (addText.value = value)
  const setEditText = (value: boolean) => (editText.value = value)
  return { addText, editText, setAddText, setEditText }
})

export default useEditableTextStore
