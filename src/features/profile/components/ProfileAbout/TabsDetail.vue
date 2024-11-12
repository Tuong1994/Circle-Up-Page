<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant'
import { EAboutTabFormType } from '../../enum'
import ContentView from './Common/ContentView.vue'
import ContentEmpty from './Common/ContentEmpty.vue'
import useAuthStore from '@/stores/AuthStore'
import useLangStore from '@/stores/LangStore'

const auth = useAuthStore()

const t = useLangStore()

const items = [
  {
    id: 'phone',
    text: '0793229970',
    label: t.lang.common.form.label.phone,
    actionTitle: t.lang.profile.actions.addPhone,
    formType: EAboutTabFormType.PHONE,
    icon: iconName.PHONE
  },
  {
    id: 'email',
    text: 'user@example.com',
    label: t.lang.common.form.label.email,
    actionTitle: t.lang.profile.actions.addEmail,
    formType: EAboutTabFormType.COMMON,
    icon: iconName.ENVELOPE
  },
  {
    id: 'gender',
    text: 'Male',
    label: t.lang.common.form.label.gender,
    actionTitle: t.lang.profile.actions.addGender,
    formType: EAboutTabFormType.GENDER,
    icon: iconName.TRANSGENDER
  },
  {
    id: 'birthday',
    text: '1994-11-28',
    label: t.lang.common.form.label.birthday,
    actionTitle: t.lang.profile.actions.addBirthday,
    formType: EAboutTabFormType.BIRTHDAY,
    icon: iconName.BIRTHDAY_CAKE
  }
]

const isEmpty = (item: any) => !auth.isAuth && !item.text

const getEmptyText = (item: any) => {
  let label = ''
  if (item.formType === EAboutTabFormType.COMMON) label = t.lang.profile.about.tabsContent.empty.email
  if (item.formType === EAboutTabFormType.PHONE) label = t.lang.profile.about.tabsContent.empty.phone
  if (item.formType === EAboutTabFormType.GENDER) label = t.lang.profile.about.tabsContent.empty.gender
  if (item.formType === EAboutTabFormType.BIRTHDAY) label = t.lang.profile.about.tabsContent.empty.birthday
  return label
}
</script>

<template>
  <div class="tabs-detail">
    <template v-for="item in items" :key="item.id">
      <ContentEmpty v-if="isEmpty(item)" :message="getEmptyText(item)" :icon="item.icon" />
      <ContentView
        v-else
        :icon="item.icon"
        :text="item.text"
        :label="item.label"
        :formType="item.formType"
        :addActionTitle="item.actionTitle"
      />
    </template>
  </div>
</template>
