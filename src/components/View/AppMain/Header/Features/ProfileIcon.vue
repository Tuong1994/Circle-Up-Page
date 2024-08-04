<script setup lang="ts">
import { defineEmits } from 'vue'
import { Avatar, Tooltip } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const emits = defineEmits(['onClick'])

const t = useLangStore()

const handleClick = () => emits('onClick', 'profile')
</script>

<template>
  <Tooltip rootClassName="header-icon" @onClick="handleClick">
    <template #title>
      <Avatar :size="40" color="orange" />
    </template>
    <template #content>{{ t.lang.common.header.features.profile.title }}</template>
  </Tooltip>
</template>
