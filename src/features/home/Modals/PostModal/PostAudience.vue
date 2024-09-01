<script setup lang="ts">
import { defineEmits } from 'vue'
import { Typography, Space, Grid, Icon, Button, Divider } from '@/components/UI'
import { Radio } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

type AudienceType = 'public' | 'friends' | 'only'

type Audience = { type: AudienceType; name: string; content: string; icon: string }

const { Paragraph } = Typography

const { Row, Col } = Grid

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const audiences: Audience[] = [
  {
    type: 'public',
    name: t.lang.home.modal.common.public,
    content: t.lang.home.modal.audience.desc_1,
    icon: iconName.GLOBE
  },
  {
    type: 'friends',
    name: t.lang.home.modal.common.friends,
    content: t.lang.home.modal.audience.desc_2,
    icon: iconName.USER_GROUP
  },
  {
    type: 'only',
    name: t.lang.home.modal.common.private,
    content: t.lang.home.modal.audience.desc_3,
    icon: iconName.LOCK
  }
]

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" :title="t.lang.home.modal.audience.title" @onBack="handleBack" />
  <ModalBody>
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
      <ItemWrapper v-for="audience in audiences" :key="audience.type">
        <Row justify="between" aligns="middle">
          <Col>
            <Space size="md" aligns="middle">
              <Icon rootClassName="w-12" :iconName="audience.icon" :size="30" />
              <div>
                <Paragraph>{{ audience.name }}</Paragraph>
                <Paragraph variant="secondary" :size="12">{{ audience.content }}</Paragraph>
              </div>
            </Space>
          </Col>
          <Col>
            <Radio :color="layout.color" name="audience" />
          </Col>
        </Row>
      </ItemWrapper>
    </div>
  </ModalBody>
  <ModalFoot>
    <Button rootClassName="w-full" :color="layout.color" sizes="lg">
      {{ t.lang.common.actions.done }}
    </Button>
  </ModalFoot>
</template>
