<script setup lang="ts">
import { Card, Image, Button, Grid, Typography } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const { Row, Col } = Grid

const t = useLangStore()
</script>

<template>
  <Card rootClassName="profile-photos">
    <template #head>
      <Row justify="between" aligns="middle">
        <Col>
          <Paragraph :size="18" :weight="600">
            {{ t.lang.profile.post.photos.title }}
          </Paragraph>
        </Col>
        <Col>
          <Button text>
            {{ t.lang.profile.post.photos.action }}
          </Button>
        </Col>
      </Row>
    </template>
    <template #body>
      <div class="photos-grid">
        <Image v-for="item in 9" rootClassName="grid-image" imgHeight="100%" />
      </div>
    </template>
  </Card>
</template>
