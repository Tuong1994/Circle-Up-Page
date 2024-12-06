<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Grid, Space, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { useViewPoint } from '@/hooks'
import HeaderFeatures from '@/components/View/Header/HeaderFeatures.vue'
import Logo from '@/components/View/Logo/Logo.vue'

const { Row, Col } = Grid

const { isPhone, isTablet, isLgTablet } = useViewPoint()

const emits = defineEmits(['onBack'])

const responsive = computed<boolean>(() => isPhone.value || isTablet.value || isLgTablet.value)

const handleBack = () => emits('onBack')
</script>

<template>
  <div class="content-header">
    <Row aligns="middle" justify="between">
      <Col>
        <Space aligns="middle">
          <Button v-if="responsive" text @click="handleBack">
            <Icon :size="25" :iconName="iconName.ANGLE_LEFT" />
          </Button>
          <Logo :size="60" />
        </Space>
      </Col>
      <Col>
        <HeaderFeatures />
      </Col>
    </Row>
  </div>
</template>
