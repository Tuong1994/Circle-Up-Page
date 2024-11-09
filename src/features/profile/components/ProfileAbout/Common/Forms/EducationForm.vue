<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue'
import { Input, TextArea, CheckBox } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import type { DateRange } from '@/features/profile/type'
import ControlLayout from './ControlLayout.vue'
import DateFilters from '../../../DateFilters/DateFilters.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

export interface EducationFormProps {}

defineProps<EducationFormProps>()

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const currentYear = ref<DateRange>({ start: 0, end: 0 })

const currentMonth = ref<DateRange>({ start: -1, end: -1 })

const currentDate = ref<DateRange>({ start: 0, end: 0 })

const isGraduated = ref<boolean>(true)

const commonProps = computed(() => ({
  rootClassName: 'mb-5',
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape
}))

const handleSelectYearStart = (year: number) => (currentYear.value = { ...currentYear.value, start: year })

const handleSelectYearEnd = (year: number) => (currentYear.value = { ...currentYear.value, end: year })

const handleSelectMonthStart = (month: number) =>
  (currentMonth.value = { ...currentMonth.value, start: month })

const handleSelectMonthEnd = (month: number) => (currentMonth.value = { ...currentMonth.value, end: month })

const handleSelectDateStart = (date: number) => (currentDate.value = { ...currentDate.value, start: date })

const handleSelectDateEnd = (date: number) => (currentDate.value = { ...currentDate.value, end: date })

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
    <Input v-bind="commonProps">
      <template #label>School</template>
    </Input>
    <Paragraph :weight="600" :size="16" rootClassName="mb-5">Time period</Paragraph>
    <Space rootClassName="mb-5">
      <DateFilters
        :currentYear="currentYear.start"
        :currentMonth="currentMonth.start"
        :currentDate="currentDate.start"
        @onSelectYear="handleSelectYearStart"
        @onSelectMonth="handleSelectMonthStart"
        @onSelectDate="handleSelectDateStart"
      />
      <DateFilters
        prefix="To"
        :currentYear="currentYear.end"
        :currentMonth="currentMonth.end"
        :currentDate="currentDate.end"
        @onSelectYear="handleSelectYearEnd"
        @onSelectMonth="handleSelectMonthEnd"
        @onSelectDate="handleSelectDateEnd"
      />
    </Space>
    <CheckBox v-bind="commonProps" :checked="isGraduated"> Graduated </CheckBox>
    <TextArea v-bind="commonProps">
      <template #label>Description</template>
    </TextArea>
  </ControlLayout>
</template>
