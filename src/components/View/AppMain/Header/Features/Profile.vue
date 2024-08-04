<script setup lang="ts">
import { computed } from 'vue'
import { Grid, Icon, Space, Avatar, Card, Typography, Divider } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import Item from '../Item.vue'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const t = useLangStore()

const items = computed(() => [
  { id: 'setting', name: t.lang.common.header.features.profile.setting, icon: iconName.GEAR },
  { id: 'display', name: t.lang.common.header.features.profile.display, icon: iconName.LIGHTBULB },
  { id: 'logout', name: t.lang.common.header.features.profile.logout, icon: iconName.SIGN_OUT }
])
</script>

<template>
  <Card>
    <template #body>
      <Space aligns="middle">
        <Avatar :size="35" />
        <Paragraph>Profile</Paragraph>
      </Space>
    </template>
  </Card>
  <Divider />
  <Item v-for="item in items" :key="item.id">
    <Row justify="between" aligns="middle">
      <Col>
        <Space aligns="middle">
          <Avatar :size="30">
            <Icon :iconName="item.icon" />
          </Avatar>
          <Paragraph>{{ item.name }}</Paragraph>
        </Space>
      </Col>
      <Col>
        <Icon :size="18" :iconName="iconName.ANGLE_RIGHT" />
      </Col>
    </Row>
  </Item>
</template>
