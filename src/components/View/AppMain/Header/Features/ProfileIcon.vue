<script setup lang="ts">
import { defineEmits } from 'vue'
import { Avatar, Tooltip } from '@/components/UI'

const emits = defineEmits(['onClick'])

const handleClick = () => emits('onClick', 'profile')
</script>

<template>
  <Tooltip rootClassName="header-icon" @onClick="handleClick">
    <template #title>
      <Avatar :size="40" color="orange" />
    </template>
    <template #content>Profile</template>
  </Tooltip>
</template>
