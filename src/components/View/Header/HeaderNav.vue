<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import { Grid, Icon, Space, Tooltip } from '@/components/UI'
import { RouterLink, useRouter } from 'vue-router'
import { iconName } from '@/components/UI/Icon/constant'
import { routeNames, routePaths } from '@/router'
import type { RouterItems } from '@/router/type'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

interface HeaderNavbarProps {
  responsive?: boolean
  iconSize?: number
}

withDefaults(defineProps<HeaderNavbarProps>(), {
  iconSize: 18
})

const { currentRoute } = useRouter()

const t = useLangStore()

const menus = computed<RouterItems>(() => [
  { id: routeNames.HOME, name: t.lang.common.routes.home, path: routePaths.HOME, iconName: iconName.HOUSE },
  {
    id: routeNames.FRIENDS,
    name: t.lang.common.routes.friends,
    path: routePaths.FRIENDS,
    iconName: iconName.USER
  }
])

const getActiveClass = (name: string) => {
  const activeClass = 'navbar-item-active'
  const fullPath = currentRoute.value.fullPath
  const pathName = currentRoute.value.name
  if (name === routeNames.HOME) return currentRoute.value.name === name ? activeClass : ''
  if (pathName === routeNames.PROFILE_FRIENDS) return
  return fullPath.includes(name) ? activeClass : ''
}
</script>

<template>
  <nav class="header-navbar">
    <Row justify="between">
      <Col v-for="menu in menus" :key="menu.id" :xs="12" :md="12" :lg="12" :span="12">
        <RouterLink :to="menu.path">
          <Tooltip :rootClassName="`navbar-item ${getActiveClass(menu.id)}`" titleClassName="item-title">
            <template #title>
              <Space justify="center">
                <Icon :iconName="(menu.iconName as string)" :size="iconSize" />
              </Space>
            </template>
            <template #content>{{ menu.name }}</template>
          </Tooltip>
        </RouterLink>
      </Col>
    </Row>
  </nav>
</template>
