<script setup lang="ts">
import { computed, defineEmits, defineProps, withDefaults } from 'vue'
import { Avatar, Icon, Tooltip } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { EHeaderFeatureType } from '../../enum'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface HeaderProfileProps {
  responsive?: boolean
  iconSize?: number
  avatarSize?: number
}

withDefaults(defineProps<HeaderProfileProps>(), {
  iconSize: 18,
  avatarSize: 30
})

const emits = defineEmits(['onClick'])

const layout = useLayoutStore()

const t = useLangStore()

const handleClick = () => emits('onClick', EHeaderFeatureType.PROFILE)
</script>

<template>
  <Tooltip rootClassName="header-icon" @onClick="handleClick">
    <template #title>
      <Avatar :size="avatarSize" :color="layout.color">
        <Icon :iconName="iconName.USER" :size="iconSize" />
      </Avatar>
    </template>
    <template #content>{{ t.lang.common.header.features.profile.title }}</template>
  </Tooltip>
</template>
