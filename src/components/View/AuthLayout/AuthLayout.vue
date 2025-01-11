<script setup lang="ts">
import { Layout, Space, Grid } from '@/components/UI'
import AuthLayoutLang from "./AuthLayoutLang.vue"

const { Row, Col } = Grid;

const { Container, Content } = Layout
</script>

<template>
  <Container theme="dark">
    <Content>
      <Row>
        <Col>
          <Space>
            <AuthLayoutLang />
          </Space>
        </Col>
      </Row>
    </Content>
  </Container>
</template>
