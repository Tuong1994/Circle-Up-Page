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

const controlPlaceholder = computed<string>(
  () => props.placeholder ?? 'Type your message... (Use @ to mention)'
)

const colorClassName = computed<string>(() => `input-mention-${props.color}`)

const sizeClassName = computed<string>(() => `input-mention-${props.sizes}`)

const shapeClassName = computed<string>(() => `input-mention-${props.shape}`)

const disabledClassName = computed<string>(() => (props.disabled ? 'input-mention-disabled' : ''))

const themeClassName = computed<string>(() => `input-mention-${layout.theme}`)

const listInlineStyle = computed<StyleValue>(() => {
  const top = props.placement === 'top' ? mentionPosition.value.top : 'unset'
  const bottom = props.placement === 'bottom' ? mentionPosition.value.bottom : 'unset'
  const style = {
    ...(listStyle?.value as object),
    top: top + 'px',
    bottom: bottom + 'px',
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
    updateMentionPosition(mentionPosition, inputMentionRef)
  }
}

const handleSelectMention = (mention: MentionItem) => {
  const words = message.value.split(' ')
  words.pop() // Remove the last incomplete mention
  message.value = words.join(' ') + ` @${mention.label} `
  if (mentionBoxRef.value) mentionBoxRef.value.innerText = message.value // Update the contenteditable div
  showMentions.value = false
  emits('onSelectMention', mention)
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
        @click="handleSelectMention(mention)"
        class="list-item"
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
