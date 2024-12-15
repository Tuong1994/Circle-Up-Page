<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { Typography, Button, Divider } from '@/components/UI'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import AudiencesContent from '@/components/View/Audiences/AudiencesContent.vue'
import useLangStore from '@/stores/LangStore'

interface PostAudienceProps {
  buttonProps: ButtonProps
}

defineProps<PostAudienceProps>()

const { Paragraph } = Typography

const emits = defineEmits(['onBack'])

const t = useLangStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalLayoutHead type="sub" :title="t.lang.home.modal.audience.title" @onBack="handleBack" />
  <ModalLayoutBody>
    <Paragraph rootClassName="mb-5" :weight="600" :size="16">
      {{ t.lang.home.modal.audience.subTitle }}?
    </Paragraph>
    <Paragraph rootClassName="mb-5" variant="secondary">
      {{ t.lang.home.modal.audience.content_1 }}
    </Paragraph>
    <Paragraph variant="secondary">
      {{ t.lang.home.modal.audience.content_2 }}
    </Paragraph>
    <Divider />
    <div class="post-content">
      <AudiencesContent />
    </div>
  </ModalLayoutBody>
  <ModalLayoutFoot>
    <Button v-bind="buttonProps">
      {{ t.lang.common.actions.done }}
    </Button>
  </ModalLayoutFoot>
</template>
