<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  numOfItemsChecked: number
  numOfShoppingItems: number
}>()

const emit = defineEmits<{
  (e: 'on-toggle-hide'): void
}>()

const uncheckedFilterApplied = ref(false)


const progressText = computed(() => {
  const progress = `(${props.numOfItemsChecked}/${props.numOfShoppingItems})`

  if (props.numOfItemsChecked === props.numOfShoppingItems) {
    return progress + ' - Completed'
  }

  return progress
})


function handleClickHideChecked() {
  emit('on-toggle-hide')
  uncheckedFilterApplied.value = !uncheckedFilterApplied.value
}


</script>

<template>
  <header class="text-sm flex items-center">
    <span>
      {{ progressText }}
    </span>
    <button class="pl-4 py-1 ml-auto disabled:text-white/30" :disabled="numOfItemsChecked === 0"
      @click="handleClickHideChecked">
      {{ uncheckedFilterApplied ? 'Show' : 'Hide' }} checked
    </button>
  </header>
</template>
