<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  numOfItemsChecked: number
  numOfShoppingItems: number
}>()

const emit = defineEmits<{
  (e: 'on-toggle-hide'): void
}>()


const progressText = computed(() => {
  const progress = `(${props.numOfItemsChecked}/${props.numOfShoppingItems})`

  if (props.numOfItemsChecked === props.numOfShoppingItems) {
    return progress + ' - Completed'
  }

  return progress
})


function handleClickHideChecked() {
  emit('on-toggle-hide')
}


</script>

<template>
  <header class="text-sm flex items-center">
    <span>
      {{ progressText }}
    </span>
    <button class="pl-4 py-1 ml-auto disabled:text-white/30" :disabled="numOfItemsChecked === 0"
      @click="handleClickHideChecked">
      Hide checked
    </button>
  </header>
</template>
