<script setup lang="ts">
import { defineEmits } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import { Button, Space, Divider, Icon } from '@/components/UI'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import ModalLayoutContent from '@/components/View/ModalLayout/ModalLayoutContent.vue'
import CollectionItem from './CollectionItem.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const emits = defineEmits(['onAdd', 'onClose'])

const layout = useLayoutStore()

const handleAdd = () => emits('onAdd')

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayoutHead title="Add to collection" @onClose="handleClose" />
  <ModalLayoutBody>
    <CollectionItem v-for="item in 10" />
  </ModalLayoutBody>
  <ModalLayoutFoot>
    <Button ghost :color="layout.color" :shape="layout.shape" @click="handleAdd">
      <Space aligns="middle">
        <Icon :iconName="iconName.PLUS" />
        <span>New collection</span>
      </Space>
    </Button>
  </ModalLayoutFoot>
</template>
