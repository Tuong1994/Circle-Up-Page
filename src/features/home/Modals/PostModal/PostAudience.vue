<script setup lang="ts">
import { defineEmits } from 'vue'
import { Typography, Space, Grid, Icon, Button, Divider } from '@/components/UI'
import { Radio } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'

type AudienceType = 'public' | 'friends' | 'only'

type Audience = { type: AudienceType; name: string; content: string; icon: string }

const { Paragraph } = Typography

const { Row, Col } = Grid

const emits = defineEmits(['onBack'])

const audiences: Audience[] = [
  { type: 'public', name: 'Public', content: 'Anyone on or off Circle Up', icon: iconName.GLOBE },
  { type: 'friends', name: 'Friends', content: 'Your friends on Circle Up', icon: iconName.USER_GROUP },
  { type: 'only', name: 'Only me', content: 'Only you can see', icon: iconName.LOCK }
]

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" title="Post audience" @onBack="handleBack" />
  <ModalBody>
    <Paragraph rootClassName="mb-5" :weight="600" :size="16"> Who can see your post? </Paragraph>
    <Paragraph rootClassName="mb-5" variant="secondary">
      Your post will appear in Feed, on your profile and in search results.
    </Paragraph>
    <Paragraph variant="secondary">
      Your default audience is set to Friends, but you can change the audience of this specific post.
    </Paragraph>
    <Divider />
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
          <Radio color="orange" name="audience" />
        </Col>
      </Row>
    </ItemWrapper>
  </ModalBody>
  <ModalFoot>
    <Button rootClassName="w-full" color="orange" sizes="lg">Done</Button>
  </ModalFoot>
</template>
