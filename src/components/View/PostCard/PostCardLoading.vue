<script setup lang="ts">
import { defineProps } from 'vue'
import { Card, Space, Grid, Loading } from '@/components/UI'
import type { CardProps } from '@/components/UI/Card/Card.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Skeleton } = Loading

interface PostCardLoadingProps extends CardProps {}

const props = defineProps<PostCardLoadingProps>()

const layout = useLayoutStore()
</script>

<template>
  <Card v-bind="props">
    <template #body>
      <Space aligns="middle">
        <Skeleton type="image" :options="{ size: 40, shape: layout.shape }" />
        <Skeleton rootClassName="!mb-0" type="title" :options="{ shape: layout.shape }" />
      </Space>
      <Skeleton rootClassName="!mb-12" type="paragraph" :options="{ lines: 8 }" />
      <Row justify="between">
        <Col v-for="item in 3">
          <Skeleton type="button" :options="{ height: 20, shape: layout.shape }" />
        </Col>
      </Row>
    </template>
  </Card>
</template>
