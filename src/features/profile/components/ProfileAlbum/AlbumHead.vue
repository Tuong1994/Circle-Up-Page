<script setup lang="ts">
import { Grid, Typography, Space, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const { Row, Col } = Grid

const { Paragraph } = Typography
</script>

<template>
  <Row justify="between">
    <Col>
      <Paragraph :weight="600" :size="18">Album name</Paragraph>
      <Paragraph :size="13" variant="secondary">20 items</Paragraph>
    </Col>
    <Col>
      <Space>
        <Button>
          <Space aligns="middle">
            <Icon :iconName="iconName.LIST" />
            <span>Grid view</span>
          </Space>
        </Button>
        <Button>
          <Space aligns="middle">
            <Icon :iconName="iconName.LIST" />
            <span>Feed view</span>
          </Space>
        </Button>
      </Space>
    </Col>
  </Row>
</template>
