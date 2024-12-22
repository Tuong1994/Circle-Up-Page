<script setup lang="ts">
import { ref } from 'vue'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import SavedItemsCard from '@/features/saved/SavedItems/SavedItemsCard.vue'
import SavedItemsAddCollectionModal from '@/features/saved/SavedItems/AddCollectionModal/SavedItemsAddCollectionModal.vue'

const openAddModal = ref<boolean>(false)

const handleOpenAddModal = () => (openAddModal.value = !openAddModal.value)
</script>

<template>
  <ListGrid :xs="1" :md="1" :lg="1" :span="2" title="Saved items">
    <SavedItemsCard v-for="item in 5" @onAdd="handleOpenAddModal" />
  </ListGrid>
  <SavedItemsAddCollectionModal :open="openAddModal" @onClose="handleOpenAddModal" />
</template>
