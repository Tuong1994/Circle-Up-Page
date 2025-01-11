<script setup lang="ts">
import { Card, Button, Divider, Typography } from '@/components/UI';
import { Form, Input, InputPassword } from '@/components/Control';
import { ref } from 'vue';
import type { AuthRegister } from '@/services/auth/type';
import useLangStore from '@/stores/LangStore';
import useLayoutStore from '@/components/UI/Layout/LayoutStore';
import type { ControlColor, ControlShape } from '@/components/Control/type';

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

const formData = ref<AuthRegister>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
})
</script>

<template>
    <Form :initialValues="formData" :color="layout.color as ControlColor" :shape="layout.shape as ControlShape">
        
    </Form>
</template>
