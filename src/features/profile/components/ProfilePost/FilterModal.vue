<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { Button, Space } from '@/components/UI'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import DateFilters from '../DateFilters/DateFilters.vue'

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
      <DateFilters
        :prefix="t.lang.profile.post.filters.modal.range"
        :currentYear="currentYear"
        :currentMonth="currentMonth"
        :currentDate="currentDate"
        @onSelectYear="handleSelectYear"
        @onSelectMonth="handleSelectMonth"
        @onSelectDate="handleSelectDate"
      />
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
