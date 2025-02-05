<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
import { useSelectMultipleIds } from '../select-multiple-ids/useSelectMultipleIds';
import { useSelectSingleId } from '../select-single-id/useSelectSingleId';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useShoppingItemsStore } from '@/stores/shoppingItems';
import { computed } from 'vue';

defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()

const { selectedIds, toggleSelectId, clearAll } = useSelectMultipleIds()
const { toggleSelect, selectedId, clearSelection } = useSelectSingleId()

function itemIsChecked(id: string) {
  return selectedIds.value.includes(id)
}

function itemIsSelectedToEdit(id: string) {
  return selectedId.value === id
}

function handleOnToggleCheck(itemId: string) {
  if (selectedId.value) {
    clearSelection()
    return
  }
  toggleSelectId(itemId)
}

function handleOnEditItem(itemId: string) {
  toggleSelect(itemId)
}

//Delete items
const shoppingItemsStore = useShoppingItemsStore()

function deleteCheckedItems() {
  shoppingItemsStore.deleteSelection(selectedIds.value)
  clearAll()
}




const listProgressButtonText = computed(() => {
  if (!shoppingItemsStore.shoppingItems) {
    throw new Error('shopping items is null, no progress to show')
  }

  if (selectedIds.value.length === shoppingItemsStore.shoppingItems.length) {
    return `(${selectedIds.value.length}/${shoppingItemsStore.shoppingItems.length}) - completed`
  }

  return `(${selectedIds.value.length}/${shoppingItemsStore.shoppingItems.length})`
})


</script>

<template>
  <div>
    <header class="text-sm">
      <button class="py-1" @click="deleteCheckedItems">
        {{ listProgressButtonText }}
      </button>
    </header>
    <ul class="space-y-2">
      <li v-for="(item, index) in shoppingItems" :key="index">
        <ShoppingItem :item="item" :isChecked="itemIsChecked(item.id)"
          :is-selected-to-edit="itemIsSelectedToEdit(item.id)" @on-toggle-check="handleOnToggleCheck"
          @on-edit-item="handleOnEditItem" />
      </li>
    </ul>
    <footer class="flex mt-4">
      <BaseButton button-type="danger" class="flex-grow py-3" @click="deleteCheckedItems">Delete checked items
      </BaseButton>
    </footer>
  </div>
</template>
