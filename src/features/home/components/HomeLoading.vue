<script setup lang="ts">
import { Card, Space, Grid, Loading } from '@/components/UI'

const { Row, Col } = Grid

const { Skeleton } = Loading
</script>

<template>
  <Card v-for="item in 2" rootClassName="mb-5">
    <template #body>
      <Space aligns="middle">
        <Skeleton type="image" :options="{ size: 40, shape: 'round' }" />
        <Skeleton rootClassName="!mb-0" type="title" :options="{ shape: 'round' }" />
      </Space>
      <Skeleton rootClassName="!mb-12" type="paragraph" :options="{ lines: 8 }" />
      <Row justify="between">
        <Col v-for="item in 3">
          <Skeleton type="button" :options="{ height: 20, shape: 'round' }" />
        </Col>
      </Row>
    </template>
  </Card>
</template>
