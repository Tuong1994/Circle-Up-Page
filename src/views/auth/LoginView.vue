<script setup lang="ts">
import * as yup from 'yup'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button, Divider, Space, Icon } from '@/components/UI'
import { Input, InputPassword } from '@/components/Control'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import type { AuthLogin } from '@/services/auth/type'
import AuthFormLayout from '@/features/auth/AuthFormLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import useFormRule from '@/components/Control/Form/useFormRule'

const layout = useLayoutStore()

const t = useLangStore()

const { email, password, minNumber, required, combine } = useFormRule()

const formData = ref<AuthLogin>({
  email: '',
  password: ''
})
</script>

<template>
  <AuthFormLayout :initialValues="formData" :title="t.lang.auth.login.title">
    <template #body>
      <Input name="email">
        <template #label>
          {{ t.lang.common.form.label.email }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.ENVELOPE" />
        </template>
      </Input>
      <InputPassword name="password" rootClassName="my-5">
        <template #label>
          {{ t.lang.common.form.label.password }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.LOCK" />
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
