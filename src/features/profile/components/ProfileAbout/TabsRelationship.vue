<script setup lang="ts">
import { EAboutTabFormType } from '../../enum'
import ContentView from './Common/ContentView.vue';
</script>

<template>
  <div class="tabs-relationship">
    <ContentView addActionTitle="Add Relationship" :formType="EAboutTabFormType.RELATIONSHIP" />
  </div>
</template>
