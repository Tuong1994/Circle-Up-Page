<script setup lang="ts">
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import SavedItemsCard from '../SavedItems/SavedItemsCard.vue'
</script>

<template>
  <ListGrid :span="2">
    <SavedItemsCard v-for="item in 5" :hasAddAction="false" />
  </ListGrid>
</template>
