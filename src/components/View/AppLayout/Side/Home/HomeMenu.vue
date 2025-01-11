<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import MenuItem from '../../Components/MenuItem.vue'
import ContentBody from '../../Components/ContentBody.vue'
import useMenuItems from '../../hooks/useMenuItems'

const { homeMenuItems } = useMenuItems()
</script>

<template>
  <ContentBody>
    <MenuItem :path="routePaths.PROFILE" :icon="iconName.USER"> User Name </MenuItem>
    <MenuItem v-for="item in homeMenuItems" :key="item.id" :path="item.path" :icon="String(item.iconName)">
      {{ item.name }}
    </MenuItem>
  </ContentBody>
</template>
