<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue'
import { Button, Space, Typography } from '@/components/UI'
import { Select } from '@/components/Control'
import { ELang } from '@/common/enum'
import { monthsEn, monthsVn } from '@/components/Control/DatePicker/data'
import { getYears, getDates } from '../../data/postFilter'
import type { SelectProps } from '@/components/Control/Select/Select.vue'
import type { ControlColor, ControlShape, SelectOptions } from '@/components/Control/type'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

interface FilterModalProps {
  open?: boolean
}

defineProps<FilterModalProps>()

const emits = defineEmits(['onClose', 'onDone'])

const t = useLangStore()

const layout = useLayoutStore()

const currentYear = ref<number>(0)

const currentMonth = ref<number>(-1)

const currentDate = ref<number>(0)

const selectProps = computed<SelectProps>(() => ({
  hasSearch: false,
  hasClear: false,
  rootClassName: 'content-select',
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape
}))

const hasSelectYear = computed<boolean>(() => currentYear.value !== 0)

const hasSelectMonth = computed<boolean>(() => currentMonth.value !== -1)

const hasSelected = computed<boolean>(() => Boolean(currentYear.value && currentMonth.value))

const years = computed<number[]>(() => getYears())

const months = computed<string[]>(() => (t.locale === ELang.EN ? monthsEn : monthsVn))

const dates = computed<number[]>(() =>
  hasSelected.value ? getDates(currentYear.value, currentMonth.value) : []
)

const yearOptions = computed<SelectOptions>(() =>
  years.value.reverse().map((year) => ({ label: String(year), value: year }))
)

const monthOptions = computed<SelectOptions>(() =>
  months.value.map((month, idx) => ({ label: month, value: idx }))
)

const dateOptions = computed<SelectOptions>(() =>
  dates.value.map((date) => ({ label: String(date), value: date }))
)

const handleSelectYear = (year: number) => (currentYear.value = year)

const handleSelectMonth = (month: number) => (currentMonth.value = month)

const handleSelectDate = (date: number) => (currentDate.value = date)

const handleReset = () => {
  currentYear.value = 0
  currentMonth.value = -1
  currentDate.value = 0
}

const handleDone = () => {
  handleReset()
  emits('onDone')
}

const handleClose = () => {
  handleReset()
  emits('onClose')
}
</script>

<template>
  <ModalLayout rootClassName="filter-modal" :open="open" @onClose="handleClose">
    <ModalLayoutHead :title="t.lang.profile.post.filters.modal.title" @onClose="handleClose" />
    <ModalLayoutBody rootClassName="modal-content">
      <Space aligns="middle">
        <Paragraph>{{ t.lang.profile.post.filters.modal.range }}:</Paragraph>
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
    </ModalLayoutBody>
    <ModalLayoutFoot>
      <Space justify="end" aligns="middle">
        <Button :color="layout.color" :shape="layout.shape" ghost @click="handleClose">
          {{ t.lang.profile.actions.clear }}
        </Button>
        <Button rootClassName="w-36" :color="layout.color" :shape="layout.shape" @click="handleDone">
          {{ t.lang.profile.actions.done }}
        </Button>
      </Space>
    </ModalLayoutFoot>
  </ModalLayout>
</template>
