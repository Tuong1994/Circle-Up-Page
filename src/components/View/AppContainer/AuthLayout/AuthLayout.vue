<script setup lang="ts">
import { Layout, Space, Grid, Typography } from '@/components/UI'
import { useViewPoint } from '@/hooks'
import Logo from '@/components/View/Logo/Logo.vue'
import AuthLayoutLang from './AuthLayoutLang.vue'
import AuthLayoutSetting from './AuthLayoutSetting.vue'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const { Container, Content } = Layout

const { isSmTablet } = useViewPoint()

const t = useLangStore()
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
          <Col :xs="0" :md="isSmTablet ? 0 : 10" :lg="12" :span="12">
            <Space :size="5" justify="center" aligns="middle">
              <Logo />
              <Paragraph :weight="600" :size="30" variant="warning">Circle Up</Paragraph>
            </Space>
            <Paragraph :size="20" aligns="center">
              {{ t.lang.auth.layout.content }}
            </Paragraph>
          </Col>
          <Col :xs="24" :md="isSmTablet ? 24 : 12" :lg="12" :span="10">
            <slot></slot>
          </Col>
        </Row>
      </div>
    </Content>
  </Container>
</template>
