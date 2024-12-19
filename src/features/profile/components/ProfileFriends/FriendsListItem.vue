<script setup lang="ts">
import { defineProps } from 'vue'
import { routePaths } from '@/router'
import { RouterLink } from 'vue-router'
import { Grid, Typography, Space, Image, Button } from '@/components/UI'
import HoverInfo from '@/components/View/HoverInfo/HoverInfo.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import defaultImg from '/default.jpg'

const { Row, Col } = Grid

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()
</script>

<template>
  <Row rootClassName="my-2" aligns="middle" justify="between">
    <Col>
      <Space aligns="middle">
        <HoverInfo>
          <Image :src="defaultImg" :imgWidth="100" :imgHeight="100" />
        </HoverInfo>
        <div>
          <HoverInfo>
            <RouterLink :to="routePaths.PROFILE">
              <Paragraph :weight="600">User name</Paragraph>
            </RouterLink>
          </HoverInfo>
          <Paragraph variant="secondary" :lineHeight="18">Sub content</Paragraph>
        </div>
      </Space>
    </Col>
    <Col>
      <Button :color="layout.color" :shape="layout.shape">
        {{ t.lang.profile.actions.addFriend }}
      </Button>
    </Col>
  </Row>
</template>
