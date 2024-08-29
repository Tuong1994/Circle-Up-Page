<script setup lang="ts">
import { defineEmits } from 'vue'
import { Icon, Grid, Typography, Space, Avatar, Button, Divider } from '@/components/UI'
import { Input, CheckBox } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'

const { Row, Col } = Grid

const { Paragraph } = Typography

const emits = defineEmits(['onBack'])

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" title="Tag people" @onBack="handleBack" />
  <ModalBody>
    <Input color="orange" shape="round">
      <template #addonBefore>
        <Icon :iconName="iconName.SEARCH" />
      </template>
    </Input>
    <Divider> Selected </Divider>
    <Row>
      <Col>
        <Avatar :size="45" />
      </Col>
    </Row>
    <Divider> People </Divider>
    <ItemWrapper v-for="item in 10">
      <Row justify="between" aligns="middle">
        <Col>
          <Space aligns="middle">
            <Avatar :size="40" />
            <Paragraph>People</Paragraph>
          </Space>
        </Col>
        <Col>
          <CheckBox color="orange" />
        </Col>
      </Row>
    </ItemWrapper>
  </ModalBody>
  <ModalFoot>
    <Button rootClassName="w-full" color="orange" sizes="lg">Done</Button>
  </ModalFoot>
</template>
