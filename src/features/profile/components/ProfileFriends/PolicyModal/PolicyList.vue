<script setup lang="ts">
import { defineEmits, computed } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import { Grid, Typography, Space, Button, Icon } from '@/components/UI'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const emits = defineEmits(['onClose', 'onEditAudience'])

const t = useLangStore()

const layout = useLayoutStore()

const policies = computed(() => [
  {
    id: 'list',
    title: t.lang.profile.friends.modal.list.title,
    content: t.lang.profile.friends.modal.list.content
  },
  {
    id: 'following',
    title: t.lang.profile.friends.modal.following.title,
    content: t.lang.profile.friends.modal.following.content
  },
  {
    id: 'followers',
    title: t.lang.profile.friends.modal.followers.title,
    content: t.lang.profile.friends.modal.followers.content
  }
])

const handleEditAudience = () => emits('onEditAudience')

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayoutHead :title="t.lang.profile.friends.head.editPolicy" @onClose="handleClose" />
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
            <Paragraph>
              {{ t.lang.home.modal.common.public }}
            </Paragraph>
          </Space>
        </Button>
      </Col>
    </Row>
  </ModalLayoutBody>
</template>
