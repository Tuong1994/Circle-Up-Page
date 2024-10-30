<script setup lang="ts">
import { Card, Grid, Space, Typography, Icon, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant';
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

const { Paragraph } = Typography

const { Row, Col } = Grid

const layout = useLayoutStore()
</script>

<template>
  <Card rootClassName="mb-5">
    <template #body>
      <Row justify="between" aligns="middle">
        <Col>
          <Paragraph :size="18" :weight="600">Posts</Paragraph>
        </Col>
        <Col>
          <Button :color="layout.color" :shape="layout.shape" ghost>
            <Space aligns="middle">
              <Icon :iconName="iconName.SLIDERS_H" />
              <span>Filter</span>
            </Space>
          </Button>
        </Col>
      </Row>
    </template>
  </Card>
</template>
