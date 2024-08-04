<script setup lang="ts">
import { defineEmits } from 'vue'
import { Icon, Avatar, Tooltip } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const emits = defineEmits(['onClick'])

const handleClick = () => emits('onClick', 'notification')
</script>

<template>
  <Tooltip rootClassName="header-icon" @onClick="handleClick">
    <template #title>
      <Avatar :size="40" color="orange">
        <Icon :iconName="iconName.BELL" />
      </Avatar>
    </template>
    <template #content>Notification</template>
  </Tooltip>
</template>
