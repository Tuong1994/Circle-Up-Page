<script setup lang="ts">
import { Section } from '@/components/UI'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import FriendsCard from '@/features/friends/FriendsCard.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <Section rootClassName="friends-list">
    <ListGrid :title="t.lang.friends.subTitle" :md="2" :lg="3" :span="4">
      <FriendsCard v-for="item in 10" />
    </ListGrid>
  </Section>
</template>
