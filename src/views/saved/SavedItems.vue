<script setup lang="ts">
import { ref } from 'vue'
import { Section } from '@/components/UI'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import SavedItemsCard from '@/features/saved/SavedItems/SavedItemsCard.vue'
import SavedItemsAddCollectionModal from '@/features/saved/SavedItems/AddCollectionModal/SavedItemsAddCollectionModal.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const openAddModal = ref<boolean>(false)

const handleOpenAddModal = () => (openAddModal.value = !openAddModal.value)
</script>

<template>
  <Section>
    <ListGrid :xs="1" :md="1" :lg="1" :span="2" :title="t.lang.saved.items.title">
      <SavedItemsCard v-for="item in 5" @onAdd="handleOpenAddModal" />
    </ListGrid>
  </Section>
  <SavedItemsAddCollectionModal :open="openAddModal" @onClose="handleOpenAddModal" />
</template>
