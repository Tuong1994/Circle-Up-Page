<script setup lang="ts">
import { Grid } from '@/components/UI'
import HeaderFeatures from '@/components/View/Header/HeaderFeatures.vue'
import Logo from '@/components/View/Logo/Logo.vue'

const { Row, Col } = Grid
</script>

<template>
  <div class="content-header">
    <Row aligns="middle" justify="between">
      <Col>
        <Logo :size="60" />
      </Col>
      <Col>
        <HeaderFeatures />
      </Col>
    </Row>
  </div>
</template>
