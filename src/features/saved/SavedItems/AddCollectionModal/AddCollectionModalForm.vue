<script setup lang="ts">
import { defineEmits } from 'vue'
import { Space, Button } from '@/components/UI'
import { Input } from '@/components/Control'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalLayoutHead :title="t.lang.saved.items.modal.formTitle" type="sub" @onBack="handleBack" />
  <ModalLayoutBody>
    <Input :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)">
      <template #label>
        {{ t.lang.common.form.label.collectionName }}
      </template>
    </Input>
  </ModalLayoutBody>
  <ModalLayoutFoot>
    <Space justify="end">
      <Button :color="layout.color" :shape="layout.shape">
        {{ t.lang.common.actions.create }}
      </Button>
    </Space>
  </ModalLayoutFoot>
</template>
