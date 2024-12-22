<script setup lang="ts">
import { defineEmits } from 'vue'
import {
  Card,
  Image,
  Typography,
  Grid,
  Space,
  Avatar,
  Button,
  Icon,
  Divider,
  Dropdown
} from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const { Row, Col } = Grid

const emits = defineEmits(['onAdd', 'onRemove'])

const layout = useLayoutStore()

const handleAdd = () => emits('onAdd')

const handleRemove = () => emits('onRemove')
</script>

<template>
  <Card hoverable>
    <template #body>
      <Row justify="between">
        <Col :span="8">
          <Image imgWidth="100%" imgHeight="100%" rootClassName="image-full-size" />
        </Col>
        <Col :span="16">
          <Paragraph :size="16" :weight="600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </Paragraph>
          <Space :size="5" aligns="middle">
            <Paragraph :size="12" variant="secondary">Post</Paragraph>
            <Paragraph :size="16" :weight="600" variant="secondary">-</Paragraph>
            <Paragraph :size="12" variant="secondary">Saved to</Paragraph>
            <Paragraph :size="12">Collection name</Paragraph>
          </Space>
          <Space :size="5" aligns="middle">
            <Avatar :size="20" :color="layout.color" />
            <Paragraph :size="12" variant="secondary">Saved from</Paragraph>
            <Paragraph :size="12">Item Author</Paragraph>
          </Space>
          <Divider />
          <Space aligns="middle">
            <Button :color="layout.color" :shape="layout.shape" @click="handleAdd">Add to collection</Button>
            <Dropdown>
              <template #label>
                <Button :color="layout.color" :shape="layout.shape" ghost>
                  <Icon :iconName="iconName.ELLIPSIS_H" />
                </Button>
              </template>
              <template #dropdown>
                <ItemWrapper>
                  <Space aligns="middle" @click="handleRemove">
                    <Icon :iconName="iconName.TRASH" />
                    <Paragraph>Unsaved</Paragraph>
                  </Space>
                </ItemWrapper>
              </template>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </template>
  </Card>
</template>
