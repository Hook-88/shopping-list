<script setup lang="ts">
import BaseList from '@/components/BaseList/BaseList.vue'
import ShoppingItem from '@/components/ShoppingList/ShoppingItem.vue';
import { SHOPPINGLIST } from '@/data'
import { useShoppingList } from '@/stores/shoppingList';
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSelectId } from '@/stores/selectId';

const shoppingListStore = useShoppingList()
const { shoppingItems } = storeToRefs(shoppingListStore)

const selectIdStore = useSelectId()


onMounted(() => {
  shoppingListStore.shoppingItems = SHOPPINGLIST
})

function handleClickDelete() {
  if (!shoppingListStore.shoppingItems) {
    throw new Error('No items to delete')
  }

  selectIdStore.selectedIds.forEach(selectedId => shoppingListStore.deleteItem(selectedId))
}


</script>

<template>
  <BaseList v-if="shoppingItems" :list-items="shoppingItems" :item-component="ShoppingItem" />
  <button class="rounded border py-3 bg-red-600/50 border-[#d1d2d3]/20" @click="handleClickDelete">Delete checked
    items</button>
</template>
