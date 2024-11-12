<script setup lang="ts">
import { computed } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import { EAboutTabFormType } from '../../enum'
import { Divider } from '@/components/UI'
import type { ProfileWork } from '../../type'
import ContentView from './Common/ContentView.vue'
import ContentEmpty from './Common/ContentEmpty.vue'
import useAuthStore from '@/stores/AuthStore'
import useLangStore from '@/stores/LangStore'
import moment from 'moment'
import utils from '@/utils'

const auth = useAuthStore()

const t = useLangStore()

const items: ProfileWork[] = [
  {
    id: '1',
    company: 'CNV Loyalty',
    position: 'Frontend Developer',
    city: 'Ho Chi Minh City',
    desc: 'Maintain, fix bug',
    startDate: {
      year: 2024,
      month: 0,
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

const isEmpty = computed<boolean>(() => Boolean(!auth.isAuth && !items.length))

const getText = (item: ProfileWork) =>
  `${item.position} ${t.lang.profile.about.tabsContent.at} ${item.company}`

const getSubText = (item: ProfileWork) => {
  const from = t.lang.profile.about.tabsContent.range.from
  const to = t.lang.profile.about.tabsContent.range.to
  const present = t.lang.profile.about.tabsContent.range.present
  const { startDate: start, endDate: end, isCurrentJob } = item
  const { startDate, endDate } = utils.getDateFilter(start, end)
  return `${from} ${moment(startDate).format('DD/MM/YYYY')} ${to} ${
    !isCurrentJob ? moment(endDate).format('DD/MM/YYYY') : present
  }`
}
</script>

<template>
  <div class="tabs-work">
    <ContentEmpty
      v-if="isEmpty"
      :icon="iconName.BRIEFCASE"
      :message="t.lang.profile.about.tabsContent.empty.work"
    />
    <template v-if="!isEmpty">
      <template v-for="item in items" :key="item.id">
        <ContentView
          :text="getText(item)"
          :subText="getSubText(item)"
          :label="item.desc"
          :icon="iconName.BRIEFCASE"
          :formType="EAboutTabFormType.WORK"
          :workFormProps="{ profileWork: item }"
          :addActionTitle="t.lang.profile.actions.addWork"
        />
        <Divider v-if="items.length > 0" />
      </template>
      <ContentView
        v-if="items.length > 0"
        :formType="EAboutTabFormType.WORK"
        :addActionTitle="t.lang.profile.actions.addMoreWork"
      />
    </template>
  </div>
</template>
