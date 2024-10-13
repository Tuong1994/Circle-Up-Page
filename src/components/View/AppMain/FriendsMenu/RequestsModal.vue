<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Typography } from '@/components/UI'
import { EFriendItemType } from '../enum'
import ModalLayout from '../../ModalLayout/ModalLayout.vue'
import ModalLayoutHead from '../../ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '../../ModalLayout/ModalLayoutBody.vue'
import FriendsItem from './FriendsItem.vue'

const { Paragraph } = Typography

interface RequestsModalProps {
  open?: boolean
}

defineProps<RequestsModalProps>()

const emits = defineEmits(['onClose'])

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayout :open="open" @onClose="handleClose">
    <ModalLayoutHead title="Sent requests" @onClose="handleClose" />
    <ModalLayoutBody>
      <!-- <Paragraph variant="secondary" aligns="center">
        When you send someone a friend request, it will appear here.
      </Paragraph> -->
      <FriendsItem v-for="item in 100" :type="EFriendItemType.REQUEST" />
    </ModalLayoutBody>
  </ModalLayout>
</template>
