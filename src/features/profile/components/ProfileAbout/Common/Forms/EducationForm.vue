<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, ref, computed } from 'vue'
import { Input, TextArea, CheckBox } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import type { ClickBoxColor, ControlColor, ControlShape } from '@/components/Control/type'
import type { ProfileEducation } from '@/features/profile/type'
import ControlLayout from './ControlLayout.vue'
import DateFilters from '../../../DateFilters/DateFilters.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

export interface EducationFormProps {
  profileEducation?: ProfileEducation
}

const props = withDefaults(defineProps<EducationFormProps>(), {
  profileEducation: () => ({
    id: '',
    school: '',
    desc: '',
    isGraduated: false,
    startDate: { year: new Date().getFullYear(), month: new Date().getMonth(), date: new Date().getDate() },
    endDate: { year: new Date().getFullYear(), month: new Date().getMonth(), date: new Date().getDate() }
  })
})

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const t = useLangStore()

const formData = ref<ProfileEducation>(props.profileEducation)

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

const handleCheck = () => (formData.value = { ...formData.value, isGraduated: !formData.value.isGraduated })

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
    <Input v-bind="commonProps" v-model:modelValue="formData.school">
      <template #label>
        {{ t.lang.common.form.label.school }}
      </template>
    </Input>
    <Paragraph :weight="600" :size="16" rootClassName="mb-5">
      {{ t.lang.profile.about.tabsContent.period }}
    </Paragraph>
    <Space rootClassName="mb-5">
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
        :prefix="t.lang.profile.about.tabsContent.range.to"
        :currentYear="formData.endDate.year"
        :currentMonth="formData.endDate.month"
        :currentDate="formData.endDate.date"
        @onSelectYear="handleSelectYearEnd"
        @onSelectMonth="handleSelectMonthEnd"
        @onSelectDate="handleSelectDateEnd"
      />
    </Space>
    <CheckBox
      rootClassName="mb-5"
      :color="(layout.color as ClickBoxColor)"
      :shape="(layout.shape as ControlShape)"
      :checked="formData.isGraduated"
      @onCheck="handleCheck"
    >
      {{ t.lang.profile.about.tabsContent.graduated }}
    </CheckBox>
    <TextArea v-bind="commonProps" v-model:modelValue="formData.desc">
      <template #label>
        {{ t.lang.common.form.label.desc }}
      </template>
    </TextArea>
  </ControlLayout>
</template>
