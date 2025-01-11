<script setup lang="ts">
import { Dropdown, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import ProfileDisplay from '../Header/Features/Profile/ProfileDisplay.vue'
</script>

<template>
  <Dropdown placement="right" boxClassName="!overflow-visible">
    <template #label>
      <Icon :iconName="iconName.GEAR" />
    </template>
    <template #dropdown>
      <ProfileDisplay :hasHead="false" />
    </template>
  </Dropdown>
</template>
