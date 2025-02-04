<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button, Divider, Icon } from '@/components/UI'
import { Input, InputPassword } from '@/components/Control'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import type { AuthRegister } from '@/services/auth/type'
import AuthFormLayout from '@/features/auth/components/AuthFormLayout.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

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
  <AuthFormLayout :initialValues="formData" :title="t.lang.auth.register.title">
    <template #body>
      <Input name="email">
        <template #label>
          {{ t.lang.common.form.label.email }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.ENVELOPE" />
        </template>
      </Input>
      <InputPassword name="password">
        <template #label>
          {{ t.lang.common.form.label.password }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.LOCK" />
        </template>
      </InputPassword>
      <Input name="firstName">
        <template #label>
          {{ t.lang.common.form.label.firstName }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.USER" />
        </template>
      </Input>
      <Input name="lastName">
        <template #label>
          {{ t.lang.common.form.label.lastName }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.USER" />
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
  </AuthFormLayout>
</template>
