<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, withDefaults} from 'vue'
import { Select } from '@/components/Control'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import type { SelectProps } from '@/components/Control/Select/Select.vue'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface GenderFormProps {
  value?: string | number
  selectProps?: SelectProps
}

const props = withDefaults(defineProps<GenderFormProps>(), {
  value: ''
})

const emits = defineEmits(['onSelect', 'onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const text = ref<string | number>(props.value)

const selectDefaultProps = computed<SelectProps>(() => ({
  ...(props.selectProps as object),
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape,
  value: text.value
}))

const saveButtonProps = computed<ButtonProps>(() => ({ disabled: text.value === '' }))

const handleSelect = (value: string | number) => emits('onSelect', value)

const handleSelectAudience = () => emits('onSelectAudience')

const handleCancelEdit = () => emits('onCancel')

const handleSaveEdit = () => emits('onSave')
</script>

<template>
  <ControlLayout
    :saveButtonProps="saveButtonProps"
    @onSelectAudience="handleSelectAudience"
    @onSave="handleSaveEdit"
    @onCancel="handleCancelEdit"
  >
    <Select v-bind="selectDefaultProps" @onChangeSelect="handleSelect">
      <template #label>Gender</template>
    </Select>
  </ControlLayout>
</template>
