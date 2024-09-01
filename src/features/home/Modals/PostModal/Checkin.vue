<script setup lang="ts">
import { defineEmits } from 'vue'
import { Button, Icon, Typography } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" :title="t.lang.home.modal.checkin.title" @onBack="handleBack" />
  <ModalBody>
    <div class="py-5">
      <Input :color="layout.color" shape="round" :placeholder="`${t.lang.home.modal.checkin.placeholder}?`">
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
  </ModalBody>
  <ModalFoot>
    <Button rootClassName="w-full" sizes="lg" :color="layout.color">Done</Button>
  </ModalFoot>
</template>
