<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { Typography, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import RowContent from '@/components/View/RowContent/RowContent.vue'

const { Paragraph } = Typography

interface ContentEmptyProps {
  message?: string
  icon?: string
}

withDefaults(defineProps<ContentEmptyProps>(), {
  icon: iconName.BOOKMARK
})
</script>

<template>
  <RowContent>
    <template #label>
      <Icon :icon="icon" :size="18" />
    </template>
    <template #content>
      <Paragraph :size="15">{{ message }}</Paragraph>
    </template>
  </RowContent>
</template>
