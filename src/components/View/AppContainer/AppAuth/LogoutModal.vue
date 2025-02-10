<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Modal, Space, Button, Typography, Divider } from '@/components/UI'
import type { ModalProps } from '@/components/UI/Modal/Modal.vue'
import type { ApiQuery } from '@/services/type'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useAuthStore from '@/stores/AuthStore'
import useLogout from '@/features/auth/hooks/useLogout'

const { Paragraph } = Typography

interface LogoutModalProps extends ModalProps {}

defineProps<LogoutModalProps>()

const emits = defineEmits(['onClose'])

const t = useLangStore()

const layout = useLayoutStore()

const authStore = useAuthStore()

const { mutate: onLogout, isPending } = useLogout()

const handleLogout = () => {
  const { id: userId } = authStore.auth.payload
  const apiQuery: ApiQuery = { userId }
  onLogout(apiQuery)
  emits('onClose')
}
</script>

<template>
  <Modal :open="open" :hasHead="false" :hasFoot="false" :backdropClose="false">
    <template #body>
      <Paragraph>{{ t.lang.common.auth.sessionExpMessage }}</Paragraph>
      <Divider />
      <Space justify="end">
        <Button :loading="isPending" :color="layout.color" :shape="layout.shape" @click="handleLogout">
          {{ t.lang.common.actions.ok }}
        </Button>
      </Space>
    </template>
  </Modal>
</template>
