<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routePaths } from '@/router'
import { Card, Image, Grid, Typography } from '@/components/UI'
import AudiencesButton from '@/components/View/Audiences/AudiencesButton.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import defaultImage from '/default.jpg'

const { Row, Col } = Grid

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <RouterLink :to="routePaths.SAVED_COLLECTION_DETAIL">
    <Card hoverable>
      <template #body>
        <Row>
          <Col :xs="24" :md="6" :lg="6" :span="6">
            <Image rootClassName="image-full-size" :src="defaultImage" />
          </Col>
          <Col :xs="24" :md="18" :lg="18" :span="18">
            <Paragraph>Collection name</Paragraph>
            <AudiencesButton sizes="sm" :shape="layout.shape" />
          </Col>
        </Row>
      </template>
    </Card>
  </RouterLink>
</template>
