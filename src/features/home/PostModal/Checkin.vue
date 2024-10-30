<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { Button, Icon, Typography } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

interface CheckinProps {
  buttonProps: ButtonProps
}

defineProps<CheckinProps>()

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalLayoutHead type="sub" :title="t.lang.home.modal.checkin.title" @onBack="handleBack" />
  <ModalLayoutBody>
    <div class="py-5">
      <Input
        :color="(layout.color as ControlColor)"
        :shape="(layout.shape as ControlShape)"
        :placeholder="`${t.lang.home.modal.checkin.placeholder}?`"
      >
        <template #addonBefore>
          <Icon :iconName="iconName.SEARCH" />
        </template>
      </Input>
    </div>
    <div class="post-content">
      <ItemWrapper v-for="item in 10">
        <Paragraph>Ho Chi Minh, Viet Nam</Paragraph>
      </ItemWrapper>
    </div>
  </ModalLayoutBody>
  <ModalLayoutFoot>
    <Button v-bind="buttonProps">
      {{ t.lang.common.actions.done }}
    </Button>
  </ModalLayoutFoot>
</template>
