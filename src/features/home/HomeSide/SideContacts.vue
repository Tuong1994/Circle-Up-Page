<script setup lang="ts">
import { ref } from 'vue'
import { Typography, Grid, Avatar, Space, Icon } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

const open = ref<boolean>(false)

const handleOpenSearch = () => (open.value = true)

const handleCloseSearch = () => (open.value = false)
</script>

<template>
  <Row v-if="!open" justify="between" aligns="middle" rootClassName="side-head">
    <Col>
      <Paragraph :weight="600" :size="16">
        {{ t.lang.home.side.contacts.title }}
      </Paragraph>
    </Col>
    <Col>
      <Icon :size="16" :iconName="iconName.SEARCH" rootClassName="head-icon" @click="handleOpenSearch" />
    </Col>
  </Row>
  <Space v-if="open" aligns="middle" rootClassName="side-input">
    <Icon
      rootClassName="input-icon"
      :iconName="iconName.ANGLE_DOUBLE_LEFT"
      :size="16"
      @click="handleCloseSearch"
    />
    <Input
      rootClassName="input-box"
      :shape="(layout.shape as ControlShape)"
      :color="(layout.color as ControlColor)"
      :placeholder="t.lang.home.side.contacts.placeholder"
    />
  </Space>
  <div class="side-contacts">
    <ItemWrapper v-for="item in 20">
      <Space aligns="middle">
        <Avatar :size="35" />
        <Paragraph>Friend</Paragraph>
      </Space>
    </ItemWrapper>
  </div>
</template>
