<script setup lang="ts">
import { computed } from 'vue'
import { Grid, Icon, Space, Tooltip } from '@/components/UI'
import { RouterLink, useRouter } from 'vue-router'
import { iconName } from '@/components/UI/Icon/constant'
import type { NavbarMenuItems } from './type'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { currentRoute } = useRouter()

const t = useLangStore()

const menus = computed<NavbarMenuItems>(() => [
  { id: 'home', name: t.lang.common.routes.home, path: '/', iconName: iconName.HOUSE },
  { id: 'friend', name: t.lang.common.routes.friend, path: '/user', iconName: iconName.USER }
])
</script>

<template>
  <nav>
    <Row>
      <Col v-for="menu in menus" :key="menu.id" :span="12">
        <RouterLink :to="menu.path">
          <Tooltip
            :rootClassName="`navbar-item ${menu.path === currentRoute.fullPath ? 'navbar-item-active' : ''}`"
            titleClassName="item-title"
          >
            <template #title>
              <Space justify="center">
                <Icon :iconName="menu.iconName" :size="18" />
              </Space>
            </template>
            <template #content>{{ menu.name }}</template>
          </Tooltip>
        </RouterLink>
      </Col>
    </Row>
  </nav>
</template>
