<script setup lang="ts">
import { computed } from 'vue'
import { Grid, Icon, Space, Tooltip } from '@/components/UI'
import { RouterLink, useRouter } from 'vue-router'
import { iconName } from '@/components/UI/Icon/constant'
import { routeNames, routePaths } from '@/router'
import type { RouterItems } from '@/router/type'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

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
  if (name === routeNames.HOME) return currentRoute.value.name === name ? activeClass : ''
  return currentRoute.value.fullPath.includes(name) ? activeClass : ''
}
</script>

<template>
  <nav>
    <Row>
      <Col v-for="menu in menus" :key="menu.id" :lg="12" :span="12">
        <RouterLink :to="menu.path">
          <Tooltip
            :rootClassName="`navbar-item ${getActiveClass(menu.id)}`"
            titleClassName="item-title"
          >
            <template #title>
              <Space justify="center">
                <Icon :iconName="(menu.iconName as string)" :size="18" />
              </Space>
            </template>
            <template #content>{{ menu.name }}</template>
          </Tooltip>
        </RouterLink>
      </Col>
    </Row>
  </nav>
</template>
