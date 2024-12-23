<script setup lang="ts">
import { Card, Image, Section, Grid, Typography } from '@/components/UI'
import defaultImage from '/default.jpg'

const { Row, Col } = Grid

const { Paragraph } = Typography
</script>

<template>
  <Section rootClassName="collection-detail">
    <Card rootClassName="detail-banner">
      <template #body>
        <Image
          :src="defaultImage"
          rootClassName="image-full-size"
          imgWidth="100%"
          imgHeight="100%"
          objectFit="cover"
        />
      </template>
    </Card>
    <Card rootClassName="detail-head">
      <template #body> </template>
    </Card>
  </Section>
</template>
