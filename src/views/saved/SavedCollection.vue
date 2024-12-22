<script setup lang="ts">
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import SavedCollectionCard from '@/features/saved/SavedCollection/SavedCollectionCard.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <ListGrid :xs="1" :md="1" :lg="1" :span="2" :title="t.lang.saved.collection.list.title">
    <SavedCollectionCard v-for="item in 5" />
  </ListGrid>
</template>
