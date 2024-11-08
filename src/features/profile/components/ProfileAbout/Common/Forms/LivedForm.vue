<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { Select } from '@/components/Control'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface LivedFormProps {}

defineProps<LivedFormProps>()

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const commonProps = computed(() => ({
  rootClassName: 'mb-5',
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape
}))

const handleSelectAudience = () => emits('onSelectAudience')

const handleCancelEdit = () => emits('onCancel')

const handleSaveEdit = () => emits('onSave')
</script>

<template>
  <ControlLayout
    @onSelectAudience="handleSelectAudience"
    @onSave="handleSaveEdit"
    @onCancel="handleCancelEdit"
  >
    <Select v-bind="commonProps">
      <template #label>City</template>
    </Select>
    <Select v-bind="commonProps">
      <template #label>Town</template>
    </Select>
  </ControlLayout>
</template>
