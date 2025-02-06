<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { Grid, Icon, Space, Avatar, Card, Button, Typography, Divider, Loading } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { EHeaderFeatureType, EProfileMenuType } from '../../enum'
import { routePaths } from '@/router'
import type { ApiQuery } from '@/services/type'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useAuthStore from '@/stores/AuthStore'
import useLogout from '@/features/auth/hooks/useLogout'

const { Row, Col } = Grid

const { Paragraph } = Typography

const { Spinner } = Loading

interface FeatureProfileProps {
  responsive?: boolean
}

defineProps<FeatureProfileProps>()

const emits = defineEmits(['onBack', 'onSelect'])

const t = useLangStore()

const layout = useLayoutStore()

const authStore = useAuthStore()

const { mutate: onLogout, isPending } = useLogout()

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

const handleSelect = (type: EProfileMenuType) => {
  if (type === EProfileMenuType.LOGOUT) {
    const userInfo = authStore.auth.payload
    const apiQuery: ApiQuery = { userId: userInfo.id }
    onLogout(apiQuery)
  }
  emits('onSelect', type)
}
</script>

<template>
  <div class="p-5">
    <!-- Profile head desktop start -->
    <RouterLink v-if="!responsive" :to="routePaths.PROFILE" @click="handleBack">
      <Card>
        <template #body>
          <Space aligns="middle">
            <Avatar :size="35" :color="layout.color" />
            <Paragraph>Profile</Paragraph>
          </Space>
        </template>
      </Card>
    </RouterLink>
    <!-- Profile head desktop end -->

    <!-- Profile head mobile start -->
    <Row v-if="responsive" aligns="middle" justify="between">
      <Col :xs="14" :md="12">
        <Card bodyClassName="!p-3">
          <template #body>
            <RouterLink :to="routePaths.PROFILE" @click="handleBack">
              <Space aligns="middle">
                <Avatar :size="35" :color="layout.color" />
                <Paragraph>Profile</Paragraph>
              </Space>
            </RouterLink>
          </template>
        </Card>
      </Col>
      <Col>
        <Button :color="layout.color" :shape="layout.shape" @click="handleBack">
          <Icon :iconName="iconName.X_MARK" />
        </Button>
      </Col>
    </Row>
    <!-- Profile head mobile end -->
    <Divider />

    <template v-for="item in items" :key="item.id">
      <ItemWrapper v-if="item.type !== EProfileMenuType.LOGOUT" @click="() => handleSelect(item.type)">
        <Row justify="between" aligns="middle">
          <Col>
            <Space aligns="middle">
              <Avatar :color="layout.color" :size="30">
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
      
      <Space v-else justify="end">
        <Button
          rootClassName="mt-5"
          :disabled="isPending"
          :color="layout.color"
          :shape="layout.shape"
          @click="() => handleSelect(item.type)"
        >
          <Space aligns="middle">
            <Avatar :color="layout.color" :size="25">
              <Icon v-if="!isPending" :iconName="item.icon" />
              <Spinner v-else />
            </Avatar>
            <Paragraph>{{ item.name }}</Paragraph>
          </Space>
        </Button>
      </Space>
    </template>
  </div>
</template>
