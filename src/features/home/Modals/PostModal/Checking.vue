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

const { Paragraph } = Typography

const emits = defineEmits(['onBack'])

const layout = useLayoutStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" title="Select for location" @onBack="handleBack" />
  <ModalBody>
    <div class="py-5">
      <Input :color="layout.color" shape="round" placeholder="Where are you?">
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
