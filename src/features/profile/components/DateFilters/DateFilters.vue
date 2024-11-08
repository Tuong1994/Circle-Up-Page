<script setup lang="ts">
import { computed, defineEmits, defineProps, withDefaults } from 'vue'
import { Space, Typography } from '@/components/UI'
import { Select } from '@/components/Control'
import { getDates, getYears, monthsEn, monthsVn } from '../../data/postFilter'
import { ELang } from '@/common/enum'
import type { SelectProps } from '@/components/Control/Select/Select.vue'
import type { ControlColor, ControlShape, SelectOptions } from '@/components/Control/type'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface DateFiltersProps {
  prefix?: string
  currentYear: number
  currentMonth: number
  currentDate: number
}

const props = withDefaults(defineProps<DateFiltersProps>(), {
  currentYear: 0,
  currentMonth: -1,
  currentDate: 0
})

const emits = defineEmits(['onSelectYear', 'onSelectMonth', 'onSelectDate'])

const t = useLangStore()

const layout = useLayoutStore()

const selectProps = computed<SelectProps>(() => ({
  hasSearch: false,
  hasClear: false,
  rootClassName: 'filters-select',
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape
}))

const hasSelectYear = computed<boolean>(() => props.currentYear !== 0)

const hasSelectMonth = computed<boolean>(() => props.currentMonth !== -1)

const years = computed<number[]>(() => getYears())

const months = computed<string[]>(() => (t.locale === ELang.EN ? monthsEn : monthsVn))

const dates = computed<number[]>(() => getDates(props.currentYear, props.currentMonth))

const yearOptions = computed<SelectOptions>(() =>
  years.value.reverse().map((year) => ({ label: String(year), value: year }))
)

const monthOptions = computed<SelectOptions>(() =>
  months.value.map((month, idx) => ({ label: month, value: idx }))
)

const dateOptions = computed<SelectOptions>(() =>
  dates.value.map((date) => ({ label: String(date), value: date }))
)

const handleSelectYear = (year: number) => emits('onSelectYear', year)

const handleSelectMonth = (month: number) => emits('onSelectMonth', month)

const handleSelectDate = (date: number) => emits('onSelectDate', date)
</script>

<template>
  <Space aligns="middle" rootClassName="date-filters">
    <Paragraph v-if="prefix">{{ prefix }}</Paragraph>
    <Select
      v-bind="selectProps"
      :options="yearOptions"
      :placeholder="t.lang.profile.post.filters.modal.year"
      @onChangeSelect="handleSelectYear"
    />
    <Select
      v-if="hasSelectYear"
      v-bind="selectProps"
      :options="monthOptions"
      :placeholder="t.lang.profile.post.filters.modal.month"
      @onChangeSelect="handleSelectMonth"
    />
    <Select
      v-if="hasSelectMonth"
      v-bind="selectProps"
      :options="dateOptions"
      :placeholder="t.lang.profile.post.filters.modal.date"
      @onChangeSelect="handleSelectDate"
    />
  </Space>
</template>
