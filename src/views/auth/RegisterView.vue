<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Card, Button, Divider, Typography } from '@/components/UI'
import { Form, Input, InputPassword } from '@/components/Control'
import type { AuthRegister } from '@/services/auth/type'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import { routePaths } from '@/router'

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

const formData = ref<AuthRegister>({
  email: '',
  password: '',
  firstName: '',
  lastName: ''
})
</script>

<template>
  <Form :initialValues="formData" :color="layout.color as ControlColor" :shape="layout.shape as ControlShape">
    <Card>
      <template #head>
        <Paragraph :weight="600" :size="20">
          {{ t.lang.auth.register.title }}
        </Paragraph>
      </template>
      <template #body>
        <Input name="email">
          <template #label>
            {{ t.lang.common.form.label.email }}
          </template>
        </Input>
        <InputPassword name="password">
          <template #label>
            {{ t.lang.common.form.label.password }}
          </template>
        </InputPassword>
        <Input name="firstName">
          <template #label>
            {{ t.lang.common.form.label.firstName }}
          </template>
        </Input>
        <Input name="lastName">
          <template #label>
            {{ t.lang.common.form.label.lastName }}
          </template>
        </Input>
        <Button rootClassName="w-full" :color="layout.color" :shape="layout.shape">
          {{ t.lang.auth.register.title }}
        </Button>
        <Divider />
        <RouterLink :to="routePaths.LOGIN">
          <Button rootClassName="w-full" color="green" :shape="layout.shape">
            {{ t.lang.auth.login.title }}
          </Button>
        </RouterLink>
      </template>
    </Card>
  </Form>
</template>
