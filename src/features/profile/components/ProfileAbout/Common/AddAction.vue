<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue'
import { Button, Space, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

interface AddActionProps {
  title?: string
}

withDefaults(defineProps<AddActionProps>(), {
  title: 'Add text'
})

const emits = defineEmits(['onAdd'])

const handleAdd = () => emits('onAdd')
</script>

<template>
  <Button text @click="handleAdd">
    <Space aligns="middle">
      <Icon :iconName="iconName.PLUS" />
      <span>{{ title }}</span>
    </Space>
  </Button>
</template>
