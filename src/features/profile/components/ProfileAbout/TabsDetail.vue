<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant'
import ContentView from './Common/ContentView.vue'

const items = [
  {
    id: 'phone',
    text: '0793229970',
    label: 'Phone',
    controlType: 'phone',
    actionTitle: 'Add Phone',
    icon: iconName.PHONE
  },
  {
    id: 'email',
    text: 'user@example.com',
    label: 'Email',
    controlType: 'input',
    actionTitle: 'Add Email',
    icon: iconName.ENVELOPE
  },
  {
    id: 'gender',
    text: 'Male',
    label: 'Gender',
    controlType: 'select',
    actionTitle: 'Add Gender',
    icon: iconName.TRANSGENDER
  },
  {
    id: 'birthday',
    text: '28/11/1994',
    label: 'Birthday',
    controlType: 'datepicker',
    actionTitle: 'Add Birthday',
    icon: iconName.BIRTHDAY_CAKE
  }
]
</script>

<template>
  <div class="tabs-detail">
 
  </div>
</template>
