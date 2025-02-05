<script setup lang="ts">
import BaseList from '@/components/list/BaseList.vue'
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
import { useSelectIdsStore } from '@/stores/selectIds';
import { computed } from 'vue';

const selectIdsStore = useSelectIdsStore()

const props = defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()

const buttonText = computed(() => {
  if (selectIdsStore.selectedIds.length === props.shoppingItems.length) {
    return `(${selectIdsStore.selectedIds.length}/${props.shoppingItems.length}) - completed`
  }

  return `(${selectIdsStore.selectedIds.length}/${props.shoppingItems.length})`
})



</script>

<template>
  <div>
    <header class="text-sm">
      <button class="py-1">
        {{ buttonText }}
      </button>
    </header>
    <BaseList :list-data="shoppingItems" :list-component="ShoppingItem" />
  </div>
</template>
