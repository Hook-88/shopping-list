<script setup lang="ts">
import { useShoppingListStore } from '@/stores/shoppingList';
import { computed, ref } from 'vue';

const props = defineProps<{
  numOfItemsChecked: number
  numOfShoppingItems: number
}>()

const emit = defineEmits<{
  (e: 'on-toggle-hide'): void
}>()

const uncheckedFilterApplied = ref(false)

const shoppingListStore = useShoppingListStore()

const shoppingLabels = computed(() => {

  const allLAbels = shoppingListStore.shoppingItems?.filter(shoppingItem => {

    if (shoppingItem.label) {

      return shoppingItem
    }
  }).map(item => item.label)

  //return array withoud duplicates
  return [...new Set(allLAbels)]
})


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
  <header>

    <div class="flex gap-2 flex-wrap">
      <button class="py-1 px-2 border border-ash/20 rounded-xl bg-emerald-800">All</button>
      <button v-for="label in shoppingLabels" :key="label" class="py-1 px-2 border border-ash/20 rounded-xl">
        {{ label }}
      </button>
    </div>

    <div class="text-sm flex items-center">
      <span>
        {{ progressText }}
      </span>
      <button class="pl-4 py-1 ml-auto disabled:text-white/30" :disabled="numOfItemsChecked === 0"
        @click="handleClickHideChecked">
        {{ uncheckedFilterApplied ? 'Show' : 'Hide' }} checked
      </button>
    </div>
  </header>
</template>
