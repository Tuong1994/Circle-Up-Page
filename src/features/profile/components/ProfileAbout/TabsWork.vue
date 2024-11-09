<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant'
import { EAboutTabFormType } from '../../enum'
import ContentView from './Common/ContentView.vue'

const items = [
  {
    id: '1',
    company: 'CNV Loyalty',
    position: 'Frontend Developer',
    city: 'Ho Chi Minh City',
    desc: 'Maintain, fix bug',
    startDate: {
      year: 2024,
      month: 1,
      date: 1
    },
    endDate: {
      year: 2024,
      month: 11,
      date: 1
    },
    isCurrentJob: true
  }
]

const getText = (item: any) => `${item.position} at ${item.company}`

const getSubText = (item: any) =>
  `From ${item.startDate.year}/${item.startDate.month}/${item.startDate.date} to ${item.endDate.year}/${item.endDate.month}/${item.endDate.date} `
</script>

<template>
  <div class="tabs-work">
    <ContentView
      v-for="item in items"
      :key="item.id"
      :text="getText(item)"
      :subText="getSubText(item)"
      :label="item.desc"
      :icon="iconName.BRIEFCASE"
      :formType="EAboutTabFormType.WORK"
      addActionTitle="Add Work"
    />
    <ContentView v-if="items.length > 0" addActionTitle="Add More Work" :formType="EAboutTabFormType.WORK" />
  </div>
</template>
