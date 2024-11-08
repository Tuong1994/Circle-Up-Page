<script setup lang="ts">
import { EAboutTabFormType } from '../../enum'
import ContentView from './Common/ContentView.vue'
</script>

<template>
  <div class="tabs-lived">
    <ContentView addActionTitle="Add Place Lived" :formType="EAboutTabFormType.LIVED" />
  </div>
</template>
