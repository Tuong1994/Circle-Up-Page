<script setup lang="ts">
import { Grid, Space, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const { Row, Col } = Grid

const { Paragraph } = Typography
</script>

<template>
  <Row>
    <Col>
      <Space aligns="middle">
        <Icon :iconName="iconName.THUMBS_UP" />
        <Paragraph variant="secondary">100</Paragraph>
      </Space>
    </Col>
    <Col></Col>
  </Row>
</template>
