<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
import { useSelectMultipleIds } from '../select-multiple-ids/useSelectMultipleIds';

defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()

const { selectedIds, toggleSelectId } = useSelectMultipleIds()

function itemIsChecked(id: string) {
  return selectedIds.value.includes(id)
}

function handleOnToggleCheck(itemId: string) {
  toggleSelectId(itemId)
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
        <ShoppingItem :item="item" :isChecked="itemIsChecked(item.id)" @on-toggle-check="handleOnToggleCheck" />
      </li>
    </ul>
  </div>
</template>
