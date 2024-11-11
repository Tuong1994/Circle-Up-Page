<script setup lang="ts">
import { computed } from 'vue'
import { Divider } from '@/components/UI'
import { EAboutTabFormType } from '../../enum'
import { iconName } from '@/components/UI/Icon/constant'
import type { ProfileEducation } from '../../type'
import ContentView from './Common/ContentView.vue'
import ContentEmpty from './Common/ContentEmpty.vue'
import useAuthStore from '@/stores/AuthStore'
import utils from '@/utils'
import moment from 'moment'

const auth = useAuthStore()

const items: ProfileEducation[] = [
  {
    id: '1',
    school: 'Food Industry University',
    desc: 'Restuarant Management Major',
    isGraduated: true,
    startDate: {
      year: 2012,
      month: 10,
      date: 1
    },
    endDate: {
      year: 2015,
      month: 10,
      date: 1
    }
  },
  {
    id: '2',
    school: 'Cybersoft Academy',
    desc: 'Fullstack Developer',
    isGraduated: true,
    startDate: {
      year: 2020,
      month: 5,
      date: 1
    },
    endDate: {
      year: 2021,
      month: 8,
      date: 1
    }
  }
]

const isEmpty = computed<boolean>(() => Boolean(!auth.isAuth && !items.length))

const getSubText = (item: ProfileEducation) => {
  const { startDate: start, endDate: end, isGraduated } = item
  const { startDate, endDate } = utils.getDateFilter(start, end)
  return `From ${moment(startDate).format('DD/MM/YYYY')} to ${
    isGraduated ? moment(endDate).format('DD/MM/YYYY') : 'Present'
  }`
}
</script>

<template>
  <div class="tabs-education">
    <ContentEmpty v-if="isEmpty" />
    <template v-if="!isEmpty">
      <template v-for="item in items" :key="item.id">
        <ContentView
          :text="item.school"
          :subText="getSubText(item)"
          :label="item.desc"
          :formType="EAboutTabFormType.EDUCATION"
          :icon="iconName.GRADUATION_CAP"
          :educationFormProps="{ profileEducation: item }"
          addActionTitle="Add Education"
        />
        <Divider v-if="items.length > 0" />
      </template>
      <ContentView
        v-if="items.length > 0"
        :formType="EAboutTabFormType.EDUCATION"
        addActionTitle="Add More Education"
      />
    </template>
  </div>
</template>
