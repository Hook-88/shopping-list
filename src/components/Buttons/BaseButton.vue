<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
  buttonType?: 'danger' | 'confirm'
}>()

const buttonColor = computed(() => {
  if (props.buttonType === 'confirm') {
    return 'bg-green-800'
  }

  if (props.buttonType === 'danger') {
    return 'bg-red-800'
  }

  return 'bg-sky-800'
})

</script>

<template>
  <button class="py-2 px-4 rounded-sm border-[#d1d2d3]/20" :class="buttonColor">
    <slot></slot>
  </button>
</template>
