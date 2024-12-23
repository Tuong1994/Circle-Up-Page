<script setup lang="ts">
import { Card, Image, Space, Section, Button, Icon, Grid, Typography, Dropdown } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import defaultImage from '/default.jpg'

const { Row, Col } = Grid

const { Paragraph } = Typography
</script>

<template>
  <Section rootClassName="collection-detail">
    <Card rootClassName="detail-banner">
      <template #body>
        <Image
          :src="defaultImage"
          rootClassName="image-full-size"
          imgWidth="100%"
          imgHeight="100%"
          objectFit="cover"
        />
      </template>
    </Card>
    <Card rootClassName="detail-head">
      <template #body>
        <Row justify="between" aligns="middle">
          <Col>
            <Paragraph :size="18" :weight="600">Collection title</Paragraph>
          </Col>
          <Col>
            <Dropdown placement="right" labelClassName="!p-0">
              <template #label>
                <Button>
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
  </Section>
</template>
