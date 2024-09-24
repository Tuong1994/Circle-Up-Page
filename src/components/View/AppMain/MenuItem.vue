<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { Space, Avatar, Icon, Typography } from '@/components/UI'
import ItemWrapper from '../ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface MenuItemProps {
  path: string
  icon: string
}

defineProps<MenuItemProps>()

const layout = useLayoutStore()
</script>

<template>
  <RouterLink :to="path">
    <ItemWrapper>
      <Space aligns="middle">
        <Avatar :size="30" :color="layout.color">
          <Icon :iconName="icon" />
        </Avatar>
        <Paragraph>
          <slot></slot>
        </Paragraph>
      </Space>
    </ItemWrapper>
  </RouterLink>
</template>
