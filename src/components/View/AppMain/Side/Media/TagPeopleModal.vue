<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Typography, Button, Grid, Space, Avatar, Icon } from '@/components/UI'
import { Input, CheckBox } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import type { ControlShape, ControlColor, ClickBoxColor } from '@/components/Control/type'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutContent from '@/components/View/ModalLayout/ModalLayoutContent.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const { Row, Col } = Grid

interface TagPeopleModalProps {
  open?: boolean
}

defineProps<TagPeopleModalProps>()

const emits = defineEmits(['onClose'])

const t = useLangStore()

const layout = useLayoutStore()

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayout :open="open" @onClose="handleClose">
    <ModalLayoutHead :title="t.lang.home.modal.tag.title" @onClose="handleClose" />
    <ModalLayoutBody>
      <div class="pb-5">
        <Input :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)">
          <template #addonBefore>
            <Icon :iconName="iconName.SEARCH" />
          </template>
        </Input>
      </div>
      <ModalLayoutContent>
        <ItemWrapper v-for="item in 10">
          <Row justify="between" aligns="middle">
            <Col>
              <Space aligns="middle">
                <Avatar :size="40" />
                <Paragraph>People</Paragraph>
              </Space>
            </Col>
            <Col>
              <CheckBox :color="(layout.color as ClickBoxColor)" />
            </Col>
          </Row>
        </ItemWrapper>
      </ModalLayoutContent>
    </ModalLayoutBody>
    <ModalLayoutFoot>
      <Button rootClassName="w-full" sizes="lg" :color="layout.color" :shape="layout.shape">
        {{ t.lang.common.actions.done }}
      </Button>
    </ModalLayoutFoot>
  </ModalLayout>
</template>
