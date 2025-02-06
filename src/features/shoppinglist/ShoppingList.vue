<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useShoppingList } from './useShoppingList';

defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()

const {
  displayItems,
  filterButtonText,
  noItemsChecked,
  toggleFilter,
  itemIsChecked,
  handleOnToggleCheck,
  itemIsSelectedToEdit,
  handleOnEditItem,
  handleClickDeleteItems,
  allItemsChecked,
  listProgressButtonText
} = useShoppingList()

</script>

<template>
  <div>
    <header class="text-sm flex items-center justify-between">
      <button class="py-1" @click="handleClickDeleteItems" :disabled="!allItemsChecked">
        {{ listProgressButtonText }}
      </button>
      <button class="py-1 disabled:text-white/40" @click="toggleFilter" :disabled="noItemsChecked">
        {{ filterButtonText }}
      </button>
    </header>
    <ul class="space-y-2">
      <li v-for="(item, index) in displayItems" :key="index">
        <ShoppingItem :item="item" :isChecked="itemIsChecked(item.id)"
          :is-selected-to-edit="itemIsSelectedToEdit(item.id)" @on-toggle-check="handleOnToggleCheck"
          @on-edit-item="handleOnEditItem" />
      </li>
    </ul>
    <footer class="flex mt-4">
      <BaseButton button-type="danger" class="flex-grow py-3 disabled:text-white/40 disabled:bg-red-900/50"
        :disabled="noItemsChecked" @click="handleClickDeleteItems">Delete checked items
      </BaseButton>
    </footer>
  </div>
</template>
