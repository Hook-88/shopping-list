<script setup lang="ts">
import { type GroceryItemInterface } from '@/types/GroceryItem';
import ShoppingItem from '@/features/shoppinglist/ShoppingItem.vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import { useShoppingList } from './useShoppingList';
import { useSelectSingleId } from '../select-single-id/useSelectSingleId';
import { useSelectMultipleIds } from '../select-multiple-ids/useSelectMultipleIds';
import { useShoppingItemsStore } from '@/stores/shoppingItems';
import { useDialogStore } from '@/stores/dialog';
import { markRaw } from 'vue';
import ConfirmDelete from '../confirm-delete-items/ConfirmDelete.vue';
import { useToolbarStore } from '@/stores/toolbar';
import EditButtons from '../edit-item/toolbar/EditButtons.vue';

const props = defineProps<{
  shoppingItems: GroceryItemInterface[]
}>()

const {
  displayItems,
  filterButtonText,
  toggleFilter,
  allItemsChecked,
  listProgressButtonText,
} = useShoppingList()


//Select to edit
const selectSingleId = useSelectSingleId()
const toolbarStore = useToolbarStore()

function handleOnEditItem(itemId: string) {
  if (selectSingleId.selectedId.value === itemId) {
    selectSingleId.clearSelection()
    toolbarStore.closeToolbar()

    return
  }

  selectSingleId.selectId(itemId)
  toolbarStore.openToolbar({
    component: markRaw(EditButtons),
    onCloceCallback: selectSingleId.clearSelection,
    props: {
      itemId
    }
  })
}

function isSelectedToEdit(itemId: string) {
  return selectSingleId.selectedId.value === itemId
}


//Check items
const selectMultipleIds = useSelectMultipleIds()

function handleOnToggleCheck(itemId: string) {
  if (selectSingleId.selectedId.value) {
    selectSingleId.clearSelection()
    toolbarStore.closeToolbar()
    return
  }

  selectMultipleIds.toggleSelectId(itemId)
}

function itemIsChecked(itemId: string) {
  return selectMultipleIds.selectedIds.value.includes(itemId)
}




//delete items
const shoppingItemsStore = useShoppingItemsStore()
const dialogStore = useDialogStore()

function handleClickDeleteItems() {
  const itemsChecked = shoppingItemsStore.shoppingItems?.filter((shoppingItem) =>
    selectMultipleIds.selectedIds.value.includes(shoppingItem.id),
  )

  if (selectSingleId.selectedId.value) {
    selectSingleId.clearSelection()
    toolbarStore.closeToolbar()
    return
  }

  dialogStore.open({
    title: 'Delete items',
    component: markRaw(ConfirmDelete),
    props: {
      handleDelete: deleteCheckedItems,
      itemsToDelete: itemsChecked?.map((shoppingItem) => shoppingItem.name),
    },
  })
}

function deleteCheckedItems() {
  shoppingItemsStore.deleteSelection(selectMultipleIds.selectedIds.value)
  // clear id selection
  selectMultipleIds.clearAll()
}

function noItemsChecked() {
  return selectMultipleIds.selectedIds.value.length === 0
}

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
        <ShoppingItem :item="item" :isChecked="itemIsChecked(item.id)" :is-selected-to-edit="isSelectedToEdit(item.id)"
          @on-toggle-check="handleOnToggleCheck" @on-edit-item="handleOnEditItem" />
      </li>
    </ul>
    <footer class="flex mt-4">
      <BaseButton button-type="danger" class="flex-grow py-3 disabled:text-white/40 disabled:bg-red-900/50"
        @click="handleClickDeleteItems" :disabled="noItemsChecked()">Delete checked items
      </BaseButton>
    </footer>
  </div>
</template>
