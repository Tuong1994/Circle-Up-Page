<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant'
import { EAboutTabFormType } from '../../enum'
import ContentView from './Common/ContentView.vue'

const items = [
  {
    id: 'phone',
    text: '0793229970',
    label: 'Phone',
    actionTitle: 'Add Phone',
    formType: EAboutTabFormType.PHONE,
    icon: iconName.PHONE
  },
  {
    id: 'email',
    text: 'user@example.com',
    label: 'Email',
    actionTitle: 'Add Email',
    formType: EAboutTabFormType.COMMON,
    icon: iconName.ENVELOPE
  },
  {
    id: 'gender',
    text: 'Male',
    label: 'Gender',
    actionTitle: 'Add Gender',
    formType: EAboutTabFormType.GENDER,
    icon: iconName.TRANSGENDER
  },
  {
    id: 'birthday',
    text: '1994-11-28',
    label: 'Birthday',
    actionTitle: 'Add Birthday',
    formType: EAboutTabFormType.BIRTHDAY,
    icon: iconName.BIRTHDAY_CAKE
  }
]
</script>

<template>
  <div class="tabs-detail">
    <ContentView
      v-for="item in items"
      :key="item.id"
      :icon="item.icon"
      :text="item.text"
      :label="item.label"
      :addActionTitle="item.actionTitle"
      :formType="item.formType"
    />
  </div>
</template>
