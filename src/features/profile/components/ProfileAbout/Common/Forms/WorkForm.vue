<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { Input, Select, TextArea } from '@/components/Control'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface WorkFormProps {}

defineProps<WorkFormProps>()

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const commonProps = computed(() => ({
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
    <Input v-bind="commonProps" rootClassName="mb-5" />
    <Input v-bind="commonProps" rootClassName="mb-5" />
    <Select v-bind="commonProps" rootClassName="mb-5" />
    <TextArea v-bind="commonProps" />
  </ControlLayout>
</template>
