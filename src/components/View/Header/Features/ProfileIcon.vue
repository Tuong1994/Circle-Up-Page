<script setup lang="ts">
import { defineEmits } from 'vue'
import { Avatar, Tooltip } from '@/components/UI'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

const emits = defineEmits(['onClick'])

const layout = useLayoutStore()

const t = useLangStore()

const handleClick = () => emits('onClick', 'profile')
</script>

<template>
  <Tooltip rootClassName="header-icon" @onClick="handleClick">
    <template #title>
      <Avatar :size="40" :color="layout.color" />
    </template>
    <template #content>{{ t.lang.common.header.features.profile.title }}</template>
  </Tooltip>
</template>
