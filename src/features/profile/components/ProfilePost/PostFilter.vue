<script setup lang="ts">
import { Card, Grid, Typography, Button } from '@/components/UI'

const { Paragraph } = Typography

const { Row, Col } = Grid
</script>

<template>
  <Card rootClassName="mb-5">
    <template #body>
      <Row justify="between" aligns="middle">
        <Col>
          <Paragraph :size="18" :weight="600">Posts</Paragraph>
        </Col>
        <Col>
          <Button>Filter</Button>
        </Col>
      </Row>
    </template>
  </Card>
</template>
