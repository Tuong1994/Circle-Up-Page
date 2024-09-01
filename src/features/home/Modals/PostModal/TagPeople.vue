<script setup lang="ts">
import { defineEmits } from 'vue'
import { Icon, Grid, Typography, Space, Avatar, Button, Divider } from '@/components/UI'
import { Input, CheckBox } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" :title="t.lang.home.modal.tag.title" @onBack="handleBack" />
  <ModalBody>
    <Input color="orange" shape="round" :placeholder="t.lang.common.form.placeholder.search">
      <template #addonBefore>
        <Icon :iconName="iconName.SEARCH" />
      </template>
    </Input>
    <Divider>
      {{ t.lang.home.modal.tag.selected }}
    </Divider>
    <Row>
      <Col>
        <Avatar :size="45" />
      </Col>
    </Row>
    <Divider>
      {{ t.lang.home.modal.tag.people }}
    </Divider>
    <div class="post-content">
      <ItemWrapper v-for="item in 10">
        <Row justify="between" aligns="middle">
          <Col>
            <Space aligns="middle">
              <Avatar :size="40" />
              <Paragraph>People</Paragraph>
            </Space>
          </Col>
          <Col>
            <CheckBox :color="layout.color" />
          </Col>
        </Row>
      </ItemWrapper>
    </div>
  </ModalBody>
  <ModalFoot>
    <Button rootClassName="w-full" :color="layout.color" sizes="lg">
      {{ t.lang.common.actions.done }}
    </Button>
  </ModalFoot>
</template>
