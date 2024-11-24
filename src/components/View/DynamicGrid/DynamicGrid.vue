<script setup lang="ts">
import { computed, withDefaults, defineProps, defineEmits, type StyleValue } from 'vue'
import { Space, Image, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { DynamicItems } from './type'

const { Paragraph } = Typography

interface DynamicGridProps {
  items: DynamicItems
}

const props = withDefaults(defineProps<DynamicGridProps>(), {
  items: () => []
})

const emits = defineEmits(['onSelectItem'])

const items = computed<DynamicItems>(() => {
  let list: DynamicItems = props.items
  if (props.items.length > 4) list = props.items.slice(0, 4)
  return list
})

const gridStyle = computed<StyleValue>(() => {
  let style: StyleValue = {}
  switch (items.value.length) {
    case 2: {
      style = { gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(1, 1fr)' }
      break
    }
    case 3: {
      style = { gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(2, 1fr)' }
      break
    }
    case 4: {
      style = { gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(3, 1fr)' }
      break
    }
    default:
      style = { gridTemplateColumns: '1fr', gridTemplateRows: 'repeat(1, 1fr)' }
  }
  return style
})

const gridItemStyle = (idx: number): StyleValue => {
  let style: StyleValue = {}
  if (idx !== 0) return style
  switch (items.value.length) {
    case 3: {
      style = { gridRow: '1 / span 2' }
      break
    }
    case 4: {
      style = { gridRow: '1 / span 3' }
    }
  }
  return style
}

const hasLayer = (idx: number) => idx === 3

const handleSelectItem = (id: string) => emits('onSelectItem', id)
</script>

<template>
  <div :style="gridStyle" class="dynamic-grid">
    <div
      v-for="(item, idx) in items"
      class="grid-item"
      :style="gridItemStyle(idx)"
      @click="() => handleSelectItem(item.id)"
    >
      <Image :src="item.url" rootClassName="item-image" imgWidth="100%" imgHeight="100%" objectFit="cover" />
      <div v-if="hasLayer(idx)" class="item-layer">
        <Space aligns="middle">
          <Icon :size="20" :iconName="iconName.PLUS" />
          <Paragraph :size="30">{{ items.length }}</Paragraph>
        </Space>
      </div>
    </div>
  </div>
</template>
