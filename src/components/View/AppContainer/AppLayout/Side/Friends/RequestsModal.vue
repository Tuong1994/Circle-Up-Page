<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Typography } from '@/components/UI'
import { EFriendItemType } from '../../enum'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import FriendsItem from './FriendsItem.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

interface RequestsModalProps {
  open?: boolean
}

defineProps<RequestsModalProps>()

const emits = defineEmits(['onClose'])

const t = useLangStore()

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayout :open="open" @onClose="handleClose">
    <ModalLayoutHead :title="t.lang.friends.sideMenu.requests.modal.title" @onClose="handleClose" />
    <ModalLayoutBody>
      <!-- <Paragraph variant="secondary" aligns="center">
        When you send someone a friend request, it will appear here.
      </Paragraph> -->
      <FriendsItem v-for="item in 10" :type="EFriendItemType.REQUEST" />
    </ModalLayoutBody>
  </ModalLayout>
</template>
