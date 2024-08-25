<script setup lang="ts">
import { Grid, Space, Avatar, Dropdown, Icon, Typography, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import HoverInfo from '@/components/View/HoverInfo/HoverInfo.vue'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const t = useLangStore()

const iconSize = 18
</script>

<template>
  <Row justify="between">
    <Col>
      <Space aligns="middle">
        <HoverInfo>
          <template #label>
            <Avatar :size="40" />
          </template>
        </HoverInfo>
        <div>
          <Space aligns="middle">
            <HoverInfo>
              <template #label>
                <Paragraph>User name</Paragraph>
              </template>
            </HoverInfo>
            <Button text>{{ t.lang.home.post.follow }}</Button>
          </Space>
          <Paragraph :size="11" variant="secondary">a day ago</Paragraph>
        </div>
      </Space>
    </Col>
    <Col>
      <Space size="md" aligns="middle">
        <Dropdown placement="right">
          <template #label>
            <Icon :size="iconSize" :iconName="iconName.ELLIPSIS_H" />
          </template>
          <template #dropdown> Setting </template>
        </Dropdown>
        <Icon :size="iconSize" :iconName="iconName.X_MARK" />
      </Space>
    </Col>
  </Row>
</template>
