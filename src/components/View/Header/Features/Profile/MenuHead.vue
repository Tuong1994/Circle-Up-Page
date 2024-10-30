<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { Space, Icon, Button, Divider, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

const { Paragraph } = Typography

interface MenuHeadProps {
  title?: string
}

defineProps<MenuHeadProps>()

const emits = defineEmits(['onBack'])

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <Space aligns="middle">
    <Button :shape="layout.shape" @click="handleBack">
      <Icon :iconName="iconName.ANGLE_LEFT" />
    </Button>
    <Paragraph :weight="600" :size="16">{{ title }}</Paragraph>
  </Space>
  <Divider />
</template>
