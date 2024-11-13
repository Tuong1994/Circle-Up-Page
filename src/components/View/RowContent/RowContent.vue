<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import { Grid } from '@/components/UI'
import type { GridColProps } from '@/components/UI/Grid/Col.vue'
import type { GridRowProps } from '@/components/UI/Grid/Row.vue'

const { Row, Col } = Grid

interface RowContentProps {
  rootClassName?: string
  gridRowProps?: GridRowProps
  gridLeftColProps?: GridColProps
  gridRightColProps?: GridColProps
}

const props = withDefaults(defineProps<RowContentProps>(), {
  rootClassName: ''
})

const rowProps = computed<GridRowProps>(() => ({
  aligns: 'middle',
  ...(props.gridRowProps as object)
}))
</script>

<template>
  <div :class="['row-content', rootClassName]">
    <Row v-bind="rowProps">
      <Col v-bind="gridLeftColProps">
        <slot name="label">Label</slot>
      </Col>
      <Col v-bind="gridRightColProps">
        <slot name="content">Content</slot>
      </Col>
    </Row>
  </div>
</template>
