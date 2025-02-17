<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  numOfItemsChecked: number
  numOfShoppingItems: number
}>()


const progressText = computed(() => {
  const progress = `(${props.numOfItemsChecked}/${props.numOfShoppingItems})`

  if (props.numOfItemsChecked === props.numOfShoppingItems) {
    return progress + ' - Completed'
  }

  return progress
})
</script>

<template>
  <header class="text-sm flex items-center">
    <span>
      {{ progressText }}
    </span>
    <button class="pl-4 py-1 ml-auto">
      Hide checked
    </button>
  </header>
</template>
