<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'

interface SliderProps {
  rootClassName?: ''
  slided?: boolean
}

const props = withDefaults(defineProps<SliderProps>(), {
  rootClassName: '',
  slided: false
})

const slidedClassName = computed<string>(() => (props.slided ? 'slider-slided' : ''))
</script>

<template>
  <div :class="['slider', slidedClassName, rootClassName]">
    <div class="slider-group">
      <slot name="main"></slot>
    </div>
    <div class="slider-group">
      <slot name="sub"></slot>
    </div>
  </div>
</template>
