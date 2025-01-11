<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Card, Button, Divider, Space, Typography } from '@/components/UI'
import { Form, Input, InputPassword } from '@/components/Control'
import { routePaths } from '@/router'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import type { AuthLogin } from '@/services/auth/type'
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
  <Form :color="layout.color as ControlColor" :shape="layout.shape as ControlShape" :initialValues="formData">
    <Card>
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
          <Button text rootClassName="mb-5">
            {{ t.lang.auth.login.forgetPassword }}
          </Button>
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
    </Card>
  </Form>
</template>
