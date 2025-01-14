<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button, Space, Divider, Icon } from '@/components/UI'
import { Input } from '@/components/Control'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import type { AuthForgotPassword } from '@/services/auth/type'
import AuthFormLayout from '@/features/auth/AuthFormLayout.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const t = useLangStore()

const layout = useLayoutStore()

const formData = ref<AuthForgotPassword>({
  email: ''
})
</script>

<template>
  <AuthFormLayout :initialValues="formData" :title="t.lang.auth.login.forgetPassword">
    <template #body>
      <Input name="email">
        <template #label>
          {{ t.lang.common.form.label.email }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.ENVELOPE" />
        </template>
      </Input>
      <Divider />
      <Space aligns="middle">
        <Button :shape="layout.shape" :color="layout.color">
          {{ t.lang.auth.forgetPassword.resetPassword }}
        </Button>
        <span>|</span>
        <RouterLink :to="routePaths.LOGIN">
          <Button text>{{ t.lang.auth.login.title }}</Button>
        </RouterLink>
      </Space>
    </template>
  </AuthFormLayout>
</template>
