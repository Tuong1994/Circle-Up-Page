<script setup lang="ts">
import { Section } from '@/components/UI'
import CollectionDetailBanner from '@/features/saved/SavedCollectionDetail/CollectionDetailBanner.vue'
import CollectionDetailHead from '@/features/saved/SavedCollectionDetail/CollectionDetailHead.vue'
import CollectionDetailList from '@/features/saved/SavedCollectionDetail/CollectionDetailList.vue'
</script>

<template>
  <Section rootClassName="collection-detail">
    <CollectionDetailBanner />
    <CollectionDetailHead />
    <CollectionDetailList />
  </Section>
</template>
