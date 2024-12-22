<script setup lang="ts">
import { defineEmits } from 'vue'
import { Space, Button } from '@/components/UI'
import { Input } from '@/components/Control'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const emits = defineEmits(['onBack'])

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalLayoutHead title="Create collection" type="sub" @onBack="handleBack" />
  <ModalLayoutBody>
    <Input :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)">
      <template #label> Name </template>
    </Input>
  </ModalLayoutBody>
  <ModalLayoutFoot>
    <Space aligns="end">
      <Button :color="layout.color" :shape="layout.shape">Create</Button>
    </Space>
  </ModalLayoutFoot>
</template>
