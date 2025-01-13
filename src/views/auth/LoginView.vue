<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button, Divider, Space, Typography } from '@/components/UI'
import { Input, InputPassword } from '@/components/Control'
import { routePaths } from '@/router'
import type { AuthLogin } from '@/services/auth/type'
import AuthFormLayout from '@/features/auth/AuthFormLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const t = useLangStore()

const formData = ref<AuthLogin>({
  email: '',
  password: ''
})
</script>

<template>
  <AuthFormLayout :initialValues="formData">
    <template #head>
      <Paragraph :weight="600" :size="20">
        {{ t.lang.auth.login.title }}
      </Paragraph>
    </template>
    <template #body>
      <Input name="email">
        <template #label>
          {{ t.lang.common.form.label.email }}
        </template>
      </Input>
      <InputPassword name="password" rootClassName="my-5">
        <template #label>
          {{ t.lang.common.form.label.password }}
        </template>
      </InputPassword>
      <Space justify="end">
        <RouterLink :to="routePaths.FORGET_PASSWORD">
          <Button text rootClassName="mb-5">
            {{ t.lang.auth.login.forgetPassword }}
          </Button>
        </RouterLink>
      </Space>
      <Button rootClassName="w-full" :color="layout.color" :shape="layout.shape">
        {{ t.lang.auth.login.title }}
      </Button>
      <Divider />
      <RouterLink :to="routePaths.REGISTER">
        <Button rootClassName="w-full" color="green" :shape="layout.shape">
          {{ t.lang.auth.login.createAccount }}
        </Button>
      </RouterLink>
    </template>
  </AuthFormLayout>
</template>
