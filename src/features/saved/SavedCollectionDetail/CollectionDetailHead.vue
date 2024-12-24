<script setup lang="ts">
import { Card, Grid, Dropdown, Button, Space, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import AudiencesButton from '@/components/View/Audiences/AudiencesButton.vue';

const { Row, Col } = Grid

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <Card rootClassName="detail-head">
    <template #body>
      <Row justify="between" aligns="middle">
        <Col>
          <Paragraph :size="18" :weight="600" rootClassName="mb-3">Collection title</Paragraph>
          <AudiencesButton sizes="sm" :shape="layout.shape" />
        </Col>
        <Col>
          <Dropdown placement="right" labelClassName="!p-0">
            <template #label>
              <Button ghost :color="layout.color" :shape="layout.shape">
                <Icon :iconName="iconName.ELLIPSIS_H" />
              </Button>
            </template>
            <template #dropdown>
              <div class="p-1">
                <ItemWrapper>
                  <Space aligns="middle">
                    <Icon :iconName="iconName.TRASH" />
                    <Paragraph>Delete collection</Paragraph>
                  </Space>
                </ItemWrapper>
              </div>
            </template>
          </Dropdown>
        </Col>
      </Row>
    </template>
  </Card>
</template>
