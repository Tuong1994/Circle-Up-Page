<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { Icon, Grid, Typography, Space, Avatar, Button, Divider } from '@/components/UI'
import { Input, CheckBox } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import type { ControlColor, ClickBoxColor, ControlShape } from '@/components/Control/type'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import ModalLayoutContent from '@/components/View/ModalLayout/ModalLayoutContent.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface TagPeopleProps {
  buttonProps: ButtonProps
}

defineProps<TagPeopleProps>()

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalLayoutHead type="sub" :title="t.lang.home.modal.tag.title" @onBack="handleBack" />
  <ModalLayoutBody>
    <Input
      :color="(layout.color as ControlColor)"
      :shape="(layout.shape as ControlShape)"
      :placeholder="t.lang.common.form.placeholder.search"
    >
      <template #addonBefore>
        <Icon :iconName="iconName.SEARCH" />
      </template>
    </Input>
    <Divider>
      {{ t.lang.home.modal.tag.selected }}
    </Divider>
    <Row>
      <Col>
        <Avatar :color="layout.color" :size="45" />
      </Col>
    </Row>
    <Divider>
      {{ t.lang.home.modal.tag.people }}
    </Divider>
    <ModalLayoutContent>
      <ItemWrapper v-for="item in 10">
        <Row justify="between" aligns="middle">
          <Col>
            <Space aligns="middle">
              <Avatar :color="layout.color" :size="40" />
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
    <Button v-bind="buttonProps">
      {{ t.lang.common.actions.done }}
    </Button>
  </ModalLayoutFoot>
</template>
