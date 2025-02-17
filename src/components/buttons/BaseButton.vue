<script setup lang="ts">
import { computed } from 'vue';




const props = defineProps<{
  buttonType?: 'danger'
}>()

const buttonTypeClassName = computed(() => {
  if (props.buttonType === 'danger') {
    return 'bg-red-900'
  }

  return 'bg-sky-900'
})


</script>

<template>
  <button class="p-2.5 rounded border border-ash/20" :class="buttonTypeClassName">
    <slot></slot>
  </button>
</template>
