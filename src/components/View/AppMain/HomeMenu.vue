<script setup lang="ts">
import { computed } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import { Space, Avatar, Icon, Typography } from '@/components/UI'
import useLangStore from '@/stores/LangStore'
import ItemWrapper from '../ItemWrapper/ItemWrapper.vue'

const { Paragraph } = Typography

const t = useLangStore()

const items = computed(() => [
  { id: 'profile', name: 'User name', icon: iconName.USER },
  { id: 'friend', name: t.lang.common.routes.friend, icon: iconName.USER_GROUP },
  { id: 'saved', name: t.lang.common.routes.saved, icon: iconName.BOOKMARK },
  { id: 'events', name: t.lang.common.routes.events, icon: iconName.CALENDAR }
])
</script>

<template>
  <ItemWrapper v-for="item in items" :key="item.id">
    <Space aligns="middle">
      <Avatar :size="30" color="orange">
        <Icon :iconName="item.icon" />
      </Avatar>
      <Paragraph>{{ item.name }}</Paragraph>
    </Space>
  </ItemWrapper>
</template>
