<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { Space, Icon, Divider, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const { Paragraph } = Typography

interface MenuHeadProps {
  title?: string
}

defineProps<MenuHeadProps>()

const emits = defineEmits(['onBack'])

const handleBack = () => emits('onBack')
</script>

<template>
  <Space :size="15" aligns="middle">
    <Icon :size="18" :iconName="iconName.ANGLE_LEFT" @click="handleBack" />
    <Paragraph :weight="600" :size="16">{{ title }}</Paragraph>
  </Space>
  <Divider />
</template>
