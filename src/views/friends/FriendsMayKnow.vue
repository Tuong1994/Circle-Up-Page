<script setup lang="ts">
import FriendGrid from '@/features/friends/FriendGrid.vue'
import FriendCard from '@/features/friends/FriendCard.vue'
</script>

<template>
  <FriendGrid>
    <FriendCard v-for="item in 100" />
  </FriendGrid>
</template>
