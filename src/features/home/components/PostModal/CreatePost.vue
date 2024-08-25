<script setup lang="ts">
import { defineEmits } from 'vue'
import { Space, Avatar, Typography, Grid, Card, Tooltip, Button, Icon } from '@/components/UI'
import { TextArea, Upload } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import ModalHead from './ModalHead.vue'

const { Row, Col } = Grid

const { Paragraph } = Typography

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload

const emits = defineEmits(['onBack', 'onClose', 'onChooseAudience'])

const actions = [
  { id: 'photo', name: 'Photo', icon: iconName.IMAGE, iconColor: 'green' },
  { id: 'tag', name: 'Tag people', icon: iconName.TAG, iconColor: 'blue' },
  { id: 'feeling', name: 'Feeling', icon: iconName.LAUGH, iconColor: 'yellow' },
  { id: 'checkin', name: 'Check in', icon: iconName.MAP_MARKER_ALT, iconColor: 'pink' }
]

const handleBack = () => emits('onBack')

const handleClose = () => emits('onClose')

const handleChooseAudience = () => emits('onChooseAudience')
</script>

<template>
  <ModalHead title="Create post" @onBack="handleBack" @onClose="handleClose" />
  <div class="post-modal-body">
    <Space>
      <Avatar :size="45" />
      <div>
        <Paragraph>User name</Paragraph>
        <Button sizes="sm" @click="handleChooseAudience">
          <Space aligns="middle">
            <Icon :iconName="iconName.USER_GROUP" />
            <span>Friends</span>
          </Space>
        </Button>
      </div>
    </Space>
    <div class="py-5 body-content">
      <TextArea rootClassName="pb-5" color="orange" placeholder="What's on your mind, User name?" />
      <MultipleImageUpload color="orange" />
    </div>
    <Card>
      <template #body>
        <Row justify="between" aligns="middle">
          <Col>
            <Paragraph>Add to your post</Paragraph>
          </Col>
          <Col>
            <Space aligns="middle">
              <Tooltip
                v-for="action in actions"
                :key="action.id"
                placement="top"
                rootClassName="cursor-pointer"
              >
                <template #title>
                  <Icon :iconName="action.icon" :color="action.iconColor" :size="25" />
                </template>
                <template #content>
                  {{ action.name }}
                </template>
              </Tooltip>
            </Space>
          </Col>
        </Row>
      </template>
    </Card>
  </div>
</template>
