<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
import { useSelectMultipleIds } from '../select-multiple-ids/useSelectMultipleIds';
import { useSelectSingleId } from '../select-single-id/useSelectSingleId';

defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()

const { selectedIds, toggleSelectId } = useSelectMultipleIds()
const { toggleSelect, selectedId } = useSelectSingleId()

function itemIsChecked(id: string) {
  return selectedIds.value.includes(id)
}

function itemIsSelectedToEdit(id: string) {
  return selectedId.value === id
}


function handleOnToggleCheck(itemId: string) {
  toggleSelectId(itemId)
}

function handleOnEditItem(itemId: string) {
  toggleSelect(itemId)
}

</script>

<template>
  <div>
    <header class="text-sm">
      <button class="py-1">
        (10/10) - completed
      </button>
    </header>
    <ul class="space-y-2">
      <li v-for="(item, index) in shoppingItems" :key="index">
        <ShoppingItem :item="item" :isChecked="itemIsChecked(item.id)"
          :is-selected-to-edit="itemIsSelectedToEdit(item.id)" @on-toggle-check="handleOnToggleCheck"
          @on-edit-item="handleOnEditItem" />
      </li>
    </ul>
  </div>
</template>
