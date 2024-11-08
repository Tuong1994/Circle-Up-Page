<script setup lang="ts">
import { EAboutTabFormType } from '../../enum'
import ContentView from './Common/ContentView.vue'
</script>

<template>
  <div class="tabs-education">
    <ContentView addActionTitle="Add Education" :formType="EAboutTabFormType.EDUCATION" />
  </div>
</template>
