<script setup lang="ts">
import { Grid, Icon, Space, Avatar, Card, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import Item from '../Item.vue'

const { Row, Col } = Grid

const { Paragraph } = Typography
</script>

<template>
  <Card>
    <template #body>
      <Space>
        <Avatar />
        <Paragraph>Profile</Paragraph>
      </Space>
    </template>
  </Card>
  <Item v-for="item in 4">
    <Row justify="between" aligns="middle">
      <Col>
        <Space aligns="middle">
          <Avatar :size="30">
            <Icon :iconName="iconName.LIST" />
          </Avatar>
          <span>Item 1</span>
        </Space>
      </Col>
      <Col>
        <Icon :size="18" :iconName="iconName.ANGLE_RIGHT" />
      </Col>
    </Row>
  </Item>
</template>
