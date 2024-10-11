<script setup lang="ts">
import { Grid, Typography, Space, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <div class="content-info">
    <Row aligns="middle" justify="between">
      <Col>
        <Paragraph :size="25" :weight="600">User name</Paragraph>
      </Col>
      <Col>
        <Space aligns="middle">
          <Button :color="layout.color">
            <Space aligns="middle">
              <Icon :iconName="iconName.PLUS" />
              <Paragraph>Add to story</Paragraph>
            </Space>
          </Button>
          <Button>
            <Space aligns="middle">
              <Icon :iconName="iconName.PENCIL_ALT" />
              <Paragraph>Edit profile</Paragraph>
            </Space>
          </Button>
          <Button>
            <Icon :iconName="iconName.ANGLE_DOWN" />
          </Button>
        </Space>
      </Col>
    </Row>
  </div>
</template>
