<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from 'vue'
import { Icon, Avatar, Tooltip } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { EHeaderFeatureType } from '../../enum'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface HeaderNotificationProps {
  responsive?: boolean
  iconSize?: number
  avatarSize?: number
}

withDefaults(defineProps<HeaderNotificationProps>(), {
  iconSize: 18,
  avatarSize: 30
})

const emits = defineEmits(['onClick'])

const layout = useLayoutStore()

const t = useLangStore()

const handleClick = () => emits('onClick', EHeaderFeatureType.NOTIFICATION)
</script>

<template>
  <Tooltip rootClassName="header-icon" @onClick="handleClick">
    <template #title>
      <Avatar :size="avatarSize" :color="layout.color">
        <Icon :iconName="iconName.BELL" :size="iconSize" />
      </Avatar>
    </template>
    <template #content>{{ t.lang.common.header.features.notification.title }}</template>
  </Tooltip>
</template>
