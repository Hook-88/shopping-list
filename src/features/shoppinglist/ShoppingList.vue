<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
import { useSelectMultipleIds } from '../select-multiple-ids/useSelectMultipleIds';
import { useSelectSingleId } from '../select-single-id/useSelectSingleId';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useShoppingItemsStore } from '@/stores/shoppingItems';
import { computed } from 'vue';
import { useFilter } from '../filter/useFilter';

defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()

//Check item
const { selectedIds, toggleSelectId, clearAll } = useSelectMultipleIds()

function itemIsChecked(id: string) {
  return selectedIds.value.includes(id)
}

function handleOnToggleCheck(itemId: string) {
  if (selectedId.value) {
    clearSelection()
    return
  }
  toggleSelectId(itemId)
}

//Select item to edit
const { toggleSelect, selectedId, clearSelection } = useSelectSingleId()
function itemIsSelectedToEdit(id: string) {
  return selectedId.value === id
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

// List progress
const listProgressButtonText = computed(() => {

  if (!shoppingItemsStore.shoppingItems) {
    throw new Error('shopping items is null, no progress to show')
  }

  if (selectedIds.value.length === shoppingItemsStore.shoppingItems.length) {
    return `(${selectedIds.value.length}/${shoppingItemsStore.shoppingItems.length}) - completed`
  }

  return `(${selectedIds.value.length}/${shoppingItemsStore.shoppingItems.length})`
})


const allItemsChecked = computed(() => {

  if (!shoppingItemsStore.shoppingItems) {
    throw new Error('Shopping items is null')
  }

  return selectedIds.value.length === shoppingItemsStore.shoppingItems.length
})


//Filter
const { filter, toggleFilter } = useFilter()

//filter checked button text
const filterButtonText = computed(() => {
  if (filter.value === 'checked') {
    return 'Show checked'
  }

  return 'Hide checked'
})

const noItemsChecked = computed(() => selectedIds.value.length === 0)


//items to display
const displayItems = computed(() => {
  if (filter.value === 'checked') {
    return shoppingItemsStore.shoppingItems?.filter(shoppingItem => !itemIsChecked(shoppingItem.id))
  }

  return shoppingItemsStore.shoppingItems
})


</script>

<template>
  <div>
    <header class="text-sm flex items-center justify-between">
      <button class="py-1" @click="deleteCheckedItems" :disabled="!allItemsChecked">
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
        :disabled="noItemsChecked" @click="deleteCheckedItems">Delete checked items
      </BaseButton>
    </footer>
  </div>
</template>
