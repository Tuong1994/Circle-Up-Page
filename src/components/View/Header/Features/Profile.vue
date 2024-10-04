<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { Grid, Icon, Space, Avatar, Card, Button, Typography, Divider } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { EHeaderFeatureType } from '../enum'
import ItemWrapper from '../../ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface FeatureProfileProps {
  responsive?: boolean;
}

defineProps<FeatureProfileProps>()

const emits = defineEmits(['onBack'])

const t = useLangStore()

const items = computed(() => [
  { id: 'setting', name: t.lang.common.header.features.profile.setting, icon: iconName.GEAR },
  { id: 'display', name: t.lang.common.header.features.profile.display, icon: iconName.LIGHTBULB },
  { id: 'logout', name: t.lang.common.header.features.profile.logout, icon: iconName.SIGN_OUT }
])

const handleBack = () => emits('onBack', EHeaderFeatureType.PROFILE)
</script>

<template>
  <Card>
    <template #body>
      <Row aligns="middle" justify="between">
        <Col>
          <Space aligns="middle">
            <Avatar :size="35" />
            <Paragraph>Profile</Paragraph>
          </Space>
        </Col>
        <Col v-if="responsive">
          <Button shape="round" @click="handleBack">
            <Icon :iconName="iconName.X_MARK" />
          </Button>
        </Col>
      </Row>
    </template>
  </Card>
  <Divider />
  <ItemWrapper v-for="item in items" :key="item.id">
    <Row justify="between" aligns="middle">
      <Col>
        <Space aligns="middle">
          <Avatar :size="30">
            <Icon :iconName="item.icon" />
          </Avatar>
          <Paragraph>{{ item.name }}</Paragraph>
        </Space>
      </Col>
      <Col>
        <Icon :size="18" :iconName="iconName.ANGLE_RIGHT" />
      </Col>
    </Row>
  </ItemWrapper>
</template>
