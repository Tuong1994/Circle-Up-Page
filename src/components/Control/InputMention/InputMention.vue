<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, withDefaults, type StyleValue, watch, toRefs } from 'vue'
import { addNewLine, updateMentionPosition } from './helper'
import { Space, Avatar, Image, Typography } from '@/components/UI'
import type { MentionItems, MentionItem, MentionPlacement, MentionPosition } from './type'
import type { ComponentColor, ComponentShape, ComponentSize } from '@/common/type'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

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
  placement?: MentionPlacement
  placeholder?: string
  disabled?: boolean
  mentions?: MentionItems
}

const props = withDefaults(defineProps<InputMentionProps>(), {
  rootClassName: '',
  inputClassName: '',
  listClassName: '',
  sizes: 'md',
  color: 'blue',
  shape: 'square',
  placement: 'bottom',
  mentions: () => []
})

const emits = defineEmits(['onInput', 'onSelectMention'])

const layout = useLayoutStore()

const { listStyle } = toRefs(props)

const message = ref<string>('')

const showMentions = ref<boolean>(false)

const inputMentionRef = ref<HTMLDivElement | null>(null)

const mentionBoxRef = ref<HTMLDivElement | null>(null)

const mentionPosition = ref<MentionPosition>({ top: 0, left: 0 })

const filterMentions = ref<MentionItems>([])

const selectedIdx = ref<number>(-1)

const controlPlaceholder = computed<string>(
  () => props.placeholder ?? 'Type your message... (Use @ to mention)'
)

const colorClassName = computed<string>(() => `input-mention-${props.color}`)

const sizeClassName = computed<string>(() => `input-mention-${props.sizes}`)

const shapeClassName = computed<string>(() => `input-mention-${props.shape}`)

const disabledClassName = computed<string>(() => (props.disabled ? 'input-mention-disabled' : ''))

const themeClassName = computed<string>(() => `input-mention-${layout.theme}`)

const listInlineStyle = computed<StyleValue>(() => {
  const top = props.placement === 'bottom' ? mentionPosition.value.top + 'px' : 'unset'
  const bottom = props.placement === 'top' ? mentionPosition.value.bottom + 'px' : 'unset'
  const style = {
    ...(listStyle?.value as object),
    top,
    bottom,
    left: mentionPosition.value.left + 'px'
  }
  return style
})

const handleChange = () => {
  message.value = mentionBoxRef.value?.innerText as string // Update message from contenteditable div
  const lastWord = message.value.split(' ').pop() // Get the last word typed
  if (lastWord === undefined) return
  if (!lastWord.startsWith('@')) return (showMentions.value = false)
  if (lastWord.startsWith('@')) {
    const searchText = lastWord.slice(1).toLowerCase()
    filterMentions.value = props.mentions.filter((mention) =>
      mention.label.toLowerCase().includes(searchText)
    )
    showMentions.value = true
    selectedIdx.value = 0 // Reset the index when mention list shows
    updateMentionPosition(mentionPosition, inputMentionRef)
  }
}

const handleSelectMention = (mention: MentionItem) => {
  const words = message.value.split(' ')
  words.pop() // Remove the last incomplete mention
  const mentionJson = ` ${JSON.stringify(mention)} `
  message.value = words.join(' ') + mentionJson
  const renderContent = words.join(' ') + ` <strong>${mention.label}</strong>&nbsp;`
  if (mentionBoxRef.value) {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = renderContent + ' ' + message.value.slice(mentionJson.length)

    // Clear the contenteditable div and append parsed content from tempDiv
    mentionBoxRef.value.innerHTML = ''
    Array.from(tempDiv.childNodes).forEach((node) => mentionBoxRef.value?.appendChild(node))
    // Fix cursor positioning after the mention
    const range = document.createRange()
    const selection = window.getSelection()

    // Move the cursor after the mention (after the <strong> tag)
    const mentionBox = mentionBoxRef.value
    range.setStart(mentionBox, mentionBox.childNodes.length)
    range.collapse(true)
    selection?.removeAllRanges()
    selection?.addRange(range)
  }
  showMentions.value = false
  selectedIdx.value = -1 // Reset after selecting

  emits('onSelectMention', mention)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (showMentions.value && filterMentions.value.length) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      selectedIdx.value = (selectedIdx.value + 1) % filterMentions.value.length
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      selectedIdx.value = (selectedIdx.value - 1 + filterMentions.value.length) % filterMentions.value.length
    } else if (e.key === 'Enter' && selectedIdx.value >= 0) {
      e.preventDefault()
      handleSelectMention(filterMentions.value[selectedIdx.value])
    }
  }

  // Prevent the enter key from adding a new line, only shift + enter add a new line
  if (e.key === 'Enter') {
    if (!e.shiftKey) return e.preventDefault()
    e.preventDefault()
    addNewLine()
  }
}

watch(message, (newValue) => {
  emits('onInput', newValue)
})
</script>

<template>
  <div
    ref="inputMentionRef"
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
      ref="mentionBoxRef"
      :placeholder="controlPlaceholder"
      contenteditable
      @input="handleChange"
      @keydown="handleKeydown"
    ></div>
    <div
      v-if="showMentions && filterMentions.length"
      :style="listInlineStyle"
      :class="['mention-list', listClassName]"
    >
      <ItemWrapper
        v-for="(mention, idx) in filterMentions"
        :key="`${mention.label}-${idx}`"
        :class="{ 'list-item-selected': idx === selectedIdx }"
        rootClassName="list-item"
        @click="handleSelectMention(mention)"
      >
        <Space aligns="middle">
          <Avatar v-if="mention.imgUrl">
            <Image :src="mention.imgUrl" />
          </Avatar>
          <Paragraph :weight="600"> {{ mention.label }}</Paragraph>
        </Space>
      </ItemWrapper>
    </div>
  </div>
</template>
