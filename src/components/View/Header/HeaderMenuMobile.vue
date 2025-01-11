<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import { Drawer, Card, Icon, Grid, Space, Divider, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { DrawerProps } from '@/components/UI/Drawer/Drawer.vue'
import useMenuItems from '../AppLayout/hooks/useMenuItems'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface HeaderMenuMobileProps extends DrawerProps {}

defineProps<HeaderMenuMobileProps>()

const emits = defineEmits(['onClose'])

const { homeMenuItems } = useMenuItems()

const layout = useLayoutStore()

const handleClose = () => emits('onClose')
</script>

<template>
  <Drawer full :hasHead="false" :open="open" @onClose="handleClose">
    <template #body>
      <Row aligns="middle" justify="between">
        <Col>
          <Paragraph :size="18" :weight="600">Menu</Paragraph>
        </Col>
        <Col>
          <Icon :size="18" :iconName="iconName.X_MARK" @click="handleClose" />
        </Col>
      </Row>
      <Divider />
      <RouterLink v-for="item in homeMenuItems" :key="item.id" :to="item.path" @click="handleClose">
        <Card rootClassName="my-2">
          <template #body>
            <Space aligns="middle">
              <Icon :color="layout.color" :iconName="String(item.iconName)" />
              <Paragraph>{{ item.name }}</Paragraph>
            </Space>
          </template>
        </Card>
      </RouterLink>
    </template>
  </Drawer>
</template>
