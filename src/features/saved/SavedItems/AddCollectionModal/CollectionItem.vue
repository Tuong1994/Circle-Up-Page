<script setup lang="ts">
import { Grid, Typography, Image } from '@/components/UI'
import AudiencesButton from '@/components/View/Audiences/AudiencesButton.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <Row rootClassName="my-3">
    <Col :xs="6" :md="6" :lg="6" :span="6">
      <Image rootClassName="image-full-size" />
    </Col>
    <Col :xs="18" :md="18" :lg="18" :span="18">
      <Paragraph>Collection name</Paragraph>
      <AudiencesButton sizes="sm" :shape="layout.shape" />
    </Col>
  </Row>
</template>
