<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Space, Button } from '@/components/UI'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import Audiences from '@/components/View/Audiences/Audiences.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

interface AudiencesModalProps {
  open?: boolean
}

defineProps<AudiencesModalProps>()

const emits = defineEmits(['onDone', 'onClose'])

const layout = useLayoutStore()

const t = useLangStore()

const handleDone = () => emits('onDone')

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayout :open="open" @onClose="handleClose">
    <ModalLayoutHead :title="t.lang.profile.about.audience" @onClose="handleClose" />
    <ModalLayoutBody>
      <Audiences />
    </ModalLayoutBody>
    <ModalLayoutFoot>
      <Space justify="end">
        <Button :color="layout.color" :shape="layout.shape" ghost @click="handleClose">
          {{ t.lang.common.actions.cancel }}
        </Button>
        <Button :color="layout.color" :shape="layout.shape" @click="handleDone">
          {{ t.lang.common.actions.done }}
        </Button>
      </Space>
    </ModalLayoutFoot>
  </ModalLayout>
</template>
