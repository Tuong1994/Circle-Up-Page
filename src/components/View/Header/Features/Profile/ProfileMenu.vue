<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { Grid, Icon, Space, Avatar, Card, Button, Typography, Divider } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { EHeaderFeatureType, EProfileMenuType } from '../../enum'
import { routePaths } from '@/router'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface FeatureProfileProps {
  responsive?: boolean
}

defineProps<FeatureProfileProps>()

const emits = defineEmits(['onBack', 'onSelect'])

const t = useLangStore()

const layout = useLayoutStore()

const items = computed(() => [
  {
    id: 'language',
    name: t.lang.common.header.features.profile.language,
    icon: iconName.GLOBE,
    type: EProfileMenuType.LANGUAGE
  },
  {
    id: 'display',
    name: t.lang.common.header.features.profile.display,
    icon: iconName.LIGHTBULB,
    type: EProfileMenuType.DISPLAY
  },
  {
    id: 'logout',
    name: t.lang.common.header.features.profile.logout,
    icon: iconName.SIGN_OUT,
    type: EProfileMenuType.LOGOUT
  }
])

const handleBack = () => emits('onBack', EHeaderFeatureType.PROFILE)

const handleSelect = (type: EProfileMenuType) => emits('onSelect', type)
</script>

<template>
  <Card>
    <template #body>
      <Row aligns="middle" justify="between">
        <Col>
          <RouterLink :to="routePaths.PROFILE">
            <Space aligns="middle">
              <Avatar :size="35" :color="layout.color" />
              <Paragraph>Profile</Paragraph>
            </Space>
          </RouterLink>
        </Col>
        <Col v-if="responsive">
          <Button :shape="layout.shape" @click="handleBack">
            <Icon :iconName="iconName.X_MARK" />
          </Button>
        </Col>
      </Row>
    </template>
  </Card>
  <Divider />
  <ItemWrapper v-for="item in items" :key="item.id" @click="() => handleSelect(item.type)">
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
        <Icon v-if="item.type !== EProfileMenuType.LOGOUT" :size="18" :iconName="iconName.ANGLE_RIGHT" />
      </Col>
    </Row>
  </ItemWrapper>
</template>
