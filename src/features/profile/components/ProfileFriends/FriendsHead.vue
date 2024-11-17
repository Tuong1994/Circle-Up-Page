<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Grid, Typography, Space, Button, Dropdown, Icon } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import PolicyModal from './PolicyModal/PolicyModal.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

const openModal = ref<boolean>(false)

const handleOpenModal = () => (openModal.value = !openModal.value)
</script>

<template>
  <Row rootClassName="mb-5" justify="between" aligns="middle">
    <Col :xs="24">
      <Paragraph :size="18" :weight="600">
        {{ t.lang.common.routes.profileFriends }}
      </Paragraph>
    </Col>
    <Col :xs="24">
      <Space aligns="middle">
        <Input :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)">
          <template #addonBefore>
            <Icon :iconName="iconName.SEARCH" />
          </template>
        </Input>
        <RouterLink :to="routePaths.FRIENDS">
          <Button :color="layout.color" :shape="layout.shape">Find friends</Button>
        </RouterLink>
        <Dropdown placement="right">
          <template #label>
            <Button :color="layout.color" :shape="layout.shape" ghost>
              <Icon :iconName="iconName.ELLIPSIS_H" />
            </Button>
          </template>
          <template #dropdown>
            <ItemWrapper rootClassName="m-1" @click="handleOpenModal"> Edit policy </ItemWrapper>
          </template>
        </Dropdown>
      </Space>
    </Col>
  </Row>
  <PolicyModal :open="openModal" @onClose="handleOpenModal" />
</template>
