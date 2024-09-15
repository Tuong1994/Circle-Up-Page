<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, withDefaults, type StyleValue } from 'vue'
import type { MentionPosition } from './type'
import type { ComponentColor, ComponentShape, ComponentSize } from '@/common/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'

export interface InputMentionProps {
  rootClassName?: string
  inputClassName?: string
  listClassName?: string
  rootStyle?: StyleValue
  inputStyle?: StyleValue
  listStyle?: StyleValue
  sizes?: ComponentSize
  color?: ComponentColor
  shape?: ComponentShape
  placeholder?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<InputMentionProps>(), {
  rootClassName: '',
  inputClassName: '',
  listClassName: '',
  sizes: 'md',
  color: 'blue',
  shape: 'square'
})

const users = ['Alice', 'Bob', 'Charlie', 'David'] // Example user list

const layout = useLayoutStore()

const message = ref<string>('')

const showMentions = ref<boolean>(false)

const inputMentionRef = ref<HTMLDivElement | null>(null)

const mentionPosition = ref<MentionPosition>({ top: 0, left: 0 })

const filteredUsers = ref<any>([])

const colorClassName = computed<string>(() => `input-mention-${props.color}`)

const sizeClassName = computed<string>(() => `input-mention-${props.sizes}`)

const shapeClassName = computed<string>(() => `input-mention-${props.shape}`)

const disabledClassName = computed<string>(() => (props.disabled ? 'input-mention-disabled' : ''))

const themeClassName = computed<string>(() => `input-mention-${layout.theme}`)

const addNewLine = () => {
  const range = document.getSelection()?.getRangeAt(0)
  if (!range) return
  const br = document.createElement('br')
  range.insertNode(br)
  range.setStartAfter(br)
  range.setEndAfter(br)
  document.getSelection()?.removeAllRanges()
  document.getSelection()?.addRange(range)
}

const updateMentionPosition = () => {
  const selection = window.getSelection()
  if (!selection || !selection.rangeCount) return
  const range = selection.getRangeAt(0).cloneRange()
  range.collapse(false) // Collapse to the end of the range (caret position)
  const rect = range.getBoundingClientRect()
  mentionPosition.value = {
    top: rect.bottom + window.scrollY, // Consider scroll position
    left: rect.left + window.scrollX // Consider scroll position
  }
}

const handleChange = () => {
  message.value = inputMentionRef.value?.innerText as string // Update message from contenteditable div
  const lastWord = message.value.split(' ').pop() // Get the last word typed
  if (lastWord?.startsWith('@')) {
    const searchText = lastWord?.slice(1).toLowerCase()
    filteredUsers.value = users.filter((user) => user.toLowerCase().includes(searchText))
    showMentions.value = true
    updateMentionPosition()
  } else {
    showMentions.value = false
  }
}

const handleAddMention = (user: any) => {
  const words = message.value.split(' ')
  words.pop() // Remove the last incomplete mention
  message.value = words.join(' ') + ` @${user} `
  if (inputMentionRef.value) inputMentionRef.value.innerText = message.value // Update the contenteditable div
  showMentions.value = false
}

// Optionally handle keydown to prevent unwanted behavior like enter key, etc.
const handleKeydown = (e: any) => {
  // You can prevent the enter key from adding a new line if needed
  if (e.key === 'Enter') {
    if (!e.shiftKey) return e.preventDefault()
    e.preventDefault()
    addNewLine()
  }
}
</script>

<template>
  <div
    :style="rootStyle"
    :class="[
      'input-mention',
      colorClassName,
      sizeClassName,
      shapeClassName,
      themeClassName,
      rootClassName,
      disabledClassName
    ]"
  >
    <div
      :style="inputStyle"
      :class="['mention-box', inputClassName]"
      ref="inputMentionRef"
      placeholder="Type your message... (Use @ to mention)"
      contenteditable
      @input="handleChange"
      @keydown="handleKeydown"
    ></div>
    <ul
      v-if="showMentions && filteredUsers.length"
      :style="{ top: mentionPosition.top + 'px', left: mentionPosition.left + 'px' }"
      :class="['mention-list', listClassName]"
    >
      <li v-for="user in filteredUsers" :key="user" @click="handleAddMention(user)" class="list-item">
        <ItemWrapper>
          {{ user }}
        </ItemWrapper>
      </li>
    </ul>
  </div>
</template>
