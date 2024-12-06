<script setup lang="ts">
import { defineProps } from 'vue'
import type { DynamicGridItems } from './type'
import GridOneItem from './GridOneItem.vue'
import GridTwoItems from './GridTwoItems.vue'
import GridThreeItems from './GridThreeItems.vue'
import GridFourItems from './GridFourItems.vue'
import GridFiveItems from './GridFiveItems.vue'

interface DynamicGridProps {
  items: DynamicGridItems
}

defineProps<DynamicGridProps>()
</script>

<template>
  <div class="dynamic-grid">
    <GridOneItem :items="items">
      <template #content="content">
        <slot name="content" :content="content.comName"></slot>
      </template>
    </GridOneItem>
    <!-- <GridTwoItems />
    <GridThreeItems />
    <GridFourItems />
    <GridFiveItems /> -->
  </div>
</template>
