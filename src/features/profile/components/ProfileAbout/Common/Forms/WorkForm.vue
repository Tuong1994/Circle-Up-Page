<script setup lang="ts">
import { computed, ref, withDefaults, defineEmits, defineProps } from 'vue'
import { Space, Typography } from '@/components/UI'
import { Input, Select, TextArea, CheckBox } from '@/components/Control'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import type { ProfileWork } from '@/features/profile/type'
import ControlLayout from './ControlLayout.vue'
import DateFilters from '../../../DateFilters/DateFilters.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

export interface WorkFormProps {
  profileWork?: ProfileWork
}

const props = withDefaults(defineProps<WorkFormProps>(), {
  profileWork: () => ({
    id: '',
    company: '',
    position: '',
    city: '',
    desc: '',
    isCurrentJob: true,
    startDate: { year: new Date().getFullYear(), month: new Date().getMonth(), date: new Date().getDate() },
    endDate: { year: new Date().getFullYear(), month: new Date().getMonth(), date: new Date().getDate() }
  })
})

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const t = useLangStore()

const formData = ref<ProfileWork>(props.profileWork)

const commonProps = computed(() => ({
  rootClassName: 'mb-5',
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape
}))

const handleSelectYearStart = (year: number) =>
  (formData.value = { ...formData.value, startDate: { ...formData.value.startDate, year } })

const handleSelectYearEnd = (year: number) =>
  (formData.value = { ...formData.value, endDate: { ...formData.value.endDate, year } })

const handleSelectMonthStart = (month: number) =>
  (formData.value = { ...formData.value, startDate: { ...formData.value.startDate, month } })

const handleSelectMonthEnd = (month: number) =>
  (formData.value = { ...formData.value, endDate: { ...formData.value.endDate, month } })

const handleSelectDateStart = (date: number) =>
  (formData.value = { ...formData.value, startDate: { ...formData.value.startDate, date } })

const handleSelectDateEnd = (date: number) =>
  (formData.value = { ...formData.value, endDate: { ...formData.value.endDate, date } })

const handleCheck = () => (formData.value = { ...formData.value, isCurrentJob: !formData.value.isCurrentJob })

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
    <Input v-bind="commonProps" v-model:modelValue="formData.company">
      <template #label>
        {{ t.lang.common.form.label.company }}
      </template>
    </Input>
    <Input v-bind="commonProps" v-model:modelValue="formData.position">
      <template #label>
        {{ t.lang.common.form.label.position }}
      </template>
    </Input>
    <Select v-bind="commonProps" :defaultValue="formData.city">
      <template #label>
        {{ t.lang.common.form.label.city }}
      </template>
    </Select>
    <TextArea v-bind="commonProps" v-model:modelValue="formData.desc">
      <template #label>
        {{ t.lang.common.form.label.desc }}
      </template>
    </TextArea>
    <Paragraph :weight="600" :size="16" rootClassName="mb-5">
      {{ t.lang.profile.about.tabsContent.period }}
    </Paragraph>
    <CheckBox v-bind="commonProps" :checked="formData.isCurrentJob" @onCheck="handleCheck">
      {{ t.lang.profile.about.tabsContent.currentJob }}
    </CheckBox>
    <Space>
      <DateFilters
        :prefix="t.lang.profile.about.tabsContent.range.from"
        :currentYear="formData.startDate.year"
        :currentMonth="formData.startDate.month"
        :currentDate="formData.startDate.date"
        @onSelectYear="handleSelectYearStart"
        @onSelectMonth="handleSelectMonthStart"
        @onSelectDate="handleSelectDateStart"
      />
      <DateFilters
        v-if="!formData.isCurrentJob"
        :prefix="t.lang.profile.about.tabsContent.range.to"
        :currentYear="formData.endDate.year"
        :currentMonth="formData.endDate.month"
        :currentDate="formData.endDate.date"
        @onSelectYear="handleSelectYearEnd"
        @onSelectMonth="handleSelectMonthEnd"
        @onSelectDate="handleSelectDateEnd"
      />
    </Space>
  </ControlLayout>
</template>
