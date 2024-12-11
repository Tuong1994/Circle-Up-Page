<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
import { Space, Avatar, Typography, Grid, Card, Tooltip, Button, Icon } from '@/components/UI'
import { TextArea } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { EActionType } from './enum'
import type { ActionType } from './PostModal.vue'
import type { ComponentColor } from '@/common/type'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import PostUpload from './PostUpload/PostUpload.vue'
import AudiencesButton from '@/components/View/Audiences/AudiencesButton.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

type Action = {
  type: ActionType
  name: string
  icon: string
  iconColor: Exclude<ComponentColor, 'white' | 'gray'>
}

interface CreatePostProps {
  actionType: ActionType
  buttonProps: ButtonProps
}

defineProps<CreatePostProps>()

const emits = defineEmits(['onBack', 'onClose', 'onAction'])

const layout = useLayoutStore()

const t = useLangStore()

const isUpload = ref<boolean>(false)

const actions: Action[] = [
  {
    type: EActionType.PHOTO,
    name: t.lang.home.modal.createPost.photo,
    icon: iconName.IMAGE,
    iconColor: 'green'
  },
  { type: EActionType.TAG, name: t.lang.home.modal.createPost.tag, icon: iconName.TAG, iconColor: 'blue' },
  {
    type: EActionType.FEELING,
    name: t.lang.home.modal.createPost.feeling,
    icon: iconName.LAUGH,
    iconColor: 'yellow'
  },
  {
    type: EActionType.CHECK_IN,
    name: t.lang.home.modal.createPost.checkin,
    icon: iconName.MAP_MARKER_ALT,
    iconColor: 'pink'
  }
]

const handleBack = () => emits('onBack')

const handleClose = () => emits('onClose')

const handleAction = (type: ActionType) => {
  if (type === EActionType.PHOTO) return (isUpload.value = !isUpload.value)
  emits('onAction', type)
}
</script>

<template>
  <ModalLayoutHead :title="t.lang.home.modal.createPost.title" @onBack="handleBack" @onClose="handleClose" />
  <ModalLayoutBody>
    <Space>
      <Avatar :size="45" />
      <div>
        <Paragraph>User name</Paragraph>
        <AudiencesButton sizes="sm" @click="() => handleAction(EActionType.AUDIENCE)" />
      </div>
    </Space>
    <div class="py-5 create-post-content">
      <TextArea
        rootClassName="pb-5"
        :color="(layout.color as ControlColor)"
        :shape="(layout.shape as ControlShape)"
        :placeholder="`${t.lang.home.modal.createPost.placeholder}, User name?`"
      />
      <PostUpload v-if="isUpload" @onClose="() => handleAction(EActionType.PHOTO)" />
    </div>
    <Card>
      <template #body>
        <Row justify="between" aligns="middle">
          <Col>
            <Paragraph>{{ t.lang.home.modal.createPost.actionTitle }}</Paragraph>
          </Col>
          <Col>
            <Space aligns="middle">
              <Tooltip
                v-for="action in actions"
                :key="action.type"
                placement="top"
                rootClassName="cursor-pointer"
                @onClick="() => handleAction(action.type)"
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
  </ModalLayoutBody>
  <ModalLayoutFoot>
    <Button v-bind="buttonProps">
      {{ t.lang.common.actions.post }}
    </Button>
  </ModalLayoutFoot>
</template>
