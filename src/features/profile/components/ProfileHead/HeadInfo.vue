<script setup lang="ts">
import { computed } from 'vue'
import { Grid, Typography, Space, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const layout = useLayoutStore()

const { isPhone, screenWidth } = useViewPoint()

const { SM_PHONE, SM_TABLET } = breakpoint

const responsive = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value <= SM_TABLET)

const textSize = computed<number>(() => (isPhone.value ? 20 : 25))
</script>

<template>
  <div class="content-info">
    <Row aligns="middle" justify="between">
      <Col>
        <Paragraph :size="textSize" :weight="600">User name</Paragraph>
      </Col>
      <Col>
        <Space aligns="middle">
          <Button :shape="layout.shape" :color="layout.color">
            <Space aligns="middle">
              <Icon :iconName="iconName.PLUS" />
              <Paragraph>Add to story</Paragraph>
            </Space>
          </Button>
          <Button :shape="layout.shape" :color="layout.color" ghost>
            <Space aligns="middle">
              <Icon :iconName="iconName.PENCIL_ALT" />
              <Paragraph>Edit profile</Paragraph>
            </Space>
          </Button>
          <Button v-if="!responsive" :shape="layout.shape" :color="layout.color" ghost>
            <Icon :iconName="iconName.ANGLE_DOWN" />
          </Button>
        </Space>
      </Col>
    </Row>
  </div>
</template>
