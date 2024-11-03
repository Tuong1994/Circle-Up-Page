<script setup lang="ts">
import { Input } from '@/components/Control'
import { Divider, Grid, Space, Button } from '@/components/UI'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const layout = useLayoutStore()
</script>

<template>
  <Input :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)" />
  <Divider />
  <Row justify="between">
    <Col>
      <Button :color="layout.color" :shape="layout.shape">Public</Button>
    </Col>
    <Col>
      <Space>
        <Button :color="layout.color" :shape="layout.shape" ghost>Cancel</Button>
        <Button :color="layout.color" :shape="layout.shape">Save</Button>
      </Space>
    </Col>
  </Row>
</template>
