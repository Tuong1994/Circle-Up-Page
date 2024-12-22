<script setup lang="ts">
import { Grid, Typography, Space, Image, Badge, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <Row rootClassName="my-3">
    <Col :xs="6" :md="6" :lg="6" :span="6">
      <Image rootClassName="image-full-size" />
    </Col>
    <Col :xs="18" :md="18" :lg="18" :span="18">
      <Paragraph>Collection name</Paragraph>
      <Badge ghost :color="layout.color">
        <Space aligns="middle">
          <Icon :iconName="iconName.GLOBE" />
          <span>Public</span>
        </Space>
      </Badge>
    </Col>
  </Row>
</template>
