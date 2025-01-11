<script setup lang="ts">
import { Layout, Space, Grid, Typography } from '@/components/UI'
import Logo from '@/components/View/Logo/Logo.vue'
import AuthLayoutLang from './AuthLayoutLang.vue'
import AuthLayoutSetting from './AuthLayoutSetting.vue'

const { Row, Col } = Grid

const { Paragraph } = Typography

const { Container, Content } = Layout
</script>

<template>
  <Container theme="dark">
    <Content class="auth-layout-content">
      <Row justify="end" rootClassName="content-header">
        <Col>
          <Space>
            <AuthLayoutLang />
            <AuthLayoutSetting />
          </Space>
        </Col>
      </Row>
      <div class="content-inner">
        <Row justify="between" aligns="middle" rootClassName="inner-wrap">
          <Col :span="12">
            <Space :size="5" aligns="middle">
              <Logo />
              <Paragraph :weight="600" :size="25">Circle Up</Paragraph>
            </Space>
            <Paragraph :size="20">
              Circle Up helps you connect and share with the people in your life.
            </Paragraph>
          </Col>
          <Col :span="10">
            <slot></slot>
          </Col>
        </Row>
      </div>
    </Content>
  </Container>
</template>
