<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, withDefaults } from 'vue'
import { DatePicker } from '@/components/Control'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { DatePickerProps } from '@/components/Control/DatePicker/DatePicker.vue'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface BirthdayFormProps {
  value?: string
  datepickerProps?: DatePickerProps
}

const props = withDefaults(defineProps<BirthdayFormProps>(), {
  value: ''
})

const emits = defineEmits(['onSelect', 'onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const date = ref<Date>(new Date(props.value))

const datepickerDefaultProps = computed<DatePickerProps>(() => ({
  ...(props.datepickerProps as object),
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape,
  defaultDate: date.value
}))

const handleSelect = (value: string | Date) => emits('onSelect', value)

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
    <DatePicker v-bind="datepickerDefaultProps" @onChangeSelect="handleSelect">
      <template #label>Birthday</template>
    </DatePicker>
  </ControlLayout>
</template>
