<script setup lang="ts">
import { Divider, Typography } from '@/components/UI'
import MenuItem from '../../Components/MenuItem.vue'
import useLangStore from '@/stores/LangStore'
import useMenuItems from '../../hooks/useMenuItems'

const { Paragraph } = Typography

const t = useLangStore()

const { friendsMenuItems } = useMenuItems()
</script>

<template>
  <div class="p-3">
    <Paragraph :weight="600" :size="22">
      {{ t.lang.friends.sideMenu.friends }}
    </Paragraph>
    <Divider />
    <MenuItem v-for="item in friendsMenuItems" :key="item.id" :path="item.path" :icon="String(item.iconName)">
      {{ item.name }}
    </MenuItem>
  </div>
</template>
