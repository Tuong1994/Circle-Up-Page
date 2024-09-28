<script setup lang="ts">
import { Typography, Grid, Space, Avatar, Button } from '@/components/UI'
import ContentHead from '../Components/ContentHead.vue'
import ContentBody from '../Components/ContentBody.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const { Row, Col } = Grid

const layout = useLayoutStore()
</script>

<template>
  <ContentHead> Suggestions </ContentHead>
  <ContentBody>
    <Paragraph :weight="600" :size="16" rootClassName="py-5">People you may know</Paragraph>
    <Row v-for="item in 100" rootClassName="py-5">
      <Col :span="5">
        <Avatar :size="50" />
      </Col>
      <Col :span="19">
        <Paragraph :weight="600">People</Paragraph>
        <Row>
          <Col :span="12">
            <Button :color="layout.color" rootClassName="w-full">Add friend</Button>
          </Col>
          <Col :span="12">
            <Button rootClassName="w-full">Remove</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </ContentBody>
</template>
