<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, withDefaults } from 'vue'
import { Space, Grid, Typography } from '@/components/UI'
import { Select } from '@/components/Control'
import { getDates, getYears, monthsEn, monthsVn } from '../../data/postFilter'
import { ELang } from '@/common/enum'
import type { SelectProps } from '@/components/Control/Select/Select.vue'
import type { ControlColor, ControlShape, SelectOptions } from '@/components/Control/type'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const { Row, Col } = Grid

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

const year = ref<number>(props.currentYear)

const month = ref<number>(props.currentMonth)

const date = ref<number>(props.currentDate)

const hasSelectYear = computed<boolean>(() => year.value !== 0)

const hasSelectMonth = computed<boolean>(() => month.value !== -1)

const years = computed<number[]>(() => getYears())

const months = computed<string[]>(() => (t.locale === ELang.EN ? monthsEn : monthsVn))

const dates = computed<number[]>(() => getDates(year.value, month.value))

const yearOptions = computed<SelectOptions>(() =>
  years.value.reverse().map((year) => ({ label: String(year), value: year }))
)

const monthOptions = computed<SelectOptions>(() =>
  months.value.map((month, idx) => ({ label: month, value: idx }))
)

const dateOptions = computed<SelectOptions>(() =>
  dates.value.map((date) => ({ label: String(date), value: date }))
)

const handleSelectYear = (yearValue: number) => {
  year.value = yearValue
  emits('onSelectYear', yearValue)
}

const handleSelectMonth = (monthValue: number) => {
  month.value = monthValue
  emits('onSelectMonth', monthValue)
}

const handleSelectDate = (dateValue: number) => {
  date.value = dateValue
  emits('onSelectDate', dateValue)
}
</script>

<template>
  <Row aligns="middle" rootClassName="date-filters">
    <Col :xs="24" :md="3" :lg="3" :span="3">
      <Paragraph v-if="prefix" :weight="600">{{ prefix }}</Paragraph>
    </Col>
    <Col :xs="24" :md="6" :lg="5" :span="6">
      <Select
        v-bind="selectProps"
        :defaultValue="year"
        :options="yearOptions"
        :placeholder="t.lang.profile.post.filters.modal.year"
        @onChangeSelect="handleSelectYear"
      />
    </Col>
    <Col :xs="24" :md="6" :lg="5" :span="6">
      <Select
        v-if="hasSelectYear"
        v-bind="selectProps"
        :defaultValue="month"
        :options="monthOptions"
        :placeholder="t.lang.profile.post.filters.modal.month"
        @onChangeSelect="handleSelectMonth"
      />
    </Col>
    <Col :xs="24" :md="6" :lg="5" :span="6">
      <Select
        v-if="hasSelectMonth"
        v-bind="selectProps"
        :defaultValue="date"
        :options="dateOptions"
        :placeholder="t.lang.profile.post.filters.modal.date"
        @onChangeSelect="handleSelectDate"
      />
    </Col>
  </Row>
</template>
