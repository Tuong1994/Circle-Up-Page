<script setup lang="ts">
import { defineEmits, computed } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import { Grid, Typography, Space, Button, Icon } from '@/components/UI'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const emits = defineEmits(['onClose', 'onEditAudience'])

const layout = useLayoutStore()

const policies = computed(() => [
  { id: 'list', title: 'Friends List', content: 'Who can see your friends list?' },
  { id: 'following', title: 'Following', content: 'Who can see the people and pages you follow?' },
  { id: 'followers', title: 'Followers', content: 'Who can see your followers on your timeline?' }
])

const handleEditAudience = () => emits('onEditAudience')

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayoutHead title="Edit policy" @onClose="handleClose" />
  <ModalLayoutBody>
    <Row v-for="policy in policies" :key="policy.id" justify="between" rootClassName="my-8">
      <Col :xs="14" :md="16" :span="14">
        <Paragraph :size="16" :weight="600">
          {{ policy.title }}
        </Paragraph>
        <Paragraph variant="secondary">
          {{ policy.content }}
        </Paragraph>
      </Col>
      <Col>
        <Button :color="layout.color" :shape="layout.shape" @click="handleEditAudience">
          <Space aligns="middle">
            <Icon :iconName="iconName.GLOBE" />
            <Paragraph>Public</Paragraph>
          </Space>
        </Button>
      </Col>
    </Row>
  </ModalLayoutBody>
</template>
