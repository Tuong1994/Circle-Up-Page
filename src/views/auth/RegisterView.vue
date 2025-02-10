<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { Button, Divider, Icon } from '@/components/UI'
import { Input, InputPassword } from '@/components/Control'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import type { AuthRegister } from '@/services/auth/type'
import AuthFormLayout from '@/features/auth/components/AuthFormLayout.vue'
import EmailValidateMessage from '@/features/auth/components/EmailValidateMessage.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useFormRule from '@/components/Control/Form/useFormRule'
import useRegister from '@/features/auth/hooks/useRegister'
import useTypingDebounce from '@/hooks/features/useDebounce'
import useValidateEmail from '@/features/auth/hooks/useValidateEmail'

const t = useLangStore()

const layout = useLayoutStore()

const { email, password, required } = useFormRule()

const formData = ref<AuthRegister>({
  email: '',
  password: '',
  firstName: '',
  lastName: ''
})

const emailValue = computed<string>(() => formData.value.email)

const typingDebounce = useTypingDebounce(emailValue)

const { mutate: onRegister, isPending: isLoading } = useRegister(formData.value)

const { mutate: onValidateEmail, isPending: isValidating, isInValid } = useValidateEmail()

const showValidateMessage = computed<boolean>(() => Boolean(emailValue.value))

const handleFinish = (data: AuthRegister) => console.log(data)

watch(typingDebounce, (newTypingDebounce) => {
  if (!newTypingDebounce) return
  onValidateEmail({ email: newTypingDebounce })
})
</script>

<template>
  <AuthFormLayout
    :initialValues="formData"
    :title="t.lang.auth.register.title"
    :disabled="isLoading"
    @onFinish="handleFinish"
  >
    <template #body>
      <Input name="email" :rule="email()" v-model="formData.email">
        <template #label>
          {{ t.lang.common.form.label.email }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.ENVELOPE" />
        </template>
      </Input>
      <EmailValidateMessage v-if="showValidateMessage" :isValidating="isValidating" :isInValid="isInValid" />
      <InputPassword name="password" :rule="password(6, 20)">
        <template #label>
          {{ t.lang.common.form.label.password }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.LOCK" />
        </template>
      </InputPassword>
      <Input name="firstName" :rule="required()">
        <template #label>
          {{ t.lang.common.form.label.firstName }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.USER" />
        </template>
      </Input>
      <Input name="lastName" :rule="required()">
        <template #label>
          {{ t.lang.common.form.label.lastName }}
        </template>
        <template #addonBefore>
          <Icon :iconName="iconName.USER" />
        </template>
      </Input>
      <Button
        type="submit"
        rootClassName="w-full"
        :loading="isLoading"
        :color="layout.color"
        :shape="layout.shape"
      >
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
