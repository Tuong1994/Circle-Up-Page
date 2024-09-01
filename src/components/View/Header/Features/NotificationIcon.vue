<script setup lang="ts">
import { defineEmits } from 'vue'
import { Icon, Avatar, Tooltip } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

const emits = defineEmits(['onClick'])

const layout = useLayoutStore()

const t = useLangStore()

const handleClick = () => emits('onClick', 'notification')
</script>

<template>
  <Tooltip rootClassName="header-icon" @onClick="handleClick">
    <template #title>
      <Avatar :size="40" :color="layout.color">
        <Icon :iconName="iconName.BELL" />
      </Avatar>
    </template>
    <template #content>{{ t.lang.common.header.features.notification.title }}</template>
  </Tooltip>
</template>
